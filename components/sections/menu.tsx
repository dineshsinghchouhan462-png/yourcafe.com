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

  /* ---------- SAFE VISIBILITY ---------- */
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

    const fallback = setTimeout(() => setVisible(true), 900);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  /* ---------- VERY SUBTLE PARALLAX ---------- */
  useEffect(() => {
    const handleScroll = () => {
      imageRefs.current.forEach((img) => {
        if (!img) return;
        const rect = img.getBoundingClientRect();
        const vh = window.innerHeight;

        if (rect.top < vh && rect.bottom > 0) {
          const progress = (vh - rect.top) / vh;
          img.style.transform = `translateY(${progress * 14}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFullMenu = () => {
    setLeaving(true);
    setTimeout(() => router.push("/menu"), 520);
  };

  return (
    <section
      ref={sectionRef}
      className={`
        bg-[#f7f4ef]
        transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)]
        ${leaving ? "opacity-0 scale-[0.985]" : "opacity-100 scale-100"}
      `}
    >
      <div className="mx-auto max-w-[1100px] px-6 md:px-16 py-40 md:py-[420px]">

        {/* INTRO */}
        <div
          className={`
            text-center mb-[220px]
            transition-all duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)]
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
          `}
        >
          <p className="text-[12px] tracking-[0.28em] uppercase text-gray-500 mb-6">
            Signature Selections
          </p>
          <h2 className="font-serif text-[40px] md:text-[56px] leading-[1.05] tracking-[-0.01em] text-[#1f1f1f]">
            Crafted with intention
          </h2>
        </div>

        {/* ITEMS */}
        <div className="space-y-[220px]">
          {menuItems.map((item, i) => (
            <div
              key={i}
              className={`
                flex flex-col md:flex-row gap-20 md:gap-28 items-start
                transition-all duration-[1600ms] ease-[cubic-bezier(.16,1,.3,1)]
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
              `}
              style={{ transitionDelay: `${i * 180}ms` }}
            >
              {/* IMAGE */}
              <div className="w-full md:w-1/2">
                <div
                  ref={(el) => {
                    imageRefs.current[i] = el;
                  }}
                  className="
                    relative overflow-hidden rounded-[36px]
                    bg-[#efece6]
                    shadow-[0_48px_140px_rgba(0,0,0,0.28)]
                    transition-transform duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)]
                    hover:scale-[1.02]
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`
                      w-full h-auto
                      scale-[1.04]
                      transition-[clip-path,transform]
                      duration-[2000ms]
                      ease-[cubic-bezier(.16,1,.3,1)]
                      ${visible
                        ? "clip-path-reveal scale-100"
                        : "clip-path-hidden scale-[1.08]"}
                    `}
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className="w-full md:w-1/2 md:pt-14">
                <h3 className="
                  font-serif
                  text-[30px] md:text-[36px]
                  leading-[1.15]
                  tracking-[-0.01em]
                  mb-8
                  text-[#1f1f1f]
                ">
                  {item.title}
                </h3>

                <p className="
                  text-[15px] md:text-[17px]
                  leading-[1.9]
                  text-[#4a4a4a]
                  max-w-[420px]
                ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-[260px] text-center">
          <button
            onClick={handleFullMenu}
            className="
              text-[12px]
              tracking-[0.32em]
              uppercase
              text-[#3a3a3a]
              hover:text-[#1f1f1f]
              transition-colors duration-500
            "
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
