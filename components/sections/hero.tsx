"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden pt-24">
      {/* Fallback background (prevents black flash) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-poster.jpg')",
        }}
      />

      {/* Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        poster="/images/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Subtle film grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('/images/grain.png')]" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          {/* TEXT — untouched as you asked */}
          <h1 className="text-5xl md:text-7xl font-serif text-white tracking-tight mb-4">
            The Lazy Barn
          </h1>

          <p className="text-sm md:text-lg text-neutral-200 tracking-wide">
            Jodhpur · Slow mornings · Unhurried evenings
          </p>
        </motion.div>
      </div>
    </section>
  );
}
