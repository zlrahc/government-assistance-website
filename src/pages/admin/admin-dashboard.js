import React, { useState, useEffect } from "react";
import { Col, Row, Container, Card, Button, Form, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminFooter from "../../AdminFooter";

function AdminDashboard() {
  const [authorized, setAuthorized] = useState(() => {
    return localStorage.getItem("adminAuthorized") === "true";
  });

  const [password, setPassword] = useState("");

  const getDailyPassword = () => {
    const today = new Date();
    const year = today.getFullYear().toString().slice(-2);
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    const secretWord = "verify";
    return `${secretWord}-${year}${month}${day}`;
  };

  const handleLogin = () => {
    if (password === getDailyPassword()) {
      setAuthorized(true);
      localStorage.setItem("adminAuthorized", "true");
      window.location.reload();
    } else {
      alert("Incorrect password!");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuthorized");
    setAuthorized(false);
    window.location.href = "/"; // redirect to main home
  };

  if (!authorized) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh", backgroundColor: "#f4f4f4" }}
      >
        <Card
          className="shadow-lg rounded-4 p-4"
          style={{ width: "90%", maxWidth: "400px" }}
        >
          <Card.Body>
            <div className="text-center mb-4">
              <h2 className="fw-bold">Admin Login</h2>
              <p className="text-muted">Enter your password to access the panel</p>
            </div>

            <Form>
              <Form.Group controlId="adminPassword" className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="shadow-sm rounded-3"
                />
              </Form.Group>
              <Button variant="primary" onClick={handleLogin} className="w-100 fw-semibold">
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }


  return (
    <>
          
      <div className="admin-dashboard-page">
      {/* HEADER SECTION */}
      <Container className="text-center pt-4 pb-2">
        <h1 className="section-heading text-center mb-3">ADMIN DASHBOARD</h1>
        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            color: "#555",
            fontSize: "1.1rem",
          }}
        >
          Welcome to the admin panel. Use the links below to manage reports and data.
        </p>
      </Container>

      {/* CARDS SECTION */}
      <Container className="pt-3 pb-5 d-flex justify-content-center">
        <Row xs={1} className="g-4 mt-3 w-100">
          <Col className="d-flex justify-content-center">
            <Card className="shadow-lg border-0 rounded-4 admin-card" style={{ width: "500px" }}>
              {/* Card header with colored background */}
              <div className="card-blue-header py-3 text-center rounded-top-4">
                <h4 className="m-0 fw-bold text-white">Scam Reports</h4>
              </div>

              <Card.Body className="p-4 text-center">
                <p className="mb-3">Review submitted scam reports and take action.</p>
                <Button as={Link} to="/admin-scam-reports" variant="primary">
                  Go to Reports
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


    </div>

      <AdminFooter />
    </>
  );
}

export default AdminDashboard;
