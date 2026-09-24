import React from "react";
import { useNavigate } from "react-router-dom";

function Pemba() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px 24px", minHeight: "100vh", background: "#f4f8f5" }}>
      <button
        onClick={() => navigate("/browse")}
        style={{
          marginBottom: "20px",
          padding: "10px 18px",
          border: "none",
          borderRadius: "999px",
          background: "#075e54",
          color: "white",
          cursor: "pointer",
          fontWeight: 700,
        }}
      >
        ← Back to Browse
      </button>

      <h1 style={{ color: "#075e54", marginBottom: "8px" }}>Pemba</h1>
      <p style={{ maxWidth: "700px", lineHeight: 1.7, color: "#334155" }}>
        This is the Pemba details page. Add districts, shehias, and important local information here.
      </p>
    </div>
  );
}

export default Pemba;
