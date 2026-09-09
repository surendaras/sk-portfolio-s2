import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Styles/Projects.css";

import aiUiImg from "../assets/ai-ui-reviewer.jpg";
import expenseSplitterImg from "../assets/expense-splitter.jpg";
import cartifyHome from "../assets/cartify-home.png";
import workforceImg from "../assets/workforce-dashboard.png";
import codingNinjasImg from "../assets/codingninjas-clone.png";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    {
      id: "ai-ui-reviewer",
      title: "AI Website UI Reviewer",
      duration: "May 2026 – June 2026",
      category: "ai",
      badge: "✨ Featured AI Tool",
      description:
        "Full-stack automated audit engine evaluating UI/UX consistency, Accessibility (A11y), SEO, and visual hierarchy using Google Gemini API and Playwright browser automation.",
      impact: "Automated website screenshot capture, real-time DOM audits & generated actionable AI design scorecards",
      tech: ["Node.js", "React.js", "Express.js", "Playwright", "Gemini API", "REST APIs", "Tailwind CSS"],
      image: aiUiImg,
      github: "https://github.com/surendaras/ai-ui-reviewer",
      demo: "https://ai-ui-reviewer-swart.vercel.app",
      featured: true,
    },
    {
      id: "cartify",
      title: "Role-Based E-Commerce Platform (Cartify)",
      duration: "Mar 2026 – Apr 2026",
      category: "fullstack",
      badge: "MERN / Full Stack",
      description:
        "Scalable e-commerce platform with 3 distinct dashboards (Buyer, Seller, Admin) utilizing React Context API, JWT authentication, and protected routes.",
      impact: "Eliminated prop drilling & reduced re-renders by 20% while enforcing strict RBAC security",
      tech: ["React.js", "JavaScript (ES6+)", "Context API", "React Router", "Redux Toolkit", "Axios", "REST APIs"],
      image: cartifyHome,
      github: "https://github.com/surendaras/E-commerce",
      demo: "#",
      featured: false,
    },
    {
      id: "expense-splitter",
      title: "Expense Splitter (Splitwise Web App)",
      duration: "Dec 2025 – Jan 2026",
      category: "fullstack",
      badge: "Fintech & Utility",
      description:
        "Comprehensive group expense sharing and debt settlement application that simplifies calculating shared balances, multiple split types (equal, custom, percentage), and net dues.",
      impact: "Streamlined multi-party balance resolution and debt minimization calculations with an intuitive, responsive interface",
      tech: ["React.js", "JavaScript", "State Management", "Tailwind CSS", "Vercel"],
      image: expenseSplitterImg,
      github: "https://github.com/surendaras/Expenses-Splitter",
      demo: "https://expenses-splitter-sage.vercel.app/",
      featured: true,
    },
    {
      id: "coding-ninjas",
      title: "Coding Ninjas Clone",
      duration: "May 2025 – Jul 2025",
      category: "frontend",
      badge: "Frontend Architecture",
      description:
        "Pixel-perfect responsive frontend clone engineered during internship with 20+ reusable modular components and fluid UI interactions.",
      impact: "Strengthened frontend component reusability, asynchronous API handling and cross-browser compatibility",
      tech: ["React.js", "JavaScript (ES6+)", "Axios", "HTML5", "CSS3"],
      image: codingNinjasImg,
      github: "https://github.com/surendaras/coding-ninja-clone",
      demo: "#",
      featured: false,
    },
    {
      id: "workforce",
      title: "Workforce Task Automation",
      duration: "Nov 2025 – Mar 2026",
      category: "fullstack",
      badge: "Backend & Microservices",
      description:
        "Automated JIRA workflows and task tracking platform with automated task assignment and team workload balancing.",
      impact: "Reduced manual administrative workload by ~30% with structured REST API integrations",
      tech: ["Node.js / Java", "REST APIs", "MySQL", "Docker"],
      image: workforceImg,
      github: "https://github.com/surendaras/task-management-platform",
      demo: "#",
      featured: false,
    },
  ];

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "ai", label: "🤖 AI & Innovation" },
    { key: "fullstack", label: "💻 Full Stack & MERN" },
    { key: "frontend", label: "⚛️ Frontend" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <span className="tag">FEATURED WORK</span>
        <h2>
          My <span>Projects</span>
        </h2>
        <p>
          Real-world applications combining intuitive user interfaces with robust backend architectures and AI capabilities.
        </p>

        {/* Category Filter Tabs */}
        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`filter-btn ${activeCategory === cat.key ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="projects-grid">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={`project-card ${project.featured ? "featured-card" : ""}`}
              whileHover={{ y: -8 }}
            >
              <div className="image-wrapper">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="overlay"></div>
                {project.badge && (
                  <span className="project-card-badge">{project.badge}</span>
                )}
              </div>

              <div className="content">
                <div className="card-top-meta">
                  <span className="duration">{project.duration}</span>
                </div>

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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn code-btn"
                  >
                    <span>💻 GitHub</span>
                  </a>
                  {project.demo !== "#" ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn live-btn"
                    >
                      <span>🚀 Live Demo</span>
                    </a>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn outline"
                    >
                      <span>📂 Details</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Projects;