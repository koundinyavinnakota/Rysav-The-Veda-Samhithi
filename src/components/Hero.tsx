import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden arc-divider">      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.svg"
          alt=""
          fill
          className="object-cover"
          priority
          aria-hidden="true"
        />
        {/* Extra gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/80" />
      </div>

      {/* Mandala watermark overlay */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/images/backgrounds/mandala-watermark.svg"
          alt=""
          width={600}
          height={600}
          className="opacity-[0.03]"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-[1] flex flex-col items-center justify-center text-center px-4 pt-28 pb-36 sm:pt-36 sm:pb-44 md:pt-44 md:pb-52">
        {/* Brand label */}
        <p className="font-heading text-gold text-lg sm:text-xl tracking-[0.35em] uppercase mb-2 animate-fade-in">
          RYSAV
        </p>

        {/* Subtitle */}
        <p className="text-mutedText text-sm tracking-[0.2em] uppercase mb-8 opacity-0 animate-fade-in-up [animation-delay:0.15s]">
          The VedaSamhithi
        </p>

        {/* Main headline */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-tight max-w-3xl opacity-0 animate-fade-in-up [animation-delay:0.3s]">
          Ancient Wisdom.
          <br />
          Modern Living.
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-mutedText text-base sm:text-lg max-w-lg opacity-0 animate-fade-in-up [animation-delay:0.45s]">
          Explore Vedic Knowledge&nbsp;•&nbsp;Spiritual Services
        </p>

        {/* Single CTA */}
        <div className="mt-10 opacity-0 animate-fade-in-up [animation-delay:0.6s]">
          <Link
            href="/knowledge"
            className="inline-flex items-center bg-gold hover:bg-goldHover text-white font-semibold px-10 py-4 rounded-pill btn-lift transition-colors text-sm sm:text-base tracking-wide"
          >
            Explore Knowledge
          </Link>
        </div>
      </div>
    </section>
  );
}
