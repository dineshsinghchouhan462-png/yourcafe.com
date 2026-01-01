"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Brand */}
        <h1
          className={`font-serif text-lg tracking-wide transition-colors duration-500 ${
            scrolled ? "text-white" : "text-white"
          }`}
        >
          The Lazy Barn
        </h1>

        {/* Menu */}
        <button
          className={`text-xs uppercase tracking-[0.35em] transition-colors duration-500 ${
            scrolled ? "text-white/90" : "text-white/80"
          } hover:text-white`}
        >
          Menu
        </button>
      </nav>
    </header>
  );
}
