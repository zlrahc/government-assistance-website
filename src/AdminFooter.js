import React, { useState } from "react";
import { Container, Button, Card, Modal } from "react-bootstrap";

function AdminFooter() {
  const [showComplaintModal, setShowComplaintModal] = useState(false);

  return (
    <footer
      className="admin-footer text-white py-5 mt-5"
      style={{ backgroundColor: "#003366" }}
    >
      <Container className="text-center">
        <img
          src="/logo512.png"
          alt="Gov Assist Logo"
          className="gov-logo mb-3"
          width="160"
          height="160"
        />
        <h4 className="fw-bold">GOV ASSIST</h4>
        <p className="small mb-1">
          All content is in the public domain unless otherwise stated.
        </p>
        <p className="small mb-4">
          Quezon City, Philippines
        </p>

        <hr style={{ width: "30%", margin: "20px auto", borderColor: "#fff" }} />

        <h5 className="fw-bold mb-3">Got a Concern?</h5>
        <Button
          variant="danger"
          className="fw-semibold px-4 py-2"
          onClick={() => setShowComplaintModal(true)}
        >
          Submit a Complaint
        </Button>

        <br/><br/>
        <div className="text-center small">
          © 2025 Gov Assist. All rights reserved.
        </div>
      </Container>

      <Modal
        show={showComplaintModal}
        onHide={() => setShowComplaintModal(false)}
        centered
        size="lg"
      >
        <Modal.Body
          style={{
            backgroundColor: "#f8f9fa",
            borderRadius: "15px",
            padding: "2rem",
          }}
        >
          {/* Modal content (form) goes here */}
        </Modal.Body>
      </Modal>
    </footer>
  );
}

export default AdminFooter;
