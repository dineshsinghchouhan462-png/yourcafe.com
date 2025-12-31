"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1
          className={`font-serif text-xl transition-colors duration-500 ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
        >
          The Lazy Barn
        </h1>

        <div
          className={`space-x-6 text-sm tracking-wide transition-colors duration-500 ${
            scrolled ? "text-gray-800" : "text-gray-200"
          }`}
        >
          <a href="#about" className="hover:opacity-70">
            About
          </a>
          <a href="#gallery" className="hover:opacity-70">
            Gallery
          </a>
          <a href="#contact" className="hover:opacity-70">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
