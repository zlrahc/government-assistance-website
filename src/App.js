import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container, Button, Row, Col } from "react-bootstrap";
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
import AdminOfficesData from './pages/admin/admin-offices-data';

function App() {

  //admin authentication

    const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    setAuthorized(localStorage.getItem("adminAuthorized") === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminAuthorized");
    setAuthorized(false);
    window.location.reload();
  };

  //--admin authentication

  return (

    <>

      <Router>

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

        <main className='main-content'>
          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/websites" element={<Websites />} />
            <Route path="/offices" element={<Offices />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/safety-emergency" element={<SafetyEmergency />} />
            <Route path="/safety-scam" element={<SafetyScam />} />

            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/offices-data" element={<AdminOfficesData />} />
            <Route path="/admin-scam-reports" element={<AdminScamReports />} />

          </Routes>
        </main>

        <footer className="py-5 text-white" id="footer">
          <Container>
            <Row>
              {/* Quick Links */}
              <Col xs={6} md={2} className="mb-3">
                <h5>Quick Links</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
                  <li className="nav-item mb-2"><Link to="/websites" className="nav-link p-0 text-body-secondary">Official Websites</Link></li>
                  <li className="nav-item mb-2"><Link to="/offices" className="nav-link p-0 text-body-secondary">Offices</Link></li>
                  <li className="nav-item mb-2"><Link to="/guides" className="nav-link p-0 text-body-secondary">Guides</Link></li>
                  <li className="nav-item mb-2"><Link to="/safety" className="nav-link p-0 text-body-secondary">Safety</Link></li>
                </ul>
              </Col>

              {/* Resources */}
              <Col xs={6} md={2} className="mb-3">
                <h5>Resources</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><Link to="/faq" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                  <li className="nav-item mb-2"><Link to="/guidelines" className="nav-link p-0 text-body-secondary">Guidelines</Link></li>
                  <li className="nav-item mb-2"><Link to="/support" className="nav-link p-0 text-body-secondary">Support</Link></li>
                </ul>
              </Col>

              {/* About */}
              <Col xs={6} md={2} className="mb-3">
                <h5>About</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-body-secondary">Our Team</Link></li>
                  <li className="nav-item mb-2"><Link to="/privacy" className="nav-link p-0 text-body-secondary">Privacy Policy</Link></li>
                  <li className="nav-item mb-2"><Link to="/terms" className="nav-link p-0 text-body-secondary">Terms & Conditions</Link></li>
                </ul>
              </Col>

              {/* Newsletter */}
              <Col md={5} className="offset-md-1 mb-3">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of what's new and exciting from us.</p>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                    <input id="newsletter1" type="email" className="form-control" placeholder="Email address" />
                    <Button className="btn btn-primary" type="button">Subscribe</Button>
                  </div>
                </form>
              </Col>
            </Row>

            {/* Bottom Bar */}
            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <p>© 2025 Gov Assist. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <a className="link-body-emphasis" href="#" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-body-emphasis" href="#" aria-label="Facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Container>
        </footer>


      </Router>

    </>

  );
}

export default App;
