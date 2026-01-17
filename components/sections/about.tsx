"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const imageRef = useRef<HTMLDivElement>(null);

  // Subtle scroll-based parallax (unchanged logic)
  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      const rect = imageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = 1 - rect.top / windowHeight;
        const translateY = Math.min(Math.max(progress * 16, -8), 16);
        imageRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="bg-[#f7f4ef]">
      <div
        className="
          mx-auto max-w-[1200px]
          px-6 md:px-16
          pt-6 md:pt-10
          pb-32 md:pb-40
        "
      >
        <div
          ref={imageRef}
          className="
            relative
            overflow-hidden
            rounded-[28px]
            will-change-transform
            transition-transform duration-[1200ms] ease-out
          "
        >
          <img
            src="/images/philosophy.jpg"
            alt="The Lazy Barn interior"
            className="
              w-full
              h-auto
              transition-transform duration-[1200ms] ease-out
              md:hover:scale-[1.03]
              active:scale-[1.01]
            "
          />

          <div
            className="
              pointer-events-none
              absolute inset-0
              bg-black/0
              md:hover:bg-black/5
              transition-colors duration-700
            "
          />
        </div>
      </div>
    </section>
  );
}
