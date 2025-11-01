import React from "react";

export default function ColorCard({ color }) {
  const copy = () => {
    navigator.clipboard.writeText(color);
    alert(`Copied ${color}`);
  };

  return (
    <div
      className="flex-1 flex flex-col justify-center items-center cursor-pointer transition-transform hover:scale-105"
      style={{ backgroundColor: color }}
      onClick={copy}
    >
      <span
        className="text-white text-lg font-semibold bg-black/40 px-3 py-1 rounded"
        style={{ mixBlendMode: "difference" }}
      >
        {color}
      </span>
    </div>
  );
}
