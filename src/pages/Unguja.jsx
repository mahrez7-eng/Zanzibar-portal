import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Unguja() {
  const navigate = useNavigate();

  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");
  const [shehia, setShehia] = useState("");

  const regions = {
    "Mjini Magharibi": {
      districts: {
        "Urban West": [
          "Malindi",
          "Mkunazini",
          "Shangani",
          "Kwahani",
        ],
        "West": [
          "Mwanakwerekwe",
          "Mwera",
          "Fuoni",
          "Kisauni",
        ],
      },
    },

    "North Unguja": {
      districts: {
        "Kaskazini A": [
          "Nungwi",
          "Kendwa",
          "Kigomani",
          "Matemwe",
        ],
        "Kaskazini B": [
          "Kitope",
          "Mahonda",
          "Mkokotoni",
          "Chaani",
        ],
      },
    },

    "South Unguja": {
      districts: {
        "Kati": [
          "Dunga",
          "Bambi",
          "Chwaka",
          "Jendele",
        ],
        "Kusini": [
          "Kizimkazi",
          "Jambiani",
          "Makunduchi",
          "Paje",
        ],
      },
    },
  };

  const districts =
    region && regions[region]
      ? Object.keys(regions[region].districts)
      : [];

  const shehias =
    region && district
      ? regions[region].districts[district]
      : [];

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
    setDistrict("");
    setShehia("");
  };

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
    setShehia("");
  };

  return (
    <div className="unguja-page">

      {/* Back Button */}
      <button
        className="back-button"
        onClick={() => navigate("/browse")}
      >
        ← Back to Browse
      </button>

      {/* Header */}
      <div className="unguja-header">

        <h1>Explore Unguja</h1>

        <p>
          Tafuta na chagua eneo ndani ya Unguja
          kwa kuchagua Region, District na Shehia.
        </p>
      </div>

      {/* Selection Card */}
      <div className="selection-card">

        <div className="card-title">
          <h2>Find an Area</h2>

          <p>
            Chagua taarifa za eneo unalotaka kutafuta.
          </p>
        </div>

        {/* Region */}
        <div className="form-group">
          <label>Region</label>

          <select
            value={region}
            onChange={handleRegionChange}
          >
            <option value="">
              -- Select Region --
            </option>

            {Object.keys(regions).map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* District */}
        <div className="form-group">
          <label>District</label>

          <select
            value={district}
            onChange={handleDistrictChange}
            disabled={!region}
          >
            <option value="">
              -- Select District --
            </option>

            {districts.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Shehia */}
        <div className="form-group">
          <label>Shehia</label>

          <select
            value={shehia}
            onChange={(e) => setShehia(e.target.value)}
            disabled={!district}
          >
            <option value="">
              -- Select Shehia --
            </option>

            {shehias.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Selected Result */}
        {shehia && (
          <div className="selected-area">

            <div>
              <small>Selected Area</small>

              <h3>{shehia}</h3>

              <p>
                {district} • {region}
              </p>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export default Unguja;