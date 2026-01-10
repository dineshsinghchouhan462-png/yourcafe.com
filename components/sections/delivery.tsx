"use client";

export default function Delivery() {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="max-w-[900px] mx-auto px-6 pt-44 pb-40 text-center">

        {/* Eyebrow */}
        <p className="text-[12px] tracking-[0.32em] uppercase text-gray-500 mb-6">
          Delivery
        </p>

        {/* Heading */}
        <h2 className="font-serif text-[42px] md:text-[56px] leading-[1.05] mb-10">
          Enjoy The Lazy Barn
          <br />
          wherever you are
        </h2>

        {/* Description */}
        <p className="max-w-[520px] mx-auto text-[16px] leading-[1.9] text-gray-600 mb-20">
          Our menu is available for delivery through trusted partners.
          Prepared with the same care, packed gently, and meant to be enjoyed
          unhurried.
        </p>

        {/* DELIVERY CTAs */}
        <div className="flex flex-col items-center gap-14">

          {/* ZOMATO */}
          <a
            href="https://www.zomato.com/jodhpur/the-lazy-barn-3-ratanada/order"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex items-center gap-5
              text-[14px]
              tracking-[0.26em]
              uppercase
              text-[#1f1f1f]
              transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)]
              hover:-translate-y-[2px]
            "
          >
            <span className="opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              Order on
            </span>

            <span className="font-medium">
              Zomato
            </span>

            <span className="
              block
              h-[1px]
              w-10
              bg-[#1f1f1f]
              transition-all duration-500
              group-hover:w-16
            " />
          </a>

          {/* SWIGGY */}
          <a
            href="https://www.swiggy.com/city/jodhpur/the-lazy-barn-new-jodhpur-rest992096"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex items-center gap-5
              text-[14px]
              tracking-[0.26em]
              uppercase
              text-[#1f1f1f]
              transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)]
              hover:-translate-y-[2px]
            "
          >
            <span className="opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              Order on
            </span>

            <span className="font-medium">
              Swiggy
            </span>

            <span className="
              block
              h-[1px]
              w-10
              bg-[#1f1f1f]
              transition-all duration-500
              group-hover:w-16
            " />
          </a>

        </div>

        {/* Micro cue */}
        <p className="mt-24 text-[12px] tracking-[0.28em] uppercase text-gray-500">
          Order Online
        </p>

      </div>
    </section>
  );
}
