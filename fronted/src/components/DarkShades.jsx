import React, { useState } from "react";
import "./styles/DarkShades.css";

const DarkShades = () => {
  const darkColors = [
  { name: "Black", base: "#000000" },
    { name: "Gray", base: "#1F2937" },
    { name: "Navy", base: "#1E3A8A" },
    { name: "Maroon", base: "#7F1D1D" },
    { name: "Teal", base: "#115E59" },
    { name: "Purple", base: "#4C1D95" },
    { name: "Brown", base: "#4E342E" },
    { name: "Slate", base: "#0F172A" },
    { name: "Olive", base: "#3D3D00" },
    { name: "Dark Cyan", base: "#164E63" },
    { name: "Deep Blue", base: "#0A2472" },
    { name: "Midnight", base: "#191970" },
    { name: "Forest Green", base: "#064E3B" },
    { name: "Dark Violet", base: "#3C1361" },
    { name: "Crimson", base: "#4B0000" },
    { name: "Dark Gold", base: "#4B3F00" },
    { name: "Steel", base: "#2C3E50" },
    { name: "Charcoal", base: "#232323" },
    { name: "Dark Indigo", base: "#2E1065" },
    { name: "Dark Magenta", base: "#5B0A91" },

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
      <h1 className="darkshades-title">🖤 Dark Color Shades</h1>

      <div className="darkshades-grid">
        {darkColors.map((color, idx) => (
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

export default DarkShades;
