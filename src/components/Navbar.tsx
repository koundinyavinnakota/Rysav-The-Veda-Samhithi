"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

/* ─── Navigation Structure ─── */
const navItems = [
  { label: "Home", href: "/" },
  { label: "Educate", href: "/educate" },
  { label: "Mythbusters", href: "/mythbusters" },
  {
    label: "Services Offered",
    children: [
      { label: "Purohit", href: "/services/purohit" },
      { label: "Pooja Samagri", href: "/services/pooja-samagri" },
      { label: "Horoscope", href: "/services/horoscope" },
    ],
  },
  { label: "Panchang", href: "/panchang" },
];

/* ─── Chevron Icon ─── */
function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 4.5L6 8L9.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Desktop Dropdown ─── */
function DesktopDropdown({
  item,
}: {
  item: (typeof navItems)[number];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [close]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") close();
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen((o) => !o);
    }
  }

  if (!item.children) {
    return (
      <Link
        href={item.href ?? "#"}
        className="px-4 py-2 text-sm font-medium text-text/80 hover:text-gold transition-colors duration-200 rounded-lg"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => {
        clearTimeout(timeoutRef.current);
        setOpen(true);
      }}
      onMouseLeave={() => {
        timeoutRef.current = setTimeout(() => setOpen(false), 150);
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        onKeyDown={handleKeyDown}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-text/80 hover:text-gold transition-colors duration-200 rounded-lg"
      >
        {item.label}
        <ChevronDown
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[200px] bg-surface rounded-dropdown shadow-dropdown py-2 z-50 transition-all duration-200 origin-top border border-border ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        role="menu"
      >
        {item.children.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            role="menuitem"
            tabIndex={open ? 0 : -1}
            className="block px-5 py-3 text-sm text-text/80 hover:text-gold hover:bg-gold/5 transition-colors duration-150"
            onClick={close}
          >
            <span className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold/40" />
              {child.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ─── Hamburger Icon ─── */
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="w-6 h-5 relative flex flex-col justify-between">
      <span
        className={`block h-0.5 w-6 bg-text rounded transition-all duration-300 ${
          open ? "rotate-45 translate-y-[9px]" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-text rounded transition-all duration-300 ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-text rounded transition-all duration-300 ${
          open ? "-rotate-45 -translate-y-[9px]" : ""
        }`}
      />
    </div>
  );
}

/* ─── Mobile Menu ─── */
function MobileMenu({ onClose }: { onClose: () => void }) {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <nav
      className="fixed inset-0 top-[72px] bg-surface/98 backdrop-blur-md z-40 overflow-y-auto pb-8 animate-fadeIn"
      aria-label="Mobile navigation"
    >
      <div className="max-w-md mx-auto px-6 py-6 space-y-1">
        {navItems.map((item, idx) => (
          <div key={item.label}>
            {item.children ? (
              <>
                <button
                  onClick={() =>
                    setExpandedIdx(expandedIdx === idx ? null : idx)
                  }
                  aria-expanded={expandedIdx === idx}
                  className="flex items-center justify-between w-full py-3.5 px-3 text-base font-medium text-text/80 hover:text-gold transition-colors rounded-lg"
                >
                  {item.label}
                  <ChevronDown
                    className={`transition-transform duration-200 ${
                      expandedIdx === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedIdx === idx ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-5 pb-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="block py-2.5 px-3 text-sm text-mutedText hover:text-gold transition-colors rounded-lg"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold/40" />
                          {child.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <Link
                href={item.href ?? "#"}
                onClick={onClose}
                className="block py-3.5 px-3 text-base font-medium text-text/80 hover:text-gold transition-colors rounded-lg"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}

/* ─── Navbar ─── */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/95 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-surface/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-tight"
            aria-label="RYSAV Home"
          >
            <span className="font-heading text-2xl font-bold tracking-wider text-text">
              RYSAV
            </span>
            <span className="text-[10px] tracking-[0.15em] text-mutedText/70 font-medium -mt-0.5">
              The VedaSamhithi
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <DesktopDropdown key={item.label} item={item} />
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gold/10 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </header>
  );
}
