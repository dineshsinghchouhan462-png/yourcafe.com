"use client";

export default function ContactMap() {
  return (
    <section className="bg-[#f7f4ef] pb-40">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* MAP WRAPPER */}
        <div className="relative overflow-hidden rounded-[36px] shadow-[0_40px_120px_rgba(0,0,0,0.25)]">

          {/* MAP OVERLAY (soft luxury mask) */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#f7f4ef]/70 via-transparent to-transparent" />

          {/* MAP */}
          <iframe
            title="The Lazy Barn Location"
            src="https://www.google.com/maps?q=The+Lazy+Barn+Ratanada+Jodhpur&output=embed"
            className="w-full h-[420px] md:h-[520px] grayscale-[20%] contrast-[105%] saturate-[90%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* TAP CTA */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=The+Lazy+Barn+Ratanada+Jodhpur"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 group inline-flex items-center gap-6 bg-[#f7f4ef]/90 backdrop-blur-md px-8 py-4 rounded-full text-[13px] tracking-[0.22em] uppercase shadow-lg"
          >
            <span className="opacity-80 group-hover:opacity-100 transition-opacity">
              Open in Google Maps
            </span>
            <span className="block h-[1px] w-8 bg-[#1f1f1f] transition-all duration-300 group-hover:w-14" />
          </a>

        </div>
      </div>
    </section>
  );
}
