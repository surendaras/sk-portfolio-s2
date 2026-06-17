import React, { useState } from "react";
import "../Styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      
      {/* Logo */}
      <div className="logo">
        <span className="logo-text">Surendra</span>
        <span className="logo-highlight">Kumar</span>
      </div>

      {/* Hamburger Icon */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navbar */}
      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#certification" onClick={() => setMenuOpen(false)}>Certifications</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>

      {/* Resume Button */}
      <a
        href="/Surendra_Kumar_Res.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="header-btn"
      >
        Resume
      </a>
    </header>
  );
}

export default Header;