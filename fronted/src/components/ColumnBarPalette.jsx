import React, { useState } from "react";
import "./styles/ColumnBarPalette.css";
import { Link } from "react-router-dom";

export default function ColumnBarPalette() {
  const colorFamilies = [
  { name: "Black", base: "#000000" },
  { name: "Gray", base: "#1F2937" },    // dark gray
  { name: "Slate", base: "#0F172A" },   // dark slate
  { name: "Red", base: "#7F1D1D" },     // dark red
  { name: "Orange", base: "#9A3412" },  // dark orange
  // { name: "Amber", base: "#92400E" },   // dark amber
  // { name: "Yellow", base: "#854D0E" },  // deep golden yellow
  // { name: "Lime", base: "#365314" },    // dark lime green
  // { name: "Green", base: "#065F46" },   // dark emerald
  // { name: "Teal", base: "#115E59" },    // dark teal
  // { name: "Cyan", base: "#164E63" },    // dark cyan
  { name: "Blue", base: "#1E3A8A" },    // dark blue
  // { name: "Indigo", base: "#312E81" },  // dark indigo
  { name: "Purple", base: "#5B21B6" },  // dark purple
  // { name: "Pink", base: "#9D174D" },    // dark pink
  // { name: "Rose", base: "#881337" },    // dark rose
  { name: "Brown", base: "#4E342E" }    // dark brown
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
        <Link to="/shades/dark">
        <h1 className="palette-head">🎨 Dark Color Shade Palettes</h1>
        </Link>

        <div className="palette-grid">
          {colorFamilies.map((family, idx) => (
            <div key={idx} className="palette-card">
              <h2 className="palette-title">{family.name}</h2>
              <div className="palette-shades-columns">
                {generateScale(family.base, 6).map((color, i) => (
                  <div
                    key={i}
                    className="shades"
                    style={{ backgroundColor: color }}
                    onClick={() => copyColor(color)}
                  >
                    <span
                      className="shades-label"
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
