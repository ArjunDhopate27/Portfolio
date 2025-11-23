// src/pages/Sports.jsx
import React from "react";
import Navbar from "../components/Navbar";
import "./Sports.css";
import SportCard from "../components/SportCard";



// const SportCard = ({ iconName, title, desc, accent }) => (
//   <article className="sport-card" style={{ ["--accent"]: accent }}>
//     <div className="sport-card__overlay" />
//     <div className="sport-card__inner">
//       <span className="material-symbols-outlined sport-icon">{iconName}</span>
//       <h3 className="sport-title">{title}</h3>
//       <p className="sport-desc">{desc}</p>
//     </div>
//   </article>
// );

const Sports = () => {
  const items = [
  
  { iconName: "chess", title: "Chess", desc: "Tactics, strategy & patience.", accent: "#C058F3" },
  { iconName: "code", title: "LeetCode", desc: "Problem solving & logic sharpening.", accent: "#FFC82C" },

  { iconName: "sports_kabaddi", title: "Kabaddi", desc: "Strength, focus & power.", accent: "#FF6B4A" },
  { iconName: "sports_cricket", title: "Cricket", desc: "Teamwork, passion & skills.", accent: "#3FC7F4" }
  
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
