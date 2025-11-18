// src/pages/Sports.jsx
import React from "react";
import Navbar from "../components/Navbar";
import "./Sports.css";

const SportCard = ({ iconName, title, desc, accent }) => (
  <article className="sport-card" style={{ ["--accent"]: accent }}>
    <div className="sport-card__overlay" />
    <div className="sport-card__inner">
      <span className="material-symbols-outlined sport-icon">{iconName}</span>
      <h3 className="sport-title">{title}</h3>
      <p className="sport-desc">{desc}</p>
    </div>
  </article>
);

const Sports = () => {
  const items = [
    { iconName: "sports_martial_arts", title: "Martial Arts", desc: "Training discipline & strength.", accent: "#C058F3" },
    { iconName: "sports_soccer", title: "Football", desc: "Teamwork & strategy.", accent: "#C058F3" },
    { iconName: "sports_basketball", title: "Basketball", desc: "Agility, focus & speed.", accent: "#C058F3" },
    { iconName: "directions_bike", title: "Cycling", desc: "Endurance & adventure.", accent: "#4A4AFF" },
    { iconName: "pool", title: "Swimming", desc: "Strength & relaxation.", accent: "#4A4AFF" },
    { iconName: "skateboarding", title: "Skateboarding", desc: "Balance & creativity.", accent: "#4A4AFF" }
  ];

  return (
    <div className="page-sports">
      <Navbar />

      <main className="sports-container">
        <header className="sports-hero">
          <h1 className="sports-title">Sports & Activities</h1>
          <p className="sports-lead">
            This page showcases sports and activities that keep me energized, active, and focused.
          </p>
        </header>

        <section className="sports-grid">
          {items.map((it, i) => (
            <SportCard key={i} {...it} />
          ))}
        </section>
      </main>

      <footer className="sports-footer">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>
        <p className="footer-copy">© 2024 DeveloperName. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Sports;
