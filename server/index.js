import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

/**
 * Simple free multi-source scam check:
 * - VirusTotal domain lookup (public API)
 * - Numverify phone validation (optional)
 *
 * Notes:
 * - Respect rate limits (Public VT keys are limited).
 * - Cache results (Redis) in production.
 */

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

app.post("/check", async (req, res) => {
  const { query } = req.body;
  if (!query) return res.status(400).json({ error: "No query provided" });

  // Decide if it's a URL or phone by simple heuristics
  const isPhone = /^[\d+\-\s()]{6,}$/.test(query);
  if (isPhone) {
    const phoneResult = await checkNumverify(query);
    const verdict = phoneResult && phoneResult.valid ? "✅ Phone looks valid" : "⚠️ Phone invalid / suspicious";
    return res.json({ type: "phone", verdict, details: phoneResult });
  }

  // Normalize url to domain
  let domain;
  let normalizedUrl = query;
  try {
    if (!/^https?:\/\//i.test(query)) normalizedUrl = "http://" + query;
    const u = new URL(normalizedUrl);
    domain = u.hostname;
  } catch (e) {
    return res.status(400).json({ error: "Invalid URL format" });
  }

  // Run checks (only VirusTotal now)
  const vt = await checkVirusTotalDomain(domain);

  let score = 0;
  let reasons = [];

  if (vt && !vt.error) {
    const stats = vt.last_analysis_stats || {};
    const malicious = stats.malicious || 0;
    const suspicious = stats.suspicious || 0;
    if (malicious > 0) {
      score += 80;
      reasons.push(`VirusTotal: ${malicious} vendors flagged malicious`);
    } else if (suspicious > 0) {
      score += 40;
      reasons.push(`VirusTotal: ${suspicious} vendors flagged suspicious`);
    } else {
      reasons.push("VirusTotal: no detections");
    }
  } else {
    reasons.push(`VirusTotal: ${vt.error || vt.message || "no-data"}`);
  }

  // Heuristic analysis
  const suspiciousWords = ["verify", "secure", "login", "claim", "reward", "bank", "confirm", "update", "account"];
  if (suspiciousWords.some(w => domain.toLowerCase().includes(w))) {
    score += 10;
    reasons.push("Heuristic: suspicious keywords in domain");
  }
  if (domain.length > 60) {
    score += 5;
    reasons.push("Heuristic: unusually long domain");
  }

  const verdict = score >= 70 ? "HIGH RISK" : score >= 30 ? "SUSPICIOUS" : "LIKELY SAFE";

  res.json({
    type: "url",
    domain,
    score,
    verdict,
    reasons,
    vt,
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
