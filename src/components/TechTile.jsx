// src/components/TechTile.jsx
import React from "react";
import "./TechTile.css"

const TechTile = ({ img, label }) => {
  return (
    <div className="tile">
      <img src={img} className="tile__img" alt="" />
      <p className="tile__label">{label}</p>
    </div>
  );
};

export default TechTile;
