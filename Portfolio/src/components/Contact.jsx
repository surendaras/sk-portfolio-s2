import "../Styles/Contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [toast, setToast] = useState({
    show: false,
    type: "",
    text: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const showToast = (type, text) => {
    setToast({
      show: true,
      type,
      text,
    });

    setTimeout(() => {
      setToast({
        show: false,
        type: "",
        text: "",
      });
    }, 3000);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      showToast("error", "Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC
      );

      setForm({
        name: "",
        email: "",
        message: "",
      });

      showToast(
        "success",
        "Message sent successfully 🚀"
      );

    } catch (error) {
      console.log(error);

      showToast(
        "error",
        "Failed to send message."
      );
    }

    setLoading(false);
  };

  return (
    <section
      className="contact"
      id="contact"
    >

      <div className="contact-header">

        <span className="section-tag">
          GET IN TOUCH
        </span>

        <h2>
          Let's Work <span>Together</span>
        </h2>

        <p className="contact-text">
          I'm currently open to Frontend
          Developer, React Developer,
          and SDE opportunities.
        </p>

      </div>

      <div className="contact-container">

        <div className="contact-card">

          <div className="contact-icon">
            📧
          </div>

          <h3>Email</h3>

          <p>
            surendrak61002@gmail.com
          </p>

          <a
            href="mailto:surendrak61002@gmail.com"
            className="contact-link"
          >
            Send Email →
          </a>

        </div>

        <div className="contact-card">

          <div className="contact-icon">
            💻
          </div>

          <h3>GitHub</h3>

          <p>
            Explore my projects
          </p>

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

          <div className="contact-icon">
            🔗
          </div>

          <h3>LinkedIn</h3>

          <p>
            Connect professionally
          </p>

          <a
            href="https://www.linkedin.com/in/surendrakumar61002"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            Connect →
          </a>

        </div>

      </div>

      <form
        className="contact-form"
        onSubmit={sendEmail}
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          rows="6"
          name="message"
          placeholder="Write your message..."
          value={form.message}
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={loading}
        >
          {
            loading
              ? "Sending..."
              : "Send Message"
          }
        </button>

      </form>

      {
        toast.show && (
          <div
            className={`toast ${toast.type}`}
          >
            {toast.text}
          </div>
        )
      }

      <div className="availability-card">

        <h3>
          🚀 Open to Opportunities
        </h3>

        <p>
          Actively seeking Full-Time
          opportunities as Frontend
          Developer, React Developer,
          or Software Development
          Engineer.
        </p>

      </div>

    </section>
  );
}

export default Contact;