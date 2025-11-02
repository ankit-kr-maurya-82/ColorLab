import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";

import Header from "../components/Header";
import PaletteComponents from "../components/PaletteComponents";
import ColumnBarPalette from "../components/ColumnBarPalette";
import TwoColors from "./TwoColors";

export default function Home() {
  return (
    <div className="home-container">
      {/* 🌈 Welcome Section */}
      <Header />

      {/* 🎨 Palettes Section */}
      <section className="section-wrapper">
        <PaletteComponents />
      </section>

      {/* 🌗 Column Shades Section */}
      <section className="section-wrapper">
        <ColumnBarPalette />
      </section>

      {/* 🎭 Two Color Layout Section */}
      <section className="section-wrapper">
        <TwoColors />
      </section>
    </div>
  );
}
