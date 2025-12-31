"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-[80vh] flex items-center justify-center text-center bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="text-5xl md:text-6xl font-serif mb-4 text-luxury">
          A Sanctuary of Calm Luxury
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg text-gray-600"
        >
          European elegance meets Japanese minimalism
        </motion.p>
      </motion.div>
    </section>
  );
}
