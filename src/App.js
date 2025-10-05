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

    <Router>

    <Navbar variant="dark" expand="lg" collapseOnSelect className="custom-navbar">
      <Container>
        <Navbar.Brand>Gov Assist</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/websites">Official Gov't Websites</Nav.Link>
            <Nav.Link as={Link} to="/offices">Offices</Nav.Link>
            <Nav.Link as={Link} to="/guides">Guides</Nav.Link>
            <Nav.Link as={Link} to="/safety">Safety</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/offices" element={<Offices />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/safety/emergency" element={<SafetyEmergency />} />
          <Route path="/safety/scam" element={<SafetyScam />} />
        </Routes>
      </Container>

    </Router>

  );
}

export default App;
