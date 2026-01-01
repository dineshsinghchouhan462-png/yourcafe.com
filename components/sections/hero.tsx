"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const video = document.getElementById("hero-video") as HTMLVideoElement;
    if (!video) return;

    const onReady = () => {
      window.dispatchEvent(new Event("hero-ready"));
    };

    video.addEventListener("loadeddata", onReady);
    return () => video.removeEventListener("loadeddata", onReady);
  }, []);

  return (
    <section className="relative h-[100vh] pt-24 overflow-hidden bg-black">
      {/* Video */}
      <video
        id="hero-video"
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/videos/hero-poster.jpg"
      />

      {/* Soft cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight">
            A Sanctuary of<br />Calm Luxury
          </h1>

          <p className="text-xs md:text-sm tracking-[0.25em] text-gray-200 mb-12 uppercase">
            The Lazy Barn Café · Jodhpur
          </p>

          <a
            href="#about"
            className="inline-block border border-white/80 px-12 py-4 text-xs tracking-widest text-white hover:bg-white hover:text-black transition-all duration-500"
          >
            Visit The Lazy Barn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
