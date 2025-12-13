import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container, Button, Row, Col, Modal, Card, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

import Home from "./pages/home";
import Websites from "./pages/websites";
import Offices from "./pages/offices";
import Guides from "./pages/guides";
import Safety from "./pages/safety";
import SafetyEmergency from "./pages/safety-emergency";
import SafetyScam from "./pages/safety-scam";

import AdminDashboard from './pages/admin/admin-dashboard';
import AdminScamReports from './pages/admin/admin-scam-reports';
import AdminNavbar from './AdminNavbar'; 

function App() {
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    setAuthorized(localStorage.getItem("adminAuthorized") === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminAuthorized");
    setAuthorized(false);
    window.location.reload();
  };

  const [showComplaintModal, setShowComplaintModal] = useState(false);

  const isAdminRoute = window.location.pathname.startsWith("/admin");

  return (
    <Router>

      {/* ADMIN NAVBAR */}
      {isAdminRoute && authorized && (
        <AdminNavbar onLogout={handleLogout} />
      )}

      {/* USER NAVBAR */}
      {!isAdminRoute && (
        <Navbar expand="lg" className="gov-navbar shadow-sm py-3 sticky-top">
          <Container>
            <Navbar.Brand as={Link} to="/" className="fw-bold text-white fs-4">
              GOV ASSIST
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" className="bg-light" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
                <Nav.Link as={Link} to="/websites" className="nav-link-custom">Official Websites</Nav.Link>
                <Nav.Link as={Link} to="/offices" className="nav-link-custom">Offices</Nav.Link>
                <Nav.Link as={Link} to="/guides" className="nav-link-custom">Guides</Nav.Link>
                <Nav.Link as={Link} to="/safety" className="nav-link-custom">Safety</Nav.Link>
                {authorized && (
                  <button className="btn btn-outline-light"
                    onClick={handleLogout}
                    style={{ marginLeft: "2rem", padding: "0.3rem 0.8rem" }}
                  >
                    Logout
                  </button>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}

      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/offices" element={<Offices />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/safety-emergency" element={<SafetyEmergency />} />
          <Route path="/safety-scam" element={<SafetyScam />} />

          {/* ADMIN ROUTES */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin-scam-reports" element={<AdminScamReports />} />
        </Routes>
      </main>

      {/* USER FOOTER */}
      {!isAdminRoute && (
        <footer id="footer" className="gov-footer text-white py-5 mt-5">
          <Container className="text-center">
            <img src="/logo512.png" alt="Gov Assist Logo" className="gov-logo mb-3" width="160" height="160" />
            <h4 className="fw-bold">GOV ASSIST</h4>
            <p className="small mb-1">All content is in the public domain unless otherwise stated.</p>
            <p className="small mb-4">Quezon City, Philippines</p>
            <hr style={{ width: "30%", margin: "20px auto" }} />
            <h5 className="fw-bold mb-3">Got a Concern?</h5>
            <Button variant="danger" className="fw-semibold px-4 py-2" onClick={() => setShowComplaintModal(true)}>
              Submit a Complaint
            </Button>
            <br /><br />
            <div className="text-center small">© 2025 Gov Assist. All rights reserved.</div>
          </Container>
        </footer>
      )}

    </Router>
  );
}

export default App;
