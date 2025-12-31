"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      {/* Dark Luxury Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            A Sanctuary of <br /> Calm Luxury
          </h1>

          <p className="text-sm md:text-lg text-gray-200 tracking-wide mb-10">
            European elegance · Japanese minimalism <br />
            Crafted for slow mornings & timeless evenings
          </p>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block border border-white px-8 py-3 text-sm uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
          >
            Visit The Lazy Barn
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
