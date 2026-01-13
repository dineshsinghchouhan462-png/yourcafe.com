"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomerCount() {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const target = 25000;
    const duration = 1800; // ms — calm, premium
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out
      setCount(Math.floor(eased * target));

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, []);

  return (
    <section className="bg-[#f7f4ef]">
      <div className="max-w-[900px] mx-auto px-6 py-32 text-center space-y-8">

        {/* COUNT */}
        <p className="font-serif text-[48px] md:text-[64px] leading-none text-[#1f1f1f]">
          {count.toLocaleString()}+
        </p>

        {/* LABEL */}
        <p className="text-[12px] tracking-[0.32em] uppercase text-gray-500">
          Guests served in 2025
        </p>

      </div>
    </section>
  );
}
