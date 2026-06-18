import React from "react";
import "../Styles/About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-content">

        <div className="section-tag">ABOUT ME</div>

        <h2>
          Turning Ideas into <span>Scalable Digital Solutions</span>
        </h2>

        <p className="about-intro">
          I'm <strong>Surendra Kumar</strong>, a Computer Science Engineering student (2026 batch)
          focused on building scalable full-stack applications using React.js, Java, and Spring Boot.
          I enjoy creating clean, responsive, and high-performance web experiences.
        </p>

        <p>
          I specialize in <strong>React.js, JavaScript, Java, Spring Boot, REST APIs, MySQL, HTML, CSS, and Tailwind CSS</strong>.
          My focus is on writing clean architecture, reusable components, and scalable backend systems.
        </p>

        <p>
          I have built projects like <strong>Role-Based E-Commerce Platform</strong> and
          <strong> Workforce Task Automation System</strong>, where I worked on authentication (JWT),
          REST API integration, state management, and database design.
        </p>

        <p>
          I am actively seeking opportunities as a <strong>Frontend Developer, React Developer,
          or Software Development Engineer (SDE)</strong> where I can contribute and grow in real-world systems.
        </p>

        <div className="about-info">

          <div className="info-card">
            <span>Name</span>
            <h4>Surendra Kumar</h4>
          </div>

          <div className="info-card">
            <span>Role</span>
            <h4>Frontend & Java Full Stack Developer</h4>
          </div>

          <div className="info-card">
            <span>Education</span>
            <h4>B.Tech (CSE)</h4>
            <p>AKTU University</p>
          </div>

          <div className="info-card">
            <span>Location</span>
            <h4>Noida, Uttar Pradesh</h4>
          </div>

        </div>

        <div className="about-stats">

          <div className="stat-box">
            <h3>20+</h3>
            <span>React Components</span>
          </div>

          <div className="stat-box">
            <h3>2+</h3>
            <span>Full-Stack Projects</span>
          </div>

          <div className="stat-box">
            <h3>200+</h3>
            <span>DSA Problems Solved</span>
          </div>

          <div className="stat-box">
            <h3>2026</h3>
            <span>Graduate Year</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;