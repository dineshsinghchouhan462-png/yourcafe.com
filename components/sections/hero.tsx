"use client";

import { useState } from "react";

export default function Hero() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#0f0f0f]">
      
      {/* Poster Image (instant paint, no flash) */}
      <img
        src="/videos/hero-poster.jpg"
        alt=""
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Video (fades in smoothly when ready) */}
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

      {/* Soft cinematic overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="px-6 md:px-16 max-w-[900px]">
          
          <h1 className="font-serif text-[42px] leading-[1.05] md:text-[72px] md:leading-[1.05] tracking-[-0.01em] text-[#F4EFE9]">
            The Lazy Barn
          </h1>

          <p className="mt-6 text-[14px] md:text-[16px] tracking-[0.12em] text-[#F4EFE9]/85">
            Jodhpur · Slow mornings · Unhurried evenings
          </p>

        </div>
      </div>
    </section>
  );
}
