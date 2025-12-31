"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center bg-cream px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center max-w-3xl"
      >
        <h2 className="text-5xl md:text-6xl font-serif text-luxury mb-6 leading-tight">
          A Sanctuary of <br /> Calm Luxury
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg text-gray-600 mb-10"
        >
          European elegance meets Japanese minimalism
        </motion.p>

        <motion.a
          href="#about"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-8 py-3 border border-luxury text-luxury text-sm tracking-wide hover:bg-luxury hover:text-white transition"
        >
          Explore the Experience
        </motion.a>
      </motion.div>
    </section>
  );
}
