import React, { useState } from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../App.css';

import defaultHero from "../assets/home-hero-img/default-hero.png";
import websitesHero from "../assets/home-hero-img/websites-hero.png";
import officesHero from "../assets/home-hero-img/offices-hero.png";
import guidesHero from "../assets/home-hero-img/guides-hero.png";
import safetyHero from "../assets/home-hero-img/safety-hero.png";

import websitesIcon from "../assets/icons/websites.png";
import officesIcon from "../assets//icons/offices.png";
import guidesIcon from "../assets//icons/guides.png";
import safetyIcon from "../assets//icons/safety.png";

function Home() {
  const [heroBg, setHeroBg] = useState(defaultHero);

  const services = [
    { id: 1, title: "Official Websites", img: websitesIcon, hero: websitesHero, link: "/websites", desc: "Access verified government portals and official online resources to ensure safety and reliability." },
    { id: 2, title: "Government Offices", img: officesIcon, hero: officesHero, link: "/offices", desc: "Find contact information and locations of key government agencies." },
    { id: 3, title: "Guides", img: guidesIcon, hero: guidesHero, link: "/guides", desc: "Step-by-step guides to help you process documents easily and efficiently." },
    { id: 4, title: "Safety & Awareness", img: safetyIcon, hero: safetyHero, link: "/safety", desc: "Learn about safety protocols, emergency contacts, and scam prevention tips." },
  ];

  return (
    <>
      <div
        className="hero-section"
        style={{ backgroundImage: `linear-gradient(rgba(0, 123, 255, 0.4), rgba(0, 123, 255, 0.4)), url(${heroBg})`}}
      >
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Gov Assist</h1>
          <p className="hero-subtitle">
            Your one-stop platform for accessing official government  <br />
            websites and services in the Philippines. Stay informed,  <br />
            complete transactions online, and get the help you need—all  <br />
            in one convenient place. </p>
          <Button className="hero-button" variant="primary" size="lg" href="#footer">Learn More</Button>
        </div>
      </div>

      <div className="services-section py-5">
        <Container>
          <center><h1 className="fw-bold mb-5">Services</h1></center>
          <Row className="g-4">
            {services.map(service => (
              <Col key={service.id} md={6} lg={3}>
                <Link to={service.link} className="service-link">
                  <Card
                    className="service-card text-center border-0"
                    onMouseEnter={() => setHeroBg(service.hero)}
                    onMouseLeave={() => setHeroBg(defaultHero)}
                  >
                    <Card.Img variant="top" src={service.img} className="service-icon mx-auto mt-3" />
                    <Card.Body>
                      <Card.Title>{service.title}</Card.Title>
                      <Card.Text>{service.desc}</Card.Text>
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

export default Home;
