import React from "react";
import "./Home.css";
import { Link, Route } from "react-router-dom";

const TechTile = ({ img, label }) => (
  <div className="tile">
    <img src={img} alt={label} className="tile__img" />
    <p className="tile__label">{label}</p>
  </div>
);

const Home = () => {
  const techs = [
    { img: "/logos/react.svg", label: "React" },
    { img: "/logos/nodejs.svg", label: "Node.js" },
    { img: "/logos/python.svg", label: "Python" },
    { img: "/logos/aws.svg", label: "AWS" },
    { img: "/logos/figma.svg", label: "Figma" },
    { img: "/logos/typescript.svg", label: "TypeScript" },
  ];

  return (
    <div className="home">
      {/* Navbar */}
      <header className="home__nav">
        <div className="home__brand">
          <svg className="brand__icon" viewBox="0 0 48 48" aria-hidden>
            <path d="M24 4H6V17.33V30.66H24V44H42V30.66V17.33H24V4Z" fill="currentColor" />
          </svg>
          <span className="brand__name">Arjun Dhopate</span>
        </div>

        <nav className="home__links">   
          
          <Link to="/projects">Projects</Link>
          <Link to="/sports">Sports</Link>
          <Link to="/contact">Contact</Link>
          
        </nav>

        <button className="home__cta">Get In Touch</button>
      </header>

      {/* Hero */}
      <main className="hero">
        <section className="hero__left">
          <h1 className="hero__title">Arjun Dhopate</h1>
          <h2 className="hero__subtitle">
            Full-Stack Software Engineer &amp; UI/UX Enthusiast
          </h2>

          <p className="hero__desc">
            I build accessible, inclusive products and digital experiences for the web with a focus on modern design and robust performance.
          </p>

          <div className="hero__socials">
            <a aria-label="github" href="#"><svg className="icon" viewBox="0 0 24 24">{/* svg path */}</svg></a>
            <a aria-label="linkedin" href="#"><svg className="icon" viewBox="0 0 24 24">{/* svg path */}</svg></a>
            <a aria-label="twitter" href="#"><svg className="icon" viewBox="0 0 24 24">{/* svg path */}</svg></a>
          </div>

          <div className="hero__actions">
            <button className="btn btn--primary">View My Work</button>
            <button className="btn btn--ghost">Get In Touch</button>
          </div>
        </section>

        <section className="hero__right" aria-hidden>
          {/* Replace /profile.jpg with your image path (put image in public/ folder) */}
          <div className="avatar-ring">
            <div
              className="avatar"
              style={{ backgroundImage: `url('/profile.jpg')` }}
            />
          </div>
        </section>
      </main>

      {/* Tech stack */}
      <section className="tech">
        <h3 className="tech__title">My Tech Stack</h3>
        <div className="tech__grid">
          {techs.map((t) => (
            <TechTile key={t.label} img={t.img} label={t.label} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
