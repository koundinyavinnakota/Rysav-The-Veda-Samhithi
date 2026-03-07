"use client";

import { useRef, useEffect, useState } from "react";

const festivals = [
  {
    title: "Ugadi",
    description: "New beginnings and the Telugu/Kannada New Year",
    icon: "🌸",
    color: "from-amber-50 to-orange-50",
  },
  {
    title: "Sri Ramanavami",
    description: "Celebration of the birth of Lord Rama",
    icon: "🏹",
    color: "from-yellow-50 to-amber-50",
  },
  {
    title: "Vinayaka Chavithi",
    description: "Festival honoring Lord Ganesha",
    icon: "🐘",
    color: "from-orange-50 to-rose-50",
  },
  {
    title: "Dusshera",
    description: "Victory of dharma over adharma",
    icon: "⚔️",
    color: "from-red-50 to-orange-50",
  },
  {
    title: "Diwali",
    description: "Festival of lights and spiritual renewal",
    icon: "🪔",
    color: "from-amber-50 to-yellow-50",
  },
];

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={`Scroll ${direction}`}
      className="hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-surface border border-gold/20 shadow-card hover:bg-gold/10 hover:border-gold/40 transition-all duration-200 shrink-0"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className={direction === "left" ? "rotate-180" : ""}
      >
        <path
          d="M6 3L11 8L6 13"
          stroke="#C89B3C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function FestivalsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    const scrollSpeed = 0.4;

    function autoScroll() {
      if (!isPaused && container) {
        container.scrollLeft += scrollSpeed;
        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    }

    animationId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  function scroll(dir: "left" | "right") {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mandala-watermark">
      {/* Om divider */}
      <div className="om-divider" />

      {/* Section header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-saffron text-xs font-semibold tracking-[0.2em] uppercase mb-2">
            Celebrations
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text">
            Upcoming Festivals
          </h2>
        </div>
        <div className="flex gap-2">
          <ArrowButton direction="left" onClick={() => scroll("left")} />
          <ArrowButton direction="right" onClick={() => scroll("right")} />
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="scroll-carousel flex gap-6 overflow-x-auto pb-4 -mx-1 px-1"
        role="region"
        aria-label="Upcoming festivals carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {festivals.map((festival, i) => (
          <article
            key={i}
            className="shrink-0 w-[280px] sm:w-[300px] bg-surface rounded-card shadow-card card-hover border border-gold/10 overflow-hidden flex flex-col cursor-pointer"
          >
            {/* Festival illustration area with warm tones */}
            <div
              className={`h-44 bg-gradient-to-br ${festival.color} flex items-center justify-center relative`}
            >
              {/* Subtle saffron border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              <span className="text-6xl select-none" aria-hidden="true">
                {festival.icon}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-heading text-lg font-bold text-text mb-2">
                {festival.title}
              </h3>
              <p className="text-xs text-mutedText leading-relaxed mb-4">
                {festival.description}
              </p>
              <button className="mt-auto text-gold text-xs font-semibold hover:text-goldHover transition-colors text-left">
                Learn More →
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
