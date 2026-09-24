import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Index() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">

      <div className="landing-overlay"></div>

      <div className="landing-content">

        

        <h1>ZANZIBAR PORTAL</h1>

        <p className="welcome-text">
          Discover Zanzibar
        </p>

        

        <div className="location-info">
          
          <span>Unguja</span>
          <span>•</span>
          <span>Pemba</span>
        </div>

        <button
          className="explore-btn"
          onClick={() => navigate("/browse")}
        >
          Explore Areas
          <span>→</span>
        </button>

      </div>

      <div className="bottom-text">
        <p>
          Region • District • Shehia • Postal Code
        </p>
      </div>

    </div>
  );
}

export default Index;