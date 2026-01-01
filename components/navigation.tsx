"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);

    // Hero readiness (listens once)
    const onHeroReady = () => setHeroReady(true);
    window.addEventListener("hero-ready", onHeroReady);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hero-ready", onHeroReady);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-700
        ${heroReady ? "opacity-100" : "opacity-0"}
        ${
          scrolled
            ? "bg-cream/90 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <span
          className={`font-serif text-xl tracking-wide transition-colors duration-500
            ${scrolled ? "text-gray-900" : "text-white"}
          `}
        >
          The Lazy Barn
        </span>

        <div
          className={`space-x-6 text-sm tracking-widest transition-colors duration-500
            ${scrolled ? "text-gray-800" : "text-gray-200"}
          `}
        >
          <a href="#about" className="hover:opacity-70">About</a>
          <a href="#gallery" className="hover:opacity-70">Gallery</a>
          <a href="#contact" className="hover:opacity-70">Contact</a>
        </div>
      </nav>
    </header>
  );
}
