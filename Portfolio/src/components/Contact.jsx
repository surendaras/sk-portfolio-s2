import "../Styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-header">
        <span className="section-tag">GET IN TOUCH</span>

        <h2>
          Let's Work <span>Together</span>
        </h2>

        <p className="contact-text">
          I'm currently open to Frontend Developer, React Developer,
          and SDE opportunities. Whether you have a project idea,
          collaboration opportunity, or just want to connect,
          I'd be happy to hear from you.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-card">
          <div className="contact-icon">📧</div>

          <h3>Email</h3>

          <p>surendrak61002@gmail.com</p>

          <a
            href="mailto:surendrak61002@gmail.com"
            className="contact-link"
          >
            Send Email →
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-icon">💻</div>

          <h3>GitHub</h3>

          <p>Explore my projects and contributions.</p>

          <a
            href="https://github.com/surendaras"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            View GitHub →
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-icon">🔗</div>

          <h3>LinkedIn</h3>

          <p>Let's connect professionally and grow together.</p>

          <a
            href="https://www.linkedin.com/in/surendrakumar61002/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            Connect on LinkedIn →
          </a>
        </div>

      </div>

      <div className="availability-card">
        <h3>🚀 Open to Opportunities</h3>

        <p>
          Actively seeking Full-Time opportunities as a Frontend Developer,
          React Developer, or Software Development Engineer (SDE).
        </p>
      </div>

    </section>
  );
}

export default Contact;