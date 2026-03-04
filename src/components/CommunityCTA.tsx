"use client";

import { useState } from "react";

export default function CommunityCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  }

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 mandala-watermark mandala-watermark-center">
      <div className="max-w-2xl mx-auto text-center">
        {/* Om divider */}
        <div className="om-divider" />

        <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2">
          Together in Dharma
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mb-4">
          Join Our Community
        </h2>
        <p className="text-mutedText text-base sm:text-lg leading-relaxed max-w-lg mx-auto mb-8">
          Connect with like-minded individuals to learn, share, and grow
          together.
        </p>

        {/* Newsletter form */}
        {submitted ? (
          <div className="bg-olive/10 rounded-card p-6 border border-olive/20">
            <p className="text-olive font-semibold text-sm">
              🙏 Thank you! You&apos;ve joined the RYSAV community.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3 rounded-pill bg-surface border border-border text-sm text-text placeholder:text-mutedText/60 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/40 transition-all"
            />
            <button
              type="submit"
              className="bg-gold hover:bg-goldHover text-white font-semibold px-7 py-3 rounded-pill btn-lift transition-colors text-sm whitespace-nowrap"
            >
              Join Newsletter
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
