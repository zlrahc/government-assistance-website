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
      description:
        "A complete directory of official emergency hotlines. Stay informed and know who to contact in times of crisis or disaster.",
    },
    {
      id: 2,
      title: "Scam Protection",
      img: safetyIcon,
      link: "/safety-scam",
      description:
        "A verification tool to check websites or contact numbers and easily report suspicious scams to help protect others in the community.",
    },
  ];

  return (
    <>
      {/* HEADER SECTION */}
      <Container className="text-center pt-4 pb-2">
        <h1 className="section-heading text-center mb-3">SAFETY</h1>
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

      {/* SAFETY CARDS (same design, thicker width) */}
      <div className="services-section py-5">
        <Container>
          <Row className="g-4 align-items-stretch justify-content-center">
            {safetyCards.map((card) => (
              <Col
                key={card.id}
                sm={10}
                md={6}
                lg={5}
                className="d-flex justify-content-center"
              >
                <Link
                  to={card.link}
                  className="service-link d-flex flex-column flex-fill text-decoration-none text-dark"
                  style={{ width: "100%" }}
                >
                  <Card
                    className="service-card flex-fill text-center border-0"
                    style={{
                      borderRadius: "16px",
                      backgroundColor: "#fff",
                      boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      minHeight: "440px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-6px)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 22px rgba(0,0,0,0.25)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 14px rgba(0,0,0,0.15)";
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={card.img}
                      className="service-icon mx-auto mt-5"
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "contain",
                      }}
                    />
                    <Card.Body className="d-flex flex-column justify-content-between flex-fill px-4">
                      <div>
                        <Card.Title
                          className="fw-bold"
                          style={{ fontSize: "1.6rem" }}
                        >
                          {card.title}
                        </Card.Title>
                        <Card.Text
                          style={{
                            fontSize: "1.05rem",
                            color: "#555",
                            marginTop: "10px",
                          }}
                        >
                          {card.description}
                        </Card.Text>
                      </div>
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

export default Safety;
