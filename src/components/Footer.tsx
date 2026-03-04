import Link from "next/link";

const footerLinks = [
  {
    heading: "Knowledge",
    links: [
      { label: "Vedas", href: "/knowledge/vedas" },
      { label: "Upanishads", href: "/knowledge/upanishads" },
      { label: "Philosophy", href: "/knowledge/philosophy" },
      { label: "Ayurveda", href: "/knowledge/ayurveda" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Vedic Consultations", href: "/services/consultations" },
      { label: "Ritual Guidance", href: "/services/rituals" },
      { label: "Vedic Education", href: "/services/education" },
      { label: "Cultural Events", href: "/services/events" },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "Events", href: "/community/events" },
      { label: "Forums", href: "/community/forums" },
      { label: "Newsletter", href: "/community/newsletter" },
      { label: "Courses", href: "/courses/beginner" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#2B2B2B] text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-heading text-2xl font-bold text-white tracking-wider"
            >
              RYSAV
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/50">
              Bridging ancient Vedic wisdom with modern living. Explore,
              learn, and grow with us.
            </p>
            {/* Social placeholder */}
            <div className="flex gap-3 mt-5">
              {["X", "In", "YT"].map((s) => (
                <span
                  key={s}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/60 hover:bg-gold/30 hover:text-gold transition-colors cursor-pointer"
                  aria-label={s}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="font-heading text-sm font-semibold text-white mb-4 tracking-wide">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} RYSAV. All rights reserved.
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
