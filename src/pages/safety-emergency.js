// src/pages/safety-emergency.jsx
import React from "react";
import { Container, Accordion } from "react-bootstrap";
import "../App.css";

function SafetyEmergency() {
  return (
    <div className="py-5 bg-light"> 
      <Container>
        {/* Header / Banner */}
        <div className="text-center mb-5">
          <h1 className="fw-bold text-black">EMERGENCY HOTLINES</h1> <hr/>
          <p className="text-secondary">
            Important contact numbers for emergencies, disasters, and public safety.
          </p>
        </div>

        {/* Accordion Sections */}
        <Accordion defaultActiveKey="0" alwaysOpen>

          {/* NATIONAL EMERGENCY */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>National Emergency</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li><strong>911</strong> — National Emergency Hotline</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* NDRRMC */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>NDRRMC (Disaster Management)</Accordion.Header>
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
              <h6><strong>Regional Offices (Luzon):</strong></h6>
              <ul>
                <li>NCR: (02) 8421-1918, (02) 8913-2786</li>
                <li>Region I: (072) 607-6528</li>
                <li>Region IV-A: (049) 531-7266</li>
                <li>Region IV-B: (043) 723-4248</li>
                <li>CAR: (074) 304-2256 / 619-0986 / 444-5298</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* DSWD */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>Department of Social Welfare and Development (DSWD)</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li><strong>Text Hotline:</strong> 0918-912-2813</li>
                <li><strong>Trunk Line:</strong> (02) 8931-8101 to 07</li>
                <li><strong>Disaster Response Unit:</strong> (02) 8856-3665 / (02) 8852-8081</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* RED CROSS */}
          <Accordion.Item eventKey="3">
            <Accordion.Header>Philippine Red Cross</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li><strong>Hotline:</strong> 143</li>
                <li><strong>Trunk Line:</strong> (02) 8527-8385 to 95 / (02) 8527-0000</li>
                <li><strong>Disaster Management Office:</strong> 134 (Staff), 132 (Manager), 133 (Radio Room)</li>
                <li><strong>Telefax:</strong> (02) 8527-0864</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* DILG, PNP, BFP, COAST GUARD */}
          <Accordion.Item eventKey="4">
            <Accordion.Header>DILG / PNP / BFP / Coast Guard</Accordion.Header>
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

          {/* MMDA, DOTr, Airports */}
          <Accordion.Item eventKey="5">
            <Accordion.Header>Transportation & Metro Services</Accordion.Header>
            <Accordion.Body>
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

          {/* PAGASA, PHIVOLCS, DPWH */}
          <Accordion.Item eventKey="6">
            <Accordion.Header>Weather & Infrastructure</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li><strong>PAGASA:</strong> (02) 8284-0800</li>
                <li><strong>PHIVOLCS:</strong> (02) 8426-1468 to 79</li>
                <li><strong>DPWH:</strong> Hotline: 165-02 / (02) 5304-3000</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* Expressways */}
          <Accordion.Item eventKey="7">
            <Accordion.Header>Expressways & Roads</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li><strong>NLEX-SCTEX:</strong> 1-35000 / (02) 8580-8900</li>
                <li><strong>Skyway / SLEX:</strong> (02) 88-SKYWAY / (02) 5318-8655</li>
                <li><strong>CAVITEX:</strong> (02) 165-8888</li>
                <li><strong>STAR Tollway:</strong> (043) 756-7870 / 757-2277</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* LGUs */}
          <Accordion.Item eventKey="8">
            <Accordion.Header>Local Government Hotlines</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li><strong>Manila Traffic:</strong> (02) 8527-3087</li>
                <li><strong>Las Piñas:</strong> (02) 8856-3132</li>
                <li><strong>Mandaluyong:</strong> (02) 8532-5347</li>
                <li><strong>Marikina Rescue 161:</strong> 161 / (02) 8646-2436</li>
                <li><strong>Pasig Emergency:</strong> (02) 641-1907 / 8643-0000</li>
                <li><strong>Makati MAPSA:</strong> (02) 8819-3270 / 8844-3146</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* Water Utilities */}
          <Accordion.Item eventKey="9">
            <Accordion.Header>Water Utilities</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li><strong>Manila Water:</strong> 1627</li>
                <li><strong>Maynilad:</strong> 1626 / Text: 0998-864-1446</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* VAWC */}
          <Accordion.Item eventKey="10">
            <Accordion.Header>Violence Against Women & Children (VAWC)</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li><strong>DSWD:</strong> (02) 8931-8101 to 07</li>
                <li><strong>DSWD NCR:</strong> (02) 8734-8639 / 8654 / 8626</li>
                <li><strong>PNP WCPC:</strong> (02) 3410-3213</li>
                <li><strong>NBI VAWCD:</strong> (02) 8523-8231 / 8525-6028</li>
                <li><strong>PCW:</strong> (02) 8736-5249 / 7712 / 4449</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* NCMH */}
          <Accordion.Item eventKey="11">
            <Accordion.Header>Mental Health</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li><strong>NCMH Crisis Hotline:</strong> 0917-899-USAP (8727) / 989-USAP (8727)</li>
                <li><strong>Trunk Line:</strong> (02) 8531-9001 to 10 local 201</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </Container>
    </div>
  );
}

export default SafetyEmergency;
