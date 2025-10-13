import { useEffect, useState } from "react";
import { Container, Card, Spinner, Row, Col } from "react-bootstrap";

function Offices() {
  const [offices, setOffices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userCoords, setUserCoords] = useState(null);

  // Fetch all offices
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

  // Get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setUserCoords(pos.coords),
        () => setUserCoords(null)
      );
    }
  }, []);

  // Filter nearby offices
  let displayedOffices = offices;
  if (userCoords) {
    const { latitude, longitude } = userCoords;
    displayedOffices = offices.filter(o =>
      Math.abs(o.lat - latitude) < 0.1 && Math.abs(o.lon - longitude) < 0.1
    );
  }

  return (
    <Container className="text-center my-5">
      <hr />
      <h1 className="fw-bold mb-5">
        NEARBY GOVERNMENT OFFICES
      </h1>
      <h1 className="display-5 fw-bold mb-4">Government Offices</h1>

      {loading ? (
        <Spinner animation="border" />
      ) : (
        displayedOffices.length > 0 ? (
          <Row className="g-4">
            {displayedOffices.map((office) => (
              <Col key={office.id} md={4}>
                <Card className="p-3 shadow" style={{ minHeight: "250px" }}>
                  <h4 className="my-4">{office.name}</h4>
                  <p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${office.lat},${office.lon}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {office.address}
                    </a>
                  </p>
                  <p><strong>Contact:</strong> {office.contact}</p>
                  <p className={office.available ? "text-success" : "text-danger"}>
                    {office.available ? "Available" : "Closed"}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <p>No offices found nearby.</p>
        )
      )}
    </Container>
  );
}

export default Offices;
