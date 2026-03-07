import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Purohit",
    description:
      "Connect with experienced and knowledgeable Purohits for all your ceremonial and ritual needs, performed with authentic Vedic traditions.",
    href: "/services/purohit",
    icon: "/images/icons/purohit.svg",
    gradient: "from-amber-50 to-yellow-50",
  },
  {
    title: "Pooja Samagri",
    description:
      "Authentic and curated pooja materials sourced with care, ensuring the sanctity and completeness of every ritual you perform.",
    href: "/services/pooja-samagri",
    icon: "/images/icons/pooja-samagri.svg",
    gradient: "from-orange-50 to-rose-50",
  },
  {
    title: "Horoscope",
    description:
      "Personalised Jyotish-based horoscope readings rooted in Vedic astrology, offering clarity on life events, timing, and self-understanding.",
    href: "/services/horoscope",
    icon: "/images/icons/horoscope.svg",
    gradient: "from-indigo-50 to-violet-50",
  },
];

export default function ServicesList() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Om divider */}
        <div className="om-divider" />

        <div className="text-center mb-14">
          <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2">
            What we offer
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text">
            Services Offered
          </h2>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-surface rounded-card shadow-card card-hover-subtle border border-border overflow-hidden flex flex-col"
            >
              {/* Icon area */}
              <div
                className={`h-48 bg-gradient-to-br ${service.gradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02] relative`}
              >
                {/* Subtle gold top accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="opacity-75 group-hover:opacity-90 transition-opacity duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-heading text-lg font-bold text-text mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-mutedText leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="mt-auto text-gold text-sm font-semibold group-hover:text-goldHover transition-colors">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
