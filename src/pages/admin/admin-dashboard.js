import React, { useState, useEffect } from "react";
import { Col, Row, Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function AdminDashboard() {

  const [authorized, setAuthorized] = useState(() => {
    return localStorage.getItem("adminAuthorized") === "true";
  });

  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "secret") {
      setAuthorized(true);
      localStorage.setItem("adminAuthorized", "true");
      window.location.reload();
    } else {
      alert("Incorrect password!");
    }
  };

  if (!authorized) {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>Admin Login</h1>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />
        <button
          onClick={handleLogin}
          style={{ marginLeft: "1rem", padding: "0.5rem 1rem", fontSize: "1rem" }}
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <Container style={{ padding: "2rem" }}>
        <h1 className="mb-4">Admin Dashboard</h1>
        <p>Welcome to the admin panel. Use the links below to manage reports and data.</p>

        <Row xs={1} md={2} className="g-4 mt-3">
          <Col>
            <Card className="shadow-sm h-100">
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title>Scam Reports</Card.Title>
                <Card.Text>Review submitted scam reports and take action.</Card.Text>
                <Button as={Link} to="/admin-scam-reports" variant="primary">
                  Go to Reports
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="shadow-sm h-100">
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title>Blacklist</Card.Title>
                <Card.Text>Manage blacklisted domains and phone numbers.</Card.Text>
                <Button as={Link} to="/admin-blacklist" variant="danger">
                  Go to Blacklist
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminDashboard;
