import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap';

import safety from "../assets/safety.png";
import emergency from "../assets/emergency.png";


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
                <Card className="safety-card text-center border-0">
                  <Card.Img variant="top" src={emergency} className="service-icon mx-auto mt-3" />
                  <Card.Body>
                    <Card.Title className="display-6 fw-bold my-">Emergency </Card.Title>
                    <Card.Text><br/><br/>
                      Access real-time updates on evacuation centers  <br />
                      and relief operations, along with a complete <br />
                      directory of official emergency hotlines. <br />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            <Col md={6} lg={5}>
              <Link to="/safety-scam" className="safety-link">
                <Card className="safety-card text-center border-0">
                  <Card.Img variant="top" src={safety} className="service-icon mx-auto mt-3" />
                  <Card.Body>
                    <Card.Title className="display-6 fw-bold">Scam Protection</Card.Title>
                    <Card.Text><br/><br/>
                      Stay informed with the latest scam advisories and alerts<br/>
                      on ongoing fraudulent activities. Use the built-in <br/>
                      verification tool to check websites or contact numbers<br/>
                      and easily report suspicious scams to help protect others in the community. 
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