import React from "react";
import "./MiniSkills.css";

import skillsLogoData from "../data/skillsLogoData";

const { SKILLS, LOGOS } = skillsLogoData;


const MiniSkills = () => {
  return (
    <section className="mini-tech">
      <h3 className="mini-title">My Skills</h3>

      <div className="mini-scroll-box">
        <div className="mini-row">
          {SKILLS.map((label) => (
            <div className="mini-icon" key={label} title={label}>
              <img src={LOGOS[label]} alt={label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniSkills;
