import React, { useRef } from "react";
import "./ProjectsMini.css";
import projects from "../data/projectCardsData.json"; // re-use your data file
import { Link } from "react-router-dom";

const ProjectsMini = () => {
  const railRef = useRef(null);

  const scrollByAmount = (dir = "right") => {
    const rail = railRef.current;
    if (!rail) return;
    const amount = Math.round(rail.clientWidth * 0.8); // scroll ~80% of visible width
    rail.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <div className="projects-mini-wrapper">
      <div className="projects-mini-header">
        <h2>Projects</h2>
      </div>

      <div className="projects-mini-rail-wrap">
        <button
          aria-label="Scroll left"
          className="mini-nav mini-nav--left"
          onClick={() => scrollByAmount("left")}
        >
          ‹
        </button>

        <div className="projects-mini-rail" ref={railRef} role="list">
          {projects.map((p, i) => (
            <article className="mini-card" key={i} role="listitem">
              <div className="mini-card__img">
                <img
                  src={p.image || "/mnt/data/5a4bbf91-588f-4567-911f-0aca4f2bba39.png"}
                  alt={p.headline || `project-${i}`}
                  loading="lazy"
                />
              </div>
              <div className="mini-card__body">
                <h3 className="mini-card__title">{p.headline}</h3>
                {/* optional small text */}
                <p className="mini-card__skills">{(p.skills || []).slice(0, 2).join(" • ")}</p>
              </div>
            </article>
          ))}
        </div>

        <button
          aria-label="Scroll right"
          className="mini-nav mini-nav--right"
          onClick={() => scrollByAmount("right")}
        >
          ›
        </button>
      </div>

      <div className="projects-mini-footer">
        <Link to="/projects"  className="projects-mini-viewall">View All</Link>
      </div>
    </div>
  );
};

export default ProjectsMini;
