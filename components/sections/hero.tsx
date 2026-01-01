"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[100vh] pt-24 overflow-hidden bg-black"
    >
      {/* VIDEO */}
      <motion.video
        style={{ scale }}
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg"
      />

      {/* OVERLAY (stable, no flicker) */}
      <div className="absolute inset-0 bg-black/45" />

      {/* FILM GRAIN (very subtle luxury trick) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"120\" height=\"120\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"4\"/></filter><rect width=\"120\" height=\"120\" filter=\"url(%23n)\" opacity=\"0.4\"/></svg>')",
        }}
      />

      {/* CONTENT */}
      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 flex h-full items-center justify-center px-6 text-center"
      >
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tight">
            The Lazy Barn
          </h1>

          <p className="text-sm md:text-lg text-gray-200 tracking-wide leading-relaxed">
            Jodhpur <br />
            Slow mornings · Warm evenings · Unrushed conversations
          </p>
        </div>
      </motion.div>
    </section>
  );
}
