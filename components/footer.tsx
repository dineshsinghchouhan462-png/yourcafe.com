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
      className={`relative bg-[#f7f4ef] transition-all duration-[1200ms] ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      {/* GRAIN OVERLAY */}
      <div className="pointer-events-none absolute inset-0 footer-grain" />

      <div className="relative max-w-[1100px] mx-auto px-6 pt-40 pb-32 space-y-32">

        {/* BRAND */}
        <div className="text-center space-y-6">
          <h2 className="font-serif text-[34px]">
            Coffee. Comfort. Care.
          </h2>
          <p className="text-[12px] tracking-[0.32em] uppercase text-gray-500">
            The Lazy Barn · Jodhpur
          </p>
        </div>

        {/* VISIT */}
        <div className="space-y-6">
          <p className="text-[12px] tracking-[0.32em] uppercase text-gray-500">
            Visit
          </p>
          <p className="text-[18px] leading-[1.9] text-gray-700 max-w-[420px]">
            The Lazy Barn<br />
            Sabji Mandi, Opp. Ratanada<br />
            Above Marwar Sweets<br />
            Jodhpur, Rajasthan
          </p>
        </div>

        {/* CONTACT */}
        <div className="space-y-6">
          <p className="text-[12px] tracking-[0.32em] uppercase text-gray-500">
            Contact
          </p>

          <div className="flex items-center gap-6 text-[20px]">
            <a
              href="tel:+918890667769"
              className="group flex items-center gap-6"
            >
              <span className="group-hover:opacity-80 transition-opacity">
                +91 88906 67769
              </span>
              <span className="block h-[1px] w-10 bg-[#1f1f1f] transition-all duration-300 group-hover:w-16" />
            </a>

            <span className="text-gray-400">WHATSAPP</span>
          </div>
        </div>

        {/* FOLLOW */}
        <div className="space-y-6">
          <p className="text-[12px] tracking-[0.32em] uppercase text-gray-500">
            Follow
          </p>

          <div className="flex items-center gap-8 text-[14px] tracking-[0.24em] uppercase">
            <a
              href="https://www.instagram.com/thelazybarnjodhpur"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4"
            >
              <span className="group-hover:opacity-80 transition-opacity">
                Instagram
              </span>
              <span className="block h-[1px] w-8 bg-[#1f1f1f] transition-all duration-300 group-hover:w-12" />
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
              <span className="block h-[1px] w-8 bg-[#1f1f1f] transition-all duration-300 group-hover:w-12" />
            </a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <p className="text-center text-[12px] tracking-[0.22em] uppercase text-gray-400">
          © 2026 The Lazy Barn
        </p>

      </div>
    </footer>
  );
}
