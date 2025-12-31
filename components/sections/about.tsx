export default function About() {
  return (
    <section
      id="about"
      className="relative bg-cream py-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        
        {/* IMAGE */}
        <div className="relative h-[420px] overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80"
            alt="The Lazy Barn Cafe Interior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* TEXT */}
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gray-500">
            Our Philosophy
          </p>

          <h2 className="mb-6 font-serif text-4xl leading-tight text-gray-900">
            Calm. Crafted. <br />
            Intentionally Slow.
          </h2>

          <p className="max-w-md text-gray-600 leading-relaxed">
            The Lazy Barn is designed as a sanctuary of stillness — where
            European elegance meets Japanese restraint. Every detail invites
            you to pause, breathe, and enjoy moments that unfold naturally.
          </p>
        </div>
      </div>
    </section>
  );
}
