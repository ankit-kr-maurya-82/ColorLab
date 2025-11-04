import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css"; // External CSS file

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <h1 className="logo">🎨 ColorLab</h1>

      {/* Hamburger menu (for mobile) */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Palettes
        </Link>
        <Link to="/gradients" onClick={() => setMenuOpen(false)}>
          Gradients
        </Link>

        {/* Dropdown for Shades */}
        <div
          className="dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="dropdown-btn">
            Shades ▾
          </button>

          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/shades/dark">Dark Shades</Link>
              <Link to="/shades/light">Light Shades</Link>
              <Link to="/shades/two-colors">Two-Color Shades</Link>
              <Link to="/shades/multi-shades">Multi Shades</Link>
            </div>
          )}
        </div>

        <Link to="/price" onClick={() => setMenuOpen(false)}>
          Price
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>
      </div>
    </nav>
  );
}
