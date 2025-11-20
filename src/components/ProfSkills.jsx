// src/components/ProfSkills.jsx
import React from "react";
import "./ProfSkills.css";

const SKILLS = [
  "React", "Node.js", "Python",
  "AWS", "Figma", "TypeScript", "Redux",
  "Docker", "Postgres", "MongoDB",
  "GraphQL", "Firebase", "Tailwind",
  "Jest", "Cypress", "Socket.io"
];

const LOGOS = {
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  Redux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Postgres: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  GraphQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  Tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  Jest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  Cypress: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypress/cypress-plain.svg",
  "Socket.io": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
};

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
