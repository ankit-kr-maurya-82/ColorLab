import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gradients from "./pages/Gradients";
import Shades from "./pages/Shades";
import About from "./pages/About";
import Price from "./pages/price";
import DarkShades from "./components/DarkShades";
import LightShades from "./components/LightShades";
import TwoColorsPage from "./components/TwoColorsPage";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="app min-h-screen flex flex-col bg-gray-100 text-gray-800">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gradients" element={<Gradients />} />
            <Route path="/shades" element={<Shades />} />
            <Route path="/price" element={<Price />} />
            <Route path="/about" element={<About />} />
            <Route path="/shades/dark" element={<DarkShades />} />
            <Route path="/shades/light" element={<LightShades />} />
            <Route path="/shades/two-colors" element={<TwoColorsPage />} />
            <Route path="/shades/multi-shades" element={<TwoColorsPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
