"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Slow luxury parallax (very restrained)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 64]);
  const opacityText = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[100vh] pt-24 overflow-hidden bg-black"
    >
      {/* VIDEO */}
      <motion.video
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
        style={{ scale }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/poster.jpg"
        onLoadedData={() => setVideoReady(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: videoReady ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </motion.video>

      {/* DARK OVERLAY (unchanged, stable) */}
      <div className="absolute inset-0 bg-black/45" />

      {/* FILM GRAIN (true luxury trick, barely visible) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJibGFjayIvPjxmaWx0ZXIgaWQ9Im4iPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjgiIG51bU9jdGF2ZXM9IjQiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbHRlcj0idXJsKCNuKSIvPjwvc3ZnPg==')",
        }}
      />

      {/* CONTENT */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 flex h-full items-center justify-center px-6 text-center"
      >
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.15] tracking-[-0.015em] text-white mb-6"
          >
            A Sanctuary of <br /> Calm Luxury
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 1.2, ease: "easeOut" }}
            className="text-xs md:text-sm tracking-[0.22em] uppercase text-white/80 mb-12"
          >
            The Lazy Barn Café · Jodhpur
          </motion.p>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
            className="inline-block border border-white/80 px-12 py-4 text-[11px] tracking-[0.28em] uppercase text-white hover:bg-white hover:text-black transition-colors"
          >
            Visit The Lazy Barn
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
