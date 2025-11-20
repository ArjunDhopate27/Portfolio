// src/components/ProfDescription.jsx
import React from "react";
import "./ProfDescription.css"
import { Link } from "react-router-dom";

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
        {/* <button className="btn btn--primary">View My Work</button> */}
        <div className="btn btn--primary">
                  <Link to="/projects" className="nav__cta">View My Work</Link>
                </div>
                
        
        <div className="btn btn--primary">
                  <Link to="/contact" className="nav__cta">Get In Touch</Link>
                </div>

      </div>
    </div>
  );
};

export default ProfDescription;
