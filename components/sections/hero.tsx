"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src="/images/hero/cafe.jpg" 
          alt="The Lazy Barn Cafe"
          className="h-full w-full object-cover"
        />
        {/* Dark luxury overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.1, ease: "easeOut" }}
          className="text-center max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-white tracking-tight leading-tight">
            A Sanctuary of <br /> Calm Luxury
          </h1>

          <p className="mt-6 text-sm md:text-base text-white/80 tracking-wide">
            European elegance · Japanese minimalism <br />
            Crafted for slow mornings & timeless evenings
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-10"
          >
            <a
              href="#contact"
              className="inline-block px-8 py-3 text-sm tracking-wide
                         border border-white/40 text-white
                         hover:bg-white hover:text-black
                         transition-all duration-300"
            >
              Visit The Lazy Barn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
