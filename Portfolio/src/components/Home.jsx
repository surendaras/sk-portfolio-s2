import React from "react";
import "../Styles/Home.css";
import profile from "../assets/profile.png";

function Home() {
  return (
    <section className="home" id="home">

      <div className="home-content">

        <div className="hero-badge">
          <a href="#contact">
            <span className="badge-dot"></span>
            Open to Frontend & SDE Opportunities
          </a>
        </div>

        <p className="greeting">👋 Hello, I'm</p>

        <h1>Surendra Kumar</h1>

        <h2>
          Frontend Developer &
          <span> Java Full Stack Developer</span>
        </h2>

        <p className="home-description">
          B.Tech CSE (2026) student with hands-on experience in React.js,
          Java, and Spring Boot. Passionate about building responsive web
          applications, integrating REST APIs, and developing scalable
          solutions that deliver exceptional user experiences.
        </p>

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
            <span>LeetCode Problems Solved</span>
          </div>
        </div>

        <div className="home-buttons">
          <a
            href="/Surendra_Kumar_Res.pdf"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 Download Resume
          </a>

          <a
            href="https://github.com/surendaras"
            target="_blank"
            rel="noopener noreferrer"
            className="btn outline"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/surendrakumar61002/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn outline"
          >
            LinkedIn
          </a>
        </div>

      </div>

      <div className="home-image">
        <img src={profile} alt="Surendra Kumar" />
      </div>

    </section>
  );
}

export default Home;