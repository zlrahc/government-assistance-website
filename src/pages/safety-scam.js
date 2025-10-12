import { useState } from "react";
import { Container, Button, Collapse, Card } from "react-bootstrap";
import "../App.css";

function SafetyScam() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleCheck = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setOpen(false);

    try {
      const response = await fetch("http://localhost:5000/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();
      if (data.error) {
        setResult({ verdict: `❌ Error: ${data.error}` });
      } else {
        setResult(data);
      }
    } catch (err) {
      setResult({ verdict: "❌ Error connecting to scam checker API" });
    }

    setLoading(false);
  };

  // Convert backend verdicts to user-friendly messages
  const getFriendlyVerdict = (res) => {
    if (!res) return "";
    if (res.type === "url") {
      if (res.verdict === "HIGH RISK") return `⚠️ Warning: The domain ${res.domain} seems risky!`;
      if (res.verdict === "SUSPICIOUS") return `⚠️ Caution: The domain ${res.domain} has some suspicious indicators.`;
      if (res.verdict === "LIKELY SAFE") return `✅ Good news! The domain ${res.domain} looks safe.`;
      if (res.verdict.includes("Invalid")) return `❌ The input "${res.domain}" is not a valid domain.`;
    }
    if (res.type === "phone") {
      if (res.verdict.includes("Official")) return `✅ This number (${res.normalized}) is an official government number.`;
      if (res.verdict.includes("Valid")) return `⚠️ This number (${res.normalized}) is valid but not an official government number.`;
      if (res.verdict.includes("Invalid")) return `❌ The number (${res.normalized}) is invalid or suspicious.`;
    }
    return res.verdict;
  };

  // Render VirusTotal stats cleanly
  const renderVTStats = (vt) => {
    if (!vt || vt.error || !vt.last_analysis_stats) return null;
    const stats = vt.last_analysis_stats;
    return (
      <ul>
        <li>Harmless: {stats.harmless}</li>
        <li>Malicious: {stats.malicious}</li>
        <li>Suspicious: {stats.suspicious}</li>
        <li>Undetected: {stats.undetected}</li>
        <li>Timeout: {stats.timeout}</li>
      </ul>
    );
  };

  // Render phone raw data cleanly
  const renderPhoneDetails = (details) => {
    if (!details) return null;
    return (
      <ul>
        <li>Valid: {details.valid ? "✅ Yes" : "❌ No"}</li>
        {details.country_name && <li>Country: {details.country_name}</li>}
        {details.line_type && <li>Line Type: {details.line_type}</li>}
        {details.carrier && <li>Carrier: {details.carrier}</li>}
        {details.location && <li>Location: {details.location}</li>}
        {details.international_format && (
          <li>International Format: {details.international_format}</li>
        )}
        {details.local_format && <li>Local Format: {details.local_format}</li>}
      </ul>
    );
  };

  return (
    <div>
      <Container className="text-center my-5">
        <h1 className="display-1 fw-bold">SCAM PROTECTION</h1>
      </Container>
      
      <Container className="d-flex flex-column align-items-center mb-5">
        <form
          className="w-100 d-flex"
          style={{
            maxWidth: "1000px",
            borderRadius: "50px",
            overflow: "hidden",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)" 
          }}
          onSubmit={handleCheck}
        >
          <input
            type="text"
            className="form-control border-0 px-4 py-3"
            placeholder="Enter website or phone number"
            aria-label="Query input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <button
            className="btn btn-primary w-25"
            type="submit"
            disabled={loading}
            style={{ borderRadius: 0 }}
          >
            {loading ? "Checking..." : "Check"}
          </button>
        </form>

        {/* Results */}
        {result && (
          <div className="mt-4" style={{ maxWidth: "600px", width: "100%" }}>

            <Card className="p-3 mb-2">
              <h5>{getFriendlyVerdict(result)}</h5>
              {result.type && (result.reasons?.length > 0 || result.vt || result.details) && (
                <Button
                  variant="link"
                  onClick={() => setOpen(!open)}
                  aria-controls="detailed-result"
                  aria-expanded={open}
                >
                  {open ? "Hide details" : "Show details"}
                </Button>
              )}
            </Card>

            <Collapse in={open}>
              <div id="detailed-result">
                <Card className="p-3 bg-white shadow-sm">
                  {/* URL Details */}
                  {result.type === "url" && (
                    <>
                      <p><strong>Domain:</strong> {result.domain}</p>

                      {result.reasons?.length > 0 && (
                        <>
                          <p><strong>Reasons:</strong></p>
                          <ul>
                            {result.reasons.map((r, idx) => (
                              <li key={idx}>{r}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      {result.vt && !result.vt.error && result.vt.last_analysis_stats && (
                        <>
                          <p><strong>VirusTotal Analysis:</strong></p>
                          {renderVTStats(result.vt)}
                        </>
                      )}

                      {result.vt && (
                        <details>
                          <summary>VirusTotal Raw Data</summary>
                          <pre>{JSON.stringify(result.vt, null, 2)}</pre>
                        </details>
                      )}
                    </>
                  )}

                  {result.type === "phone" && (
                    <>
                      {result.normalized && <p><strong>Normalized Number:</strong> {result.normalized}</p>}
                      <p><strong>Official:</strong> {result.isOfficial ? "✅ Yes" : "❌ No"}</p>
                      <p><strong>Verdict:</strong> {result.verdict}</p>

                      {result.details && (
                        <>
                          <p><strong>Number Analysis:</strong></p>
                          {renderPhoneDetails(result.details)}
                        </>
                      )}

                      {result.details && (
                        <details>
                          <summary>Numverify Raw Data</summary>
                          <pre>{JSON.stringify(result.details, null, 2)}</pre>
                        </details>
                      )}
                    </>
                  )}

                  {!result.type && result.reasons?.length === 0 && (
                    <p>No further details available for this input.</p>
                  )}
                  
                </Card>
              </div>
            </Collapse>
          </div>
        )}

      </Container>
    </div>
  );
}

export default SafetyScam;
