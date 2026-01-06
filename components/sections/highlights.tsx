"use client";

import { useEffect, useRef, useState } from "react";

export default function Highlights() {
  const [visibleBlocks, setVisibleBlocks] = useState<boolean[]>([false, false, false]);
  const refs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    const observers = refs.map((ref, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleBlocks((prev) => {
              const updated = [...prev];
              updated[i] = true;
              return updated;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.4 }
      );

      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <section className="bg-[#f7f4ef] overflow-hidden">
      <div className="mx-auto max-w-[900px] px-6 md:px-16 py-32 md:py-44">

        {/* Section Intro */}
        <div className="text-center mb-20 md:mb-28">
          <p className="text-[13px] tracking-[0.22em] uppercase text-gray-500 mb-6">
            The Experience
          </p>
          <h2
            className="
              font-serif
              text-[34px] md:text-[44px]
              leading-[1.15]
              text-gray-900
            "
          >
            A slower way to spend time
          </h2>
        </div>

        {/* Experience Blocks with Motion */}
        <div className="space-y-24 md:space-y-32">

          {[
            {
              title: "Crafted calm",
              text: "From the way the space is designed to how each cup is prepared, everything here encourages stillness. Nothing is rushed, and nothing is accidental.",
            },
            {
              title: "Time, uninterrupted",
              text: "Whether you arrive alone or with company, the space is designed for lingering conversations, quiet work, or simply watching the day unfold.",
            },
            {
              title: "Thoughtfully served",
              text: "Service is attentive but unobtrusive. Every detail is considered, so your experience feels effortless — from the first sip to the last moment.",
            },
          ].map((item, i) => (
            <div
              key={i}
              ref={refs[i]}
              className={`
                text-center transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]
                ${visibleBlocks[i]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: `${i * 180}ms` }}
            >
              <h3
                className="
                  font-serif text-[24px] md:text-[28px] mb-4 text-gray-900
                "
              >
                {item.title}
              </h3>
              <p
                className="
                  text-[16px] md:text-[17px]
                  leading-[1.75]
                  text-gray-600
                  max-w-[520px]
                  mx-auto
                "
              >
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
