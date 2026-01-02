"use client";

import { useState } from "react";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="bg-transparent">
        <div className="mx-auto max-w-[1100px] px-6 md:px-16 py-32 md:py-40">
          
          {/* Image Wrapper */}
          <div
            className="relative overflow-hidden rounded-[28px] cursor-zoom-in group"
            onClick={() => setOpen(true)}
          >
            <img
              src="/images/philosophy.jpg"
              alt="The Lazy Barn interior"
              className="
                w-full h-auto
                transition-transform duration-[1200ms] ease-out
                group-hover:scale-[1.04]
              "
            />

            {/* Soft glass overlay on hover */}
            <div
              className="
                pointer-events-none
                absolute inset-0
                bg-black/0
                group-hover:bg-black/10
                transition-colors duration-700
              "
            />
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {open && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <img
            src="/images/philosophy.jpg"
            alt="The Lazy Barn interior enlarged"
            className="
              max-h-[90vh]
              max-w-[90vw]
              rounded-[24px]
              shadow-2xl
              transition-transform duration-500
            "
          />
        </div>
      )}
    </>
  );
}
