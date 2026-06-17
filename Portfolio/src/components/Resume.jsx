import "../Styles/Resume.css";

function Resume() {
  return (
    <section className="resume" id="resume">
      <div className="resume-container">

        <span className="section-tag">MY RESUME</span>

        <h2>
          Let's Build Something <span>Amazing Together</span>
        </h2>

        <p className="resume-description">
          Interested in my experience and technical expertise?
          Download my resume to explore my projects, internship experience,
          technical skills, certifications, and achievements in detail.
        </p>

        <div className="resume-highlights">
          <div className="highlight-card">
            <h3>2026</h3>
            <span>B.Tech CSE Graduate</span>
          </div>

          <div className="highlight-card">
            <h3>20+</h3>
            <span>React Components</span>
          </div>

          <div className="highlight-card">
            <h3>2+</h3>
            <span>Major Projects</span>
          </div>

          <div className="highlight-card">
            <h3>200+</h3>
            <span>DSA Problems Solved</span>
          </div>
        </div>

        <div className="resume-buttons">
          <a
            href="/Surendra_Kumar_Res.pdf"
            download
            className="resume-btn"
          >
            📄 Download Resume
          </a>

          <a
            href="/Surendra_Kumar_Res.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn outline"
          >
            👀 View Resume
          </a>
        </div>

      </div>
    </section>
  );
}

export default Resume;