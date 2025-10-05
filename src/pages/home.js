import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/hero.png';
import '../App.css';
import websites from "../assets/websites.png";
import offices from "../assets/offices.png";
import guides from "../assets/guides.png";
import safety from "../assets/safety.png";

function Home() {
  return (
    <>
    <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Gov Assist</h1>
        <p className="hero-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
          sed do eiusmod tempor incididunt ut labore et dolore <br />
          magna aliqua. Ut enim ad minim veniam, quis nostrud <br /> </p>
        <Button className="hero-button" variant="primary" size="lg">Learn More</Button>
      </div>
    </div>
    <div className="services-section py-5">
        <Container>
          <center><h1 className="fw-bold mb-5">Services</h1></center>
          <Row className="g-4">
            <Col md={6} lg={3}>
            <Link to="/websites" className="service-link">
              <Card className="service-card text-center border-0 shadow-sm">
                <Card.Img variant="top" src={websites} className="service-icon mx-auto mt-3" />
                <Card.Body>
                  <Card.Title>Official Websites</Card.Title>
                  <Card.Text>
                    Access verified government portals and official online resources.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
            </Col>

            <Col md={6} lg={3}>
            <Link to="/offices" className="service-link">
              <Card className="service-card text-center border-0 shadow-sm">
                <Card.Img variant="top" src={offices} className="service-icon mx-auto mt-3" />
                <Card.Body>
                  <Card.Title>Government Offices</Card.Title>
                  <Card.Text>
                    Find contact information and locations of key government agencies.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
            </Col>

            <Col md={6} lg={3}>
            <Link to="/guides" className="service-link">
              <Card className="service-card text-center border-0 shadow-sm">
                <Card.Img variant="top" src={guides} className="service-icon mx-auto mt-3" />
                <Card.Body>
                  <Card.Title>Guides</Card.Title>
                  <Card.Text>
                    Step-by-step guides to help you process documents easily and efficiently.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
            </Col>

            <Col md={6} lg={3}>
            <Link to="/safety" className="service-link"></Link>
              <Card className="service-card text-center border-0 shadow-sm">
                <Card.Img variant="top" src={safety} className="service-icon mx-auto mt-3" />
                <Card.Body>
                  <Card.Title>Safety & Awareness</Card.Title>
                  <Card.Text>
                    Learn about safety protocols, emergency contacts, and scam prevention tips.
                  </Card.Text>
                </Card.Body>
              </Card>
          
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;