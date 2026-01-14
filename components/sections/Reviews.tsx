"use client";

import { useEffect, useRef, useState } from "react";

const REVIEWS = [
  {
    name: "Kartik Sharma",
    text: "Very clean and nice place. Friendly and courteous staff. Loved the veg cheese sandwich and virgin mojito.",
    rating: 5,
  },
  {
    name: "Jitesh Ladwa",
    text: "Amazing cafe with great vegan options. The owner personally helped us choose. Highly recommend.",
    rating: 5,
  },
  {
    name: "Spandan Bandyopadhyaya",
    text: "Virgin mojito was well balanced and the Hakka noodles were surprisingly good.",
    rating: 5,
  },
  {
    name: "Shweta Kumari",
    text: "A peaceful escape in the city. Friendly staff and amazing food.",
    rating: 5,
  },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  const review = REVIEWS[index];

  return (
    <section className="reviews-surface">
      <div className="reviews-inner is-visible">
        <p className="reviews-eyebrow">Trusted by our guests</p>

        <div className="reviews-count">250+ reviews</div>

        {/* STARS */}
        <div className="reviews-stars">
          {"★★★★★"}
        </div>

        {/* SLIDING REVIEW */}
        <div className="review-card">
          <p className="review-text">“{review.text}”</p>
          <p className="review-name">— {review.name}</p>
        </div>

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
