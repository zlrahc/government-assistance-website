import React from "react";
import { Container, Accordion } from "react-bootstrap";
import "../App.css";

function SafetyEmergency() {
  return (
      <><Container className="text-center pt-4 pb-2">
      <h1 className="section-heading text-center mb-3">EMERGENCY HOTLINES</h1>
      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          color: "#555",
          fontSize: "1.1rem",
        }}
      >
        Important contact numbers for emergencies, disasters, and public safety.
      </p>
    </Container><div className="py-5 bg-light">
        <Container>

          <Accordion defaultActiveKey="0" alwaysOpen className="custom-accordion">

            <Accordion.Item eventKey="0" className="shadow-sm mb-3 rounded-4 border-0">
              <Accordion.Header className="fw-semibold">National Emergency</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li><strong>911</strong> — National Emergency Hotline</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className="shadow-sm mb-3 rounded-4 border-0">
              <Accordion.Header className="fw-semibold">NDRRMC (Disaster Management)</Accordion.Header>
              <Accordion.Body>
                <h6><strong>Trunk Lines:</strong></h6>
                <ul>
                  <li>(02) 8911-5061 to 65 local 100</li>
                </ul>
                <h6><strong>Operations Center:</strong></h6>
                <ul>
                  <li>(02) 8911-1406</li>
                  <li>(02) 8912-2665</li>
                  <li>(02) 8912-5668</li>
                  <li>(02) 8911-1873</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className="shadow-sm mb-3 rounded-4 border-0">
              <Accordion.Header className="fw-semibold">Department of Social Welfare and Development (DSWD)</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li><strong>Text Hotline:</strong> 0918-912-2813</li>
                  <li><strong>Trunk Line:</strong> (02) 8931-8101 to 07</li>
                  <li><strong>Disaster Response Unit:</strong> (02) 8856-3665 / (02) 8852-8081</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className="shadow-sm mb-3 rounded-4 border-0">
              <Accordion.Header className="fw-semibold">Philippine Red Cross</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li><strong>Hotline:</strong> 143</li>
                  <li><strong>Trunk Line:</strong> (02) 8527-8385 to 95 / (02) 8527-0000</li>
                  <li><strong>Disaster Management Office:</strong> 134 (Staff), 132 (Manager), 133 (Radio Room)</li>
                  <li><strong>Telefax:</strong> (02) 8527-0864</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" className="shadow-sm mb-3 rounded-4 border-0">
              <Accordion.Header className="fw-semibold">DILG / PNP / BFP / Coast Guard</Accordion.Header>
              <Accordion.Body>
                <h6><strong>DILG:</strong></h6>
                <p>(02) 8876-3454</p>

                <h6><strong>PNP:</strong></h6>
                <ul>
                  <li>Emergency Hotline: 117</li>
                  <li>(02) 8722-0650</li>
                  <li>Text: 0917-847-5757</li>
                </ul>

                <h6><strong>BFP:</strong></h6>
                <ul>
                  <li>(02) 8426-0219 / (02) 8426-0246</li>
                </ul>

                <h6><strong>Philippine Coast Guard:</strong></h6>
                <ul>
                  <li>(02) 8527-8481 to 89</li>
                  <li>Text: 0917-PCG-DOTC (0917-724-3682)</li>
                  <li>0918-967-4697</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5" className="shadow-sm mb-3 rounded-4 border-0">
              <Accordion.Header>Transportation & Metro Services</Accordion.Header>
              <Accordion.Body className="fw-semibold">
                <h6><strong>MMDA:</strong></h6>
                <ul>
                  <li>Hotline: 136</li>
                  <li>(02) 8882-4151 to 77 (various locals for rescue, traffic, flood)</li>
                </ul>
                <h6><strong>DOTr Action Center:</strong></h6>
                <ul>
                  <li>Hotline: 7890</li>
                  <li>(02) 8790-8300</li>
                </ul>
                <h6><strong>Airports:</strong></h6>
                <ul>
                  <li>NAIA: 0917-839-6242 (TEXNAIA) / 0918-918-6242</li>
                  <li>Clark: (045) 499-1464</li>
                  <li>Mactan-Cebu: (032) 340-0228</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6" className="shadow-sm mb-3 rounded-4 border-0">
              <Accordion.Header>Weather & Infrastructure</Accordion.Header>
              <Accordion.Body className="fw-semibold">
                <ul>
                  <li>PAGASA: (02) 8284-0800</li>
                  <li>PHIVOLCS: (02) 8426-1468 to 79</li>
                  <li>DPWH: Hotline: 165-02 / (02) 5304-3000</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7" className="shadow-sm mb-3 rounded-4 border-0">
              <Accordion.Header>Expressways & Roads</Accordion.Header>
              <Accordion.Body className="fw-semibold">
                <ul>
                  <li>NLEX-SCTEX: 1-35000 / (02) 8580-8900</li>
                  <li>Skyway / SLEX: (02) 88-SKYWAY / (02) 5318-8655</li>
                  <li>CAVITEX: (02) 165-8888</li>
                  <li>STAR Tollway: (043) 756-7870 / 757-2277</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8" className="shadow-sm mb-3 rounded-4 border-0">
              <Accordion.Header>Local Government Hotlines</Accordion.Header>
              <Accordion.Body className="fw-semibold">
                <ul>
                  <li>Manila Traffic: (02) 8527-3087</li>
                  <li>Las Piñas: (02) 8856-3132</li>
                  <li>Mandaluyong: (02) 8532-5347</li>
                  <li>Marikina Rescue 161: 161 / (02) 8646-2436</li>
                  <li>Pasig Emergency: (02) 641-1907 / 8643-0000</li>
                  <li>Makati MAPSA: (02) 8819-3270 / 8844-3146</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="9" className="shadow-sm mb-3 rounded-4 border-0">
              <Accordion.Header>Water Utilities</Accordion.Header>
              <Accordion.Body className="fw-semibold">
                <ul>
                  <li>Manila Water: 1627</li>
                  <li>Maynilad: 1626 / Text: 0998-864-1446</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="10" className="shadow-sm mb-3 rounded-4 border-0">
              <Accordion.Header>Violence Against Women & Children (VAWC)</Accordion.Header>
              <Accordion.Body className="fw-semibold">
                <ul>
                  <li>DSWD: (02) 8931-8101 to 07</li>
                  <li>DSWD NCR: (02) 8734-8639 / 8654 / 8626</li>
                  <li>PNP WCPC: (02) 3410-3213</li>
                  <li>NBI VAWCD: (02) 8523-8231 / 8525-6028</li>
                  <li>PCW: (02) 8736-5249 / 7712 / 4449</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="11" className="shadow-sm mb-3 rounded-4 border-0">
              <Accordion.Header>Mental Health</Accordion.Header>
              <Accordion.Body className="fw-semibold">
                <ul>
                  <li>NCMH Crisis Hotline: 0917-899-USAP (8727) / 989-USAP (8727)</li>
                  <li>Trunk Line: (02) 8531-9001 to 10 local 201</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>
        </Container>
      </div></>
  );
}

export default SafetyEmergency;
