"use client";

import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    name: "Kartik Sharma",
    rating: 5,
    text:
      "Very clean and nice place. Friendly and courteous staff. Loved the veg cheese sandwich and onion tomato pizza. Virgin Mojito was super refreshing.",
  },
  {
    name: "Jitesh Ladwa",
    rating: 5,
    text:
      "Amazing cafe with great vegan options. The owner personally helped us and even arranged vegan chocolate specially for us. Highly recommended.",
  },
  {
    name: "Spandan Bandyopadhyaya",
    rating: 5,
    text:
      "The Virgin Mojito was perfectly balanced and the Hakka noodles were surprisingly good. A calm, pleasant place to unwind.",
  },
];

export default function Reviews() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#f7f4ef]">
      <div
        ref={ref}
        className={`
          mx-auto max-w-[1100px]
          px-6 md:px-16
          py-32 md:py-44
          transition-all duration-[1200ms] ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
        `}
      >
        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-[11px] tracking-[0.32em] uppercase text-[#8a8a8a] mb-4">
            Guest Voices
          </p>

          <h2 className="font-serif text-[36px] md:text-[48px] leading-tight text-[#1f1f1f]">
            Loved by those who slow down
          </h2>

          <p className="mt-6 text-[14px] text-[#6a6a6a] tracking-wide">
            ★ 4.8 average rating · Based on Google reviews
          </p>
        </div>

        {/* Reviews */}
        <div className="grid gap-16 md:grid-cols-3">
          {reviews.map((review, i) => (
            <div
              key={i}
              className={`
                transition-all duration-[900ms] ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              `}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="text-[#c9a25d] text-sm mb-4">
                {"★".repeat(review.rating)}
              </div>

              <p className="text-[15px] leading-[1.9] text-[#3f3f3f] mb-6">
                “{review.text}”
              </p>

              <p className="text-[12px] tracking-[0.18em] uppercase text-[#7a7a7a]">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
