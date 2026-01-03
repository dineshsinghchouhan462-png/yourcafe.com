"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Subtle scroll-based parallax
  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      const rect = imageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only apply when image is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = 1 - rect.top / windowHeight;
        const translateY = Math.min(Math.max(progress * 20, -10), 20); // max 20px
        imageRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Philosophy / Space Section */}
      <section className="bg-[#f7f4ef]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-16 pt-20 md:pt-28 pb-28 md:pb-36">
          
          {/* Image Container */}
          <div
            ref={imageRef}
            className="
              relative
              overflow-hidden
              rounded-[28px]
              cursor-zoom-in
              will-change-transform
              transition-transform duration-[1200ms] ease-out
            "
            onClick={() => setLightboxOpen(true)}
          >
            <img
              src="/images/philosophy.jpg"
              alt="The Lazy Barn interior"
              className="
                w-full
                h-auto
                transition-transform duration-[1400ms] ease-out
                hover:scale-[1.03]
              "
            />

            {/* Soft material overlay */}
            <div
              className="
                pointer-events-none
                absolute inset-0
                bg-black/0
                hover:bg-black/10
                transition-colors duration-700
              "
            />
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="
            fixed inset-0 z-[999]
            flex items-center justify-center
            bg-black/80 backdrop-blur-md
          "
          onClick={() => setLightboxOpen(false)}
        >
          <img
            src="/images/philosophy.jpg"
            alt="The Lazy Barn interior enlarged"
            className="
              max-h-[90vh]
              max-w-[90vw]
              rounded-[24px]
              shadow-2xl
            "
          />
        </div>
      )}
    </>
  );
}
