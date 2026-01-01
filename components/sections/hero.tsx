"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section className="relative h-[100vh] pt-24 overflow-hidden bg-black">
      {/* Video */}
      <motion.video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        poster="/videos/hero-poster.jpg" // optional but recommended
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlayThrough={() => setVideoReady(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: videoReady ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Soft dark overlay (lighter, premium) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-white text-4xl md:text-6xl tracking-wide mb-4"
          >
            The Lazy Barn
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xs tracking-[0.3em] text-white uppercase mb-10"
          >
            Café · Jodhpur
          </motion.p>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block border border-white px-10 py-4 text-xs tracking-widest text-white uppercase hover:bg-white hover:text-black transition-colors"
          >
            Visit The Lazy Barn
          </motion.a>
        </div>
      </div>
    </section>
  );
}
