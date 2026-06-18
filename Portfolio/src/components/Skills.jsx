import React from "react";
import "../Styles/Skills.css";

function Skills() {
  const skillCategories = [
    {
      icon: "⚛️",
      title: "Frontend Development",
      description:
        "Building responsive, scalable, and interactive user interfaces with modern React ecosystem.",
      skills: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Material UI",
      ],
    },
    {
      icon: "☕",
      title: "Backend Development",
      description:
        "Designing secure, scalable REST APIs and backend systems using Java & Spring Boot.",
      skills: ["Java", "Spring Boot", "REST APIs", "JWT Authentication"],
    },
    {
      icon: "🛠️",
      title: "Database & Tools",
      description:
        "Working with databases and developer tools to build efficient workflows.",
      skills: ["MySQL", "Git", "GitHub", "Postman", "Docker"],
    },
    {
      icon: "🧠",
      title: "Computer Science Fundamentals",
      description:
        "Strong foundation in problem-solving and core CS concepts.",
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
          Technologies, tools, and problem-solving abilities that help me build
          scalable, production-ready web applications.
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
          <h3>200+</h3>
          <span>DSA Problems Solved</span>
        </div>

        <div>
          <h3>2+</h3>
          <span>Full-Stack Projects</span>
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