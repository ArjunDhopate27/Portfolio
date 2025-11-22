// src/components/ProfSkills.jsx
import React from "react";
import "./ProfSkills.css";
import skillsLogoData from "../data/skillsLogoData";

const { SKILLS, LOGOS } = skillsLogoData;


const ProfSkills = () => {
  return (
    <section className="tech tech--grid">
      <h3 className="tech__title">My Tech Stack</h3>

      <div className="skill-grid">
        {SKILLS.map((label) => (
          <div className="uniform-bubble" key={label} title={label}>
            <div className="uniform-inner">
              {LOGOS[label] ? (
                <img
                  src={LOGOS[label]}
                  alt={label}
                  className="uniform-img"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              ) : (
                <span className="uniform-initial">{label.charAt(0)}</span>
              )}
            </div>
            <span className="uniform-label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfSkills;
