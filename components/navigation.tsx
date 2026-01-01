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
          ? "bg-black/80 backdrop-blur-xl"
          : "bg-gradient-to-b from-black/70 via-black/30 to-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <h1 className="font-serif text-lg tracking-wide text-white">
          The Lazy Barn
        </h1>

        {/* Navigation */}
        <div className="space-x-6 text-xs tracking-widest text-white/90">
          <a href="#about" className="hover:text-white transition">
            ABOUT
          </a>
          <a href="#gallery" className="hover:text-white transition">
            GALLERY
          </a>
          <a href="#contact" className="hover:text-white transition">
            CONTACT
          </a>
        </div>
      </nav>
    </header>
  );
}
