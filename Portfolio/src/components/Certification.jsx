import React from "react";
import "../Styles/Certification.css";

function Certification() {
  const certifications = [
    {
      icon: "☁️",
      title: "AWS APAC Solutions Architecture",
      issuer: "Forage",
      date: "May 2025",
      description:
        "Completed a job simulation focused on cloud architecture, solution design, and AWS best practices.",
    },
    {
      icon: "🤖",
      title: "Generative AI",
      issuer: "LinkedIn Learning",
      date: "Jan 2026",
      description:
        "Explored practical applications of Generative AI and modern AI-powered workflows.",
    },
    {
      icon: "🌐",
      title: "Cloud Computing",
      issuer: "IBM Cognitive Class",
      date: "Apr 2025",
      description:
        "Learned cloud computing fundamentals, deployment models, and cloud service concepts.",
    },
    {
      icon: "☕",
      title: "Java Bootcamp",
      issuer: "Let's Upgrade",
      date: "May 2025",
      description:
        "Strengthened Java programming concepts, OOP principles, and problem-solving skills.",
    },
    {
      icon: "🏆",
      title: "AINCAT 2026",
      issuer: "Naukri Campus",
      date: "May 2026",
      description:
        "Participated in India's biggest national-level career aptitude assessment.",
    },
  ];

  return (
    <section className="certification" id="certification">
      <div className="certification-header">
        <span className="section-tag">CERTIFICATIONS</span>

        <h2>
          Learning Never <span>Stops</span>
        </h2>

        <p className="certification-subtitle">
          Certifications and achievements that reflect my commitment to
          continuous learning and professional growth.
        </p>
      </div>

      <div className="certification-container">
        {certifications.map((cert, index) => (
          <div className="certification-card" key={index}>
            <div className="cert-icon">
              {cert.icon}
            </div>

            <span className="cert-date">
              {cert.date}
            </span>

            <h3>{cert.title}</h3>

            <h4>{cert.issuer}</h4>

            <p>{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certification;