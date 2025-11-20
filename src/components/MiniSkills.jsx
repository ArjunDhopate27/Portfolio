import React from "react";
import "./MiniSkills.css";

const SKILLS = [
  "React", "Node.js", "Python",
  "AWS", "Figma", "TypeScript",
  "Docker", "Postgres", "MongoDB",
  "GraphQL", "Firebase", "Redux",
  "Tailwind", "Jest", "Cypress"
];

const LOGOS = {
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Postgres: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  GraphQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  Redux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  Tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  Jest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  Cypress: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypress/cypress-plain.svg",
};

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
