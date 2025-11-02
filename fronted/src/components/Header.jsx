import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {
  return (
    <header className="header-section">
      <h1 className="welcome-head">
        Welcome to <span className="highlight">ColorLab</span>
      </h1>

      <p className="header-text">
        Create stunning color palettes with ease. Generate, lock, and copy colors — 
        all in one place. Press <span className="key">Space</span> to randomize your palette!
      </p>

      <Link to="/shades" className="header-btn">
        🎨 Generate New Palette
      </Link>
    </header>
  );
};

export default Header;
