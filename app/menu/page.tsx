export default function MenuPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1f]">

      {/* ===============================
          INTRO / HERO
      =============================== */}
      <section className="mx-auto max-w-[900px] px-6 md:px-16 pt-40 md:pt-48 pb-28 text-center">
        <p className="text-[12px] tracking-[0.32em] uppercase text-gray-500 mb-6">
          Full Menu
        </p>

        <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.05] mb-10">
          Thoughtfully crafted.<br />Served without hurry.
        </h1>

        <p className="text-[13px] tracking-[0.18em] uppercase text-gray-500">
          All dishes are vegetarian
        </p>
      </section>

      {/* ===============================
          MENU INDEX (REVEAL)
      =============================== */}
      <section className="sticky top-[88px] z-30 bg-[#f7f4ef]/90 backdrop-blur-sm border-b border-black/5">
        <div className="mx-auto max-w-[1000px] px-6 md:px-16 py-6 flex flex-wrap justify-center gap-x-8 gap-y-4">
          {[
            "Bao",
            "Burgers",
            "Dumplings",
            "Frappe",
            "Mocktails",
            "Iced Coffee",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "")}`}
              className="group relative text-[12px] tracking-[0.28em] uppercase text-gray-600"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-gray-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
          ))}
        </div>
      </section>

      {/* ===============================
          MENU CONTENT
      =============================== */}
      <section className="mx-auto max-w-[1000px] px-6 md:px-16 pb-56 space-y-48">

        <MenuCategory id="bao" title="Bao" subtitle="Soft buns, bold fillings">
          <MenuItem name="BBQ Bao" price="₹259">
            Bao buns filled with BBQ-flavoured veggies, crunchy slaw, and zingy sauce.
          </MenuItem>
          <MenuItem name="Crispy Paneer Bao" price="₹279">
            Crispy paneer with fresh slaw and spicy mayo.
          </MenuItem>
          <MenuItem name="Crispy Veg Bao" price="₹269">
            Crispy veg patty, crunchy slaw, and layered sauces.
          </MenuItem>
        </MenuCategory>

        <MenuCategory id="burgers" title="Burgers" subtitle="Comfort, done right">
          <MenuItem name="OG Veg Burger" price="₹149">
            Crispy patty, fresh veggies, tangy sauces.
          </MenuItem>
          <MenuItem name="Garlic Burger (Aloo Patty)" price="₹169">
            Aloo patty with in-house garlic sauce.
          </MenuItem>
          <MenuItem name="Kebab Burger (Paneer Patty)" price="₹159">
            Paneer patty with crunchy veggies.
          </MenuItem>
          <MenuItem name="Indian Paneer Burger" price="₹199">
            Spiced paneer with cheese and sauces.
          </MenuItem>
        </MenuCategory>

        <MenuCategory id="dumplings" title="Dumplings" subtitle="Steamed & seared">
          <MenuItem name="Steamed Dimsums" price="₹239" />
          <MenuItem name="Crunchy Dimsums" price="₹259" />
          <MenuItem name="Gyoza" price="₹249" />
          <MenuItem name="Wonton" price="₹249" />
        </MenuCategory>

        <MenuCategory id="frappe" title="Frappe" subtitle="Cold indulgence">
          {[
            "Classic Frappe",
            "Chocolate Frappe",
            "Oreo Frappe",
            "KitKat Frappe",
            "Nutella Frappe",
            "Biscoff Frappe",
          ].map((item) => (
            <MenuItem key={item} name={item} price="₹240+" />
          ))}
        </MenuCategory>

        <MenuCategory id="mocktails" title="Mocktails" subtitle="Fresh & balanced">
          {[
            "Virgin Mojito",
            "Blue Lagoon",
            "Spicy Guava",
            "Blackcurrant Bliss",
            "Pineapple Sunshine",
          ].map((item) => (
            <MenuItem key={item} name={item} price="₹169" />
          ))}
        </MenuCategory>

        <MenuCategory id="icedcoffee" title="Iced Coffee" subtitle="Slow brewed">
          <MenuItem name="Iced Americano" price="₹229" />
          <MenuItem name="Iced Latte" price="₹229" />
          <MenuItem name="Biscoff Iced Latte" price="₹249" />
          <MenuItem name="Vietnamese Coffee" price="₹249" />
        </MenuCategory>

      </section>

      {/* ===============================
          CLOSING LINE
      =============================== */}
      <section className="text-center pb-48">
        <p className="font-serif text-[26px] md:text-[32px] text-gray-700">
          Slow mornings. Unhurried evenings.
        </p>
      </section>
    </main>
  );
}

/* ===============================
   COMPONENTS
=============================== */

function MenuCategory({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-[160px]">
      <div className="mb-24 text-center">
        <h2 className="font-serif text-[36px] md:text-[48px] mb-4 relative inline-block">
          {title}
          <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-gray-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
        </h2>
        <p className="text-[13px] tracking-[0.22em] uppercase text-gray-500">
          {subtitle}
        </p>
      </div>
      <div className="space-y-14">{children}</div>
    </section>
  );
}

function MenuItem({
  name,
  price,
  children,
}: {
  name: string;
  price: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="max-w-[720px] mx-auto group">
      <div className="flex items-start justify-between gap-6 transition-transform duration-500 group-hover:translate-x-1">
        <h3 className="font-serif text-[20px] md:text-[22px]">
          {name}
        </h3>
        <span className="text-[15px] text-gray-600 whitespace-nowrap">
          {price}
        </span>
      </div>
      {children && (
        <p className="mt-3 text-[15px] leading-[1.9] text-gray-600">
          {children}
        </p>
      )}
    </div>
  );
}
