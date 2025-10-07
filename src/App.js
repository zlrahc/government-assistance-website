import logo from './logo.svg';
import { Button, Row, Col, Card } from 'react-bootstrap';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import Home from "./pages/home";
import Websites from "./pages/websites";
import Offices from "./pages/offices";
import Guides from "./pages/guides";
import Safety from "./pages/safety";
import SafetyEmergency from "./pages/safety-emergency";
import SafetyScam from "./pages/safety-scam";


function App() {
  return (

    <>

      <Router>

        <Navbar expand="lg" className="gov-navbar shadow-sm py-3">
          <Container>
            <Navbar.Brand as={Link} to="/" className="fw-bold text-white fs-4">
              GOV ASSIST
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" className="bg-light" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
                <Nav.Link as={Link} to="/websites" className="nav-link-custom">Official Gov’t Websites</Nav.Link>
                <Nav.Link as={Link} to="/offices" className="nav-link-custom">Offices</Nav.Link>
                <Nav.Link as={Link} to="/guides" className="nav-link-custom">Guides</Nav.Link>
                <Nav.Link as={Link} to="/safety" className="nav-link-custom">Safety</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <main>
          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/websites" element={<Websites/>}/>
            <Route path="/offices" element={<Offices />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/safety-emergency" element={<SafetyEmergency />} />
            <Route path="/safety-scam" element={<SafetyScam />} />
            
          </Routes>
        </main>

        <footer className="py-5  text-white" id="footer" >
          <Container>
            <Row>

              <Col xs={6} md={2} className="mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
                  <li className="nav-item mb-2"><Link to="/features" className="nav-link p-0 text-body-secondary">Features</Link></li>
                  <li className="nav-item mb-2"><Link to="/pricing" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                  <li className="nav-item mb-2"><Link to="/faqs" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                  <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-body-secondary">About</Link></li>
                </ul>
              </Col>

              <Col xs={6} md={2} className="mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
                  <li className="nav-item mb-2"><Link to="/features" className="nav-link p-0 text-body-secondary">Features</Link></li>
                  <li className="nav-item mb-2"><Link to="/pricing" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                  <li className="nav-item mb-2"><Link to="/faqs" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                  <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-body-secondary">About</Link></li>
                </ul>
              </Col>

              <Col xs={6} md={2} className="mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
                  <li className="nav-item mb-2"><Link to="/features" className="nav-link p-0 text-body-secondary">Features</Link></li>
                  <li className="nav-item mb-2"><Link to="/pricing" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                  <li className="nav-item mb-2"><Link to="/faqs" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                  <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-body-secondary">About</Link></li>
                </ul>
              </Col>

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


            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <p>© 2025 Company, Inc. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <a className="link-body-emphasis" href="#" aria-label="Instagram">

                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-body-emphasis" href="#" aria-label="Facebook">

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
