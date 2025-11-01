import React from "react";
import { FaFacebook, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section - Brand */}
        <div className="footer-brand">
          <h2 className="brand-name">🎨 ColorLab</h2>
          <p className="brand-desc">
            Create, explore, and generate perfect color combinations for your next design.
          </p>
        </div>

        {/* Center Section - Quick Links */}
        <div className="footer-links">
          <h3 className="footer-heading">Explore</h3>
          <ul>
            {/* <li><Link to="/palette">Generate Colors</Link></li> */}
            <li><Link to="/shades">Tints & Shades</Link></li>
            <li><Link to="/gradients">Gradients</Link></li>
            <li><Link to="/price">Pricing</Link></li>
          </ul>
        </div>

        {/* Right Section - Social Media */}
        <div className="footer-social">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} <span className="brand">ColorLab</span>. All rights reserved.
        </p>
        <p className="footer-creator">
          Designed with 💙 by <span className="author">Ankit Maurya</span>
        </p>
      </div>
    </footer>
  );
}
