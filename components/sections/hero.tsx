"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[100vh] pt-24 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Premium Gradient Overlay (top darker, bottom lighter) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-4xl -translate-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6"
          >
            A Sanctuary of <br /> Calm Luxury
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.1, ease: "easeOut" }}
            className="text-sm md:text-lg text-gray-200 tracking-wide mb-10"
          >
            European elegance · Japanese minimalism <br />
            Crafted for slow mornings & timeless evenings
          </motion.p>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block border border-white px-10 py-4 text-xs md:text-sm uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors"
          >
            Visit The Lazy Barn
          </motion.a>
        </div>
      </div>
    </section>
  );
}
