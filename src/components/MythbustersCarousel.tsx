"use client";

import { useRef } from "react";

const myths = [
  {
    title: "Diwali is only about firecrackers",
    color: "from-amber-100 to-orange-50",
  },
  {
    title: "Astrology has no scientific value",
    color: "from-emerald-50 to-teal-50",
  },
  {
    title: "Puja ceremonies are superstitious",
    color: "from-rose-50 to-pink-50",
  },
  {
    title: "Vedas are only religious texts",
    color: "from-sky-50 to-indigo-50",
  },
  {
    title: "Meditation is just sitting quietly",
    color: "from-violet-50 to-purple-50",
  },
  {
    title: "Ayurveda is just herbal medicine",
    color: "from-lime-50 to-green-50",
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
      className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-border shadow-soft hover:bg-gold/10 hover:border-gold/30 transition-all shrink-0"
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
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

/* Placeholder image for each myth card */
function MythImage({ index }: { index: number }) {
  const icons = ["🪔", "🌟", "🙏", "📜", "🧘", "🌿"];
  return (
    <div className="flex items-center justify-center text-4xl h-full select-none" aria-hidden="true">
      {icons[index % icons.length]}
    </div>
  );
}

export default function MythbustersCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-1">
            Discover the truth
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text">
            Mythbusters
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
        className="scroll-carousel flex gap-5 overflow-x-auto pb-4 -mx-1 px-1"
        role="region"
        aria-label="Mythbusters carousel"
      >
        {/* Intro card */}
        <div className="shrink-0 w-[260px] sm:w-[280px] bg-gradient-to-br from-gold/10 to-gold/5 rounded-card p-6 flex flex-col justify-between border border-gold/10">
          <div>
            <h3 className="font-heading text-lg font-bold text-text mb-2">
              Mythbusters
            </h3>
            <p className="text-sm text-mutedText leading-relaxed">
              Common misconceptions about Vedic traditions — debunked with
              knowledge and context.
            </p>
          </div>
          <button className="mt-6 text-gold text-sm font-semibold hover:text-goldHover transition-colors text-left">
            View all →
          </button>
        </div>

        {/* Myth cards */}
        {myths.map((myth, i) => (
          <article
            key={i}
            className="shrink-0 w-[240px] sm:w-[260px] bg-surface rounded-card shadow-card card-glow border border-border overflow-hidden flex flex-col"
          >
            {/* Image placeholder */}
            <div
              className={`h-36 bg-gradient-to-br ${myth.color} flex items-center justify-center`}
            >
              <MythImage index={i} />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-heading text-sm font-bold text-text leading-snug mb-3">
                &ldquo;{myth.title}&rdquo;
              </h3>
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
