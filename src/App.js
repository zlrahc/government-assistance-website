import logo from './logo.svg';
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

    <><Router>

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

      <Routes>
  
        <Route path="/" element={<Home />} />

        <Route path="/websites" element={<Container className="mt-4"><Websites /></Container>} />
        <Route path="/offices" element={<Container className="mt-4"><Offices /></Container>} />
        <Route path="/guides" element={<Container className="mt-4"><Guides /></Container>} />
        <Route path="/safety" element={<Container className="mt-4"><Safety /></Container>} />
        <Route path="/safety/emergency" element={<Container className="mt-4"><SafetyEmergency /></Container>} />
        <Route path="/safety/scam" element={<Container className="mt-4"><SafetyScam /></Container>} />
    </Routes>

    </Router>
    </>
    
  );
}

export default App;
