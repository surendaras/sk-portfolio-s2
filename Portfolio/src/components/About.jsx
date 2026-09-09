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
          I'm <strong>Surendra Kumar</strong>, a Computer Science Engineering graduate (2026 batch)
          with hands-on industry experience building scalable web applications, real-time cloud data pipelines, and intelligent AI tools using the MERN stack and Firebase ecosystem.
        </p>

        {/* Human Philosophy Quote Box */}
        <div className="about-philosophy-card">
          <div className="philosophy-icon">💡</div>
          <div className="philosophy-text">
            <h4>My Engineering Philosophy</h4>
            <p>
              "Great software balances speed, simplicity, and user empathy. Whether optimizing an event-driven Firebase Cloud Function,
              building 60fps responsive React dashboards, or calculating split balances—I care about clean architecture and reliable execution."
            </p>
          </div>
        </div>

        <p>
          I specialize in <strong>React.js, JavaScript (ES6+), Node.js, Express.js, Firebase Cloud Functions, Firestore, Redux, REST APIs, HTML5, CSS3, Tailwind CSS, and Material UI</strong>.
          I thrive on engineering scalable backend services, optimizing production APIs, and building modular frontend architectures.
        </p>

        <p>
          Currently, as a <strong>Software Developer Intern at SMART CHAKKII</strong>, I build backend services with Node.js & Firebase Cloud Functions,
          synchronizing Firestore real-time databases and maintaining production REST APIs. Previously at <strong>CODEXINTERN</strong>, I engineered 20+ reusable React components.
        </p>

        <p>
          I have built featured projects including <strong>AI Website UI Reviewer</strong> (automated Playwright & Gemini AI audits),
          <strong>Expense Splitter</strong> (Splitwise application for group expense calculation), and a <strong>Role-Based E-Commerce Platform</strong> with JWT authentication.
        </p>

        <div className="about-info">
          <div className="info-card">
            <span>Name</span>
            <h4>Surendra Kumar</h4>
          </div>

          <div className="info-card">
            <span>Role</span>
            <h4>Frontend & MERN Full Stack Developer</h4>
          </div>

          <div className="info-card">
            <span>Education</span>
            <h4>B.Tech (CSE) — CGPA: 7.5/10</h4>
            <p>MGM College of Engineering & Tech, Noida</p>
          </div>

          <div className="info-card">
            <span>Location</span>
            <h4>Noida, Uttar Pradesh</h4>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-box">
            <h3>2+</h3>
            <span>Internships Done</span>
          </div>

          <div className="stat-box">
            <h3>20+</h3>
            <span>React Components</span>
          </div>

          <div className="stat-box">
            <h3>8+</h3>
            <span>Production APIs</span>
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