import Link from "next/link";

const footerNavLinks = [
  { label: "Home", href: "/" },
  { label: "Educate", href: "/educate" },
  { label: "Mythbusters", href: "/mythbusters" },
  { label: "Services", href: "/services" },
  { label: "Panchang", href: "/panchang" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2B2B2B] text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="flex flex-col leading-tight"
              aria-label="RYSAV Home"
            >
              <span className="font-heading text-2xl font-bold text-white tracking-wider">
                RYSAV
              </span>
              <span className="text-xs tracking-[0.15em] text-white/40 font-medium mt-0.5">
                The VedaSamhithi
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/40">
              Bridging ancient Vedic wisdom with modern living. Explore,
              learn, and grow with us.
            </p>
          </div>

          {/* Navigation links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Rysav – The VedaSamhithi. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-white/40 hover:text-gold transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/40 hover:text-gold transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
