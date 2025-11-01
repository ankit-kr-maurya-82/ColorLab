import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="flex justify-between   items-center px-8 py-4 bg-white shadow-md fixed w-full z-40">
      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-600">🎨 ColorLab</h1>

      {/* Navigation Links */}
      <div className="flex gap-6 text-gray-600 font-medium relative">
        <Link to="/">Palettes</Link>
        <Link to="/gradients">Gradients</Link>

        {/* Dropdown for Shades */}
        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="hover:text-blue-600 transition flex items-center gap-1">
            Shades ▾
          </button>

          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <Link
                to="/shades/dark"
                className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
              >
                Dark Shades
              </Link>
              <Link
                to="/shades/light"
                className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
              >
                Light Shades
              </Link>
              <Link
                to="/shades/two-color"
                className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
              >
                Two-Color Shades
              </Link>
              <Link
                to="/shades/multi"
                className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
              >
                Multi Shades
              </Link>
            </div>
          )}
        </div>

        <Link to="/price">Price</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
