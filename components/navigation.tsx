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
          ? "bg-black/70 backdrop-blur-xl"
          : "bg-black/40"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        {/* Brand */}
        <h1 className="font-serif text-xl tracking-wide text-white">
          The Lazy Barn
        </h1>

        {/* Single Menu Trigger */}
        <button
          aria-label="Open menu"
          className="text-xs uppercase tracking-[0.3em] text-white/90 hover:text-white transition"
        >
          Menu
        </button>
      </nav>
    </header>
  );
}
