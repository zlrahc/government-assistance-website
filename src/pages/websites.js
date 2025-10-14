import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import opIcon from "../assets/icons/op.png";
import ovpIcon from "../assets/icons/ovp.png";
import senateIcon from "../assets/icons/senate.png";
import representativeIcon from "../assets/icons/representative.png";
import supremeIcon from "../assets/icons/supreme.png";
import depedIcon from "../assets/icons/deped.png";
import dfaIcon from "../assets/icons/dfa.png";
import dbmIcon from "../assets/icons/dbm.png";

import philhealthIcon from "../assets/icons/philhealth.png";
import sssIcon from "../assets/icons/sss.png";
import pagibigIcon from "../assets/icons/pagibig.png";
import gsisIcon from "../assets/icons/gsis.png";
import psaIcon from "../assets/icons/psa.png";
import dohIcon from "../assets/icons/doh.png";
import ltoIcon from "../assets/icons/lto.png";
import prcIcon from "../assets/icons/prc.png";
import '../App.css';

function Websites() {

const govCards = [
  {
    title: "Office of the President",
    img: opIcon,
    description: "Official site of the President of the Philippines, featuring news, updates, and directives.",
    link: "https://op-proper.gov.ph/",
  },
  {
    title: "Office of the Vice President",
    img: ovpIcon,
    description: "Learn about the Vice President’s initiatives, public engagements, and national programs.",
    link: "https://ovp.gov.ph/",
  },
  {
    title: "Senate of the Philippines",
    img: senateIcon,
    description: "Provides information on senators, legislation, and recent Senate sessions.",
    link: "https://senate.gov.ph/",
  },
  {
    title: "House of Representatives",
    img: representativeIcon,
    description: "Official site for House members, bills, and updates from the lower chamber of Congress.",
    link: "https://congress.gov.ph/",
  },
  {
    title: "Supreme Court",
    img: supremeIcon,
    description: "Access judicial rulings, court schedules, and official news from the Supreme Court.",
    link: "https://sc.judiciary.gov.ph/",
  },
  {
    title: "Department of Education (DepEd)",
    img: depedIcon,
    description: "Covers K–12 education programs, learning resources, and DepEd announcements.",
    link: "https://deped.gov.ph/",
  },
  {
    title: "Department of Foreign Affairs (DFA)",
    img: dfaIcon,
    description: "Handles passports, visa services, and official travel advisories for Filipinos.",
    link: "https://dfa.gov.ph/",
  },
  {
    title: "Department of Budget and Management (DBM)",
    img: dbmIcon,
    description: "Publishes national budget updates, guidelines, and fiscal transparency reports.",
    link: "https://dbm.gov.ph/",
  },
];

const serviceCards = [
  {
    title: "PhilHealth",
    img: philhealthIcon,
    description: "Healthcare insurance for Filipinos. Register, pay contributions, or access benefits online.",
    link: "https://www.philhealth.gov.ph/",
  },
  {
    title: "Social Security System (SSS)",
    img: sssIcon,
    description: "Manage contributions, apply for benefits, and track loan applications online.",
    link: "https://www.sss.gov.ph/",
  },
  {
    title: "Pag-IBIG Fund (HDMF)",
    img: pagibigIcon,
    description: "For housing loans, savings programs, and online member services for Filipinos.",
    link: "https://www.pagibigfund.gov.ph/",
  },
  {
    title: "Government Service Insurance System (GSIS)",
    img: gsisIcon,
    description: "Offers insurance, loans, and retirement benefits for government employees.",
    link: "https://www.gsis.gov.ph/",
  },
  {
    title: "Philippine Statistics Authority (PSA)",
    img: psaIcon,
    description: "Get birth, marriage, and other civil registry documents via PSA Serbilis or ePhilID.",
    link: "https://psahelpline.ph/",
  },
  {
    title: "Department of Health (DOH)",
    img: dohIcon,
    description: "National health updates, programs, and public advisories from DOH Philippines.",
    link: "https://www.doh.gov.ph/",
  },
  {
    title: "Land Transportation Office (LTO)",
    img: ltoIcon,
    description: "Renew your license, register vehicles, and check traffic violations online.",
    link: "https://www.lto.gov.ph/",
  },
  {
    title: "Professional Regulation Commission (PRC)",
    img: prcIcon,
    description: "Manage license renewals, exam schedules, and PRC online services.",
    link: "https://www.prc.gov.ph/",
  },
];

  const renderCards = (cards) => (
    <Row className="g-4 align-items-stretch">
      {cards.map((card, index) => (
        <Col key={index} sm={6} md={4} lg={3} className="d-flex">
          <Card className="service-card flex-fill text-center border-0">
  <a
    href={card.link}
    target="_blank"
    rel="noopener noreferrer"
    className="service-link d-flex flex-column flex-fill"
  >
    <div className="service-icon-wrapper">
      <Card.Img
        variant="top"
        src={card.img}
        className="service-icon mx-auto"
      />
    </div>
    <Card.Body className="d-flex flex-column justify-content-between flex-fill">
      <div>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.description}</Card.Text>
      </div>
    </Card.Body>
  </a>
</Card>

        </Col>
      ))}
    </Row>
  );


  return (
    <>
      <Container className="text-center pt-4 pb-2">
        <h1 className="section-heading text-center mb-3">OFFICIAL SERVICES WEBSITE</h1>
        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            color: "#555",
            fontSize: "1.1rem",
          }}
        >
          Access official links to government services and online applications.
        </p>
      </Container>

      <div className="services-section py-5">
        <Container>
          {renderCards(serviceCards)}
        </Container>
      </div>
      
      <Container className="text-center pt-4 pb-2">
        <h1 className="section-heading text-center mb-3">OFFICIAL GOVERNMENT WEBSITE</h1>
        
        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            color: "#555",
            fontSize: "1.1rem",
          }}
        >
          Access official links to government services and online applications.
        </p>
      </Container>

      <div className="services-section py-5">
        <Container>
          {renderCards(govCards)}
        </Container>
      </div>

      
    </>
  );
}

export default Websites;