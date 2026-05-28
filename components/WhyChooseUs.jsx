import { siteData } from "@/data/siteData";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function WhyChooseUs() {
  const { whyChooseUs } = siteData;

  return (
    <section className="py-20 md:py-28 bg-gray-50 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm mb-2 block">
              Our Advantages
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-6 leading-tight">
              Why Choose Al-Madinah
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              We stand out in the real estate market by providing focused expertise, clear communication, and a commitment to helping you make the best property decisions.
            </p>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-gold">
              <p className="text-navy font-medium italic">
                "Turning dreams into addresses with trust and professional guidance."
              </p>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex"
              >
                <div className="flex-shrink-0 mr-4">
                  <CheckCircleIcon className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
