"use client";

import { useEffect, useRef, useState } from "react";

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-[1100px] px-6 md:px-16 py-40 md:py-56">
        {/* Section Intro */}
        <div
          className={`
            text-center mb-32
            transition-all duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)]
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <p className="text-[13px] tracking-[0.22em] uppercase text-gray-500 mb-6">
            Signature Selections
          </p>
          <h2 className="font-serif text-[38px] md:text-[52px] leading-[1.1] text-gray-900">
            Crafted with intention
          </h2>
        </div>

        {/* Menu Items */}
        <div className="space-y-36">
          {menuItems.map((item, i) => (
            <div
              key={i}
              className={`
                flex flex-col md:flex-row gap-16 md:gap-24 items-center
                transition-all duration-[1600ms] ease-[cubic-bezier(.16,1,.3,1)]
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
              `}
              style={{ transitionDelay: `${i * 220}ms` }}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div
                  className="
                    relative overflow-hidden rounded-[30px]
                    will-change-transform
                    transition-transform duration-[1800ms] ease-[cubic-bezier(.16,1,.3,1)]
                    hover:scale-[1.015]
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full h-auto
                      transition-transform duration-[2200ms] ease-[cubic-bezier(.16,1,.3,1)]
                      hover:scale-[1.06]
                    "
                  />
                </div>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3
                  className={`
                    font-serif text-[28px] md:text-[32px] mb-4 text-gray-900
                    transition-all duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)]
                    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                  `}
                  style={{ transitionDelay: `${i * 220 + 120}ms` }}
                >
                  {item.title}
                </h3>

                <p
                  className={`
                    text-[15px] md:text-[16px] leading-[1.8] text-gray-600 max-w-[420px]
                    mx-auto md:mx-0
                    transition-all duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)]
                    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                  `}
                  style={{ transitionDelay: `${i * 220 + 260}ms` }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Full Menu Link */}
        <div
          className={`
            mt-44 text-center
            transition-all duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)]
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <a
            href="#"
            className="
              inline-block
              text-[13px]
              tracking-[0.28em]
              uppercase
              text-gray-700
              hover:text-gray-900
              transition-colors duration-500
            "
          >
            View full menu
          </a>
        </div>
      </div>
    </section>
  );
}
