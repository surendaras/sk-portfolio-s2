import React from "react";
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
        "Architected a multi-role marketplace with dedicated Buyer, Seller, and Admin dashboards. Implemented JWT-based authentication, protected routes, and React Context API for scalable state management while delivering a fully responsive user experience.",
      highlights: [
        "3 Role-Based Dashboards",
        "JWT Authentication & RBAC",
        "15+ Reusable Components",
        "Responsive Design",
      ],
      tech: [
        "React.js",
        "Vite",
        "JavaScript",
        "Context API",
        "REST APIs",
        "Git",
      ],
      image: cartifyHome,
      github: "https://github.com/surendaras/E-commerce",
      demo: "#",
    },
    {
      title: "Work Force Task Automation",
      duration: "Nov 2025 – Mar 2026",
      description:
        "Developed backend microservices to automate JIRA workflows including issue categorization, status updates, and team assignments. Reduced manual reporting effort and improved operational efficiency.",
      highlights: [
        "JIRA Integration",
        "30% Efficiency Improvement",
        "Microservices Architecture",
        "Sub-100ms Queries",
      ],
      tech: [
        "Java",
        "Spring Boot",
        "MySQL",
        "REST APIs",
        "JIRA",
        "Docker",
      ],
      image: workforceImg,
      github: "https://github.com/surendaras/WFTA",
      demo: "#",
    },
    {
      title: "Coding Ninjas Clone",
      duration: "Jun 2025",
      description:
        "Built a pixel-perfect responsive clone during internship experience, focusing on UI accuracy, reusable components, and interactive user experiences.",
      highlights: [
        "Pixel Perfect UI",
        "Responsive Layout",
        "Interactive Components",
        "Modern Frontend",
      ],
      tech: [
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
      image: codingNinjasImg,
      github: "https://github.com/surendaras/coding-ninja-clone",
      demo: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <span className="section-tag">MY WORK</span>

        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <p className="projects-subtitle">
          Projects that demonstrate my ability to design responsive interfaces,
          build scalable applications, and solve real-world problems through
          clean and efficient code.
        </p>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            {project.image && (
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>
            )}

            <div className="project-content">

              <span className="project-duration">
                {project.duration}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-highlights">
                {project.highlights.map((item, i) => (
                  <span key={i}>
                    ✓ {item}
                  </span>
                ))}
              </div>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  View Code
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn outline"
                >
                  Live Demo
                </a>

              </div>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;