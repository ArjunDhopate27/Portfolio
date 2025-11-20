// src/components/MobNav.jsx
import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./MobNav.css";

const MobNav = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const ticking = useRef(false);

  useEffect(() => {
    // Only attach on browsers
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          // If scrolled down (currentY > last) -> hide, else show
          if (currentY > lastScrollY.current && currentY > 50) {
            // scrolled down and not near top
            setVisible(false);
          } else {
            // scrolled up or near top
            setVisible(true);
          }
          lastScrollY.current = currentY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // nav will be hidden from assistive tech when not visible
    <nav
      className={`mob-nav ${visible ? "visible" : "hidden"}`}
      aria-hidden={!visible}
    >
      <NavLink to="/" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
        <i className="ri-home-heart-fill" aria-hidden="true"></i>
        <span>Home</span>
      </NavLink>

      <NavLink to="/projects" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
        <i className="ri-stack-fill" aria-hidden="true"></i>
        <span>Projects</span>
      </NavLink>

      <NavLink to="/sports" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
        <i className="ri-trophy-fill" aria-hidden="true"></i>
        <span>Sports</span>
      </NavLink>

      <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
        <i className="ri-chat-3-fill" aria-hidden="true"></i>
        <span>Contact</span>
      </NavLink>
    </nav>
  );
};

export default MobNav;
