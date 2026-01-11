"use client";

import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`footer relative
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        transition-all duration-[1200ms] ease-out
      `}
    >
      {/* GRAIN */}
      <div className="pointer-events-none absolute inset-0 footer-grain" />

      <div className="relative max-w-[1100px] mx-auto px-6 pt-24 pb-20 space-y-20">

        {/* BRAND */}
        <div className="text-center space-y-4">
          <h2 className="font-serif text-[30px] md:text-[32px]">
            Coffee. Comfort. Care.
          </h2>
          <p className="footer-label">
            The Lazy Barn · Jodhpur
          </p>
        </div>

        {/* VISIT */}
        <div className="space-y-5">
          <p className="footer-label">Visit</p>
          <p className="footer-text max-w-[420px]">
            The Lazy Barn<br />
            Sabji Mandi, Opp. Ratanada<br />
            Above Marwar Sweets<br />
            Jodhpur, Rajasthan
          </p>
        </div>

        {/* CONTACT */}
        <div className="space-y-5">
          <p className="footer-label">Contact</p>

          <div className="flex flex-wrap items-center gap-10">
            {/* PHONE */}
            <a
              href="tel:+918890667769"
              className="group flex items-center gap-5 footer-action"
            >
              <span className="group-hover:opacity-80 transition-opacity">
                +91 88906 67769
              </span>
              <span className="block h-[1px] w-10 bg-[#1f1f1f] transition-all duration-300 group-hover:w-16" />
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/918890667769"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 footer-secondary"
            >
              <span className="group-hover:opacity-80 transition-opacity">
                WhatsApp
              </span>
              <span className="block h-[1px] w-8 bg-[#6a6a6a] transition-all duration-300 group-hover:w-12" />
            </a>
          </div>
        </div>

        {/* FOLLOW */}
        <div className="space-y-5">
          <p className="footer-label">Follow</p>

          <div className="flex items-center gap-12 footer-secondary">
            <a
              href="https://www.instagram.com/thelazybarnjodhpur"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4"
            >
              <span className="group-hover:opacity-80 transition-opacity">
                Instagram
              </span>
              <span className="block h-[1px] w-8 bg-[#6a6a6a] transition-all duration-300 group-hover:w-12" />
            </a>

            <a
              href="https://www.facebook.com/share/1GLkj6C6bM/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4"
            >
              <span className="group-hover:opacity-80 transition-opacity">
                Facebook
              </span>
              <span className="block h-[1px] w-8 bg-[#6a6a6a] transition-all duration-300 group-hover:w-12" />
            </a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <p className="text-center footer-label text-gray-400">
          © 2026 The Lazy Barn
        </p>

      </div>
    </footer>
  );
}
