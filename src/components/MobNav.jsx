// src/components/MobNav.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./MobNav.css";

const MobNav = () => {
  return (
    <nav className="mob-nav">

      <NavLink to="/" className="nav-item">
        <i className="ri-home-heart-fill"></i>
        <span>Home</span>
      </NavLink>

      <NavLink to="/projects" className="nav-item">
        <i className="ri-stack-fill"></i>
        <span>Projects</span>
      </NavLink>

      <NavLink to="/sports" className="nav-item">
        <i className="ri-trophy-fill"></i>
        <span>Sports</span>
      </NavLink>

      <NavLink to="/contact" className="nav-item">
        <i className="ri-chat-3-fill"></i>
        <span>Contact</span>
      </NavLink>

    </nav>
  );
};

export default MobNav;
