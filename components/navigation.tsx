"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Gallery", id: "gallery" },
  { label: "Menu", route: "/menu" }, // 🚨 ROUTE, NOT SCROLL
  { label: "Visit", id: "visit" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.45);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    setOpen(false);
    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  };

  const goToMenuPage = () => {
    setOpen(false);
    router.push("/menu");
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-40 pointer-events-none transition-all duration-[900ms] ${
          scrolled ? "header-scrolled" : "header-top"
        }`}
      >
        <div className="header-inner pointer-events-auto flex justify-between px-6 md:px-16">
          <img src="/logo/lb-mark.png" alt="The Lazy Barn" className="logo-mark" />
          <button onClick={() => setOpen(true)} className="header-menu-text">
            MENU
          </button>
        </div>
      </header>

      {/* OVERLAY MENU */}
      <div
        className={`fixed inset-0 z-50 bg-[#0f0f0f]/95 transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full items-center justify-center">
          <nav className="text-center">
            <ul className="space-y-8">
              {links.map((item) => (
                <li key={item.label}>
                  {item.route ? (
                    <button
                      onClick={goToMenuPage}
                      className="font-serif text-[32px] md:text-[48px] text-[#F4EFE9]"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.id!)}
                      className="font-serif text-[32px] md:text-[48px] text-[#F4EFE9]"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>

            <button
              onClick={() => setOpen(false)}
              className="mt-16 text-[12px
