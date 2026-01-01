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
      className={`
        fixed top-0 left-0 z-50 w-full
        transition-all duration-500 ease-out
        ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
            : "bg-black/40"
        }
      `}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="font-serif text-lg tracking-[0.12em] text-white">
          THE LAZY BARN
        </h1>

        <div className="space-x-8 text-xs tracking-[0.2em] text-white/90 uppercase">
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#gallery" className="hover:text-white transition">
            Gallery
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
