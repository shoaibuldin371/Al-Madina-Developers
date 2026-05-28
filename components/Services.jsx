import { siteData } from "@/data/siteData";
import { 
  HomeModernIcon, 
  BuildingOfficeIcon, 
  MapIcon, 
  KeyIcon, 
  ChartBarIcon, 
  UserGroupIcon, 
  WrenchScrewdriverIcon, 
  StarIcon 
} from "@heroicons/react/24/outline";

export default function Services() {
  const { services } = siteData;

  // Map icons to service IDs (fallback to StarIcon if not found)
  const getIcon = (id) => {
    switch (id) {
      case "residential-plots": return <MapIcon className="w-8 h-8" />;
      case "houses-for-sale": return <HomeModernIcon className="w-8 h-8" />;
      case "houses-for-rent": return <KeyIcon className="w-8 h-8" />;
      case "commercial-properties": return <BuildingOfficeIcon className="w-8 h-8" />;
      case "investment-opportunities": return <ChartBarIcon className="w-8 h-8" />;
      case "property-consultation": return <UserGroupIcon className="w-8 h-8" />;
      case "construction-builders": return <WrenchScrewdriverIcon className="w-8 h-8" />;
      case "zaamin-city-projects": return <StarIcon className="w-8 h-8" />;
      default: return <StarIcon className="w-8 h-8" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="w-8 h-[2px] bg-gold"></span>
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              What We Do
            </span>
            <span className="w-8 h-[2px] bg-gold"></span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-6">
            Our Real Estate Services
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive real estate solutions designed to help you find, invest, and manage properties with ease and confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-navy hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative background element on hover */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/20 transition-colors"></div>
              
              <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center text-navy mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                {getIcon(service.id)}
              </div>
              
              <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 relative z-10">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
