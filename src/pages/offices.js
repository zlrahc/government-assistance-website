import { useEffect, useState } from "react";
import { Container, Card, Spinner, Row, Col } from "react-bootstrap";

function Offices() {
  const [offices, setOffices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          try {
            const res = await fetch(
              `http://localhost:5000/api/offices/nearby?lat=${latitude}&lon=${longitude}`
            );
            const data = await res.json();
            setOffices(data);
          } catch (err) {
            console.error("Error fetching offices:", err);
          } finally {
            setLoading(false);
          }
        },
        () => {
          // fallback if denied
          fetch("http://localhost:5000/api/offices")
            .then((res) => res.json())
            .then(setOffices)
            .finally(() => setLoading(false));
        }
      );
    } else {
      // no geolocation support
      fetch("http://localhost:5000/api/offices")
        .then((res) => res.json())
        .then(setOffices)
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <Container className="text-center my-5">
      <hr />
      <h1 className="fw-bold mb-5">
        NEARBY GOVERNMENT OFFICES
      </h1>

      {loading ? (
        <Spinner animation="border" />
      ) : offices.length > 0 ? (
        <Row className="g-4">
          {offices.map((office) => (
            <Col key={office.id} md={4}>
              <Card className="p-3 shadow">
                <h4>{office.name}</h4>
                <p>{office.address}</p>
                <p>
                  <strong>Contact:</strong> {office.contact}
                </p>
                <p
                  className={
                    office.available ? "text-success" : "text-danger"
                  }
                >
                  {office.available ? "Available" : "Closed"}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>No nearby offices found.</p>
      )}
    </Container>
  );
}

export default Offices;
