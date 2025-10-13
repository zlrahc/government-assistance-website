import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Table, Container, Spinner, Button } from "react-bootstrap";

function AdminScamReports() {
  const [authorized, setAuthorized] = useState(null);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuthorized") === "true";
    setAuthorized(isAuth);
  }, []);

  useEffect(() => {
    if (!authorized) return;

    const fetchReports = async () => {
      try {
        const res = await fetch("https://sheetdb.io/api/v1/41tp0qhh84qgw");
        const data = await res.json();
        setReports(data);
      } catch (err) {
        console.error("Failed to fetch reports:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, [authorized]);

  const toggleBlacklist = async (report) => {
    const newStatus = report.Status === "Blacklisted" ? "Pending" : "Blacklisted";

    try {
      await fetch(
        `https://sheetdb.io/api/v1/41tp0qhh84qgw/Name/${encodeURIComponent(
          report.Name
        )}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: { Status: newStatus } }),
        }
      );

      // Update local state
      setReports((prev) =>
        prev.map((r) => (r.Name === report.Name ? { ...r, Status: newStatus } : r))
      );
    } catch (err) {
      console.error("Failed to update report:", err);
    }
  };

  if (authorized === null) return null;

  if (!authorized) return <Navigate to="/admin" replace />;

  return (
    <Container style={{ padding: "2rem" }}>
      <h2 className="mb-4">Scam Reports</h2>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Scam Source</th>
              <th>Details</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => {
              const isHovered = hoveredId === (report.id || index);
              const displayText =
                isHovered
                  ? report.Status === "Blacklisted"
                    ? "Unblacklist"
                    : "Blacklist"
                  : report.Status || "Pending";

              const variant =
                isHovered
                  ? report.Status === "Blacklisted"
                    ? "warning"
                    : "danger"
                  : report.Status === "Blacklisted"
                  ? "secondary"
                  : report.Status === "True"
                  ? "success"
                  : "secondary";

              return (
                <tr key={report.id || index}>
                  <td>{report.Name}</td>
                  <td>{report.Email}</td>
                  <td>{report.ScamSource}</td>
                  <td>{report.Details}</td>
                  <td>
                    <Button
                      variant={variant}
                      onMouseEnter={() => setHoveredId(report.id || index)}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={() => toggleBlacklist(report)}
                    >
                      {displayText}
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </Container>
  );
}

export default AdminScamReports;
