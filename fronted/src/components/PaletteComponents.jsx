import React, { useState } from "react";
import "./styles/PaletteComponents.css";
import { Link } from "react-router-dom";

export default function PaletteComponents() {
  const colorFamilies = [
    { name: "Red", base: "#EF4444" },
    { name: "Orange", base: "#F97316" },
    { name: "Yellow", base: "#FACC15" },
    { name: "Green", base: "#22C55E" },
    { name: "Blue", base: "#3B82F6" },
    { name: "Purple", base: "#8B5CF6" },
    { name: "Pink", base: "#EC4899" },
    { name: "Teal", base: "#14B8A6" },
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

  const generateScale = (hex, n) => {
    const [r, g, b] = hexToRgb(hex);
    const colors = [];
    for (let i = 0; i < n; i++) {
      const t = i / (n - 1);
      const newR = Math.round(r + (255 - r) * t * 0.8);
      const newG = Math.round(g + (255 - g) * t * 0.8);
      const newB = Math.round(b + (255 - b) * t * 0.8);
      colors.push(rgbToHex(newR, newG, newB));
    }
    return colors;
  };

  const [copied, setCopied] = useState(null);

  const copyColor = (color) => {
    navigator.clipboard.writeText(color);
    setCopied(color);
    setTimeout(() => setCopied(null), 1000);
  };

  return (
    <>
      <section className="palette-container">
        <Link to="/shades/light">
        <h1 className="palette-head">🎨 Light Color Shade Palettes</h1>
        </Link>

        <div className="palette-grid">
          {colorFamilies.map((family, idx) => (
            <div key={idx} className="palette-card">
              <h2 className="palette-title">{family.name}</h2>
              <div className="palette-shades">
                {generateScale(family.base, 6).map((color, i) => (
                  <div
                    key={i}
                    className="shade"
                    style={{ backgroundColor: color }}
                    onClick={() => copyColor(color)}
                  >
                    <span
                      className="shade-label"
                      style={{ mixBlendMode: "difference" }}
                    >
                      {copied === color ? "Copied!" : color}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
