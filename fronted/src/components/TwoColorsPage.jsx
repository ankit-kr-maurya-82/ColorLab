import React, { useState } from "react";
import "./styles/TwoColorsPage.css";

const TwoColorsPage = () => {
  const [copied, setCopied] = useState(null);

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

  const copyColor = (color) => {
    navigator.clipboard.writeText(color);
    setCopied(color);
    setTimeout(() => setCopied(null), 1000);
  };

  const colorPairs = [
        { name: "Black & Blue", first: "#000000", second: "#1E3A8A" },
    { name: "Gray & Teal", first: "#374151", second: "#0D9488" },
    { name: "Red & Orange", first: "#7F1D1D", second: "#EA580C" },
    { name: "Purple & Pink", first: "#5B21B6", second: "#DB2777" },
    { name: "Green & Lime", first: "#166534", second: "#84CC16" },
    { name: "Cyan & Indigo", first: "#0891B2", second: "#3730A3" },
    { name: "Amber & Rose", first: "#92400E", second: "#BE123C" },
    { name: "Brown & Yellow", first: "#4E342E", second: "#EAB308" },
    { name: "Slate & Violet", first: "#334155", second: "#8B5CF6" },
    { name: "Emerald & Sky", first: "#047857", second: "#0284C7" },
    { name: "Sea & Sand", first: "#0EA5E9", second: "#FBBF24" },
    { name: "Sunset & Peach", first: "#F97316", second: "#FCA5A5" },
    { name: "Lavender & Mint", first: "#A78BFA", second: "#99F6E4" },
    { name: "Rose & Gold", first: "#F43F5E", second: "#FACC15" },
    { name: "Sky & Coral", first: "#38BDF8", second: "#FB7185" },
    { name: "Forest & Moss", first: "#14532D", second: "#65A30D" },
    { name: "Navy & Cream", first: "#1E3A8A", second: "#FEF3C7" },
    { name: "Chocolate & Caramel", first: "#3E2723", second: "#D97706" },
    { name: "Plum & Silver", first: "#581C87", second: "#D1D5DB" },
    { name: "Denim & Cyan", first: "#1E40AF", second: "#06B6D4" },

  ];

  return (
    <section className="two-colors-container">
      <h1 className="two-colors-title">🎨 Two Color Shade Palettes</h1>

      <div className="two-colors-grid">
        {colorPairs.map((pair, idx) => (
          <div key={idx} className="two-colors-card">
            <h2 className="two-colors-name">{pair.name}</h2>

            <div className="two-colors-row">
              {/* First Color Column */}
              <div className="two-colors-column">
                {generateScale(pair.first, 3).map((color, i) => (
                  <div
                    key={i}
                    className="shade-box"
                    style={{ backgroundColor: color }}
                    onClick={() => copyColor(color)}
                  >
                    <span className="shade-label">
                      {copied === color ? "Copied!" : color}
                    </span>
                  </div>
                ))}
              </div>

              {/* Second Color Column */}
              <div className="two-colors-column">
                {generateScale(pair.second, 3).map((color, i) => (
                  <div
                    key={i}
                    className="shade-box"
                    style={{ backgroundColor: color }}
                    onClick={() => copyColor(color)}
                  >
                    <span className="shade-label">
                      {copied === color ? "Copied!" : color}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TwoColorsPage;
