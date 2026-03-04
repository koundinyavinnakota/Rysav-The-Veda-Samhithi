import Link from "next/link";

const cards = [
  {
    title: "Vedas",
    href: "/knowledge/vedas",
    description: "The foundational scriptures of Sanātana Dharma",
    gradient: "from-amber-50 to-yellow-50",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="8" y="6" width="32" height="36" rx="3" stroke="#C89B3C" strokeWidth="1.5" />
        <path d="M14 14H34M14 20H34M14 26H28" stroke="#C89B3C" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M24 6V2" stroke="#C89B3C" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="34" r="3" stroke="#C89B3C" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Ayurveda",
    href: "/knowledge/ayurveda",
    description: "Ancient science of life and holistic wellness",
    gradient: "from-green-50 to-emerald-50",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 44V24" stroke="#4E5B3A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24 24C24 24 14 20 14 12C14 6 20 4 24 8C28 4 34 6 34 12C34 20 24 24 24 24Z" fill="#4E5B3A" fillOpacity="0.1" stroke="#4E5B3A" strokeWidth="1.5" />
        <path d="M18 38C18 38 14 36 14 32C20 34 24 38 24 38" stroke="#4E5B3A" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M30 38C30 38 34 36 34 32C28 34 24 38 24 38" stroke="#4E5B3A" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Philosophy",
    href: "/knowledge/philosophy",
    description: "Darshanas — the six schools of Indian thought",
    gradient: "from-indigo-50 to-blue-50",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="18" stroke="#6366F1" strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="24" cy="24" r="10" stroke="#6366F1" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="3" fill="#6366F1" fillOpacity="0.2" stroke="#6366F1" strokeWidth="1.2" />
        <path d="M24 6V14M24 34V42M6 24H14M34 24H42" stroke="#6366F1" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Itihasa & Puranas",
    href: "/knowledge/itihasa",
    description: "Epics and ancient histories of Bhāratīya civilisation",
    gradient: "from-orange-50 to-rose-50",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M8 42L8 10C8 7.8 9.8 6 12 6H32C34.2 6 36 7.8 36 10V42" stroke="#C89B3C" strokeWidth="1.5" />
        <path d="M8 42H36" stroke="#C89B3C" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M40 42V14C40 12.9 39.1 12 38 12H36" stroke="#C89B3C" strokeWidth="1.5" />
        <path d="M36 42H40" stroke="#C89B3C" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 14H30M14 20H26M14 26H22" stroke="#C89B3C" strokeWidth="1" strokeLinecap="round" />
        <circle cx="28" cy="32" r="4" stroke="#C89B3C" strokeWidth="1" />
      </svg>
    ),
  },
];

export default function KnowledgeCards() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mandala-watermark mandala-watermark-center">
      {/* Om divider */}
      <div className="om-divider" />

      <div className="text-center mb-12">
        <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2">
          Timeless Traditions
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text">
          Explore Knowledge
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group bg-surface rounded-card shadow-card card-glow border border-border overflow-hidden flex flex-col"
          >
            {/* Illustration area */}
            <div
              className={`h-36 bg-gradient-to-br ${card.gradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]`}
            >
              {card.icon}
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-heading text-lg font-bold text-text mb-1">
                {card.title}
              </h3>
              <p className="text-xs text-mutedText leading-relaxed mb-3">
                {card.description}
              </p>
              <span className="mt-auto text-gold text-xs font-semibold group-hover:text-goldHover transition-colors">
                Explore →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
