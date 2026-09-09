import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Styles/Home.css";
import profile from "../assets/profile.png";

const ROLES = [
  "Full Stack Developer (MERN)",
  "Frontend Developer (React.js)",
  "Node.js & Backend Developer",
  "AI & Automation Builder",
];

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("surendrak61002@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section className="home" id="home">
      {/* Ambient glowing background accents */}
      <div className="home-ambient-glow glow-1"></div>
      <div className="home-ambient-glow glow-2"></div>

      <div className="home-content">
        {/* Availability Badge */}
        <div className="hero-badge">
          <a href="#contact">
            <span className="badge-dot pulse-beacon"></span>
            <span className="badge-text">
              <strong>Open to Work:</strong> Frontend & MERN Developer Roles (2026 Batch)
            </span>
          </a>
        </div>

        {/* Greeting */}
        <p className="greeting">
          <span className="wave-hand">👋</span> Hello, I'm
        </p>

        {/* Hero Name */}
        <h1 className="hero-name">
          Surendra <span className="gradient-name">Kumar</span>
        </h1>

        {/* Animated Dynamic Role */}
        <div className="role-ticker-wrapper">
          <span className="ticker-lead">Crafting scalable web apps as a</span>
          <div className="ticker-flip-box">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="ticker-role"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Description matching resume */}
        <p className="home-description">
          Computer Science Engineering student (2026 batch) with hands-on experience in{" "}
          <strong>Node.js</strong>, <strong>React.js</strong>, <strong>Express.js</strong>,{" "}
          <strong>Firebase Cloud Functions & Firestore</strong>, and <strong>REST APIs</strong> through internships and full-stack projects.
          Focused on building high-performance web applications, automating business workflows, and integrating AI APIs.
        </p>

        {/* Real Stats from Resume */}
        <div className="hero-stats">
          <div className="stat-card">
            <h3>2+</h3>
            <span>Internships Done</span>
          </div>

          <div className="stat-card">
            <h3>20+</h3>
            <span>React Components</span>
          </div>

          <div className="stat-card">
            <h3>8+</h3>
            <span>Production APIs</span>
          </div>

          <div className="stat-card">
            <h3>5+</h3>
            <span>Full-Stack Projects</span>
          </div>
        </div>

        {/* Buttons & Human Touch Actions */}
        <div className="home-buttons">
          <a
            href="/Surendra_Kumar_Res.pdf"
            className="btn primary-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>📄 Download Resume</span>
          </a>

          <a
            href="https://github.com/surendaras"
            target="_blank"
            rel="noopener noreferrer"
            className="btn outline-btn"
          >
            <span>💻 GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/surendrakumar61002/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn outline-btn"
          >
            <span>🔗 LinkedIn</span>
          </a>

          {/* Quick Copy Email Interaction */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="btn copy-email-btn"
            title="Copy email to clipboard"
          >
            <span>{copied ? "✅ Copied!" : "📋 Copy Email"}</span>
          </button>
        </div>

        {/* Location & Quick Meta Note */}
        <div className="hero-location-meta">
          <span>📍 Noida, India</span>
          <span className="meta-separator">•</span>
          <span>⚡ Available for Relocation & Remote</span>
        </div>
      </div>

      {/* Hero Visual Image Section */}
      <div className="home-image">
        <div className="image-glow">
          <div className="image-frame-highlight"></div>
          <img src={profile} alt="Surendra Kumar" />
        </div>
      </div>
    </section>
  );
}

export default Home;