"use client";

import { useEffect, useRef } from "react";

/* ===============================
   FULL MENU DATA (UNCHANGED)
=============================== */

const MENU = [
  {
    title: "Bao",
    subtitle: "Soft buns, bold fillings",
    items: [
      ["BBQ Bao", "₹259", "Bao buns filled with BBQ-flavoured veggies, crunchy slaw, and zingy sauce."],
      ["Crispy Paneer Bao", "₹279", "Crispy paneer, fresh slaw, and spicy mayo."],
      ["Crispy Veg Bao", "₹269", "Crispy veg patty with crunchy slaw and sauces."],
    ],
  },
  {
    title: "Burgers",
    subtitle: "Comfort, done right",
    items: [
      ["OG Veg Burger", "₹149"],
      ["Garlic Burger (Aloo Patty)", "₹169"],
      ["Kebab Burger (Paneer Patty)", "₹159"],
      ["Indian Paneer Burger", "₹199"],
    ],
  },
  {
    title: "Dumplings",
    subtitle: "Steamed, seared, crisped",
    items: [
      ["Steamed Dimsums", "₹239"],
      ["Crunchy Dimsums", "₹259"],
      ["Gyoza", "₹249"],
      ["Wonton", "₹249"],
    ],
  },
  {
    title: "Frappe",
    subtitle: "Cold, creamy indulgence",
    items: [
      ["Classic Frappe", "₹230"],
      ["Chocolate Frappe", "₹240"],
      ["Choco Chips Frappe", "₹250"],
      ["Oreo Frappe", "₹240"],
      ["KitKat Frappe", "₹240"],
      ["Nutella Frappe", "₹275"],
      ["Hazelnut Frappe", "₹240"],
      ["Caramel Frappe", "₹240"],
      ["Brownie Frappe", "₹240"],
      ["Biscoff Frappe", "₹275"],
    ],
  },
  {
    title: "Fries",
    subtitle: "Golden & crisp",
    items: [
      ["Classic Fries", "₹149"],
      ["Cheese Fries", "₹179"],
      ["Peri-Peri Fries", "₹179"],
      ["Potato Wedges", "₹179"],
    ],
  },
  {
    title: "Garlic Bread",
    subtitle: "Warm & buttery",
    items: [
      ["Chilli Cheese Garlic Bread", "₹209"],
      ["Onion Corn Garlic Bread", "₹219"],
      ["Pull Apart Garlic Bread", "₹259"],
    ],
  },
  {
    title: "Hot Beverages",
    subtitle: "Slow sips",
    items: [
      ["Espresso", "₹109"],
      ["Americano", "₹159"],
      ["Cappuccino", "₹159"],
      ["Latte", "₹159"],
      ["Flat White", "₹159"],
      ["Mocha", "₹189"],
      ["Hazelnut Coffee", "₹189"],
      ["Hot Chocolate", "₹199"],
    ],
  },
  {
    title: "Iced Tea",
    subtitle: "Light & refreshing",
    items: [
      ["Lemon Iced Tea", "₹209"],
      ["Peach Iced Tea", "₹209"],
      ["Cranberry Iced Tea", "₹209"],
      ["Strawberry Iced Tea", "₹209"],
      ["Watermelon Iced Tea", "₹209"],
    ],
  },
  {
    title: "Iced Coffee",
    subtitle: "Chilled & balanced",
    items: [
      ["Iced Americano", "₹229"],
      ["Iced Latte", "₹229"],
      ["Iced Caramel", "₹229"],
      ["Iced Mocha", "₹229"],
      ["Strawberry Mocha", "₹249"],
      ["Biscoff Iced Latte", "₹249"],
      ["Vietnamese Coffee", "₹249"],
    ],
  },
  {
    title: "Indo-Chinese",
    subtitle: "Bold & familiar",
    items: [
      ["Chilli Paneer", "₹289"],
      ["Chilli Mushroom", "₹289"],
      ["Chinese Bhel", "₹229"],
      ["Corn Fritters", "₹209"],
      ["Fried Rice", "₹199"],
      ["Honey Chilli Potato", "₹269"],
      ["Manchurian", "₹259"],
      ["Spring Rolls", "₹229"],
    ],
  },
  {
    title: "Noodles",
    subtitle: "Wok tossed",
    items: [
      ["Burnt Garlic Noodles", "₹239"],
      ["Chilli Garlic Noodles", "₹239"],
      ["Chowmein", "₹219"],
      ["Hakka Noodles", "₹219"],
      ["Pan Fried Exotica", "₹279"],
      ["Schezwan Noodles", "₹249"],
      ["Spinach Noodles", "₹259"],
    ],
  },
  {
    title: "Pasta",
    subtitle: "Comfort classics",
    items: [
      ["Aglio-E-Olio", "₹289"],
      ["Alfredo Pasta", "₹259"],
      ["Arrabiata Pasta", "₹259"],
      ["Gnocchi Pasta", "₹279"],
      ["Lasagna", "₹299"],
      ["Mix Sauce Pasta", "₹259"],
      ["Pesto Pasta", "₹309"],
      ["Ravioli Pasta", "₹309"],
    ],
  },
  {
    title: "Pizza",
    subtitle: "Oven fresh",
    items: [
      ["Margherita", "₹239"],
      ["OTC Pizza", "₹249"],
      ["Tandoori Paneer Pizza", "₹299"],
      ["Veg Exotica Pizza", "₹309"],
      ["Cheese Burst Pizza", "₹319"],
      ["Deep Dish Pizza", "₹339"],
    ],
  },
  {
    title: "Salads",
    subtitle: "Fresh & light",
    items: [
      ["Corn & Peas Salad", "₹229"],
      ["Kachumbar Salad", "₹189"],
      ["Paneer Mushroom Salad", "₹259"],
      ["Veg Delight", "₹259"],
    ],
  },
  {
    title: "Sandwich",
    subtitle: "Toasted & layered",
    items: [
      ["Veg Sandwich", "₹159"],
      ["OG Cheese Grill", "₹189"],
      ["Indian Paneer Sandwich", "₹219"],
      ["Chimi-Churri Sandwich", "₹239"],
      ["Pesto Exotica Sandwich", "₹249"],
      ["Tandoori Paneer Sandwich", "₹209"],
    ],
  },
  {
    title: "Tex-Mex",
    subtitle: "Bold flavours",
    items: [
      ["Nachos", "₹189"],
      ["Veg Cheese Taco", "₹229"],
      ["Birria Taco", "₹259"],
    ],
  },
  {
    title: "Wraps",
    subtitle: "Rolled & satisfying",
    items: [
      ["Veg Wrap", "₹209"],
      ["Paneer Wrap", "₹219"],
      ["Paneer Cheese Wrap", "₹249"],
      ["Dragon Wrap", "₹249"],
    ],
  },
];

/* ===============================
   PAGE
=============================== */

export default function MenuPage() {
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1f]">
      <section className="max-w-[900px] mx-auto px-6 pt-44 pb-32 text-center">
        <p className="text-[12px] tracking-[0.32em] uppercase text-gray-500 mb-6">
          Full Menu
        </p>
        <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.05] mb-8">
          Thoughtfully crafted.<br />Served without hurry.
        </h1>
        <p className="text-[13px] tracking-[0.18em] uppercase text-gray-500">
          All dishes are vegetarian
        </p>
      </section>

      <section className="max-w-[1000px] mx-auto px-6 pb-56 space-y-48">
        {MENU.map((cat, i) => (
          <section
            key={cat.title}
            ref={(el) => {
              if (el) sectionsRef.current[i] = el;
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
              {cat.items.map(([name, price, desc]) => (
                <div key={name} className="max-w-[720px] mx-auto group">
                  <div className="flex justify-between">
                    <h3 className="font-serif text-[20px] md:text-[22px]">
                      {name}
                      <span className="block h-[1px] w-0 bg-[#1f1f1f] transition-all duration-500 group-hover:w-8 mt-1" />
                    </h3>
                    <span className="text-gray-600">{price}</span>
                  </div>
                  {desc && (
                    <p className="mt-3 text-[15px] leading-[1.9] text-gray-600">
                      {desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </section>

      <style jsx>{`
        .is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </main>
  );
}
