import React, { useState } from "react";
import "./styles/MultiShades.css";

const MultiShades = () => {
  const [copied, setCopied] = useState(null);

  // 🎨 Each color family with light → dark shades
  const colorFamilies = [
    {
      name: "Red",
      shades: ["#FEE2E2", "#FCA5A5", "#EF4444", "#B91C1C", "#7F1D1D"],
    },
    {
      name: "Orange",
      shades: ["#FFEDD5", "#FDBA74", "#FB923C", "#EA580C", "#9A3412"],
    },
    {
      name: "Yellow",
      shades: ["#FEF9C3", "#FDE047", "#FACC15", "#CA8A04", "#78350F"],
    },
    {
      name: "Green",
      shades: ["#DCFCE7", "#86EFAC", "#22C55E", "#15803D", "#14532D"],
    },
    {
      name: "Blue",
      shades: ["#DBEAFE", "#93C5FD", "#3B82F6", "#1D4ED8", "#1E3A8A"],
    },
    {
      name: "Purple",
      shades: ["#E9D5FF", "#C084FC", "#A855F7", "#7E22CE", "#581C87"],
    },
    {
      name: "Pink",
      shades: ["#FCE7F3", "#F9A8D4", "#EC4899", "#BE185D", "#831843"],
    },
    {
      name: "Gray",
      shades: ["#F9FAFB", "#E5E7EB", "#9CA3AF", "#4B5563", "#1F2937"],
    },
    {
      name: "Teal",
      shades: ["#CCFBF1", "#5EEAD4", "#14B8A6", "#0F766E", "#115E59"],
    },
    {
      name: "Indigo",
      shades: ["#E0E7FF", "#A5B4FC", "#6366F1", "#4338CA", "#312E81"],
    },
  ];

  const copyColor = (color) => {
    navigator.clipboard.writeText(color);
    setCopied(color);
    setTimeout(() => setCopied(null), 1000);
  };

  return (
    <section className="multi-shades-container">
      <h1 className="multi-shades-title">🎨 Multi Shades Palette</h1>

      <div className="multi-shades-grid">
        {colorFamilies.map((family, idx) => (
          <div key={idx} className="shade-card">
            <h2 className="shade-name">{family.name}</h2>
            <div className="shade-row">
              {family.shades.map((shade, i) => (
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

export default MultiShades;
