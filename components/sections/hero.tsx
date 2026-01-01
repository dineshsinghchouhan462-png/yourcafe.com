"use "use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Luxury motion values
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[100vh] w-full overflow-hidden"
    >
      {/* Background Video */}
      <motion.video
        style={{ scale }}
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />

      {/* Luxury dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex h-full items-center justify-center px-6 text-center"
      >
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-white mb-6"
          >
            A Sanctuary of <br /> Calm Luxury
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 1.2,
              ease: "easeOut",
            }}
            className="text-sm md:text-lg tracking-wide text-gray-200 mb-10"
          >
            European elegance · Japanese minimalism
            <br />
            Crafted for slow mornings & timeless evenings
          </motion.p>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 180 }}
            className="inline-block border border-white px-10 py-4 text-xs md:text-sm uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors"
          >
            Visit The Lazy Barn
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
