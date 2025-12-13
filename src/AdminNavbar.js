import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function AdminNavbar({ onLogout }) {
  return (
    <>
      <Navbar expand="lg" className="gov-navbar shadow-sm py-3 sticky-top">
        <Container>
          <Navbar.Brand as={Link} to="/admin" className="fw-bold text-white fs-4">
            ADMIN PANEL
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="admin-navbar-nav" className="bg-light" />
          <Navbar.Collapse id="admin-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/admin" className="nav-link-custom">
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/admin-scam-reports" className="nav-link-custom">
                Scam Reports
              </Nav.Link>
              <Button
                variant="outline-light"
                onClick={onLogout}
                style={{ marginLeft: "1rem", padding: "0.3rem 0.8rem" }}
              >
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    </>
  );
}

export default AdminNavbar;
