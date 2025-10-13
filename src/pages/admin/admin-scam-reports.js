import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function AdminScamReports() {
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuthorized") === "true";
    setAuthorized(isAuth);
  }, []);

  if (!authorized) {
    // Redirect to admin login if not authorized
    return <Navigate to="/admin" replace />;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Scam Reports</h2>
      {/* Render the scam reports table or list here */}
    </div>
  );
}

export default AdminScamReports;
