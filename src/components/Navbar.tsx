"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

/* ─── Dropdown Data ─── */
const menuItems = [
  { label: "About Us", href: "/about" },
  {
    label: "Knowledge",
    children: [
      { label: "Vedas", href: "/knowledge/vedas" },
      { label: "Upanishads", href: "/knowledge/upanishads" },
      { label: "Philosophy", href: "/knowledge/philosophy" },
      { label: "Ayurveda", href: "/knowledge/ayurveda" },
      { label: "Itihasa & Puranas", href: "/knowledge/itihasa" },
      { label: "Sanskrit & Practices", href: "/knowledge/sanskrit" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Vedic Consultations", href: "/services/consultations" },
      { label: "Ritual Guidance", href: "/services/rituals" },
      { label: "Vedic Education", href: "/services/education" },
      { label: "Cultural Events", href: "/services/events" },
    ],
  },
  {
    label: "Courses",
    children: [
      { label: "Beginner Track", href: "/courses/beginner" },
      { label: "Practitioner Track", href: "/courses/practitioner" },
      { label: "Workshops", href: "/courses/workshops" },
    ],
  },
  {
    label: "Community",
    children: [
      { label: "Events", href: "/community/events" },
      { label: "Forums", href: "/community/forums" },
      { label: "Newsletter", href: "/community/newsletter" },
    ],
  },
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
  item: (typeof menuItems)[number];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const close = useCallback(() => setOpen(false), []);

  /* Close on outside click */
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [close]);

  /* Keyboard */
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
        className="px-3 py-2 text-sm font-medium text-text/80 hover:text-gold transition-colors rounded-lg"
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
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-text/80 hover:text-gold transition-colors rounded-lg"
      >
        {item.label}
        <ChevronDown
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown panel */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[200px] bg-surface border border-border rounded-dropdown shadow-dropdown py-2 z-50 transition-all duration-200 origin-top ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        role="menu"
      >
        {item.children.map((child, i) => (
          <Link
            key={child.href}
            href={child.href}
            role="menuitem"
            tabIndex={open ? 0 : -1}
            className="block px-4 py-2.5 text-sm text-text/80 hover:text-gold hover:bg-gold/5 transition-colors"
            onClick={close}
          >
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gold/40" />
              {child.label}
            </span>
            {i < item.children!.length - 1 && (
              <div className="absolute left-4 right-4 bottom-0 h-px bg-border" />
            )}
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
      <div className="max-w-md mx-auto px-6 py-4 space-y-1">
        {menuItems.map((item, idx) => (
          <div key={item.label}>
            {item.children ? (
              <>
                <button
                  onClick={() =>
                    setExpandedIdx(expandedIdx === idx ? null : idx)
                  }
                  aria-expanded={expandedIdx === idx}
                  className="flex items-center justify-between w-full py-3 px-2 text-base font-medium text-text/80 hover:text-gold transition-colors"
                >
                  {item.label}
                  <ChevronDown
                    className={`transition-transform duration-200 ${
                      expandedIdx === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedIdx === idx && (
                  <div className="pl-4 pb-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="block py-2 px-2 text-sm text-mutedText hover:text-gold transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-gold/40" />
                          {child.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href ?? "#"}
                onClick={onClose}
                className="block py-3 px-2 text-base font-medium text-text/80 hover:text-gold transition-colors"
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

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="font-heading text-2xl font-bold tracking-wider text-text"
            aria-label="RYSAV Home"
          >
            RYSAV
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {menuItems.map((item) => (
              <DesktopDropdown key={item.label} item={item} />
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href="/consult"
              className="bg-gold hover:bg-goldHover text-white text-sm font-semibold px-5 py-2.5 rounded-pill btn-lift transition-colors"
            >
              Consult →
            </Link>

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
      </div>

      {/* Mobile menu */}
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </header>
  );
}
