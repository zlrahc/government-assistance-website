import { useEffect, useState } from "react";
import { Container, Card, Spinner, Row, Col, Badge } from "react-bootstrap";

function Offices() {
  const [offices, setOffices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userCoords, setUserCoords] = useState(null);

  useEffect(() => {
    const fetchAllOffices = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:5000/api/offices");
        const data = await res.json();
        setOffices(data);
      } catch (err) {
        console.error("Error fetching offices:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAllOffices();
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setUserCoords(pos.coords),
        () => setUserCoords(null)
      );
    }
  }, []);

  let displayedOffices = offices;
  if (userCoords) {
    const { latitude, longitude } = userCoords;
    displayedOffices = offices.filter(
      (o) => Math.abs(o.lat - latitude) < 0.1 && Math.abs(o.lon - longitude) < 0.1
    );
  }

  return (
    <>
      <Container className="text-center pt-4 pb-2">
            <h1 className="section-heading text-center mb-3">GOVERNMENT OFFICES</h1>
            <p
              style={{
                maxWidth: "700px",
                margin: "0 auto",
                color: "#555",
                fontSize: "1.1rem",
              }}
            >
              A directory of official government offices with their addresses and contact information.
            </p>
      </Container>

      <Container className="text-center my-5">
        {loading ? (
          <Spinner animation="border" />
        ) : displayedOffices.length > 0 ? (
          <Row className="g-4 justify-content-center">
            {displayedOffices.map((office) => (
              <Col key={office.id} md={4} sm={6} xs={12} className="d-flex">
                <Card className="office-card flex-fill">
                  <Card.Body>
                    <h4 className="fw-bold text-primary mb-3">{office.name}</h4>
                    <p>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${office.lat},${office.lon}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="office-link"
                      >
                        {office.address}
                      </a>
                    </p>
                    <p><strong>Contact:</strong> {office.contact}</p>
                    <Badge
                      bg={office.available ? "success" : "danger"}
                      className="status-badge px-3 py-2 mt-2"
                    >
                      {office.available ? "Available" : "Closed"}
                    </Badge>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <p>No offices found nearby.</p>
        )}
      </Container>
    </>
  );
}

export default Offices;
