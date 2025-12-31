"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-[85vh] flex items-center justify-center bg-cream text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-5xl md:text-6xl font-serif text-luxury mb-6"
        >
          A Sanctuary of Calm Luxury
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-lg text-gray-600 max-w-xl mx-auto"
        >
          European elegance meets Japanese minimalism — crafted for slow
          mornings and long conversations in Jodhpur.
        </motion.p>
      </motion.div>
    </section>
  );
}
