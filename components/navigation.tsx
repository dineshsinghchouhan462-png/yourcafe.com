"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", type: "route", href: "/" },
  { label: "About", type: "scroll", id: "about" },
  { label: "Gallery", type: "scroll", id: "gallery" },
  { label: "Menu", type: "route", href: "/menu" },
  { label: "Visit", type: "scroll", id: "contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.45);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (id: string) => {
    if (pathname !== "/") return; // ⛔ prevent hijack on other pages

    const el = document.getElementById(id);
    if (!el) return;

    setOpen(false);

    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-40 pointer-events-none transition-all duration-[900ms] ease-out ${
          scrolled ? "header-scrolled" : "header-top"
        }`}
      >
        <div className="header-inner flex items-center justify-between px-6 md:px-16 pointer-events-auto">
          <Link href="/">
            <img
              src="/logo/lb-mark.png"
              alt="The Lazy Barn"
              className="logo-mark"
            />
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="header-menu-text"
          >
            MENU
          </button>
        </div>
      </header>

      {/* FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 z-50 bg-[#0f0f0f]/95 backdrop-blur-[2px] transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full items-center justify-center px-6">
          <nav className="text-center">
            <ul className="space-y-8">
              {links.map((item) => (
                <li key={item.label}>
                  {item.type === "route" ? (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="font-serif text-[32px] md:text-[48px] tracking-[0.04em] text-[#F4EFE9]/90 hover:text-[#F4EFE9]"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleScroll(item.id)}
                      className="font-serif text-[32px] md:text-[48px] tracking-[0.04em] text-[#F4EFE9]/90 hover:text-[#F4EFE9]"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>

            <button
              onClick={() => setOpen(false)}
              className="mt-16 text-[12px] tracking-[0.2em] uppercase text-[#F4EFE9]/50 hover:text-[#F4EFE9]/80"
            >
              Close
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
