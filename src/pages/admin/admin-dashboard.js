import React, { useState, useEffect } from "react";
import { Col, Row, Container, Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function AdminDashboard() {

  const [authorized, setAuthorized] = useState(() => {
    return localStorage.getItem("adminAuthorized") === "true";
  });

  const getDailyPassword = () => {
    const today = new Date();
    const year = today.getFullYear().toString().slice(-2);
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    const secretWord = "verify";
    return `${secretWord}-${year}${month}${day}`;
  };

  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === getDailyPassword()) {
      setAuthorized(true);
      localStorage.setItem("adminAuthorized", "true");
      window.location.reload();
    } else {
      alert("Incorrect password!");
    }
  };

  if (!authorized) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <Card style={{ width: "100%", maxWidth: "400px", padding: "2rem" }} className="shadow">
          <Card.Body>
            <Card.Title className="text-center mb-4">Admin Login</Card.Title>
            <Form>
              <Form.Group controlId="adminPassword" className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleLogin} className="w-100">
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
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
