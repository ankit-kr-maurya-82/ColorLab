import React, { useState, useEffect } from "react";
import ColorCard from "../components/ColorCard";
import './styles/Home.css'
import { Link } from "react-router-dom";
import PaletteComponents from "../components/PaletteComponents";
import ColumnBarPalette from "../components/ColumnBarPalette";
import TwoColors from "./TwoColors";

export default function Home() {
 

  

 

  return (
    <div className="flex flex-col items-center justify-start min-h-[calc(100vh-120px)] bg-gray-50">
      
      {/* 🌈 Welcome Section */}
      <section className=" Header-section text-center mt-12 mb-8 px-6">
        <h1 className=" welcome-head text-5xl font-bold  mb-3">Welcome to ColorLab</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Create stunning color palettes with ease. Generate, lock, and copy colors — 
          all in one place. Press <span className="font-semibold text-blue-500">Space</span> to randomize your palette!
        </p>
        <Link to='/shades'
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Generate New Palette
        </Link>
      </section>

     <PaletteComponents/>
     <ColumnBarPalette/>
     <TwoColors/>

      
    </div>
  );
}
