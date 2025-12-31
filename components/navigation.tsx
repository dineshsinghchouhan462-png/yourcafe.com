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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-serif tracking-wide">
          The Lazy Barn
        </h1>

        <div className="space-x-6 text-sm tracking-wide">
          <a href="#about" className="hover:opacity-70 transition">About</a>
          <a href="#gallery" className="hover:opacity-70 transition">Gallery</a>
          <a href="#contact" className="hover:opacity-70 transition">Contact</a>
        </div>
      </nav>
    </header>
  );
}
