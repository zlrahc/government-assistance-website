import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import websitesIcon from "../assets/icons/websites.png";
import officesIcon from "../assets/icons/offices.png";
import guidesIcon from "../assets/icons/guides.png";
import safetyIcon from "../assets/icons/safety.png";

import '../App.css';

function Websites() {
  const serviceCards = [
    {
      id: 1,
      title: "Official Websites",
      img: websitesIcon,
      link: "/websites",
      description: "Access verified government portals and official online resources."
    },
    {
      id: 2,
      title: "Government Offices",
      img: officesIcon,
      link: "/offices",
      description: "Find contact information and locations of key government agencies."
    },
    {
      id: 3,
      title: "Guides",
      img: guidesIcon,
      link: "/guides",
      description: "Step-by-step guides to help you process documents easily and efficiently."
    },
    {
      id: 4,
      title: "Safety & Awareness",
      img: safetyIcon,
      link: "/safety",
      description: "Learn about safety protocols, emergency contacts, and scam prevention tips."
    },
  ];

  // To render multiple rows, we can repeat the array or chunk it if needed
  const repeatCount = 4; // replicate 4 times like original
  const allCards = Array.from({ length: repeatCount }, () => serviceCards).flat();

  return (
    <>
      <Container className="text-center my-5">
        <h1 className="display-1 fw-bold">OFFICIAL GOVERNMENT WEBSITES</h1>
      </Container>

      <div className="services-section py-5">
        <Container>
          <Row className="g-4">
            {allCards.map((card, index) => (
              <Col key={index} md={6} lg={3}>
                <Link to={card.link} className="service-link">
                  <Card className="service-card text-center border-0 shadow-sm">
                    <Card.Img variant="top" src={card.img} className="service-icon mx-auto mt-3" />
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                      <Card.Text>{card.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Websites;
