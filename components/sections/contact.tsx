"use client";

export default function Contact() {
  return (
    <section className="bg-[#f7f4ef] text-[#1f1f1f]">
      <div className="max-w-[900px] mx-auto px-6 pt-40 pb-40 space-y-24">

        {/* ADDRESS */}
        <div className="space-y-6">
          <p className="text-[12px] tracking-[0.32em] uppercase text-gray-500">
            Address
          </p>

          <p className="text-[18px] leading-[1.9] text-gray-600 max-w-[520px]">
            The Lazy Barn<br />
            Sabji Mandi, opposite Ratanda,<br />
            above Marwar Sweets,<br />
            Prajapat Colony, Ratanada,<br />
            Jodhpur, Rajasthan 342001
          </p>
        </div>

        {/* HOURS */}
        <div className="space-y-4">
          <p className="text-[12px] tracking-[0.32em] uppercase text-gray-500">
            Hours
          </p>

          <p className="text-[18px]">
            Everyday<br />
            <span className="text-gray-700">11:00 AM – 11:30 PM</span>
          </p>
        </div>

        {/* CALL */}
        <div className="space-y-4">
          <p className="text-[12px] tracking-[0.32em] uppercase text-gray-500">
            Call
          </p>

          <a
            href="tel:+918890667769"
            className="group inline-flex items-center gap-6 text-[20px]"
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
            className="group inline-flex items-center gap-6 text-[18px]"
          >
            <span className="transition-opacity duration-300 group-hover:opacity-80">
              Chat on WhatsApp
            </span>
            <span className="block h-[1px] w-10 bg-[#1f1f1f] transition-all duration-300 group-hover:w-16" />
          </a>
        </div>

        {/* DELIVERY CTA */}
        <div className="space-y-10 pt-10">
          <p className="text-[12px] tracking-[0.32em] uppercase text-gray-500 text-center">
            Order Online
          </p>

          <div className="flex flex-col items-center gap-8">
            <a
              href="https://www.zomato.com/jodhpur/the-lazy-barn-3-ratanada/order"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-6 text-[15px] tracking-[0.24em] uppercase"
            >
              <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                Order on
              </span>
              <span className="font-medium">Zomato</span>
              <span className="block h-[1px] w-10 bg-[#1f1f1f] transition-all duration-300 group-hover:w-16" />
            </a>

            <a
              href="https://www.swiggy.com/city/jodhpur/the-lazy-barn-new-jodhpur-rest992096"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-6 text-[15px] tracking-[0.24em] uppercase"
            >
              <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                Order on
              </span>
              <span className="font-medium">Swiggy</span>
              <span className="block h-[1px] w-10 bg-[#1f1f1f] transition-all duration-300 group-hover:w-16" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
