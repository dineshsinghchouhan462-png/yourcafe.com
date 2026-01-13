"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomerCount() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    if (!ref.current || hasRun) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRun(true);
          observer.disconnect();

          const duration = 2400; // ms (luxury slow)
          const target = 25000;
          const start = performance.now();

          const animate = (time: number) => {
            const progress = Math.min((time - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out
            setCount(Math.floor(eased * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [hasRun]);

  return (
    <section
      ref={ref}
      className="bg-[#f7f4ef] py-32 text-center"
    >
      <div className="space-y-6">
        <div className="font-serif text-[56px] md:text-[72px] text-[#1f1f1f]">
          {count.toLocaleString()}+
        </div>

        <p className="text-[12px] tracking-[0.32em] uppercase text-gray-500">
          Moments served with care
        </p>
      </div>
    </section>
  );
}
