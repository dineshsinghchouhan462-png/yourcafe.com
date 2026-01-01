"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[100vh] pt-24 overflow-hidden bg-black">
      {/* Video Background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/videos/hero-poster.jpg"
      />

      {/* Luxury Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end justify-center px-6 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {/* Brand first, not poetry */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
            The Lazy Barn
          </h1>

          <p className="text-sm md:text-base text-gray-200 tracking-wide mb-8">
            A calm café for slow mornings & unhurried evenings
          </p>

          <a
            href="#about"
            className="inline-block border border-white/80 px-10 py-4 text-xs md:text-sm uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Visit the Café
          </a>
        </motion.div>
      </div>
    </section>
  );
}
