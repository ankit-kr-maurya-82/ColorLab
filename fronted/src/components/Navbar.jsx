// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <span className="logo-emoji">🎨</span>
          <span className="logo-text">ColorLab</span>
        </Link>

        {/* Hamburger menu (for mobile) */}
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
            Palettes
          </Link>
          
          <Link to="/gradients" className="nav-link" onClick={() => setMenuOpen(false)}>
            Gradients
          </Link>

          {/* Dropdown for Shades */}
          <div
            className="dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="dropdown-btn nav-link">
              Shades
              <span className={`dropdown-arrow ${isDropdownOpen ? "active" : ""}`}>▾</span>
            </button>

            <div className={`dropdown-menu ${isDropdownOpen ? "active" : ""}`}>
              <Link to="/shades/dark" className="dropdown-item" onClick={() => setMenuOpen(false)}>
                <span className="dropdown-icon">🌑</span>
                Dark Shades
              </Link>
              <Link to="/shades/light" className="dropdown-item" onClick={() => setMenuOpen(false)}>
                <span className="dropdown-icon">☀️</span>
                Light Shades
              </Link>
              <Link to="/shades/two-colors" className="dropdown-item" onClick={() => setMenuOpen(false)}>
                <span className="dropdown-icon">🎭</span>
                Two-Color Shades
              </Link>
              <Link to="/shades/multi-shades" className="dropdown-item" onClick={() => setMenuOpen(false)}>
                <span className="dropdown-icon">🌈</span>
                Multi Shades
              </Link>
            </div>
          </div>

          <Link to="/price" className="nav-link" onClick={() => setMenuOpen(false)}>
            Price
          </Link>
          
          <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}