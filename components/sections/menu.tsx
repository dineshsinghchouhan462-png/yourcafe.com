"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const menuItems = [
  {
    title: "Virgin Mojito",
    description:
      "Fresh mint, citrus lift, and gentle sparkle — clean, cooling, and unhurried.",
    image: "/images/virgin-mojito.jpg",
  },
  {
    title: "House Brewed Cold Coffee",
    description:
      "Slow-steeped for depth and balance, finished with a soft, lingering finish.",
    image: "/images/house-brewed-cold-coffee.jpg",
  },
  {
    title: "Biscoff Iced Latte",
    description:
      "Creamy iced coffee layered with caramel warmth and subtle spice.",
    image: "/images/biscoff-iced-latte.jpg",
  },
  {
    title: "Pan Asian Comfort Bowl",
    description:
      "Warm noodles, balanced sauces, and familiar flavors crafted with care.",
    image: "/images/pan-asian-comfort-bowl.jpg",
  },
];

export default function Menu() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const router = useRouter();

  /* ---------- SAFE REVEAL (MOBILE + DESKTOP) ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0,
        rootMargin: "-120px 0px -120px 0px",
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    // HARD FALLBACK (never blank section)
    const fallback = setTimeout(() => setVisible(true), 900);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  /* ---------- SUBTLE PARALLAX ---------- */
  useEffect(() => {
    const handleScroll = () => {
      imageRefs.current.forEach((el) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;

        if (rect.top < vh && rect.bottom > 0) {
          const progress = (vh - rect.top) / vh;
          const translateY = Math.min(Math.max(progress * 10, -6), 10);
          el.style.transform = `translateY(${translateY}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------- PAGE TRANSITION ---------- */
  const handleFullMenu = () => {
    setLeaving(true);
    setTimeout(() => router.push("/menu"), 500);
  };

  return (
    <section
      ref={sectionRef}
      className={`
        bg-[#f7f4ef]
        transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]
        ${leaving ? "opacity-0 scale-[0.985]" : "opacity-100 scale-100"}
      `}
    >
      <div className="mx-auto max-w-[1100px] px-6 md:px-16 py-36 md:py-56">

        {/* INTRO */}
        <div
          className={`
            text-center mb-28
            transition-all duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)]
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <p className="text-[13px] tracking-[0.22em] uppercase text-gray-500 mb-6">
            Signature Selections
          </p>
          <h2 className="font-serif text-[38px] md:text-[52px] leading-[1.1] text-gray-900">
            Crafted with intention
          </h2>
        </div>

        {/* ITEMS */}
        <div className="space-y-32">
          {menuItems.map((item, i) => (
            <div
              key={i}
              className={`
                flex flex-col md:flex-row gap-16 md:gap-24 items-center
                transition-all duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)]
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
              `}
              style={{ transitionDelay: `${i * 160}ms` }}
            >
              {/* IMAGE */}
              <div className="w-full md:w-1/2">
                <div
                  ref={(el) => {
                    imageRefs.current[i] = el;
                  }}
                  className="relative overflow-hidden rounded-[30px]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`
                      w-full h-auto
                      transition-[clip-path,transform]
                      duration-[1600ms]
                      ease-[cubic-bezier(.16,1,.3,1)]
                      ${visible
                        ? "clip-path-reveal scale-100"
                        : "clip-path-hidden scale-[1.04]"}
                    `}
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="font-serif text-[28px] md:text-[32px] mb-4 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-[15px] md:text-[16px] leading-[1.8] text-gray-600 max-w-[420px] mx-auto md:mx-0">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-40 text-center">
          <button
            onClick={handleFullMenu}
            className="text-[13px] tracking-[0.28em] uppercase text-gray-700 hover:text-gray-900 transition-colors duration-500"
          >
            View full menu
          </button>
        </div>
      </div>

      {/* MASK UTILITIES */}
      <style jsx>{`
        .clip-path-hidden {
          clip-path: inset(0 0 100% 0);
        }
        .clip-path-reveal {
          clip-path: inset(0 0 0 0);
        }
      `}</style>
    </section>
  );
}
