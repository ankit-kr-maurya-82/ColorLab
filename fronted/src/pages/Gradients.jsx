import React, { useState } from "react";
import "./styles/Gradients.css";

export default function Gradients() {
  const [gradA, setGradA] = useState("#7C3AED");
  const [gradB, setGradB] = useState("#06B6D4");
  const [type, setType] = useState("linear");

  const gradient =
    type === "linear"
      ? `linear-gradient(90deg, ${gradA}, ${gradB})`
      : `radial-gradient(circle, ${gradA}, ${gradB})`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`background: ${gradient};`);
    console.log("🎨 Gradient CSS Copied!");
  };

  return (
    <div className="gradient-page">
      <h1 className="title">🎨 Gradient Generator</h1>

      <div className="gradient-preview" style={{ background: gradient }}></div>

      <div className="controls">
        <div className="color-inputs">
          <label>
            <span>Color A</span>
            <input
              type="color"
              value={gradA}
              onChange={(e) => setGradA(e.target.value)}
            />
          </label>

          <label>
            <span>Color B</span>
            <input
              type="color"
              value={gradB}
              onChange={(e) => setGradB(e.target.value)}
            />
          </label>
        </div>

        <select
          className="type-selector"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="linear">Linear</option>
          <option value="radial">Radial</option>
        </select>

        <button className="copy-btn" onClick={copyToClipboard}>
          Copy CSS
        </button>
      </div>
    </div>
  );
}
