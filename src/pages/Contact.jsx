// src/pages/Contact.jsx
import React from "react";
import Navbar from "../components/Navbar"; // optional: keep if you want navbar on this page
import "./Contact.css";

const SocialButton = ({ href, title, children }) => (
  <a className="contact-social" href={href} target="_blank" rel="noopener noreferrer" aria-label={title}>
    <div className="contact-social__icon">{children}</div>
    <span className="contact-social__label">{title}</span>
  </a>
);

const Contact = () => {
  return (
    <div className="contact-page">
      <Navbar />

      <main className="contact-container">
        <section className="contact-left">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-lead">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out to me.
          </p>

          <div className="contact-top-links" aria-hidden={false}>
            {/* Replace href="#" with your real profile links */}
            <SocialButton href="https://instagram.com/" title="Instagram">
              {/* Instagram SVG */}
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
              </svg>
            </SocialButton>

            <SocialButton href="https://www.chess.com/" title="Chess.com">
              {/* Chess pawn SVG simple */}
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
                <path d="M12 3c-1.1 0-2 .9-2 2v1h4V5c0-1.1-.9-2-2-2z" fill="currentColor" />
                <path d="M8 12a4 4 0 0 1 8 0c0 2.5-4 5-4 5s-4-2.5-4-5z" fill="currentColor" opacity="0.9"/>
                <rect x="6" y="17" width="12" height="2" rx="1" fill="currentColor" opacity="0.7"/>
              </svg>
            </SocialButton>

            <SocialButton href="https://leetcode.com/" title="LeetCode">
              {/* LeetCode icon simplified */}
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
                <path d="M7 4l10 8-10 8V4z" fill="currentColor" opacity="0.95"/>
              </svg>
            </SocialButton>

            <SocialButton href="https://github.com/" title="GitHub">
              {/* GitHub icon */}
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
                <path d="M12 .5C5.65.5.75 5.4.75 11.75c0 4.78 3.1 8.84 7.4 10.27.54.1.74-.24.74-.53 0-.26-.01-1-.02-1.96-3.01.66-3.65-1.45-3.65-1.45-.49-1.25-1.2-1.58-1.2-1.58-.98-.67.07-.65.07-.65 1.08.07 1.65 1.11 1.65 1.11.96 1.64 2.52 1.16 3.14.89.1-.7.38-1.16.69-1.43-2.4-.27-4.92-1.2-4.92-5.34 0-1.18.42-2.14 1.11-2.9-.11-.28-.49-1.4.11-2.91 0 0 .9-.29 2.95 1.1A10.5 10.5 0 0112 6.5c.91 0 1.83.12 2.69.35 2.05-1.4 2.95-1.1 2.95-1.1.6 1.52.22 2.64.11 2.91.7.76 1.11 1.72 1.11 2.9 0 4.15-2.52 5.06-4.92 5.33.39.34.72.99.72 2 0 1.44-.01 2.6-.01 2.96 0 .29.2.64.75.52 4.3-1.44 7.4-5.5 7.4-10.27C23.25 5.4 18.35.5 12 .5z" fill="currentColor"/>
              </svg>
            </SocialButton>
          </div>

          <div className="contact-icons-row">
            {/* small round icon buttons (optional) */}
            <a className="contact-round" href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram small">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.2" /><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2" /></svg>
            </a>
            <a className="contact-round" href="https://www.chess.com/" target="_blank" rel="noopener noreferrer" aria-label="Chess.com small">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none"><path d="M12 3v3" stroke="currentColor" strokeWidth="1.2" /><path d="M8 12a4 4 0 0 1 8 0c0 2.5-4 5-4 5s-4-2.5-4-5z" fill="currentColor" opacity="0.9"/></svg>
            </a>
            <a className="contact-round" href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode small">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none"><path d="M7 4l10 8-10 8V4z" fill="currentColor" opacity="0.95"/></svg>
            </a>
            <a className="contact-round" href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub small">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none"><path d="M12 .5C5.65.5.75 5.4.75 11.75c0 4.78 3.1 8.84 7.4 10.27.54.1.74-.24.74-.53 0-.26-.01-1-.02-1.96-3.01.66-3.65-1.45-3.65-1.45-.49-1.25-1.2-1.58-1.2-1.58-.98-.67.07-.65.07-.65 1.08.07 1.65 1.11 1.65 1.11.96 1.64 2.52 1.16 3.14.89.1-.7.38-1.16.69-1.43-2.4-.27-4.92-1.2-4.92-5.34 0-1.18.42-2.14 1.11-2.9-.11-.28-.49-1.4.11-2.91 0 0 .9-.29 2.95 1.1A10.5 10.5 0 0112 6.5c.91 0 1.83.12 2.69.35 2.05-1.4 2.95-1.1 2.95-1.1.6 1.52.22 2.64.11 2.91.7.76 1.11 1.72 1.11 2.9 0 4.15-2.52 5.06-4.92 5.33.39.34.72.99.72 2 0 1.44-.01 2.6-.01 2.96 0 .29.2.64.75.52 4.3-1.44 7.4-5.5 7.4-10.27C23.25 5.4 18.35.5 12 .5z" fill="currentColor"/></svg>
            </a>
          </div>
        </section>

        <section className="contact-right">
          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Form submit: implement your handler'); }}>
            <div className="row-2">
              <label className="field">
                <span className="field-label">Full Name</span>
                <input className="field-input" type="text" placeholder="Enter your full name" />
              </label>

              <label className="field">
                <span className="field-label">Email Address</span>
                <input className="field-input" type="email" placeholder="Enter your email address" />
              </label>
            </div>

            <label className="field">
              <span className="field-label">Subject</span>
              <input className="field-input" type="text" placeholder="What is this about?" />
            </label>

            <label className="field">
              <span className="field-label">Your Message</span>
              <textarea className="field-textarea" rows="6" placeholder="Write your message here..." />
            </label>

            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="contact-footer">
        <div className="contact-footer-inner">
          <nav className="footer-nav">
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/sports">Sports</a>
            <a href="/contact">Contact</a>
          </nav>
          <p className="copyright">© 2024 DeveloperName. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
