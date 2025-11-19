import React from "react";
import './styles/Header.css'

const Header = () => {
  return (
    <header className="min-h-[60vh] top-8 flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-2000"></div>
      
      <div className="relative z-10 text-center max-w-4xl">
        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
            ColorLab
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed animate-slide-up">
          Create stunning color palettes with ease. Generate, lock, and copy colors — 
          all in one place.
        </p>

        {/* Keyboard hint */}
        <div className="flex items-center justify-center gap-3 mb-10 animate-slide-up-delay">
          <span className="text-gray-600 text-lg">Press</span>
          <kbd className="px-4 py-2 bg-white text-purple-600 font-bold rounded-lg shadow-md border-2 border-purple-200 hover:scale-110 transition-transform cursor-default">
            Space
          </kbd>
          <span className="text-gray-600 text-lg">to randomize your palette!</span>
        </div>

        {/* CTA Button */}
        <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-bounce-in">
          <span className="flex items-center gap-2">
            <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">🎨</span>
            Generate New Palette
          </span>
          <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>

        {/* Feature badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12 animate-fade-in-late">
          <span className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium shadow-sm">
            ✨ Instant Generation
          </span>
          <span className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium shadow-sm">
            🔒 Lock Colors
          </span>
          <span className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium shadow-sm">
            📋 One-Click Copy
          </span>
        </div>
      </div>

      
    </header>
  );
};

export default Header;