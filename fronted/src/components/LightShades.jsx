import React, { useState } from "react";
import "./styles/DarkShades.css";

const LightShades = () => {
  const lightColors = [
    { name: "White", base: "#FFFFFF" },
    { name: "Light Gray", base: "#E5E7EB" },
    { name: "Sky Blue", base: "#93C5FD" },
    { name: "Peach", base: "#FBCFE8" },
    { name: "Mint", base: "#A7F3D0" },
    { name: "Lavender", base: "#DDD6FE" },
    { name: "Lemon", base: "#FEF9C3" },
    { name: "Baby Pink", base: "#F9A8D4" },
    { name: "Powder Blue", base: "#BFDBFE" },
    { name: "Soft Green", base: "#BBF7D0" },
    { name: "Coral", base: "#FDBA74" },
    { name: "Pastel Yellow", base: "#FEF08A" },
    { name: "Pale Purple", base: "#E9D5FF" },
    { name: "Aqua", base: "#A5F3FC" },
    { name: "Cream", base: "#FFF7ED" },
    { name: "Light Rose", base: "#FECDD3" },
    { name: "Pale Orange", base: "#FED7AA" },
    { name: "Ivory", base: "#FFFFF0" },
    { name: "Soft Violet", base: "#E0E7FF" },
    { name: "Powder Mint", base: "#CCFBF1" },
  ];

  const hexToRgb = (hex) => {
    const h = hex.replace("#", "");
    return [
      parseInt(h.slice(0, 2), 16),
      parseInt(h.slice(2, 4), 16),
      parseInt(h.slice(4, 6), 16),
    ];
  };

  const rgbToHex = (r, g, b) =>
    "#" +
    [r, g, b]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase();

  const generateDarkShades = (hex, count) => {
    const [r, g, b] = hexToRgb(hex);
    const shades = [];
    for (let i = 0; i < count; i++) {
      const factor = 1 - i * 0.1;
      const newR = Math.round(r * factor);
      const newG = Math.round(g * factor);
      const newB = Math.round(b * factor);
      shades.push(rgbToHex(newR, newG, newB));
    }
    return shades;
  };

  const [copied, setCopied] = useState(null);

  const copyColor = (color) => {
    navigator.clipboard.writeText(color);
    setCopied(color);
    setTimeout(() => setCopied(null), 1000);
  };

  return (
    <section className="darkshades-container">
      <h1 className="darkshades-title">🌤️ Light Color Shades</h1>

      <div className="darkshades-grid">
        {lightColors.map((color, idx) => (
          <div key={idx} className="darkshades-card">
            <h2 className="darkshades-name">{color.name}</h2>
            <div className="darkshades-row">
              {generateDarkShades(color.base, 6).map((shade, i) => (
                <div
                  key={i}
                  className="shade-box"
                  style={{ backgroundColor: shade }}
                  onClick={() => copyColor(shade)}
                >
                  <span className="shade-label">
                    {copied === shade ? "Copied!" : shade}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LightShades;
