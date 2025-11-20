// src/pages/Projects.jsx
import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";
import Navbar from "../components/Navbar";
import projects from "../data/projectCardsData.json"
import ProjectsMini from "../components/ProjectsMini";

const Projects = () => {


  return (
    <main className="projects-page">

      <Navbar />

      <header className="projects-header">
        <h1 className="projects-title">
          Things I've <span className="projects-title--accent">Built</span>
        </h1>
        <p className="projects-sub">
          A curated selection of my projects, showcasing my skills in web and mobile development.
        </p>
      </header>

      <section className="projects-grid" aria-label="Projects gallery">
        {projects.map((p, idx) => (
          <ProjectCard
            key={idx}
            image={p.image}
            headline={p.headline}
            description={p.description}
            skills={p.skills}
          />
        ))}
      </section>

      <div className="projects-more">
        <button className="projects-more__btn">View More on GitHub</button>
      </div>

    </main>
  );
};

export default Projects;
