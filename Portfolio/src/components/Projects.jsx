import React from "react";
import { motion } from "framer-motion";
import "../Styles/Projects.css";

import cartifyHome from "../assets/cartify-home.png";
import workforceImg from "../assets/workforce-dashboard.png";
import codingNinjasImg from "../assets/codingninjas-clone.png";

function Projects() {
  const projects = [
    {
      title: "Role-Based E-Commerce Platform",
      duration: "Mar 2026 – Apr 2026",
      description:
        "Built a scalable full-stack e-commerce platform with role-based dashboards, secure authentication, and optimized state management.",
      impact: "Improved UX with secure RBAC system and responsive UI",
      tech: ["React", "Context API", "JWT", "REST APIs"],
      image: cartifyHome,
      github: "#",
      demo: "#",
    },
    {
      title: "Workforce Task Automation",
      duration: "Nov 2025 – Mar 2026",
      description:
        "Automated JIRA workflows using Spring Boot microservices for task tracking and assignment.",
      impact: "Reduced manual workload by ~30%",
      tech: ["Java", "Spring Boot", "MySQL", "Docker"],
      image: workforceImg,
      github: "#",
      demo: "#",
    },
    {
      title: "Coding Ninjas Clone",
      duration: "Jun 2025",
      description:
        "Pixel-perfect responsive frontend clone with reusable components and smooth UI interactions.",
      impact: "Strengthened frontend architecture skills",
      tech: ["HTML", "CSS", "JavaScript"],
      image: codingNinjasImg,
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <span className="tag">FEATURED WORK</span>
        <h2>
          My <span>Projects</span>
        </h2>
        <p>
          A selection of full-stack and frontend projects built with modern technologies.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ scale: 1.03, rotateX: 3, rotateY: 3 }}
            transition={{ duration: 0.3 }}
          >
            <div className="image-wrapper">
              <img src={project.image} alt={project.title} />
              <div className="overlay"></div>
            </div>

            <div className="content">
              <span className="duration">{project.duration}</span>

              <h3>{project.title}</h3>

              <p className="desc">{project.description}</p>

              <p className="impact">
                <strong>Impact:</strong> {project.impact}
              </p>

              <div className="tech">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              <div className="buttons">
                <a href={project.github} target="_blank">GitHub</a>
                <a href={project.demo} target="_blank" className="outline">
                  Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;