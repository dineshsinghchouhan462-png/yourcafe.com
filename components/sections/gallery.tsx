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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
    <section
      id="gallery"
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

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {images.map((src, i) => {
            const isActive = activeIndex === i;

            return (
              <div
                key={i}
                className={`
                  relative overflow-hidden rounded-[28px]
                  cursor-zoom-in
                  transition-all duration-[1200ms] ease-out
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                  ${isActive ? "z-10" : ""}
                `}
                style={{ transitionDelay: `${i * 180}ms` }}
                onClick={() => setActiveIndex(isActive ? null : i)}
              >
                <img
                  src={src}
                  alt="The Lazy Barn interior"
                  className={`
                    w-full h-full object-cover
                    transition-transform duration-[1400ms] ease-out
                    ${isActive ? "scale-[1.12]" : "hover:scale-[1.03]"}
                  `}
                />

                <div
                  className={`
                    absolute inset-0
                    transition-colors duration-700
                    ${isActive ? "bg-black/0" : "hover:bg-black/10"}
                  `}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
