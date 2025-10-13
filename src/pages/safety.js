import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap';

import safetyIcon from "../assets/icons/safety.png";
import emergencyIcon from "../assets/icons/emergency.png";

import '../App.css';

function Safety() {
  const safetyCards = [
    {
      id: 1,
      title: "Emergency",
      img: emergencyIcon,
      link: "/safety-emergency",
      description: `
        A complete directory of official emergency hotlines.
      `,
    },
    {
      id: 2,
      title: "Scam Protection",
      img: safetyIcon,
      link: "/safety-scam",
      description: `
        A verification tool to check websites or contact numbers 
        and easily report suspicious scams to help protect 
        others in the community.
        
      `,
    },
  ];

  return (
    <div>
      <Container className="text-center my-5">
              <hr />
              <h1 className="fw-bold mb-5">SAFETY</h1>
            </Container>

      <div className="safety-section py-5">
        <Container>
          <Row className="g-5 justify-content-center">
            {safetyCards.map(card => (
              <Col key={card.id} md={6} lg={5}>
                <Link to={card.link} className="safety-link">
                  <Card className="safety-card text-center border-0"><br/>
                    <Card.Img variant="top" src={card.img} className="safety-icon mx-auto mt-3" />
                    <Card.Body>
                      <Card.Title className="display-6 fw-bold">{card.title}</Card.Title>
                      <Card.Text style={{ whiteSpace: 'pre-line' }}>
                        {card.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Safety;
