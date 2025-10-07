import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap';
import emergency from './safety-emergency';
import scam from './safety-scam';


import '../App.css';

function Safety() {
  return (
    <div>

      <Container className="text-center my-5">
        <h1 className="display-1 fw-bold">SAFETY...</h1>
      </Container>

      <div className="safety-section py-5">
        <Container>
          
          <Row className="g-5 justify-content-center">
            <Col md={6} lg={5}>
              <Link to="/safety-emergency" className="safety-link">
                <Card className="safety-card text-center border-0 shadow-sm">
                  <Card.Img variant="top" src={emergency} className="service-icon mx-auto mt-3" />
                  <Card.Body>
                    <Card.Title className="display-6 fw-bold my-">Emergency </Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                      sed do eiusmod tempor incididunt ut labore et dolore <br />
                      magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            <Col md={6} lg={5}>
              <Link to="/safety-scam" className="safety-link">
                <Card className="safety-card text-center border-0 shadow-sm">
                  <Card.Img variant="top" src={scam} className="service-icon mx-auto mt-3" />
                  <Card.Body>
                    <Card.Title className="display-6 fw-bold">Scam Protection</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                      sed do eiusmod tempor incididunt ut labore et dolore <br />
                      magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
        </Row>
        </Container>
      </div>
    </div>
  );
}

export default Safety;