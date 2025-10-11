import { useState } from "react";
import { Container, Button, Form, Collapse, Card } from "react-bootstrap";
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

  return (
    <div>
      <Container className="text-center my-5">
        <h1 className="display-1 fw-bold">SCAM PROTECTION</h1>
      </Container>

      <Container className="d-flex flex-column align-items-center mb-5">
        <Form
          onSubmit={handleCheck}
          className="p-4 bg-light shadow rounded"
          style={{ maxWidth: "500px", width: "100%" }}
        >
          <Form.Control
            type="text"
            placeholder="Enter website or phone number"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="mb-3"
            required
          />
          <div className="text-center">
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? "Checking..." : "Check"}
            </Button>
          </div>
        </Form>

        {result && (
          <div className="mt-4" style={{ maxWidth: "500px", width: "100%" }}>
            {/* Simple verdict */}
            <Card className="p-3 mb-2">
              <h5>{result.verdict}</h5>
              {result.type && (
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

            {/* Collapsible full details */}
            <Collapse in={open}>
              <div id="detailed-result">
                <Card className="p-3 bg-white shadow-sm">
                  {result.type === "url" && (
                    <>
                      <p><strong>Domain:</strong> {result.domain}</p>
                      <p><strong>Score:</strong> {result.score}</p>
                      <p><strong>Reasons:</strong></p>
                      <ul>
                        {result.reasons.map((r, idx) => (
                          <li key={idx}>{r}</li>
                        ))}
                      </ul>
                      {result.vt && (
                        <details>
                          <summary>VirusTotal Raw Data</summary>
                          <pre>{JSON.stringify(result.vt, null, 2)}</pre>
                        </details>
                      )}
                    </>
                  )}
                  {result.type === "phone" && (
                    <pre>{JSON.stringify(result.details, null, 2)}</pre>
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
