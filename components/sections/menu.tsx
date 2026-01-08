"use client";

import Link from "next/link";

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
  return (
    <section className="menu-surface">
      <div className="menu-container">
        {/* INTRO */}
        <div className="menu-intro reveal">
          <p className="menu-eyebrow">Signature Selections</p>
          <h2 className="menu-title">Crafted with intention</h2>
        </div>

        {/* ITEMS */}
        <div className="menu-list">
          {menuItems.map((item, i) => (
            <div key={i} className="menu-item reveal delay">
              {/* IMAGE */}
              <div className="menu-image-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="menu-image"
                />
              </div>

              {/* TEXT */}
              <div className="menu-text">
                <h3 className="menu-item-title">{item.title}</h3>
                <p className="menu-item-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA — FIXED */}
        <div className="menu-cta reveal">
          <Link href="/menu" className="menu-link">
            View full menu
          </Link>
        </div>
      </div>
    </section>
  );
}
