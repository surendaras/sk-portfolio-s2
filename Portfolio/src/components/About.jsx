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
          I'm <strong>Surendra Kumar</strong>, a Computer Science Engineering
          student graduating in 2026 and an aspiring Frontend & Java Full Stack
          Developer. I enjoy building modern, responsive, and high-performance
          web applications that deliver exceptional user experiences.
        </p>

        <p>
          My expertise includes <strong>React.js, JavaScript, Java,
          Spring Boot, MySQL, HTML, CSS, and Tailwind CSS</strong>. I focus on
          writing clean, maintainable code and developing solutions that are
          both scalable and user-centric.
        </p>

        <p>
          Through projects like a <strong>Role-Based E-Commerce Platform</strong>
          and a <strong>Workforce Task Automation System</strong>, I gained
          hands-on experience in REST API integration, authentication,
          state management, database design, and full-stack development.
        </p>

        <p>
          I am actively seeking opportunities as a <strong>Frontend Developer,
          React Developer, or Software Development Engineer (SDE)</strong> to
          contribute, learn, and grow while building impactful products.
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
            <p>Dr. A.P.J. Abdul Kalam Technical University (AKTU)</p>
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