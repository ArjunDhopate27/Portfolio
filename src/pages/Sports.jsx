import React from "react";
import "./Sports.css";

const Sports = ({ icon, title, desc, color }) => {
  return (
    <div className="hobby-card" style={{ ["--accent"]: color || "#C058F3" }}>
      <div className="hobby-card__overlay" />
      <div className="hobby-card__inner">
        <div className="hobby-card__icon" aria-hidden>
          {/* icon can be a Material Symbol name (string) or an SVG/IMG element */}
          {typeof icon === "string" ? (
            <span className="material-symbols-outlined">{icon}</span>
          ) : (
            icon
          )}
        </div>

        <div className="hobby-card__content">
          <h3 className="hobby-card__title">{title}</h3>
          <p className="hobby-card__desc">{desc}</p>
        </div>
      </div>
    </div>
  );
};

const Hobbies = () => {
  const hobbies = [
    { icon: "terrain", title: "Hiking & Mountaineering", desc: "Exploring trails and chasing summits.", color: "#C058F3" },
    { icon: "photo_camera", title: "Photography", desc: "Capturing moments through a lens.", color: "#C058F3" },
    { icon: "sports_esports", title: "Gaming", desc: "Strategic thinking and digital adventures.", color: "#C058F3" },
    { icon: "menu_book", title: "Reading", desc: "Diving into sci-fi and fantasy worlds.", color: "#4A4AFF" },
    { icon: "coffee_maker", title: "Coffee Brewing", desc: "The science and art of the perfect cup.", color: "#4A4AFF" },
    { icon: "music_note", title: "Music", desc: "Playing guitar and discovering new artists.", color: "#4A4AFF" },
  ];

  return (
    <div className="hobbies-page">
      <header className="hobbies-header">
        <div className="brand">
          <svg className="brand__svg" viewBox="0 0 48 48" aria-hidden>
            <path fill="currentColor" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" />
          </svg>
          <span className="brand__name">DeveloperName</span>
        </div>

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a className="active" href="#">Hobbies</a>
          <a href="#">Contact</a>
        </nav>

        <button className="btn-contact">Get In Touch</button>
      </header>

      <main className="hobbies-main">
        <section className="hobbies-intro">
          <h1>Beyond the Code</h1>
          <p>
            This section covers my personal interests and passions outside of work, showcasing
            the activities that recharge my creativity.
          </p>
        </section>

        <section className="hobbies-grid">
          {hobbies.map((h, i) => (
            <HobbyCard key={i} {...h} />
          ))}
        </section>
      </main>

      <footer className="hobbies-footer">
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-socials">
          <a aria-label="Github" href="#" className="social-svg">
            {/* small github icon */}
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.475 2 2 6.475 2 12c0 4.425 2.863 8.162 7.025 9.487.5.1.662-.213.662-.475 0-.237-.01-.869-.015-1.706-2.85.625-3.45-1.375-3.45-1.375-.465-1.175-1.137-1.487-1.137-1.487-.925-.637.07-.625.07-.625 1.025.075 1.563 1.05 1.563 1.05.912 1.563 2.387 1.112 2.965.85.092-.662.357-1.113.65-1.369-2.275-.262-4.662-1.137-4.662-5.062 0-1.118.397-2.038 1.05-2.755-.103-.263-.455-1.325.1-2.762 0 0 .863-.275 2.825 1.05A9.7 9.7 0 0112 6.8c.875.004 1.758.118 2.583.347 1.962-1.325 2.825-1.05 2.825-1.05.555 1.437.202 2.5.1 2.762.656.718 1.05 1.637 1.05 2.755 0 3.937-2.392 4.8-4.675 5.05.369.318.694.95.694 1.913 0 1.38-.013 2.495-.013 2.835 0 .262.162.588.675.487C19.138 20.162 22 16.425 22 12c0-5.525-4.475-10-10-10z"/></svg>
          </a>
          <a aria-label="LinkedIn" href="#" className="social-svg">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 3h-14c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2v-14c0-1.104-.896-2-2-2zm-10 14h-3v-8h3v8zm-1.5-9.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm12.5 9.5h-3v-4.5c0-1.07-.02-2.445-1.49-2.445-1.491 0-1.72 1.163-1.72 2.368v4.577h-3v-8h2.88v1.093h.041c.401-.761 1.379-1.562 2.837-1.562 3.035 0 3.595 1.998 3.595 4.595v4.874z"/></svg>
          </a>
          <a aria-label="Twitter" href="#" className="social-svg">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.59-2.46.7.89-.53 1.57-1.37 1.89-2.37-.83.5-1.75.86-2.73 1.06C18.36 4.5 17.17 4 15.86 4c-2.18 0-3.95 1.8-3.95 4 0 .31.03.61.1.9-3.28-.17-6.19-1.76-8.13-4.18-.34.59-.53 1.27-.53 1.99 0 1.38.71 2.6 1.79 3.32-.66-.02-1.28-.2-1.82-.5v.05c0 1.92 1.36 3.52 3.17 3.88-.33.09-.69.14-1.06.14-.26 0-.51-.02-.76-.07.51 1.58 1.99 2.73 3.74 2.76-1.37 1.06-3.09 1.69-4.96 1.69-.32 0-.63-.02-.94-.06C7.11 20.29 9.59 21 12.29 21c7.36 0 11.39-6.13 11.39-11.44 0-.17 0-.34-.01-.51.78-.56 1.45-1.25 1.98-2.05z"/></svg>
          </a>
        </div>

        <p className="copyright">© 2024 DeveloperName. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Sports;
