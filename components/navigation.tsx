"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-black/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <h1
          className={`font-serif text-lg md:text-xl tracking-wide transition-colors duration-500 ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
        >
          The Lazy Barn
        </h1>

        {/* Menu */}
        <div
          className={`hidden md:flex space-x-8 text-sm tracking-widest uppercase transition-colors duration-500 ${
            scrolled ? "text-gray-700" : "text-gray-200"
          }`}
        >
          <a href="#about" className="hover:opacity-70 transition">
            About
          </a>
          <a href="#gallery" className="hover:opacity-70 transition">
            Gallery
          </a>
          <a href="#contact" className="hover:opacity-70 transition">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
