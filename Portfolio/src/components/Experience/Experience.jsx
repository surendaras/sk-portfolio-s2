import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      company: "SMART CHAKKII",
      role: "Software Developer Intern",
      period: "July 2026 – Present",
      location: "Remote / Hybrid",
      current: true,
      points: [
        "Architecting and developing scalable backend services with Node.js, React.js, Firebase Cloud Functions, and Firestore to automate end-to-end business workflows.",
        "Implemented real-time data synchronization across Firestore databases using event-driven Cloud Functions, ensuring sub-second data consistency.",
        "Engineered and optimized 8+ production REST APIs with structured error handling, request validation, and centralized logging to boost uptime and reliability.",
      ],
      skills: ["Node.js", "React.js", "Firebase Cloud Functions", "Firestore", "REST APIs", "Git & GitHub"],
    },
    {
      company: "CODEXINTERN",
      role: "Front-End Developer Intern",
      period: "May 2025 – Jul 2025",
      location: "Remote",
      current: false,
      points: [
        "Engineered 20+ reusable, modular React.js components utilizing modern React Hooks, accelerating feature development velocity across the team.",
        "Integrated 10+ RESTful APIs with Axios, managing complex asynchronous states, request caching, and user-friendly error boundaries.",
        "Built a pixel-perfect, fully responsive Coding Ninjas platform clone using React.js, ES6+, and CSS3, guaranteeing seamless cross-browser performance.",
      ],
      skills: ["React.js", "JavaScript (ES6+)", "Axios", "REST APIs", "HTML5 & CSS3"],
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-header">
        <span className="section-tag">WORK HISTORY</span>
        <h2>
          Work <span>Experience</span>
        </h2>
        <p className="experience-subtitle">
          Real-world engineering internships where I built production backend services, optimized APIs, and delivered high-performance frontend interfaces.
        </p>
      </div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${exp.current ? "current-item" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.15 }}
          >
            {/* Timeline node & line */}
            <div className="timeline-marker">
              <div className="marker-dot">
                {exp.current && <span className="marker-pulse"></span>}
              </div>
            </div>

            {/* Timeline content card */}
            <div className="timeline-card">
              <div className="card-top">
                <div>
                  <div className="company-badge-row">
                    <h3 className="company-name">{exp.company}</h3>
                    {exp.current && <span className="active-chip">Active Role</span>}
                  </div>
                  <h4 className="role-title">{exp.role}</h4>
                </div>
                <div className="period-badge">
                  <span>📅 {exp.period}</span>
                </div>
              </div>

              <ul className="experience-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="experience-skills">
                {exp.skills.map((skill, sIndex) => (
                  <span key={sIndex} className="exp-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
