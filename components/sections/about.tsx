"use client";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/images/philosophy.jpg"
        alt="The Lazy Barn interior"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Warm luxury overlay */}
      <div className="absolute inset-0 bg-[#9c5a3c]/70" />

      {/* Content */}
      <div
        className="
          relative z-10
          max-w-[1200px]
          mx-auto
          px-6 md:px-16
          py-32 md:py-44
          text-[#f7f4ef]
        "
      >
        {/* Small label */}
        <p className="text-[12px] tracking-[0.32em] uppercase opacity-80 mb-6">
          The Experience
        </p>

        {/* Main philosophy */}
        <h2
          className="
            font-serif
            text-[42px] md:text-[64px]
            leading-[1.05]
            max-w-[640px]
            mb-8
          "
        >
          A slower way<br />
          to spend time
        </h2>

        {/* Supporting text */}
        <p
          className="
            text-[16px] md:text-[18px]
            leading-[1.9]
            max-w-[520px]
            opacity-90
          "
        >
          A place shaped by slow mornings, familiar conversations,
          and time left unhurried.
        </p>

        {/* Bottom meta row */}
        <div
          className="
            mt-24
            flex items-center justify-between
            max-w-[520px]
            text-[12px]
            tracking-[0.28em]
            uppercase
            opacity-85
          "
        >
          <span>We are open</span>
          <span>8am – 9pm</span>
        </div>
      </div>
    </section>
  );
}
