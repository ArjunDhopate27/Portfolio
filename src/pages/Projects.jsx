// src/pages/Projects.jsx
import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD9u8lwsG1O-agXe6G-Vp8jykPsUEy3tonGlc-IMMis5FWYUo252D42xmxHeXXniw9zs0UIJj7HqCU982LAGISBA2tt8AyPhhi1AyAzAx6wyQbmCIT0l0_F0UuWplcg1sL6NDic3rE_BVMu3f93eddG38dm_JARuQDy_VSpb7urCJrsWplYQMeh_eVp49lnQSWCj0yaoH50Zs5IywIuYFDQeVp4j4TqM7RH3KnXwQ17o5ks66cLWOhlpFRpgbmzvXubvQHuiOxNr1Mg",
      headline: "E-commerce Analytics Platform",
      description:
        "A full-stack web application that helps users track sales, traffic, and user engagement metrics with interactive charts.",
      skills: ["React", "D3.js", "Node.js"],
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD4IUzdU0tcRrG9d8nJ4vxzJnRtGUV5m1M1j7e-wojip3HbxNKmTCH-QfCrKVlHZagspXSv3Z1S0SUjzt4UVKunvYj6A2zNED0uI8oY1BsG_BVZM2yZIlT6_cPTnp7ZFDWJZYRDPdNVmkRnrGpquQ7BBUqTijbIIMY_tj3-4kDWSZbLOpJsjCNW4TqILZVv6IDg0lKLBIQnbAtZqagbjQU_PH52JPzFXXxgYjmoumOAqb9GbeLfSzikTS0jmp4s6uR9GEVWIZYqdzUG",
      headline: "Mobile Task Manager App",
      description:
        "A cross-platform mobile app for task management featuring cross-device sync, reminders, and collaborative lists.",
      skills: ["Flutter", "Firebase", "Bloc"],
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBwmsvcXpAY9DTUKMIK55qXHM7dfeTkWjEfIWjkc5EEJoXnZP7J-XMZq2Re44v-7rkkGvM5bjFZQKXR27j_S5X4qu017i4P_BQ444KuG0-127e82ttXbqc8_UACwon9CmuGzfCBUY9VF7_zSZyMA31bXLehXraUMPxA80fvbyoDJVAB843upuAo6wqaQQt3ZS4NvObN5yighY3eHuG5P4xliYFJwVYcPnO2SId8SqB_olheW2c0euhMomLfEiZdDfFiIPBUSNG7pZid",
      headline: "Portfolio Website V2",
      description:
        "The second iteration of my personal portfolio, built with a modern tech stack to showcase skills and projects.",
      skills: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBwmsvcXpAY9DTUKMIK55qXHM7dfeTkWjEfIWjkc5EEJoXnZP7J-XMZq2Re44v-7rkkGvM5bjFZQKXR27j_S5X4qu017i4P_BQ444KuG0-127e82ttXbqc8_UACwon9CmuGzfCBUY9VF7_zSZyMA31bXLehXraUMPxA80fvbyoDJVAB843upuAo6wqaQQt3ZS4NvObN5yighY3eHuG5P4xliYFJwVYcPnO2SId8SqB_olheW2c0euhMomLfEiZdDfFiIPBUSNG7pZid",
      headline: "Portfolio Website V2",
      description:
        "The second iteration of my personal portfolio, built with a modern tech stack to showcase skills and projects.",
      skills: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
  ];

  return (
    <main className="projects-page">

      
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
