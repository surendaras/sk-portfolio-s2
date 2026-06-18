import React from "react";
import "../Styles/Home.css";
import profile from "../assets/profile.png";

function Home() {
  return (
    <section className="home" id="home">

      <div className="home-content">

        {/* Badge */}
        <div className="hero-badge">
          <a href="#contact">
            <span className="badge-dot"></span>
            Open to Frontend & SDE Opportunities (2026 Batch)
          </a>
        </div>

        {/* Greeting */}
        <p className="greeting">👋 Hello, I'm</p>

        {/* NAME (Gradient Target) */}
        <h1 className="hero-name">
          Surendra Kumar
        </h1>

        {/* Role */}
        <h2 className="hero-title">
          Building scalable & responsive web applications as a{" "}
          <span className="highlight">Frontend Developer (React.js)</span> &{" "}
          <span className="highlight">Java Full Stack Developer</span>
        </h2>

        {/* Description (cleaned + impactful) */}
        <p className="home-description">
          B.Tech CSE (2026) student specializing in React.js, Java, and Spring Boot.
          I focus on building scalable full-stack applications, integrating REST APIs,
          and creating high-performance, user-centric web experiences with clean architecture.
        </p>

        {/* STATS (kept but slightly refined wording) */}
        <div className="hero-stats">

          <div className="stat-card">
            <h3>20+</h3>
            <span>React Components Built</span>
          </div>

          <div className="stat-card">
            <h3>10+</h3>
            <span>REST APIs Integrated</span>
          </div>

          <div className="stat-card">
            <h3>200+</h3>
            <span>DSA Problems Solved</span>
          </div>

        </div>

        {/* BUTTONS */}
        <div className="home-buttons">

          <a
            href="/Surendra_Kumar_Res.pdf"
            className="btn primary-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 Download Resume
          </a>

          <a
            href="https://github.com/surendaras"
            target="_blank"
            rel="noopener noreferrer"
            className="btn outline-btn"
          >
            💻 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/surendrakumar61002/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn outline-btn"
          >
            🔗 LinkedIn
          </a>

        </div>

      </div>

      {/* IMAGE SECTION */}
      <div className="home-image">
        <div className="image-glow">
          <img src={profile} alt="Surendra Kumar" />
        </div>
      </div>

    </section>
  );
}

export default Home;