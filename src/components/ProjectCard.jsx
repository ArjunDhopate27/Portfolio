// src/components/ProjectCard.jsx
import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ image, headline, description, skills = [] }) => {
  return (
    <article className="pcard" role="article" aria-label={headline}>
      <div
        className="pcard__image"
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={headline + " preview image"}
      />
      <div className="pcard__body">
        <h3 className="pcard__title">{headline}</h3>
        <p className="pcard__desc">{description}</p>

        <div className="pcard__skills">
          {skills.map((s, i) => (
            <span className="pcard__tag" key={i}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
