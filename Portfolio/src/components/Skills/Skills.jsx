import React from "react";
import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      icon: "⚛️",
      title: "Frontend Development",
      description:
        "Building responsive, component-driven, and intuitive user interfaces with modern React ecosystem.",
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "Redux",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Material UI",
      ],
    },
    {
      icon: "🚀",
      title: "Backend & Cloud Services",
      description:
        "Architecting backend services, event-driven cloud functions, and production REST APIs with Node.js & Firebase.",
      skills: [
        "Node.js",
        "Express.js",
        "Firebase Cloud Functions",
        "REST APIs",
        "Error Handling & Logging",
      ],
    },
    {
      icon: "🤖",
      title: "AI & Automation",
      description:
        "Integrating intelligent LLM APIs and headless browser automation pipelines into web applications.",
      skills: [
        "OpenAI API",
        "Google Gemini API",
        "Playwright",
        "Prompt Engineering",
        "AI Workflow Integration",
      ],
    },
    {
      icon: "🛠️",
      title: "Database & Developer Tools",
      description:
        "Managing data consistency, version control, API testing, and agile team workflows.",
      skills: [
        "Firestore",
        "MySQL",
        "Git",
        "GitHub",
        "Postman",
        "JIRA",
      ],
    },
    {
      icon: "🧠",
      title: "Computer Science Fundamentals",
      description:
        "Strong foundation in core computing principles, system design, and algorithmic problem-solving.",
      skills: ["DSA", "OOP", "DBMS", "Computer Networks", "System Design"],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <span className="section-tag">MY EXPERTISE</span>
        <h2 className="section-title">
          Technical <span>Skills</span>
        </h2>
        <p className="skills-subtitle">
          Technologies, cloud services, and tools I use to build production-ready full-stack applications and automated AI systems.
        </p>
      </div>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div className="skills-card" key={index}>
            <div className="card-icon">{category.icon}</div>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-highlight">
        <div>
          <h3>2+</h3>
          <span>Internships Done</span>
        </div>

        <div>
          <h3>20+</h3>
          <span>React Components</span>
        </div>

        <div>
          <h3>8+</h3>
          <span>Production APIs</span>
        </div>

        <div>
          <h3>2026</h3>
          <span>Graduate Year</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;