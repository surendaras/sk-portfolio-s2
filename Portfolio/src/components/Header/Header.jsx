import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(scroll);

      // Header shadow/blur on scroll
      setIsScrolled(window.scrollY > 40);

      // Active section detection
      const sections = ["home", "about", "experience", "skills", "projects", "certification", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", id: "home", label: "Home" },
    { href: "#about", id: "about", label: "About" },
    { href: "#experience", id: "experience", label: "Experience" },
    { href: "#skills", id: "skills", label: "Skills" },
    { href: "#projects", id: "projects", label: "Projects" },
    { href: "#certification", id: "certification", label: "Certifications" },
    { href: "#contact", id: "contact", label: "Contact" },
  ];

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      {/* Scroll Progress Bar at the very top */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Logo */}
      <a href="#home" className="logo" style={{ textDecoration: "none" }}>
        <span className="logo-text">Surendra</span>
        <span className="logo-highlight">Kumar</span>
      </a>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navbar */}
      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={activeSection === link.id ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Resume Button */}
      <a
        href="/Surendra_Kumar_Res.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="header-btn"
      >
        <span>📄 Resume</span>
      </a>
    </header>
  );
}

export default Header;