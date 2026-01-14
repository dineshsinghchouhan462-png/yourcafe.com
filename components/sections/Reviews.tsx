"use client";

import { useEffect, useRef, useState } from "react";

const TOTAL_REVIEWS = 250; // you can update later safely

export default function Reviews() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  // Reveal + count only ONCE
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const duration = 1400;
    const stepTime = 16;
    const increment = TOTAL_REVIEWS / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= TOTAL_REVIEWS) {
        setCount(TOTAL_REVIEWS);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [visible]);

  return (
    <section className="reviews-surface">
      <div
        ref={ref}
        className={`reviews-inner ${
          visible ? "is-visible" : ""
        }`}
      >
        <p className="reviews-eyebrow">Trusted by our guests</p>

        <div className="reviews-count">
          {count}+ reviews
        </div>

        <p className="reviews-text">
          Consistently praised for warmth, food, and atmosphere —
          by locals and travellers alike.
        </p>

        <a
          href="https://www.google.com/search?q=the+lazy+barn+jodhpur+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="reviews-link"
        >
          Read more on Google
        </a>
      </div>
    </section>
  );
}
