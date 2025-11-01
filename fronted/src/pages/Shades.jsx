import React, { useState } from "react";
import "./styles/Shades.css";

export default function Shades() {
  const [baseColor, setBaseColor] = useState("#7C3AED");
  const [shades, setShades] = useState([]);
  const [copied, setCopied] = useState(null);

  // Convert HEX → RGB
  const hexToRgb = (hex) => {
    const h = hex.replace("#", "");
    return [
      parseInt(h.slice(0, 2), 16),
      parseInt(h.slice(2, 4), 16),
      parseInt(h.slice(4, 6), 16),
    ];
  };

  // Convert RGB → HEX
  const rgbToHex = (r, g, b) =>
    "#" +
    [r, g, b]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase();

  // Generate tints or shades
  const generateScale = (hex, n, lighter = false) => {
    const [r, g, b] = hexToRgb(hex);
    const colors = [];
    for (let i = 0; i < n; i++) {
      const t = i / (n - 1);
      const newR = lighter
        ? Math.round(r + (255 - r) * t)
        : Math.round(r * (1 - t));
      const newG = lighter
        ? Math.round(g + (255 - g) * t)
        : Math.round(g * (1 - t));
      const newB = lighter
        ? Math.round(b + (255 - b) * t)
        : Math.round(b * (1 - t));
      colors.push(rgbToHex(newR, newG, newB));
    }
    return lighter ? colors.reverse() : colors;
  };

  // Generate darks + base + lights
  const handleGenerate = () => {
    const darks = generateScale(baseColor, 6, false);
    const lights = generateScale(baseColor, 6, true);
    setShades([...darks.slice(1).reverse(), baseColor, ...lights.slice(1)]);
  };

  // Copy color to clipboard
  const copyColor = (color) => {
    navigator.clipboard.writeText(color);
    setCopied(color);
    setTimeout(() => setCopied(null), 1000);
  };

  return (
    <div className="shades-container">
      <h1 className="generator-head">Tints & Shades Generator</h1>

      <div className="generator-container">
        <input
          type="color"
          value={baseColor}
          onChange={(e) => setBaseColor(e.target.value)}
          className="input-color"
        />
        <button
          onClick={handleGenerate}
          className="generate-btn"
        >
          Generate
        </button>
      </div>

      {shades.length > 0 && (
        <div
          className="gradient-preview"
          style={{
            background: `linear-gradient(to right, ${shades.join(",")})`,
          }}
        />
      )}

      <div className="shades-grid">
        {shades.map((color, i) => (
          <div
            key={i}
            className="shade-box"
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
  );
}
