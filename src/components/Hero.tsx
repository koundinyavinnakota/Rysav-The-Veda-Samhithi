import Link from "next/link";

/* ─── Scroll-down indicator ─── */
function ScrollDownIcon() {
  return (
    <div className="mt-10 animate-bounce opacity-60" aria-hidden="true">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        className="mx-auto"
      >
        <rect
          x="9"
          y="2"
          width="10"
          height="18"
          rx="5"
          stroke="#C89B3C"
          strokeWidth="1.5"
        />
        <circle cx="14" cy="8" r="1.5" fill="#C89B3C">
          <animate
            attributeName="cy"
            values="8;14;8"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>
        <path
          d="M10 23L14 27L18 23"
          stroke="#C89B3C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden arc-divider mandala-watermark">
      {/* Background — calm landscape gradient */}
      <div className="absolute inset-0 z-0">
        {/* Sky gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4c5a9]/40 via-[#e8dcc8]/30 to-[#FAF7F2]" />

        {/* Mountain silhouette */}
        <svg
          className="absolute bottom-[60px] left-0 w-full h-[40%] opacity-[0.07]"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 400 L0 280 Q120 180 240 220 Q360 120 480 200 Q600 100 720 180 Q840 60 960 160 Q1080 80 1200 180 Q1320 120 1440 200 L1440 400Z"
            fill="#4E5B3A"
          />
        </svg>

        {/* Temple silhouette */}
        <svg
          className="absolute bottom-[60px] right-[5%] w-[180px] md:w-[260px] h-auto opacity-[0.06]"
          viewBox="0 0 200 300"
          aria-hidden="true"
        >
          <path
            d="M100 10 L120 50 L130 50 L140 90 L150 90 L155 130 L160 130 L160 280 L40 280 L40 130 L45 130 L50 90 L60 90 L70 50 L80 50 Z"
            fill="#4E5B3A"
          />
          <rect x="85" y="220" width="30" height="60" fill="#4E5B3A" />
          <circle cx="100" cy="40" r="6" fill="#4E5B3A" />
          <line
            x1="100"
            y1="10"
            x2="100"
            y2="0"
            stroke="#4E5B3A"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-[1] flex flex-col items-center justify-center text-center px-4 pt-24 pb-32 sm:pt-32 sm:pb-40 md:pt-40 md:pb-48">
        {/* Brand */}
        <p className="font-heading text-gold text-lg tracking-[0.3em] uppercase mb-4">
          RYSAV
        </p>

        {/* Headline */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-tight max-w-3xl">
          Ancient Wisdom.
          <br />
          Modern Living.
        </h1>

        {/* Sub text */}
        <p className="mt-5 text-mutedText text-base sm:text-lg max-w-lg">
          Explore Vedic Knowledge&nbsp;•&nbsp;Spiritual Services
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/knowledge"
            className="bg-gold hover:bg-goldHover text-white font-semibold px-8 py-3.5 rounded-pill btn-lift transition-colors text-sm sm:text-base"
          >
            Explore Knowledge
          </Link>
          <Link
            href="/services/consultations"
            className="bg-olive hover:bg-oliveHover text-white font-semibold px-8 py-3.5 rounded-pill btn-lift transition-colors text-sm sm:text-base"
          >
            Vedic Consultations
          </Link>
        </div>

        <ScrollDownIcon />
      </div>
    </section>
  );
}
