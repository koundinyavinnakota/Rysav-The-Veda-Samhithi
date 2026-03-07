import Link from "next/link";
import Image from "next/image";

const cards = [
  {
    title: "Vedas",
    href: "/knowledge/vedas",
    description: "The foundational scriptures of Sanātana Dharma",
    gradient: "from-amber-50 to-yellow-50",
    icon: "/images/knowledge/vedas.svg",
    iconColor: "#C89B3C",
  },
  {
    title: "Philosophy (Darshanas)",
    href: "/knowledge/philosophy",
    description: "The six schools of Indian philosophical thought",
    gradient: "from-indigo-50 to-blue-50",
    icon: "/images/knowledge/philosophy.svg",
    iconColor: "#6366F1",
  },
  {
    title: "Itihasa & Puranas",
    href: "/knowledge/itihasa",
    description: "Epics and ancient histories of Bhāratīya civilisation",
    gradient: "from-orange-50 to-rose-50",
    icon: "/images/knowledge/itihasa.svg",
    iconColor: "#C89B3C",
  },
];

export default function KnowledgeCards() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mandala-watermark mandala-watermark-center">
      {/* Om divider */}
      <div className="om-divider" />

      <div className="text-center mb-14">
        <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2">
          Timeless Traditions
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text">
          Explore Knowledge
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group bg-surface rounded-card shadow-card card-hover-subtle border border-border overflow-hidden flex flex-col"
          >
            {/* Illustration area */}
            <div
              className={`h-44 bg-gradient-to-br ${card.gradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]`}
            >
              <Image
                src={card.icon}
                alt={card.title}
                width={56}
                height={56}
                className="opacity-80"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-heading text-lg font-bold text-text mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-mutedText leading-relaxed mb-4">
                {card.description}
              </p>
              <span className="mt-auto text-gold text-sm font-semibold group-hover:text-goldHover transition-colors">
                Explore →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
