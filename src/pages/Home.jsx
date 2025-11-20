// src/pages/Home.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import ProfilePic from "../components/ProfilePic";
import ProfDescription from "../components/ProfDescription";
import ProfSkills from "../components/ProfSkills";
import MiniSkills from "../components/MiniSkills";
import ProjectsMini from "../components/ProjectsMini";

const Home = () => {

  const [expanded, setExpanded] = useState(false)

  return (
    <div className="home">

      {/* NAV */}
      <header className="home__nav">
        <div className="home__brand">
          <svg className="brand__icon" viewBox="0 0 48 48">
            <path d="M24 4H6V17.33V30.66H24V44H42V30.66V17.33H24V4Z" fill="currentColor" />
          </svg>
          <span className="brand__name">Arjun Dhopate</span>
        </div>

        <nav className="home__links">
          <Link to="/projects">Projects</Link>
          <Link to="/sports">Sports</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        
        <div className="nav__cta">
                  <Link to="/contact" className="nav__cta">Get In Touch</Link>
                </div>
      </header>

      {/* HERO ROW (desktop), vertical stack (mobile) */}
      <main className="hero">

        <div className="hero__left">
          <ProfDescription />
        </div>

        <div className="hero__right">
          <ProfilePic />
        </div>

      </main>

      

      {/* tring to genarate mini-large skills btn function */}
      {!expanded && <div><MiniSkills /><button
            onClick={() => setExpanded(true)}
            className="home-viewall-btns"
          >
            View All
          </button></div>}

          {expanded && (
        <div>
          
          <ProfSkills />

          <button
            onClick={() => setExpanded(false)}
            className="home-viewall-btns"
          >
            View Less
          </button>
        </div>
      )}


      

    {/*   Projects mini - major view  */}
      <div>
        <ProjectsMini />
      </div>

        

    </div>



  );
};

export default Home;
