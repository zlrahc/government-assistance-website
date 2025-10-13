import { useState } from "react";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";
import postalForm from "../assets/public/PID Application Form 05222025.pdf";
import rushList from "../assets/public/pid_rush_list_0520.pdf";
import sssBranches from "../assets/public/Attachment-Branch-Coordinates-ITB-SSS-GOODS-2024-067.pdf";
import sssForm from "../assets/public/E1-Personal-Record.pdf";
import "../App.css";

function Guides() {
  const services = {
    "How to Get Postal ID": [
      <>
        <div
          style={{
            border: "1px solid #dee2e6",
            borderRadius: "12px",
            padding: "25px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            marginTop: "15px",
          }}
        >
          <hr />
          <br />
          <p>
            <strong>Step 1:</strong> Submit a completely filled-out application form with your <br /> requirements and payment to any post office.
            Application forms are available <br /> in all post offices or you may download it&nbsp;
            <a href={postalForm} target="_blank" rel="noopener noreferrer"><strong>here</strong></a>.
          </p>

          <hr style={{ width: "50%", margin: "20px auto" }} />

          <p>
            <strong>Step 2:</strong> Upon approval of your requirements, proceed to the nearest <br /> ID capture station (
            <a href={rushList} target="_blank" rel="noopener noreferrer"><strong>see full list of capture stations</strong></a>) 
            where you will be <br /> digitally photographed and fingerprinted. 
            There are over 270 capture stations <br /> nationwide in designated post offices and selected malls.
          </p>

          <hr style={{ width: "50%", margin: "20px auto" }} />

          <p>
            <strong>Step 3:</strong> Once you complete the ID data capture process, <br /> your Postal ID will be delivered to your mailing address.
          </p>

          <br />
          <hr />

          <div className="note-section mt-4">
            <p>
              <strong>NOTE:</strong><br />
              <strong className="text-danger">SAME DAY</strong> release — cut-off time for capturing is from 
              <strong> 8:00 AM to 11:00 AM.</strong><br />
              <strong className="text-primary">NEXT DAY</strong> release — cut-off time for capturing is 
              <strong> 5:00 PM.</strong>
            </p>
          </div>

          <div className="rush-availability mt-4">
            <div className="rush-header">
              <strong>IMPORTANT: RUSH AVAILABILITY GUIDE</strong>
            </div>
            <div className="rush-steps">
              <div className="rush-box rush-sameday">
                <div className="rush-text">
                  <span className="rush-label">SAME<br />DAY</span>
                  <p>Same Day Release</p>
                </div>
              </div>

              <div className="rush-box rush-nextday">
                <div className="rush-text">
                  <span className="rush-label">NEXT<br />DAY</span>
                  <p>Next Day Release</p>
                </div>
              </div>

              <div className="rush-box rush-day">
                <div className="rush-number">2</div>
                <p>2 Days from the Day of Application</p>
              </div>

              <div className="rush-box rush-day">
                <div className="rush-number">3</div>
                <p>3 Days from the Day of Application</p>
              </div>

              <div className="rush-box rush-day">
                <div className="rush-number">4</div>
                <p>4 Days from the Day of Application</p>
              </div>
            </div>
          </div>

          <div className="alert alert-warning mt-4" role="alert">
            <strong>IMPORTANT:</strong> Rush availability may vary depending on the post office branch. 
            Check your nearest Post Office Location for processing times.
          </div>
        </div>
      </>
    ],
    "How to Get PWD ID": [
      <>
        <div
          style={{
            border: "1px solid #dee2e6",
            borderRadius: "12px",
            padding: "25px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            marginTop: "15px",
          }}
        >
          <hr />

          <div style={{ textAlign: "center" }}>
            <strong>Step 1:</strong> Prepare the necessary requirements before applying for a PWD ID.
            <ul style={{ textAlign: "left", display: "inline-block", marginTop: "10px" }}>
              <li>Two (2) recent 1×1 ID photos with your name and signature or thumb mark <br/> at the back</li>
              <li>One (1) valid government-issued ID</li>
              <li>
                A medical certificate or any document confirming your disability, issued by a <br/> licensed physician, 
                school, NGO, or government agency
              </li>
            </ul>
          </div>

          <hr style={{ width: "50%", margin: "20px auto" }} />

          <div style={{ textAlign: "center" }}>
            <div>
              <strong>Step 2:</strong> Obtain the <strong>Person with Disability Registration Form (PWD-RF)</strong>
            </div>
            <div>from any of the following:</div>

            <ul style={{ textAlign: "left", display: "inline-block", marginTop: "10px" }}>
              <li>Office of the Mayor or Barangay Captain</li>
              <li>City or Municipal Social Welfare and Development Office (CSWDO/MSWDO)</li>
              <li>NCDA or its regional counterpart</li>
              <li>DSWD or DOH offices</li>
              <li>
                Online via the Department of Health website:<br />
                <a
                  href="https://www.foi.gov.ph/agencies/doh/pwd-online-registration/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>https://www.foi.gov.ph/agencies/doh/pwd-online-registration/</strong>
                </a>
              </li>
            </ul>
          </div>

          <hr style={{ width: "50%", margin: "20px auto" }} />

          <div style={{ textAlign: "center" }}>
            <strong>Step 3:</strong> Fill out the registration form completely and accurately.
            <ul style={{ textAlign: "left", display: "inline-block", marginTop: "10px" }}>
              <li>Accomplish it manually — attach your photos and medical proof; or</li>
              <li>Register online through the DOH PWD Registry and print your accomplished form.</li>
            </ul>
          </div>

          <hr style={{ width: "50%", margin: "20px auto" }} />

          <div style={{ textAlign: "center" }}>
            <strong>Step 4:</strong> Submit your accomplished <strong>PWD Registration Form</strong> <br /> and attachments to the
            <strong> City or Municipal Mayor</strong> or <br /> <strong>Barangay Captain</strong> for verification and ID number assignment.
          </div>

          <br />

          <hr style={{ width: "50%", margin: "20px auto" }} />

          <div style={{ textAlign: "center" }}>
            <strong>Step 5:</strong> Once verified, your local government will issue your <br /> official
            <strong> PWD Identification Card</strong>.
          </div>

          <br />
          <hr />

          <div className="note-section mt-4">
            <p>
              <strong>NOTE:</strong><br />
              The <strong>PWD ID</strong> is valid for <strong>three (3) years</strong> and the initial issuance is
              <strong> free of charge.</strong><br />
              Renewal due to expiration, loss, or damage may incur a minimal replacement fee.
            </p>
          </div>

          <div className="alert alert-warning mt-4" role="alert">
            <strong>IMPORTANT:</strong> The PWD ID serves as official proof for discounts and benefits under
            <strong> Republic Act 9442</strong>. Misuse or falsification of a PWD ID is punishable by law.
          </div>
        </div>
      </>
    ],
    "How to Get UMID ID": [
      <>
        <div
          style={{
            border: "1px solid #dee2e6",
            borderRadius: "12px",
            padding: "25px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            marginTop: "15px",
          }}
        >
          <hr />

          <div style={{ textAlign: "center" }}>
            To get a <strong>UMID (Unified Multi-Purpose ID)</strong> card, you must be a member of either the
            <strong> Social Security System (SSS)</strong> or the <strong>Government Service Insurance System (GSIS)</strong>,
            depending on your employment or membership status.
          </div>

          <hr style={{ width: "50%", margin: "20px auto" }} />

          <div style={{ textAlign: "center" }}>
            <strong>Step 1:</strong> <strong>For SSS Members</strong>
            <ul style={{ textAlign: "left", display: "inline-block", marginTop: "10px" }}>
              <li>
                <strong>Gather Documents:</strong> Download and fill out the UMID card application form{" "}
                <a href={sssForm} target="_blank" rel="noopener noreferrer"><strong>(SSS Form E-1)</strong></a>.
              </li>
              <li><strong>Prepare an ID:</strong> Bring at least one primary valid government-issued ID, or two secondary valid IDs.</li>
              <li><strong>Visit an SSS Branch:</strong> Go to your nearest <a href={sssBranches} target="_blank" rel="noopener noreferrer"><strong>SSS branch</strong></a>.</li>
              <li><strong>Complete Biometrics:</strong> Submit your documents, have your photo, fingerprints, and signature taken.</li>
              <li><strong>Wait for Notification:</strong> Wait for an SMS from SSS when your card is ready for pick-up.</li>
            </ul>
          </div>

          <hr style={{ width: "50%", margin: "20px auto" }} />

          <div style={{ textAlign: "center" }}>
            <strong>Step 2:</strong> <strong>For GSIS Members</strong>
            <ul style={{ textAlign: "left", display: "inline-block", marginTop: "10px" }}>
              <li>
                <strong>Visit a GSIS Office:</strong> Go to your{" "}
                <a href="https://www.gsis.gov.ph/contact-gsis/" target="_blank" rel="noopener noreferrer">GSIS branch</a> 
                with two valid IDs.
              </li>
              <li><strong>Fill Out the Form:</strong> Complete an eCard/UMID Card enrollment form.</li>
              <li><strong>Submit and Choose a Bank:</strong> Submit the form and choose a servicing bank (UnionBank or LANDBANK).</li>
              <li><strong>Wait for Pick-Up:</strong> GSIS will text you once your card is ready for release.</li>
            </ul>
          </div>

          <hr style={{ width: "50%", margin: "20px auto" }} />

          <div style={{ textAlign: "center" }}>
            <strong>Step 3:</strong> <strong>General Tips</strong>
            <ul style={{ textAlign: "left", display: "inline-block", marginTop: "10px" }}>
              <li><strong>Online Application:</strong> Members who registered for an SS number online after Dec 10, 2020 can schedule biometrics via My.SSS.</li>
              <li><strong>Biometric Data Capture:</strong> Wear a collared shirt and avoid accessories to ensure clear data capture.</li>
            </ul>
          </div>

          <br />
          <hr />

          <div className="note-section mt-4">
            <p>
              <strong>NOTE:</strong><br />
              The <strong>UMID</strong> serves as a unified ID for <strong>SSS, GSIS, PhilHealth,</strong> and
              <strong> Pag-IBIG</strong> transactions. Make sure all your membership records are updated before applying.
            </p>
          </div>

          <div className="alert alert-warning mt-4" role="alert">
            <strong>IMPORTANT:</strong> The UMID card is free for first-time applicants. A minimal replacement fee applies for
            lost or damaged cards.
          </div>
        </div>
      </>
    ],
    "How to Get National ID": [
      <>
        <hr />

        <div
          style={{
            textAlign: "center",
            backgroundColor: "#ffffff",
            padding: "25px 20px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <h4 style={{ fontWeight: "bold", color: "#0A2E69", lineHeight: "1.5em" }}>
            PSA IS NOW ACCEPTING{" "}
            <span
              style={{
                backgroundColor: "#FFD700",
                color: "#0A2E69",
                padding: "4px 10px",
                borderRadius: "6px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
              }}
            >
              WALK-INS
            </span>{" "}
            <br />
            FOR PHILSYS REGISTRATION
          </h4>

          <div style={{ fontSize: "1.05rem", marginTop: "15px", color: "#333" }}>
            <p>
              The online Step 1 website has been disabled to <br /> pave the way for
              an easier and more convenient registration process.
            </p>
            <p>
              To register, bring your supporting documents <br /> and go to the
              nearest PhilSys registration center.
            </p>
          </div>

          <hr style={{ width: "70%", margin: "20px auto", borderTop: "2px solid" }} />

          <div
            className="note-section mt-4"
            style={{
              width: "80%",
              margin: "20px auto",
              textAlign: "left",
              backgroundColor: "#f9fbff",
              padding: "15px 20px",
              borderLeft: "5px solid #0A2E69",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            }}
          >
            <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: "1.7em" }}>
              <strong style={{ color: "#0A2E69" }}>NOTE:</strong>
              <br />
              Click{" "}
              <a
                href="https://philsys.gov.ph/supporting-documents/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#0056b3",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                here
              </a>{" "}
              to find the list of supporting documents.
              <br />
              Click{" "}
              <a
                href="https://philsys.gov.ph/registration-center/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#0056b3",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                here
              </a>{" "}
              to find the list of active registration centers.
            </p>
          </div>

          <h5
            style={{
              color: "#0A2E69",
              fontWeight: "bold",
              marginTop: "25px",
              fontSize: "1.1rem",
            }}
          >
            REGISTER NOW!
          </h5>
        </div>
      </>,
    ],
    "Renew NBI Clearance": [
      <>
        <hr />
        <br />

        <div
          style={{
            textAlign: "center",
            backgroundColor: "#ffffff",
            padding: "30px 25px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <h4
            style={{
              fontWeight: "bold",
              color: "#0A2E69",
              marginBottom: "15px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            RENEW YOUR NBI MULTIPURPOSE CLEARANCE
          </h4>

          <p style={{ fontSize: "1.05rem", lineHeight: "1.7em", color: "#333" }}>
            The <strong>National Bureau of Investigation (NBI)</strong> now allows applicants to
            conveniently renew their <strong>Multipurpose Clearance</strong> online.
          </p>

          <p style={{ fontSize: "1.05rem", color: "#333" }}>
            Access the official NBI website to start your renewal process quickly and securely.
          </p>

          <div style={{ marginTop: "25px" }}>
            <a
              href="https://clearance.nbi.gov.ph/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "linear-gradient(90deg, #0A2E69, #1E4BB8)",
                color: "#fff",
                padding: "12px 28px",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "1.1rem",
                textDecoration: "none",
                letterSpacing: "0.5px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseOver={(e) => {
                e.target.style.background =
                  "linear-gradient(90deg, #FFD700, #FFC107)";
                e.target.style.color = "#0A2E69";
                e.target.style.boxShadow = "0 4px 15px rgba(255, 215, 0, 0.4)";
              }}
              onMouseOut={(e) => {
                e.target.style.background =
                  "linear-gradient(90deg, #0A2E69, #1E4BB8)";
                e.target.style.color = "#fff";
                e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
              }}
            >
              🔗 Renew NBI Clearance Now
            </a>
          </div>

          <div
            className="note-section mt-4"
            style={{
              width: "80%",
              margin: "30px auto 0",
              textAlign: "left",
              backgroundColor: "#f9fbff",
              padding: "15px 20px",
              borderLeft: "5px solid #0A2E69",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            }}
          >
            <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: "1.7em" }}>
              <strong style={{ color: "#0A2E69" }}>NOTE:</strong><br />
              Make sure to have a valid email address and your previous NBI clearance number ready
              before proceeding with online renewal.
            </p>
          </div>
        </div>
      </>,
    ],
    "Apply for DOST Accreditation & Certification": [
      <>
        <hr />
        <br />

        <div
          style={{
            textAlign: "center",
            backgroundColor: "#ffffff",
            padding: "30px 25px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <h4
            style={{
              fontWeight: "bold",
              color: "#0A2E69",
              marginBottom: "15px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            APPLY FOR DOST ACCREDITATION & CERTIFICATION
          </h4>

          <p style={{ fontSize: "1.05rem", lineHeight: "1.7em", color: "#333" }}>
            The Department of Science and Technology (DOST) offers
            accreditation and certification programs for various services,
            products, and institutions. These help ensure quality standards and
            compliance with national and international norms.
          </p>

          <p style={{ fontSize: "1.05rem", color: "#333" }}>
            Click the button below to view the official DOST accreditation and
            certification page and start your application.
          </p>

          <div style={{ marginTop: "25px" }}>
            <a
              href="https://www.dost.gov.ph/products-and-services/accreditation-and-certification.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "linear-gradient(90deg, #0A2E69, #1E4BB8)",
                color: "#fff",
                padding: "12px 28px",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "1.1rem",
                textDecoration: "none",
                letterSpacing: "0.5px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseOver={(e) => {
                e.target.style.background =
                  "linear-gradient(90deg, #FFD700, #FFC107)";
                e.target.style.color = "#0A2E69";
                e.target.style.boxShadow = "0 4px 15px rgba(255, 215, 0, 0.4)";
              }}
              onMouseOut={(e) => {
                e.target.style.background =
                  "linear-gradient(90deg, #0A2E69, #1E4BB8)";
                e.target.style.color = "#fff";
                e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
              }}
            >
              🔗 Go to DOST Accreditation Page
            </a>
          </div>

          <div
            className="note-section mt-4"
            style={{
              width: "80%",
              margin: "30px auto 0",
              textAlign: "left",
              backgroundColor: "#f9fbff",
              padding: "15px 20px",
              borderLeft: "5px solid #0A2E69",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            }}
          >
            <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: "1.7em" }}>
              <strong style={{ color: "#0A2E69" }}>NOTE:</strong><br />
              Make sure to check the specific requirements for the type of
              accreditation or certification you are applying for (e.g. lab,
              testing, calibration, services). You may also contact DOST for
              further guidance.
            </p>
          </div>
        </div>
      </>,
    ],
    "How to Register as a Voter (COMELEC)": [
      <>
        <hr />

        <div
          style={{
            textAlign: "center",
            backgroundColor: "#ffffff",
            padding: "35px 25px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <h4
            style={{
              fontWeight: "bold",
              color: "#0A2E69",
              marginBottom: "20px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            HOW TO REGISTER AS A VOTER (COMELEC)
          </h4>

          <p style={{ fontSize: "1.05rem", color: "#333", lineHeight: "1.7em" }}>
            The Commission on Elections (COMELEC) offers multiple ways to
            accomplish and submit your voter registration form. <br />
            Choose <strong>only one</strong> of the following methods:
          </p>

          <hr style={{ width: "60%", margin: "25px auto" }} />

          {/* OPTION 1 */}
          <div style={{ textAlign: "left", marginBottom: "30px" }}>
            <h5 style={{ color: "#0A2E69", fontWeight: "bold" }}>
              Option 1: Submit the form provided in the Office of the Election Officer (OEO)
            </h5>
            <ul style={{ marginTop: "10px", marginLeft: "20px" }}>
              <li>Step 1: Go to the OEO where you are registered or intending to register.</li>
              <li>Step 2: Get a CEF-1 form from the OEO. Blank forms are available there.</li>
              <li>
                Step 3: Fill out all required fields legibly using a pen. Ask for assistance if needed.
              </li>
              <li>
                Step 4: Submit your completed form to the OEO. Further instructions will be given.
              </li>
            </ul>
          </div>

          {/* OPTION 2 */}
          <div style={{ textAlign: "left", marginBottom: "30px" }}>
            <h5 style={{ color: "#0A2E69", fontWeight: "bold" }}>
              Option 2: Download and print blank CEF-1 form before going to the OEO
            </h5>
            <ul style={{ marginTop: "10px", marginLeft: "20px" }}>
              <li>
                Step 1: Download CEF-1 (and other forms if needed) from the{" "}
                <a
                  href="https://comelec.gov.ph/?r=VoterRegistration/ApplicationsForms"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#0056b3", fontWeight: "bold" }}
                >
                  Application Forms page
                </a>.
              </li>
              <li>Step 2: Print on 8” x 13” (Folio) paper, back-to-back.</li>
              <li>Step 3: Fill out all required fields using pen (write legibly).</li>
              <li>
                <strong>NOTE:</strong> Do <strong>not sign or thumbmark</strong> yet; do this in the presence of the
                Election Officer or an Authorized COMELEC Representative.
              </li>
              <li>
                Step 4: Go to your OEO to personally submit your form. Follow their further instructions.
              </li>
            </ul>
          </div>

          {/* OPTION 3 */}
          <div style={{ textAlign: "left", marginBottom: "30px" }}>
            <h5 style={{ color: "#0A2E69", fontWeight: "bold" }}>
              Option 3: Fill out the CEF-1 form using your computer before printing
            </h5>
            <ul style={{ marginTop: "10px", marginLeft: "20px" }}>
              <li>
                Step 1: Download CEF-1 from the{" "}
                <a
                  href="https://comelec.gov.ph/?r=VoterRegistration/ApplicationsForms"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#0056b3", fontWeight: "bold" }}
                >
                  Application Forms page
                </a>.
              </li>
              <li>Step 2: Open the file using a PDF reader (e.g., Adobe Acrobat Reader DC).</li>
              <li>Step 3: Check the appropriate options and fill in the highlighted required fields.</li>
              <li>Step 4: Print the completed CEF-1 on 8” x 13” (Folio) paper, back-to-back.</li>
              <li>
                <strong>NOTE:</strong> Do not sign or thumbmark yet; this must be done in front of the Election Officer or an authorized COMELEC Representative.
              </li>
              <li>
                Step 5: Submit your printed form at the OEO where you are registering.
              </li>
            </ul>
          </div>

          {/* OPTION 4 */}
          <div style={{ textAlign: "left" }}>
            <h5 style={{ color: "#0A2E69", fontWeight: "bold" }}>Option 4: Use the iRehistro Web App</h5>
            <ul style={{ marginTop: "10px", marginLeft: "20px" }}>
              <li>
                Step 1: Open the{" "}
                <a
                  href="https://comelec.gov.ph/?r=VoterRegistration/iRehistro"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#0056b3", fontWeight: "bold" }}
                >
                  iRehistro web app
                </a>.
              </li>
              <li>Step 2: Select the proper options and fill out all required fields.</li>
              <li>Step 3: Follow the app’s instructions to generate your form.</li>
              <li>
                Step 4: Visit your designated OEO (based on your appointment) to submit your form.
              </li>
            </ul>
          </div>

          <hr style={{ width: "50%", margin: "30px auto" }} />

          <div
            className="note-section mt-4"
            style={{
              width: "80%",
              margin: "20px auto",
              textAlign: "left",
              backgroundColor: "#f9fbff",
              padding: "15px 20px",
              borderLeft: "5px solid #0A2E69",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            }}
          >
            <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: "1.7em" }}>
              <strong style={{ color: "#0A2E69" }}>NOTE:</strong><br />
              To see other forms and attachments, visit the{" "}
              <a
                href="https://comelec.gov.ph/?r=VoterRegistration/ApplicationsForms"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0056b3", fontWeight: "bold" }}
              >
                Application Forms page
              </a>. <br />
              You’ll need to bring your valid ID and completed CEF-1 form on your appointment day.
            </p>
          </div>
        </div>
      </>,
    ],
    "Register for TIN": [
      <>
        <hr />
        <br />

        <div
          style={{
            textAlign: "center",
            backgroundColor: "#ffffff",
            padding: "30px 25px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <h4
            style={{
              fontWeight: "bold",
              color: "#0A2E69",
              marginBottom: "15px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            REGISTER FOR TAXPAYER IDENTIFICATION NUMBER (TIN)
          </h4>

          <p style={{ fontSize: "1.05rem", lineHeight: "1.7em", color: "#333" }}>
            You may apply for your <strong>TIN</strong> through the BIR’s primary registration process.
          </p>

          <p style={{ fontSize: "1.05rem", color: "#333", marginBottom: "25px" }}>
            Click the button below to access the official BIR page and begin your TIN registration.
          </p>

          <div>
            <a
              href="https://www.bir.gov.ph/primary-registration"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "linear-gradient(90deg, #0A2E69, #1E4BB8)",
                color: "#fff",
                padding: "12px 28px",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "1.1rem",
                textDecoration: "none",
                letterSpacing: "0.5px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseOver={(e) => {
                e.target.style.background = "linear-gradient(90deg, #FFD700, #FFC107)";
                e.target.style.color = "#0A2E69";
                e.target.style.boxShadow = "0 4px 15px rgba(255, 215, 0, 0.4)";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "linear-gradient(90deg, #0A2E69, #1E4BB8)";
                e.target.style.color = "#fff";
                e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
              }}
            >
              🔗 Apply for TIN
            </a>
          </div>

          <div
            className="note-section mt-4"
            style={{
              width: "80%",
              margin: "30px auto 0",
              textAlign: "left",
              backgroundColor: "#f9fbff",
              padding: "15px 20px",
              borderLeft: "5px solid #0A2E69",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            }}
          >
            <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: "1.7em" }}>
              <strong style={{ color: "#0A2E69" }}>NOTE:</strong><br />
              Make sure you have valid identification documents ready (e.g. government-issued ID). Also, some BIR branches may require additional forms or proofs depending on your status (employee, self-employed, etc.).
            </p>
          </div>
        </div>
      </>,
    ],

  };

  const [selectedService, setSelectedService] = useState("How to Get National ID");

  return (
    <div className="bg-light min-vh-100">
      <Container className="text-center my-5">
        <hr/>
        <h1 className="text-center fw-bold mb-5">SERVICE GUIDES</h1>
        <Row>
          {/* Left column: service list */}
          <Col md={4}>
            <ListGroup>
              {Object.keys(services).map((service) => (
                <ListGroup.Item
                  key={service}
                  action
                  active={selectedService === service}
                  onClick={() => setSelectedService(service)}
                  className="fw-semibold"
                >
                  {service}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          {/* Right column: guide content */}
          <Col md={8}>
            <Card className="shadow-sm">
              {/* Blue header section */}
              <div className="card-blue-header text-center">
                <h4 className="m-0 fw-bold">{selectedService}</h4>
              </div>

              <Card.Body>
                <div className="guide-content">
                  {Array.isArray(services[selectedService]) &&
                    services[selectedService].map((step, index) => (
                      <div key={index} className="guide-step mb-3">
                        {step}
                      </div>
                    ))}
                </div>
              </Card.Body>
            </Card>
          </Col>


        </Row>
      </Container>
    </div>
  );
}

export default Guides;
