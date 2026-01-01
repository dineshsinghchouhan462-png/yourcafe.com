"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section className="relative h-[100svh] pt-24 overflow-hidden bg-black">
      {/* Poster image (shows instantly, prevents black screen) */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: "url('/hero-poster.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Video */}
      <motion.video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setVideoReady(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: videoReady ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </motion.video>

      {/* Dark overlay (stable, no flicker) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Film grain (ultra subtle) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay bg-[url('/grain.png')]" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl md:text-6xl tracking-tight text-white mb-3">
            The Lazy Barn
          </h1>

          <p className="text-xs tracking-[0.35em] text-white/80 mb-10">
            CAFÉ · JODHPUR
          </p>

          <a
            href="#about"
            className="inline-block border border-white px-10 py-4 text-xs tracking-[0.25em] uppercase text-white transition hover:bg-white hover:text-black"
          >
            Visit The Lazy Barn
          </a>
        </div>
      </div>
    </section>
  );
}
