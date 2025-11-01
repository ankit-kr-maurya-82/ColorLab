import React from "react";
import "./styles/About.css";
// import { Palette, Droplet, Copy } from "lucide-react"; // 🎨 icons

export default function About() {
  const features = [
    {
      // icon: </Palette size={36} />,
      title: "Generate Color Palettes",
      desc: "Instantly create beautiful color palettes for your projects — randomize or customize them easily.",
    },
    {
      // icon: <Gradient size={36} />,
      title: "Create Smooth Gradients",
      desc: "Design stunning linear and radial gradients that make your UI shine and stand out.",
    },
    {
      // icon: <Droplet size={36} />,
      title: "Explore Shades & Tints",
      desc: "View lighter and darker variations of any color to build depth and contrast into your design.",
    },
    {
      // icon: <Copy size={36} />,
      title: "One-Click Copy",
      desc: "Quickly copy HEX, RGB, or gradient codes directly to your clipboard for use anywhere.",
    },
  ];

  return (
    <div className="about-container">
      {/* 🔹 Header Section */}
      <h1 className="about-title">About ColorLab</h1>

      <p className="about-text">
        <strong>ColorLab</strong> is your creative studio for discovering, generating, and experimenting with 
        <span className="highlight color"> colors</span>, 
        <span className="highlight gradient"> gradients</span>, and 
        <span className="highlight shade"> shades</span>.  
        It’s built for designers, developers, and color lovers who want perfect visual harmony.
      </p>

      <p className="about-text">
        From creating brand color palettes to generating modern gradient backgrounds, 
        ColorLab helps you do it all — with precision and simplicity.
      </p>

      {/* 🌈 Features Section */}
      <section className="features-section">
        <h2 className="features-title">✨ Key Features</h2>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <a href="/shades" className="about-btn">
        🎨 Explore Palettes →
      </a>
    </div>
  );
}
