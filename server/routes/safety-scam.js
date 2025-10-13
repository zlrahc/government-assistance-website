import { Router } from "express";
import fs from "fs";
import path from "path";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import axios from "axios";

const router = Router();

// Load data
const govPhones = JSON.parse(fs.readFileSync(path.resolve("./data/gov-phones.json"), "utf-8"));
const govDomains = JSON.parse(fs.readFileSync(path.resolve("./data/gov-domains.json"), "utf-8"));
const phoneWhiteList = new Set(govPhones);
const domainWhiteList = new Set(govDomains);

// ------------------ Helpers ------------------

// Phone
export function normalizePhone(input) {
  const pn = parsePhoneNumberFromString(input, "PH");
  return pn ? pn.number : null;
}

// URL
export function normalizeDomain(inputUrl) {
  try {
    if (!/^https?:\/\//i.test(inputUrl)) inputUrl = "http://" + inputUrl;
    const u = new URL(inputUrl);
    return u.hostname.toLowerCase();
  } catch {
    return null;
  }
}

function isValidDomain(domain) {
  const domainRegex = /^(?!-)([A-Za-z0-9-]{1,63}\.)+[A-Za-z]{2,}$/;
  return domainRegex.test(domain);
}

// VirusTotal
async function checkVirusTotalDomain(domain) {
  if (!process.env.VT_API_KEY) return null;
  try {
    const resp = await axios.get(`https://www.virustotal.com/api/v3/domains/${domain}`, {
      headers: { "x-apikey": process.env.VT_API_KEY },
    });
    return resp.data?.data?.attributes || null;
  } catch (err) {
    return { error: err.response?.status, message: err.response?.data || err.message };
  }
}

// Numverify
async function checkNumverify(phone) {
  if (!process.env.NUMVERIFY_KEY) return null;
  try {
    const resp = await axios.get("http://apilayer.net/api/validate", {
      params: { access_key: process.env.NUMVERIFY_KEY, number: phone, country_code: "", format: 1 },
    });
    return resp.data;
  } catch (err) {
    return { error: err.response?.status, message: err.message };
  }
}

// Hybrid phone check
async function checkPhoneHybrid(rawNumber) {
  const normalized = normalizePhone(rawNumber);
  if (!normalized) return { valid: false, isOfficial: false, verdict: "❌ Invalid format" };

  const apiResult = await checkNumverify(normalized);
  const isOfficial = phoneWhiteList.has(normalized);
  let verdict;

  if (isOfficial) verdict = "✅ Official Philippine Gov Number";
  else if (apiResult?.valid) verdict = "⚠️ Valid number but not official";
  else verdict = "❌ Invalid / suspicious";

  return { ...apiResult, normalized, isOfficial, verdict };
}

// Hybrid URL check
async function checkUrlHybrid(inputUrl) {
  const domain = normalizeDomain(inputUrl);

  if (!domain || !isValidDomain(domain)) {
    return {
      domain: inputUrl,
      score: 0,
      verdict: "❌ Invalid input",
      reasons: ["Failed basic validation or invalid TLD"],
      vt: null,
    };
  }

  if (Array.from(domainWhiteList).some((d) => domain.endsWith(d))) {
    return {
      domain,
      score: 0,
      verdict: "✅ Official Government Domain",
      reasons: ["Whitelist: official gov.ph domain"],
      vt: null,
    };
  }

  let vt = null;
  try {
    vt = await checkVirusTotalDomain(domain);
  } catch (err) {
    vt = { error: "VT_ERROR", message: err.message };
  }

  let score = 0;
  const reasons = [];
  const suspiciousWords = ["verify", "secure", "login", "claim", "reward", "bank", "confirm", "update", "account"];
  if (suspiciousWords.some((w) => domain.includes(w))) {
    score += 10;
    reasons.push("Suspicious keyword");
  }
  if (domain.length > 60) {
    score += 5;
    reasons.push("Unusually long domain");
  }

  if (vt && !vt.error) {
    const stats = vt.last_analysis_stats || {};
    const malicious = stats.malicious || 0;
    const suspicious = stats.suspicious || 0;
    if (malicious > 0) {
      score += 80;
      reasons.push(`VirusTotal: ${malicious} flagged malicious`);
    } else if (suspicious > 0) {
      score += 40;
      reasons.push(`VirusTotal: ${suspicious} flagged suspicious`);
    } else reasons.push("VirusTotal: no detections");
  } else if (vt) {
    reasons.push(`VirusTotal: ${vt?.error || "no-data"}`);
  }

  const verdict = score >= 70 ? "HIGH RISK" : score >= 30 ? "SUSPICIOUS" : "LIKELY SAFE";

  return { domain, score, verdict, reasons, vt };
}

// ------------------ Routes ------------------

router.post("/", async (req, res) => {
  const { query } = req.body;
  if (!query) return res.status(400).json({ error: "No query provided" });

  const isPhone = /^[\d+\-\s()]{6,}$/.test(query);
  if (isPhone) {
    const result = await checkPhoneHybrid(query);
    return res.json({ type: "phone", ...result });
  }

  const result = await checkUrlHybrid(query);
  return res.json({ type: "url", ...result });
});

export default router;
