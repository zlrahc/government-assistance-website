import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container, Button, Row, Col, Modal, Form, Card } from "react-bootstrap";
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

  const [showComplaintModal, setShowComplaintModal] = useState(false);

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
            <Route path="/admin-scam-reports" element={<AdminScamReports />} />

          </Routes>
        </main>

        <footer id="footer" className="gov-footer text-white py-5 mt-5">
          <Container className="text-center">
        
            <img
              src="/logo512.png"
              alt="Gov Assist Logo"
              className="gov-logo mb-3"
              width="160"
              height="160"
            />
            <h4 className="fw-bold">GOV ASSIST</h4>
            <p className="small mb-1">
              All content is in the public domain unless otherwise stated.
            </p>
            <p className="small mb-4">
              Quezon City, Philippines
            </p>

            <hr style={{ width: "30%", margin: "20px auto" }} />

            <h5 className="fw-bold mb-3">Got a Concern?</h5>
            <Button
              variant="danger"
              className="fw-semibold px-4 py-2"
              onClick={() => setShowComplaintModal(true)}
            >
              Submit a Complaint
            </Button>

            <br/>
            <br/>
            <div className="text-center small">
              © 2025 Gov Assist. All rights reserved.
            </div>
          </Container>

          <Modal
            show={showComplaintModal}
            onHide={() => setShowComplaintModal(false)}
            centered
            size="lg"
          >
            <Modal.Body
              style={{
                backgroundColor: "#f8f9fa",
                borderRadius: "15px",
                padding: "2rem",
              }}
            >
              <div className="text-center mb-4">
                <h3
                  style={{
                    fontWeight: "700",
                    color: "#003366",
                    textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
                    marginTop: "1rem",
                  }}
                >
                  File a Complaint
                </h3>
                <p
                  style={{
                    color: "#555",
                    fontSize: "15px",
                    maxWidth: "600px",
                    margin: "0 auto",
                  }}
                >
                  If you have experienced an issue or wish to raise a concern, please complete the form below.
                </p>
              </div>

              <Card
                className="p-4 shadow-sm mx-auto"
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  backgroundColor: "#fff",
                  borderRadius: "15px",
                }}
              >
                <h5 className="mb-3 fw-bold">Complaint Details</h5>

                <form
                  id="complaint-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target;
                    const data = new FormData(form);

                    // Add default status
                    data.append("data[Status]", "Pending");

                    // Send to your SheetDB or API endpoint
                    fetch("https://sheetdb.io/api/v1/hylogu3mpv6y6", {
                      method: "POST",
                      body: data,
                    })
                      .then((response) => response.json())
                      .then(() => {
                        alert("Thank you! Your complaint has been submitted successfully.");
                        form.reset();
                        setShowComplaintModal(false);
                      })
                      .catch(() => {
                        alert("Something went wrong. Please try again.");
                      });
                  }}
                >
                  <div className="mb-3 text-start">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input
                      type="text"
                      name="data[Name]"
                      className="form-control"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="mb-3 text-start">
                    <label className="form-label fw-semibold">Email Address</label>
                    <input
                      type="email"
                      name="data[Email]"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="mb-3 text-start">
                    <label className="form-label fw-semibold">Complaint Subject</label>
                    <input
                      type="text"
                      name="data[Subject]"
                      className="form-control"
                      placeholder="e.g. Slow processing time, rude staff..."
                      required
                    />
                  </div>

                  <div className="mb-3 text-start">
                    <label className="form-label fw-semibold">Describe your concern</label>
                    <textarea
                      name="data[Details]"
                      rows="4"
                      className="form-control"
                      placeholder="Provide details about your complaint"
                      required
                    ></textarea>
                  </div>

                  <div className="text-end">
                    <Button
                      type="submit"
                      variant="primary"
                      style={{
                        boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                      }}
                    >
                      Submit Complaint
                    </Button>
                  </div>
                </form>
              </Card>
            </Modal.Body>
          </Modal>

        </footer>








      </Router>

    </>

  );
}

export default App;
