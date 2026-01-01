"use "use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section className="relative h-[100vh] pt-24 overflow-hidden bg-black">
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
        poster="/videos/hero-poster.jpg"
        onCanPlay={() => setVideoReady(true)}
      />

      {/* Fallback background (no black screen ever) */}
      {!videoReady && (
        <div className="absolute inset-0 bg-neutral-900" />
      )}

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Film grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex h-full items-center justify-center px-6 text-center"
      >
        <div className="max-w-3xl">
          {/* Brand first */}
          <h1 className="font-serif text-[2.8rem] md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05] mb-4">
            The Lazy Barn
          </h1>

          {/* Location */}
          <p className="text-[0.65rem] md:text-xs tracking-[0.35em] text-gray-300 uppercase mb-6">
            Café · Jodhpur
          </p>

          {/* Poetic line */}
          <p className="text-sm md:text-lg text-gray-200 leading-relaxed mb-10">
            Where conversations slow down,
            <br />
            and evenings stay a little longer.
          </p>

          {/* CTA */}
          <a
            href="#about"
            className="inline-block border border-white/70 px-10 py-4 text-xs tracking-[0.3em] uppercase text-white hover:bg-white hover:text-black transition-colors duration-300"
          >
            Visit The Lazy Barn
          </a>
        </div>
      </motion.div>
    </section>
  );
          }
