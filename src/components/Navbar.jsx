// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ brand = "ArjunDhopate" }) => {
  return (
    <header className="nav">
      <div className="nav__inner">
        <div className="nav__left">
          <div className="nav__logo">
            <svg viewBox="0 0 48 48" width="10" height="10" fill="currentColor">
              <path d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24Z" />
            </svg>
          </div>
          <Link to="/" className="nav__brand">{brand}</Link>
        </div>

        <nav className="nav__links">
          <Link to="/" className="nav__link">Home</Link>
          {/* <Link to="/about" className="nav__link">About</Link> */}
          <Link to="/projects" className="nav__link">Projects</Link>
          <Link to="/sports" className="nav__link nav__link--active">Sports</Link>
          <Link to="/contact" className="nav__link">Contact</Link>
        </nav>

        <div className="nav__right">
          <Link to="/contact" className="nav__cta">Get In Touch</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
