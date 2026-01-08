export default function MenuPage() {
  return (
    <main className="bg-[#f7f4ef] text-[#1f1f1f]">
      {/* ===============================
          HERO / INTRO
      =============================== */}
      <section className="mx-auto max-w-[900px] px-6 md:px-16 pt-40 md:pt-48 pb-32 text-center">
        <p className="text-[12px] tracking-[0.32em] uppercase text-gray-500 mb-6">
          Full Menu
        </p>

        <h1 className="font-serif text-[42px] md:text-[56px] leading-[1.05] mb-10">
          Thoughtfully crafted.<br />
          Served without hurry.
        </h1>

        {/* micro line */}
        <p className="text-[13px] tracking-[0.18em] uppercase text-gray-500">
          All dishes are vegetarian
        </p>
      </section>

      {/* ===============================
          MENU CONTENT
      =============================== */}
      <section className="mx-auto max-w-[1000px] px-6 md:px-16 pb-56 space-y-44">

        {/* ===== BAO ===== */}
        <MenuCategory title="Bao" subtitle="Soft buns, bold fillings">
          <MenuItem name="BBQ Bao" price="₹259">
            Bao buns filled with BBQ-flavoured veggies, crunchy slaw, and a zingy sauce.
          </MenuItem>
          <MenuItem name="Crispy Paneer Bao" price="₹279">
            Bao buns filled with crispy paneer, fresh slaw, and spicy mayo.
          </MenuItem>
          <MenuItem name="Crispy Veg Bao" price="₹269">
            Bao buns stuffed with crispy veg patty, crunchy slaw, and sauces.
          </MenuItem>
        </MenuCategory>

        {/* ===== BURGERS ===== */}
        <MenuCategory title="Burgers" subtitle="Comfort, done right">
          <MenuItem name="OG Veg Burger" price="₹149">
            Crispy patty, fresh veggies, tangy sauces in a toasted bun.
          </MenuItem>
          <MenuItem name="Garlic Burger (Aloo Patty)" price="₹169">
            Crispy aloo patty served with in-house garlic sauce in a toasted bun.
          </MenuItem>
          <MenuItem name="Kebab Burger (Paneer Patty)" price="₹159">
            Crispy paneer patty, fresh veggies, and tangy sauces.
          </MenuItem>
          <MenuItem name="Indian Paneer Burger" price="₹199">
            Spiced paneer patty with crunchy veggies and creamy cheese.
          </MenuItem>
        </MenuCategory>

        {/* ===== DUMPLINGS ===== */}
        <MenuCategory title="Dumplings" subtitle="Steamed, seared, and crisped">
          <MenuItem name="Steamed Dimsums" price="₹239">
            Soft dumplings filled with veggies, served with dipping sauce.
          </MenuItem>
          <MenuItem name="Crunchy Dimsums" price="₹259">
            Fried dimsums packed with veggie filling and tangy dip.
          </MenuItem>
          <MenuItem name="Gyoza" price="₹249">
            Pan-seared dumplings filled with veggies and tangy sauce.
          </MenuItem>
          <MenuItem name="Wonton" price="₹249">
            Thin-skinned wontons filled with vegetables, served steamed.
          </MenuItem>
        </MenuCategory>

        {/* ===== FRAPPE ===== */}
        <MenuCategory title="Frappe" subtitle="Cold, creamy indulgence">
          {[
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
          ].map(([name, price]) => (
            <MenuItem key={name} name={name} price={price} />
          ))}
        </MenuCategory>

        {/* ===== MOCKTAILS ===== */}
        <MenuCategory title="Mocktails" subtitle="Fresh, balanced, refreshing">
          {[
            "Virgin Mojito",
            "Blue Lagoon",
            "Spicy Guava",
            "Blackcurrant Bliss",
            "Pineapple Sunshine",
            "Green Apple Soda",
            "Kaccha Aam Punch",
            "Passion & Peach Punch",
            "Strawberry Sensation",
            "Watermelon Litchi Punch",
          ].map((item) => (
            <MenuItem key={item} name={item} price="₹169" />
          ))}
        </MenuCategory>

        {/* ===== ICED COFFEE ===== */}
        <MenuCategory title="Iced Coffee" subtitle="Slow brewed, perfectly chilled">
          {[
            ["Iced Americano", "₹229"],
            ["Iced Latte", "₹229"],
            ["Iced Caramel", "₹229"],
            ["Iced Mocha", "₹229"],
            ["Strawberry Mocha", "₹249"],
            ["Biscoff Iced Latte", "₹249"],
            ["Vietnamese Coffee", "₹249"],
          ].map(([name, price]) => (
            <MenuItem key={name} name={name} price={price} />
          ))}
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
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="mb-20 text-center">
        <h2 className="font-serif text-[36px] md:text-[48px] mb-4">
          {title}
        </h2>
        <p className="text-[13px] tracking-[0.22em] uppercase text-gray-500">
          {subtitle}
        </p>
      </div>

      <div className="space-y-12">{children}</div>
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
    <div className="max-w-[720px] mx-auto">
      <div className="flex items-start justify-between gap-6">
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
