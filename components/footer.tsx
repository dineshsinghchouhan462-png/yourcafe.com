"use client";

export default function Footer() {
  return (
    <footer className="bg-[#efeae2] text-[#1f1f1f]">
      <div className="max-w-[1100px] mx-auto px-6 pt-32 pb-24">

        {/* BRAND LINE */}
        <div className="text-center mb-28">
          <p className="font-serif text-[26px] md:text-[32px] leading-[1.3]">
            Coffee. Comfort. Care.
          </p>
          <p className="mt-6 text-[12px] tracking-[0.32em] uppercase text-gray-500">
            The Lazy Barn · Jodhpur
          </p>
        </div>

        {/* FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">

          {/* ADDRESS */}
          <div className="space-y-6">
            <p className="text-[12px] tracking-[0.32em] uppercase text-gray-500">
              Visit
            </p>
            <p className="text-[16px] leading-[1.9] text-gray-600 max-w-[280px]">
              The Lazy Barn<br />
              Sabji Mandi, Opp. Ratanada<br />
              Above Marwar Sweets<br />
              Jodhpur, Rajasthan
            </p>
          </div>

          {/* CONTACT */}
          <div className="space-y-6">
            <p className="text-[12px] tracking-[0.32em] uppercase text-gray-500">
              Contact
            </p>

            <a
              href="tel:+918890667769"
              className="group inline-flex items-center gap-4 text-[18px]"
            >
              <span className="transition-opacity duration-300 group-hover:opacity-80">
                +91 88906 67769
              </span>
              <span className="block h-[1px] w-8 bg-[#1f1f1f] transition-all duration-300 group-hover:w-14" />
            </a>

            <a
              href="https://wa.me/918890667769"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 text-[15px] tracking-[0.22em] uppercase"
            >
              <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                WhatsApp
              </span>
              <span className="block h-[1px] w-6 bg-[#1f1f1f] transition-all duration-300 group-hover:w-12" />
            </a>
          </div>

          {/* SOCIAL */}
          <div className="space-y-6">
            <p className="text-[12px] tracking-[0.32em] uppercase text-gray-500">
              Follow
            </p>

            <a
              href="https://www.instagram.com/thelazybarnjodhpur"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 text-[15px] tracking-[0.22em] uppercase"
            >
              <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                Instagram
              </span>
              <span className="block h-[1px] w-6 bg-[#1f1f1f] transition-all duration-300 group-hover:w-12" />
            </a>

            <a
              href="https://www.facebook.com/share/1GLkj6C6bM/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 text-[15px] tracking-[0.22em] uppercase"
            >
              <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                Facebook
              </span>
              <span className="block h-[1px] w-6 bg-[#1f1f1f] transition-all duration-300 group-hover:w-12" />
            </a>
          </div>

        </div>

        {/* FOOTNOTE */}
        <div className="mt-32 text-center">
          <p className="text-[11px] tracking-[0.28em] uppercase text-gray-500">
            © {new Date().getFullYear()} The Lazy Barn
          </p>
        </div>

      </div>
    </footer>
  );
}
