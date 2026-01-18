"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomerCount() {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const target = 25000;
    const duration = 2600; // slower = more confidence
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4); // very soft ease-out
      setCount(Math.floor(eased * target));

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, []);

  return (
    <section className="surface-light">
      <div className="max-w-[760px] mx-auto px-6 py-40 text-center">

        {/* EYEBROW */}
        <p className="text-[11px] tracking-[0.36em] uppercase text-gray-500 mb-10">
          A quiet measure of trust
        </p>

        {/* COUNT */}
        <p className="font-serif text-[52px] md:text-[72px] leading-none text-[#1f1f1f] mb-6">
          {count.toLocaleString()}+
        </p>

        {/* LABEL */}
        <p className="text-[12px] tracking-[0.32em] uppercase text-gray-400">
          Guests served in 2025
        </p>

      </div>
    </section>
  );
}
