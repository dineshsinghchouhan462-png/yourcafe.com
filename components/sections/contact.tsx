"use client";

export default function Contact() {
  return (
    <section id="visit" className="bg-[#f7f4ef] text-[#1f1f1f]">
      <div className="max-w-[900px] mx-auto px-6 pt-40 pb-40 space-y-24">

        {/* ADDRESS */}
        <div className="space-y-6">
          <p className="text-[12px] tracking-[0.32em] uppercase text-gray-500">
            Address
          </p>

          <p className="font-serif text-[18px] leading-[1.9] text-gray-600 max-w-[520px]">
            The Lazy Barn<br />
            Sabji Mandi, opposite Ratanda,<br />
            above Marwar Sweets,<br />
            Prajapat Colony, Ratanada,<br />
            Jodhpur, Rajasthan 342001
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=The+Lazy+Barn+Ratanada+Jodhpur"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 text-[14px] tracking-[0.22em] uppercase mt-4"
          >
            <span className="opacity-70 group-hover:opacity-100 transition-opacity">
              View on Maps
            </span>
            <span className="block h-[1px] w-10 bg-[#1f1f1f] transition-all duration-300 group-hover:w-16" />
          </a>
        </div>

        {/* HOURS */}
        <div className="space-y-4">
          <p className="text-[12px] tracking-[0.32em] uppercase text-gray-500">
            Hours
          </p>

          <p className="font-serif text-[18px] text-gray-700">
            Everyday<br />
            11:00 AM – 11:30 PM
          </p>
        </div>

        {/* CALL */}
        <div className="space-y-4">
          <p className="text-[12px] tracking-[0.32em] uppercase text-gray-500">
            Call
          </p>

          <a
            href="tel:+918890667769"
            className="group inline-flex items-center gap-6 font-serif text-[20px]"
          >
            <span className="transition-opacity duration-300 group-hover:opacity-80">
              +91 88906 67769
            </span>
            <span className="block h-[1px] w-10 bg-[#1f1f1f] transition-all duration-300 group-hover:w-16" />
          </a>
        </div>

        {/* WHATSAPP */}
        <div className="space-y-4">
          <p className="text-[12px] tracking-[0.32em] uppercase text-gray-500">
            WhatsApp
          </p>

          <a
            href="https://wa.me/918890667769"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-6 font-serif text-[18px]"
          >
            <span className="transition-opacity duration-300 group-hover:opacity-80">
              Chat on WhatsApp
            </span>
            <span className="block h-[1px] w-10 bg-[#1f1f1f] transition-all duration-300 group-hover:w-16" />
          </a>
        </div>

      </div>
    </section>
  );
}
