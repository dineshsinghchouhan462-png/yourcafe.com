"use client";

import { useEffect, useRef, useState } from "react";

export default function IntroSection() {
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
      { threshold: 0.45 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-transparent">
      <div
        ref={ref}
        className={`mx-auto max-w-[760px] px-6 md:px-16 py-36 md:py-48 text-center
          transition-all duration-[1400ms] ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        <p className="intro-text">
          A place shaped by slow mornings,<br />
          familiar conversations, and time left unhurried.
        </p>
      </div>
    </section>
  );
}
