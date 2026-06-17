import "../Styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">
          <h3>
            Surendra <span>Kumar</span>
          </h3>

          <p>
            Frontend Developer & Java Full Stack Developer passionate about
            building scalable, user-centric, and impactful digital solutions.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <h4>Connect</h4>

          <a
            href="mailto:surendrak61002@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            📧 Email
          </a>

          <a
            href="https://github.com/surendaras"
            target="_blank"
            rel="noreferrer"
          >
            💻 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/surendrakumar61002/"
            target="_blank"
            rel="noreferrer"
          >
            🔗 LinkedIn
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Surendra Kumar. All Rights Reserved.
        </p>

        
      </div>

    </footer>
  );
}

export default Footer;