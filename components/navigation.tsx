"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Menu", href: "#menu" },
  { label: "Visit", href: "#visit" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.45);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-[900ms] ease-out ${
          scrolled ? "header-scrolled" : "header-top"
        }`}
      >
        <div className="header-inner flex items-center justify-between px-6 md:px-16">

          {/* LOGO */}
          <a href="#home">
            <img
              src="/logo/lb-mark.png"
              alt="The Lazy Barn"
              className={`logo-mark transition-all duration-[900ms] ease-out ${
                scrolled ? "opacity-90 scale-[0.92]" : "opacity-95 scale-100"
              }`}
            />
          </a>

          {/* MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="header-menu-text"
          >
            MENU
          </button>
        </div>
      </header>

      {/* FULLSCREEN MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-50 bg-[#0f0f0f]/95 backdrop-blur-[2px] transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full items-center justify-center px-6">
          <nav className="text-center">
            <ul className="space-y-8">
              {links.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block font-serif text-[32px] md:text-[48px] tracking-[0.04em] text-[#F4EFE9]/90 hover:text-[#F4EFE9] transition-opacity duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setOpen(false)}
              className="mt-16 text-[12px] tracking-[0.2em] uppercase text-[#F4EFE9]/50 hover:text-[#F4EFE9]/80 transition-opacity"
            >
              Close
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
