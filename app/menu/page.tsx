"use client";

import { useEffect, useRef, useState } from "react";

type MenuItemType = {
  name: string;
  price: string;
  desc?: string;
};

type Category = {
  title: string;
  subtitle: string;
  items: MenuItemType[];
};

const MENU: Category[] = [
  {
    title: "Bao",
    subtitle: "Soft buns, bold fillings",
    items: [
      {
        name: "BBQ Bao",
        price: "₹259",
        desc: "Bao buns filled with BBQ-flavoured veggies, crunchy slaw, and zingy sauce.",
      },
      {
        name: "Crispy Paneer Bao",
        price: "₹279",
        desc: "Crispy paneer, fresh slaw, and spicy mayo.",
      },
      {
        name: "Crispy Veg Bao",
        price: "₹269",
        desc: "Crispy veg patty with crunchy slaw and sauces.",
      },
    ],
  },
  {
    title: "Burgers",
    subtitle: "Comfort, done right",
    items: [
      { name: "OG Veg Burger", price: "₹149" },
      { name: "Garlic Burger (Aloo Patty)", price: "₹169" },
      { name: "Kebab Burger (Paneer Patty)", price: "₹159" },
      { name: "Indian Paneer Burger", price: "₹199" },
    ],
  },
  {
    title: "Dumplings",
    subtitle: "Steamed, seared, and crisped",
    items: [
      { name: "Steamed Dimsums", price: "₹239" },
      { name: "Crunchy Dimsums", price: "₹259" },
      { name: "Gyoza", price: "₹249" },
      { name: "Wonton", price: "₹249" },
    ],
  },
];

export default function MenuPage() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.25 }
    );

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1f] relative">
      {/* ===============================
          STICKY CATEGORY INDEX
      =============================== */}
      <aside className="hidden md:block fixed left-6 top-1/2 -translate-y-1/2 z-40">
        <ul className="space-y-3 text-[11px] tracking-[0.22em] uppercase text-gray-400">
          {MENU.map((cat, i) => (
            <li
              key={cat.title}
              className={`transition-colors duration-500 ${
                activeIndex === i ? "text-gray-900" : ""
              }`}
            >
              {cat.title}
            </li>
          ))}
        </ul>
      </aside>

      {/* ===============================
          HERO
      =============================== */}
      <section className="text-center pt-40 pb-32 px-6">
        <p className="text-[12px] tracking-[0.32em] uppercase text-gray-500 mb-6">
          Full Menu
        </p>
        <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.05] mb-10">
          Thoughtfully crafted.
          <br />
          Served without hurry.
        </h1>
        <p className="text-[13px] tracking-[0.18em] uppercase text-gray-500">
          All dishes are vegetarian
        </p>
      </section>

      {/* ===============================
          MENU CONTENT
      =============================== */}
      <section className="max-w-[1000px] mx-auto px-6 space-y-44 pb-56">
        {MENU.map((cat, i) => (
          <section
            key={cat.title}
            data-index={i}
            ref={(el) => {
              sectionsRef.current[i] = el;
            }}
            className="opacity-0 translate-y-6 transition-all duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)]"
          >
            <div className="text-center mb-20">
              <h2 className="font-serif text-[36px] md:text-[48px] mb-4">
                {cat.title}
              </h2>
              <p className="text-[13px] tracking-[0.22em] uppercase text-gray-500">
                {cat.subtitle}
              </p>
            </div>

            <div className="space-y-14">
              {cat.items.map((item, idx) => (
                <div key={idx} className="max-w-[720px] mx-auto">
                  <div className="flex justify-between items-start gap-6">
                    <h3 className="font-serif text-[20px] md:text-[22px]">
                      {item.name}
                    </h3>

                    {/* PRICE MICRO-MOTION */}
                    <span
                      className="text-[15px] text-gray-600 opacity-0 translate-y-1"
                      style={{
                        animation:
                          "priceIn 600ms cubic-bezier(.16,1,.3,1) forwards",
                        animationDelay: "120ms",
                      }}
                    >
                      {item.price}
                    </span>
                  </div>

                  {item.desc && (
                    <p className="mt-3 text-[15px] leading-[1.9] text-gray-600">
                      {item.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </section>

      {/* ===============================
          KEYFRAMES
      =============================== */}
      <style jsx>{`
        @keyframes priceIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
