import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function Hero() {
  const { hero, contact } = siteData;

  return (
    <section id="home" className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={hero.image}
          alt="Al-Madinah Real Estate"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="max-w-2xl text-white">
          <span className="inline-block py-1 px-3 rounded-full bg-gold/20 text-gold border border-gold/30 text-sm font-semibold tracking-wider mb-6">
            PREMIUM REAL ESTATE
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 drop-shadow-md">
            {hero.heading}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl font-light leading-relaxed">
            {hero.subheading}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#properties"
              className="px-8 py-4 bg-gold text-white text-center font-semibold rounded-md hover:bg-[#B5952F] transition-colors shadow-lg shadow-gold/20"
            >
              Explore Properties
            </a>
            <a
              href={`https://wa.me/${contact.primaryWhatsApp.replace(/\s+/g, "").replace(/^0/, "92")}`}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-white/10 text-white text-center font-semibold rounded-md backdrop-blur-sm border border-white/30 hover:bg-white/20 transition-colors"
            >
              WhatsApp Now
            </a>
            <a
              href={`tel:${contact.primaryNumber.replace(/\s+/g, "")}`}
              className="px-8 py-4 bg-transparent text-white text-center font-semibold rounded-md border border-white hover:bg-white hover:text-navy transition-colors"
            >
              Call Consultant
            </a>
          </div>

          <div className="pt-8 border-t border-white/20">
            <p className="text-sm text-gray-300 mb-4 uppercase tracking-wider font-semibold">
              Specializing In
            </p>
            <div className="flex flex-wrap gap-3">
              {hero.trustBadges.map((badge, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs text-gray-200"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
