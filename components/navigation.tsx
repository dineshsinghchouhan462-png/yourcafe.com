"use client";

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav
        className="
          mx-auto flex max-w-7xl items-center justify-between
          px-6 py-5
          bg-black/65
          backdrop-blur-md
        "
      >
        {/* Brand */}
        <h1 className="font-serif text-lg tracking-wide text-white">
          The Lazy Barn
        </h1>

        {/* Menu */}
        <button
          className="
            text-xs uppercase tracking-[0.35em]
            text-white/90
            hover:text-white
            transition
          "
        >
          Menu
        </button>
      </nav>
    </header>
  );
}
