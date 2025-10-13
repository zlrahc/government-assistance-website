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
import officesIcon from "../assets/icons/offices.png";
import guidesIcon from "../assets/icons/guides.png";
import safetyIcon from "../assets/icons/safety.png";

function Home() {
  const [heroBg, setHeroBg] = useState(defaultHero);

  const services = [
    {
      id: 1,
      title: "Official Websites",
      img: websitesIcon,
      hero: websitesHero,
      link: "/websites",
      desc: "Access verified government portals and online resources for safety and reliability."
    },
    {
      id: 2,
      title: "Government Offices",
      img: officesIcon,
      hero: officesHero,
      link: "/offices",
      desc: "Find contact information and locations of essential government agencies."
    },
    {
      id: 3,
      title: "Guides",
      img: guidesIcon,
      hero: guidesHero,
      link: "/guides",
      desc: "Step-by-step guides to help you process documents quickly and efficiently."
    },
    {
      id: 4,
      title: "Safety & Awareness",
      img: safetyIcon,
      hero: safetyHero,
      link: "/safety",
      desc: "Stay informed about safety measures, emergency hotlines, and scam prevention."
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <div
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 85, 170, 0.55), rgba(0, 85, 170, 0.55)), url(${heroBg})`,
        }}
      >
        <div className="hero-content fade-in">
          <h1 className="hero-title">Welcome to <br/><span>Gov Assist</span></h1>
          <p className="hero-subtitle">
            Your one-stop platform for accessing official Philippine government websites and services.<br />
            Stay informed, complete transactions, and get the help you need — all in one place.
          </p>
          <Button className="hero-button" size="lg" href="#services">
            Explore Services
          </Button>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <section id="services" className="services-section">
        <Container>
          <h2 className="section-heading text-center mb-5">Our Services</h2>
          <Row className="g-4 justify-content-center">
            {services.map((service) => (
              <Col key={service.id} md={6} lg={3}>
                <Link
                  to={service.link}
                  className="service-link"
                  onMouseEnter={() => setHeroBg(service.hero)}
                  onMouseLeave={() => setHeroBg(defaultHero)}
                >
                  <Card className="service-card text-center border-0">
                    <div className="service-icon-wrapper">
                      <Card.Img
                        variant="top"
                        src={service.img}
                        className="service-icon"
                      />
                    </div>
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
      </section>
    </>
  );
}

export default Home;
