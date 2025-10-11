import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import "../App.css";

function SafetyScam() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("http://localhost:5000/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();

      if (data.error) {
        setResult(`❌ Error: ${data.error}`);
      } else {
        setResult(
          `Verdict: ${data.verdict}\nScore: ${data.score}\nReasons:\n- ${data.reasons.join("\n- ")}`
        );
      }
    } catch (err) {
      setResult("❌ Error connecting to scam checker API");
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
          <div
            className="mt-4 p-3 rounded shadow-sm bg-white text-start"
            style={{ whiteSpace: "pre-line" }}
          >
            <h5>Result:</h5>
            <p className="fs-6">{result}</p>
          </div>
        )}
      </Container>
    </div>
  );
}

export default SafetyScam;
