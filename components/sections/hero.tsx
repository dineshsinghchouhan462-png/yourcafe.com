"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[100vh] pt-28 overflow-hidden">
      
      {/* Video */}
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

      {/* Luxury overlay (lighter, warm) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-4xl mt-10">
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6"
          >
            A Sanctuary of Calm Luxury
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm md:text-lg text-gray-200 tracking-wide mb-10"
          >
            THE LAZY BARN CAFÉ · JODHPUR
          </motion.p>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block border border-white px-10 py-4 text-xs md:text-sm uppercase tracking-widest text-white hover:bg-white hover:text-black transition"
          >
            Visit The Lazy Barn
          </motion.a>
        </div>
      </div>
    </section>
  );
}
