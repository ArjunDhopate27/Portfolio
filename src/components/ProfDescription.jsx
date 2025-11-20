// src/components/ProfDescription.jsx
import React from "react";
import "./ProfDescription.css"

const ProfDescription = () => {
  return (
    <div className="desc-wrapper">
      <h1 className="hero__title">Arjun Dhopate</h1>
      <h2 className="hero__subtitle">Full-Stack Software Engineer & UI/UX Enthusiast</h2>

      <p className="hero__desc">
        I build accessible, inclusive digital products with a focus on modern
        design and strong engineering.
      </p>

      <div className="hero__actions">
        <button className="btn btn--primary">View My Work</button>
        <button className="btn btn--ghost">Get In Touch</button>
      </div>
    </div>
  );
};

export default ProfDescription;
