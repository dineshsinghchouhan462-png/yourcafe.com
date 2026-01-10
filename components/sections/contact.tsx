"use client";

export default function Contact() {
  return (
    <section className="bg-[#f7f4ef] text-[#1f1f1f]">
      <div className="max-w-[900px] mx-auto px-6 py-40 text-center">

        {/* Eyebrow */}
        <p className="text-[12px] tracking-[0.32em] uppercase text-gray-500 mb-6">
          Contact
        </p>

        {/* Heading */}
        <h2 className="font-serif text-[42px] md:text-[56px] leading-[1.05] mb-12">
          Visit. Call. Connect.
        </h2>

        {/* Description */}
        <p className="max-w-[520px] mx-auto text-[16px] leading-[1.9] text-gray-600 mb-20">
          We’d love to welcome you at The Lazy Barn.
          Reach out for reservations, directions, or any questions.
        </p>

        {/* CONTACT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left max-w-[720px] mx-auto">

          {/* ADDRESS */}
          <div>
            <p className="text-[12px] tracking-[0.28em] uppercase text-gray-500 mb-4">
              Address
            </p>
            <a
              href="https://maps.google.com/?q=The Lazy Barn Jodhpur"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[17px] leading-[1.8] hover:opacity-80 transition-opacity"
            >
              The Lazy Barn<br />
              Ratanada, Jodhpur<br />
              Rajasthan
            </a>
          </div>

          {/* HOURS */}
          <div>
            <p className="text-[12px] tracking-[0.28em] uppercase text-gray-500 mb-4">
              Hours
            </p>
            <p className="text-[17px] leading-[1.8]">
              Everyday<br />
              11:00 AM – 11:00 PM
            </p>
          </div>

          {/* PHONE */}
          <div>
            <p className="text-[12px] tracking-[0.28em] uppercase text-gray-500 mb-4">
              Call
            </p>
            <a
              href="tel:+91XXXXXXXXXX"
              className="inline-flex items-center gap-3 text-[17px] hover:opacity-80 transition-opacity"
            >
              +91 XXXXX XXXXX
              <span className="block h-[1px] w-8 bg-[#1f1f1f]" />
            </a>
          </div>

          {/* WHATSAPP */}
          <div>
            <p className="text-[12px] tracking-[0.28em] uppercase text-gray-500 mb-4">
              WhatsApp
            </p>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[17px] hover:opacity-80 transition-opacity"
            >
              Chat on WhatsApp
              <span className="block h-[1px] w-8 bg-[#1f1f1f]" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
