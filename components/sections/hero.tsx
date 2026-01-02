"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [videoReady, setVideoReady] = useState(false);
  const [textReady, setTextReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setTextReady(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#0f0f0f]">
      
      {/* Poster Image */}
      <img
        src="/videos/hero-poster.jpg"
        alt=""
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Video */}
      <video
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlayThrough={() => setVideoReady(true)}
      />

      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="px-6 md:px-16 max-w-[900px] text-center">

          {/* Brand Title */}
          <h1
            className={`font-serif text-[44px] md:text-[74px] leading-[1.08] text-[#F4EFE9]
              transition-all duration-[1200ms] ease-out
              ${textReady ? "opacity-100 tracking-[0.02em]" : "opacity-0 tracking-[0.08em]"}
            `}
          >
            The Lazy Barn
          </h1>

          {/* Location */}
          <p
            className={`mt-10 md:mt-12 text-[11px] md:text-[12px] uppercase
              tracking-[0.32em] text-[#F4EFE9]/55
              transition-all duration-[1200ms] ease-out delay-150
              ${textReady ? "opacity-100" : "opacity-0"}
            `}
          >
            Jodhpur
          </p>

          {/* Signature Line */}
          <p
            className={`mt-4 md:mt-6 text-[13px] md:text-[14px]
              tracking-[0.18em] text-[#F4EFE9]/75
              transition-all duration-[1400ms] ease-out delay-300
              ${textReady ? "opacity-100" : "opacity-0"}
            `}
          >
            Slow mornings · Unhurried evenings
          </p>

        </div>
      </div>
    </section>
  );
}
