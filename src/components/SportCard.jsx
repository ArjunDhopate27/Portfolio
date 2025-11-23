import React from 'react'
// import "../pages/Sports.css"
import "./SportCard.css"

const SportCard = ({ iconName, title, desc, accent }) => {
  return (
    <article className="sport-card" style={{ ["--accent"]: accent }}>
    <div className="sport-card__overlay" />
    <div className="sport-card__inner">
      <span className="material-symbols-outlined sport-icon">{iconName}</span>
      <h3 className="sport-title">{title}</h3>
      <p className="sport-desc">{desc}</p>
    </div>
  </article>
  );
};


export default SportCard