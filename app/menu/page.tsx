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

        <p className="text-[13px] tracking-[0.18em] uppercase text-gray-500">
          All dishes are vegetarian
        </p>
      </section>

      {/* ===============================
          MENU CONTENT
      =============================== */}
      <section className="mx-auto max-w-[1000px] px-6 md:px-16 pb-56 space-y-48">

        {/* ===== BAO ===== */}
        <MenuCategory title="Bao" subtitle="Soft buns, bold fillings">
          <MenuItem name="BBQ Bao" price="₹259">
            Bao buns filled with BBQ-flavoured veggies, crunchy slaw, and a zingy sauce.
          </MenuItem>
          <MenuItem name="Crispy Paneer Bao" price="₹279">
            Crispy paneer, fresh slaw, and spicy mayo.
          </MenuItem>
          <MenuItem name="Crispy Veg Bao" price="₹269">
            Crispy veg patty, crunchy slaw, and sauces.
          </MenuItem>
        </MenuCategory>

        {/* ===== BURGERS ===== */}
        <MenuCategory title="Burgers" subtitle="Comfort, done right">
          <MenuItem name="OG Veg Burger" price="₹149" />
          <MenuItem name="Garlic Burger (Aloo Patty)" price="₹169" />
          <MenuItem name="Kebab Burger (Paneer Patty)" price="₹159" />
          <MenuItem name="Indian Paneer Burger" price="₹199" />
        </MenuCategory>

        {/* ===== DUMPLINGS ===== */}
        <MenuCategory title="Dumplings" subtitle="Steamed, seared, crisped">
          <MenuItem name="Steamed Dimsums" price="₹239" />
          <MenuItem name="Crunchy Dimsums" price="₹259" />
          <MenuItem name="Gyoza" price="₹249" />
          <MenuItem name="Wonton" price="₹249" />
        </MenuCategory>

        {/* ===== FRAPPE ===== */}
        <MenuCategory title="Frappe" subtitle="Cold, creamy indulgence">
          {[
            ["Classic Frappe","₹230"],
            ["Chocolate Frappe","₹240"],
            ["Choco Chips Frappe","₹250"],
            ["Oreo Frappe","₹240"],
            ["KitKat Frappe","₹240"],
            ["Nutella Frappe","₹275"],
            ["Hazelnut Frappe","₹240"],
            ["Caramel Frappe","₹240"],
            ["Brownie Frappe","₹240"],
            ["Biscoff Frappe","₹275"],
          ].map(([n,p]) => (
            <MenuItem key={n} name={n} price={p} />
          ))}
        </MenuCategory>

        {/* ===== FRIES ===== */}
        <MenuCategory title="Fries" subtitle="Golden & indulgent">
          <MenuItem name="Classic Fries" price="₹149" />
          <MenuItem name="Cheese Fries" price="₹179" />
          <MenuItem name="Peri Peri Fries" price="₹179" />
          <MenuItem name="Potato Wedges" price="₹179" />
        </MenuCategory>

        {/* ===== GARLIC BREAD ===== */}
        <MenuCategory title="Garlic Bread" subtitle="Warm, shareable comfort">
          <MenuItem name="Chilli Cheese Garlic Bread" price="₹209" />
          <MenuItem name="Onion Corn Garlic Bread" price="₹219" />
          <MenuItem name="Pull Apart Garlic Bread" price="₹259" />
        </MenuCategory>

        {/* ===== HOT BEVERAGES ===== */}
        <MenuCategory title="Hot Beverages" subtitle="Slow brewed warmth">
          <MenuItem name="Espresso" price="₹109" />
          <MenuItem name="Americano" price="₹159" />
          <MenuItem name="Latte" price="₹159" />
          <MenuItem name="Cappuccino" price="₹159" />
          <MenuItem name="Flat White" price="₹159" />
          <MenuItem name="Mocha" price="₹189" />
          <MenuItem name="Hazelnut Coffee" price="₹189" />
          <MenuItem name="Hot Chocolate" price="₹199" />
        </MenuCategory>

        {/* ===== ICED TEA ===== */}
        <MenuCategory title="Iced Tea" subtitle="Light & refreshing">
          {[
            "Lemon","Peach","Strawberry","Cranberry","Watermelon"
          ].map(n => (
            <MenuItem key={n} name={`${n} Iced Tea`} price="₹209" />
          ))}
        </MenuCategory>

        {/* ===== ICED COFFEE ===== */}
        <MenuCategory title="Iced Coffee" subtitle="Perfectly chilled">
          <MenuItem name="Iced Americano" price="₹229" />
          <MenuItem name="Iced Latte" price="₹229" />
          <MenuItem name="Iced Caramel" price="₹229" />
          <MenuItem name="Iced Mocha" price="₹229" />
          <MenuItem name="Strawberry Mocha" price="₹249" />
          <MenuItem name="Biscoff Iced Latte" price="₹249" />
          <MenuItem name="Vietnamese Coffee" price="₹249" />
        </MenuCategory>

        {/* ===== INDO-CHINESE ===== */}
        <MenuCategory title="Indo-Chinese" subtitle="Bold, familiar flavours">
          <MenuItem name="Chilli Paneer" price="₹289" />
          <MenuItem name="Chilli Mushroom" price="₹289" />
          <MenuItem name="Manchurian" price="₹259" />
          <MenuItem name="Honey Chilli Potato" price="₹269" />
          <MenuItem name="Spring Rolls" price="₹229" />
          <MenuItem name="Chinese Bhel" price="₹229" />
          <MenuItem name="Corn Fritters" price="₹209" />
          <MenuItem name="Fried Rice" price="₹199" />
        </MenuCategory>

        {/* ===== NOODLES ===== */}
        <MenuCategory title="Noodles" subtitle="Comfort bowls">
          <MenuItem name="Hakka Noodles" price="₹219" />
          <MenuItem name="Chowmein" price="₹219" />
          <MenuItem name="Chilli Garlic Noodles" price="₹239" />
          <MenuItem name="Burnt Garlic Noodles" price="₹239" />
          <MenuItem name="Schezwan Noodles" price="₹249" />
          <MenuItem name="Spinach Noodles" price="₹259" />
          <MenuItem name="Pan Fried Exotica" price="₹279" />
        </MenuCategory>

        {/* ===== PASTA ===== */}
        <MenuCategory title="Pasta" subtitle="Classic & indulgent">
          <MenuItem name="Aglio E Olio" price="₹289" />
          <MenuItem name="Alfredo Pasta" price="₹259" />
          <MenuItem name="Arrabiata Pasta" price="₹259" />
          <MenuItem name="Mix Sauce Pasta" price="₹259" />
          <MenuItem name="Gnocchi Pasta" price="₹279" />
          <MenuItem name="Lasagna" price="₹299" />
          <MenuItem name="Pesto Pasta" price="₹309" />
          <MenuItem name="Ravioli Pasta" price="₹309" />
        </MenuCategory>

        {/* ===== PIZZA ===== */}
        <MenuCategory title="Pizza" subtitle="Baked to comfort">
          <MenuItem name="Margherita Pizza" price="₹239" />
          <MenuItem name="OTC Pizza" price="₹249" />
          <MenuItem name="Tandoori Paneer Pizza" price="₹299" />
          <MenuItem name="Veg Exotica Pizza" price="₹309" />
          <MenuItem name="Cheese Burst Pizza" price="₹319" />
          <MenuItem name="Deep Dish Pizza" price="₹339" />
        </MenuCategory>

        {/* ===== SALADS ===== */}
        <MenuCategory title="Salads" subtitle="Fresh & balanced">
          <MenuItem name="Kachumbar Salad" price="₹189" />
          <MenuItem name="Corn & Peas Salad" price="₹229" />
          <MenuItem name="Paneer Mushroom Salad" price="₹259" />
          <MenuItem name="Veg Delight Salad" price="₹259" />
        </MenuCategory>

        {/* ===== SANDWICH ===== */}
        <MenuCategory title="Sandwich" subtitle="Grilled & layered">
          <MenuItem name="Veg Sandwich" price="₹159" />
          <MenuItem name="OG Cheese Grill Sandwich" price="₹189" />
          <MenuItem name="Indian Paneer Sandwich" price="₹219" />
          <MenuItem name="Chimichurri Sandwich" price="₹239" />
          <MenuItem name="Tandoori Paneer Sandwich" price="₹209" />
          <MenuItem name="Pesto Exotica Sandwich" price="₹249" />
        </MenuCategory>

        {/* ===== TEX-MEX ===== */}
        <MenuCategory title="Tex-Mex" subtitle="Bold & playful">
          <MenuItem name="Veg Cheese Taco" price="₹229" />
          <MenuItem name="Birria Taco" price="₹259" />
          <MenuItem name="Nachos" price="₹189" />
        </MenuCategory>

        {/* ===== WRAPS ===== */}
        <MenuCategory title="Wraps" subtitle="Rolled & satisfying">
          <MenuItem name="Veg Wrap" price="₹209" />
          <MenuItem name="Paneer Wrap" price="₹219" />
          <MenuItem name="Paneer Cheese Wrap" price="₹249" />
          <MenuItem name="Dragon Wrap" price="₹249" />
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
      <div className="mb-24 text-center">
        <h2 className="font-serif text-[36px] md:text-[48px] mb-4">
          {title}
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
