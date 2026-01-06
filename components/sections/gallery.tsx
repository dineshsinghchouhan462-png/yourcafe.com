"use client";

import { useEffect, useRef, useState } from "react";

const images = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="bg-[#f7f4ef] overflow-hidden"
      >
        <div className="mx-auto max-w-[1300px] px-6 md:px-16 py-36 md:py-48">

          {/* Section Intro */}
          <div
            className={`
              text-center mb-24 transition-all duration-[1200ms] ease-out
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >
            <p className="text-[13px] tracking-[0.22em] uppercase text-gray-500 mb-6">
              Inside The Space
            </p>
            <h2 className="font-serif text-[36px] md:text-[48px] leading-[1.1] text-gray-900">
              Moments worth lingering over
            </h2>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
            {images.map((src, i) => (
              <div
                key={i}
                className={`
                  relative overflow-hidden rounded-[28px]
                  transition-all duration-[1400ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]
                  cursor-zoom-in
                  ${visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"}
                `}
                style={{ transitionDelay: `${i * 180}ms` }}
                onClick={() => setActiveImage(src)}
              >
                <img
                  src={src}
                  alt="The Lazy Barn interior"
                  className="
                    w-full h-full object-cover
                    transition-transform duration-[1600ms] ease-out
                    hover:scale-[1.04]
                  "
                />
                <div className="
                  absolute inset-0
                  bg-black/0
                  hover:bg-black/10
                  transition-colors duration-700
                " />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeImage && (
        <div
          className="
            fixed inset-0 z-[999]
            flex items-center justify-center
            bg-black/80 backdrop-blur-xl
          "
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            alt="Enlarged view"
            className="
              max-w-[90vw] max-h-[90vh]
              rounded-[28px]
              shadow-2xl
            "
          />
        </div>
      )}
    </>
  );
}
