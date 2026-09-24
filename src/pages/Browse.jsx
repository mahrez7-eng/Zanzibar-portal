import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import ungujaImage from "../assets/unguja.png";
import pembaImage from "../assets/pemba.png";

function Browse() {
  const navigate = useNavigate();

  const islands = [
    {
      name: "Unguja",
      label: "ISLAND",
      description:
        "Explore regions, districts, shehias and other administrative areas of Unguja.",
      image: ungujaImage,
      path: "/unguja",
    },
    {
      name: "Pemba",
      label: "ISLAND",
      description:
        "Explore regions, districts, shehias and other administrative areas of Pemba.",
      image: pembaImage,
      path: "/pemba",
    },
  ];

  return (
    <div className="browse-page">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back Home
      </button>

      <div className="browse-header">
        <h1>Explore Zanzibar</h1>
        <p>
          Explore different areas and discover administrative information across
          Zanzibar.
        </p>
      </div>

      <div className="island-cards">
        {islands.map((island) => (
          <div
            key={island.name}
            className="island-card"
            style={{ backgroundImage: `url(${island.image})` }}
          >
            <div className="card-overlay"></div>

            <div className="card-content">
              <span className="island-label">{island.label}</span>
              <h2>{island.name}</h2>
              <p>{island.description}</p>

              <button
                className="explore-card-btn"
                onClick={() => navigate(island.path)}
              >
                Explore {island.name} →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Browse;