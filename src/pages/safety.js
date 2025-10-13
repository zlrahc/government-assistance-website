import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import safetyIcon from "../assets/icons/safety.png";
import emergencyIcon from "../assets/icons/emergency.png";
import "../App.css";

function Safety() {
  const safetyCards = [
    {
      id: 1,
      title: "Emergency",
      img: emergencyIcon,
      link: "/safety-emergency",
      description: `
        A complete directory of official emergency hotlines.
        Stay informed and know who to contact in times of crisis or disaster.
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
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      {/* HEADER SECTION */}
      <Container className="text-center pt-4 pb-2">
        <h1
          className="fw-bold"
          style={{
            color: "#002b5c",
            textTransform: "uppercase",
            letterSpacing: "1px",
            marginBottom: "10px",
          }}
        >
          Safety
        </h1>
        <div
          style={{
            width: "80px",
            height: "4px",
            backgroundColor: "#81bcfaff",
            margin: "10px auto 20px",
            borderRadius: "2px",
          }}
        ></div>
        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            color: "#555",
            fontSize: "1.1rem",
          }}
        >
          Explore essential tools and resources that help you stay safe,
          informed, and protected.
        </p>
      </Container>

      {/* SAFETY CARDS */}
      <div className="safety-section py-4">
        <Container>
          <Row className="g-4 align-items-stretch justify-content-center">
            {safetyCards.map((card) => (
              <Col key={card.id} md={6} lg={5} className="d-flex">
                <Link
                  to={card.link}
                  className="safety-link flex-fill d-flex text-decoration-none text-dark"
                >
                  <Card
                    className="text-center border-0 safety-card flex-fill d-flex flex-column justify-content-between"
                  >

                      
                    <Card.Img
                      variant="top"
                      src={card.img}
                      className="safety-icon mx-auto"
                      style={{
                        marginTop: "40px",
                        width: "200px",
                        height: "200px",
                        objectFit: "contain",
                      }}
                    />
                    <Card.Body>
                      <Card.Title
                        className="fw-bold"
                        style={{
                          color: "#002b5c",
                          fontSize: "1.7rem",
                          marginTop: "10px",
                        }}
                      >
                        {card.title}
                      </Card.Title>
                      <Card.Text
                        style={{
                          whiteSpace: "pre-line",
                          color: "#555",
                          fontSize: "1.05rem",
                          marginTop: "10px",
                        }}
                      >
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
