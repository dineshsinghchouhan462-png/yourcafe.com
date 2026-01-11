"use client";

export default function ContactMap() {
  return (
    <section className="bg-[#f7f4ef] pb-40">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* MAP CARD */}
        <a
          href="https://www.google.com/maps/place/The+Lazy+Barn/@26.2776,73.0119,17z"
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative rounded-[32px] overflow-hidden bg-[#e5e1db]"
        >

          {/* STATIC MAP IMAGE */}
          <img
            src="/images/lazy-barn-map.jpg"
            alt="The Lazy Barn location map"
            className="w-full h-[420px] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
            draggable={false}
          />

          {/* SOFT OVERLAY */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />

          {/* CTA */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-6 px-10 py-5 rounded-full bg-[#f7f4ef] shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <span className="text-[12px] tracking-[0.32em] uppercase">
                Open in Google Maps
              </span>
              <span className="block h-[1px] w-10 bg-[#1f1f1f]" />
            </div>
          </div>

        </a>

      </div>
    </section>
  );
}
