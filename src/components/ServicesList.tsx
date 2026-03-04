import Link from "next/link";

const services = [
  {
    title: "Vedic Consultations",
    description:
      "Personalised guidance rooted in Jyotish, Vastu, and ancient Vedic frameworks to help you navigate life's decisions with clarity.",
    href: "/services/consultations",
    accent: "gold" as const,
    gradient: "from-amber-50 to-yellow-50",
    icon: "🔮",
  },
  {
    title: "Ritual Guidance",
    description:
      "Step-by-step guidance for performing traditional Pujas, Homas, and Samskaras with authentic mantras and procedures.",
    href: "/services/rituals",
    accent: "olive" as const,
    gradient: "from-green-50 to-emerald-50",
    icon: "🪔",
  },
  {
    title: "Meaning of Ancient Rituals",
    description:
      "Understand the deeper symbolism, philosophy, and science behind age-old Vedic rituals practised across generations.",
    href: "/services/meaning",
    accent: "gold" as const,
    gradient: "from-orange-50 to-rose-50",
    icon: "📿",
  },
];

export default function ServicesList() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Om divider */}
        <div className="om-divider" />

        <div className="text-center mb-12">
          <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2">
            What we offer
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text">
            Our Services
          </h2>
        </div>

        {/* Service rows */}
        <div className="space-y-5">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="bg-surface rounded-card shadow-card card-glow border border-border overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row items-stretch">
                {/* Thumbnail */}
                <div
                  className={`sm:w-48 md:w-56 h-40 sm:h-auto bg-gradient-to-br ${service.gradient} flex items-center justify-center shrink-0`}
                >
                  <span className="text-5xl select-none" aria-hidden="true">
                    {service.icon}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                  <div className="flex-1">
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-text mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-mutedText leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-block mt-3 text-gold text-sm font-semibold hover:text-goldHover transition-colors sm:hidden"
                    >
                      Read More →
                    </Link>
                  </div>

                  {/* Pill button (desktop) */}
                  <Link
                    href={service.href}
                    className={`hidden sm:inline-flex shrink-0 items-center px-6 py-2.5 rounded-pill text-sm font-semibold btn-lift transition-colors text-white ${
                      service.accent === "gold"
                        ? "bg-gold hover:bg-goldHover"
                        : "bg-olive hover:bg-oliveHover"
                    }`}
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
