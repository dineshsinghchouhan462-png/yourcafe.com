"use client";

import { useEffect, useRef, useState } from "react";

export default function Delivery() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#f7f4ef]">
      <div
        ref={ref}
        className={`
          max-w-[900px] mx-auto px-6 md:px-16
          py-44 md:py-56 text-center
          transition-all duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)]
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        {/* Eyebrow */}
        <p className="text-[12px] tracking-[0.32em] uppercase text-gray-500 mb-6">
          Delivery
        </p>

        {/* Title */}
        <h2 className="font-serif text-[36px] md:text-[48px] leading-[1.05] mb-10 text-[#1f1f1f]">
          Enjoy The Lazy Barn
          <br />
          wherever you are
        </h2>

        {/* Copy */}
        <p className="text-[15px] md:text-[16px] leading-[1.9] text-gray-600 max-w-[560px] mx-auto mb-20">
          Our menu is available for delivery through trusted partners.
          Prepared with the same care, packed gently, and meant to be enjoyed unhurried.
        </p>

        {/* Platforms */}
        <div className="flex items-center justify-center gap-12 mb-24">
          {["Zomato", "Swiggy"].map((platform) => (
            <span
              key={platform}
              className="
                font-serif text-[18px] text-gray-700
                relative group cursor-default
              "
            >
              {platform}
              <span
                className="
                  absolute left-0 -bottom-1 h-[1px] w-0 bg-gray-700
                  transition-all duration-500
                  group-hover:w-full
                "
              />
            </span>
          ))}
        </div>

        {/* CTA */}
        <div>
          <a
            href="#"
            className="
              inline-block
              text-[12px]
              tracking-[0.32em]
              uppercase
              text-gray-700
              transition-all duration-500
              hover:text-[#1f1f1f]
            "
          >
            Order online
          </a>
        </div>
      </div>
    </section>
  );
}
