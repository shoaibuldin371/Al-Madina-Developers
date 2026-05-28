import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function InstallmentPlans() {
  const { installmentPlans, contact } = siteData;

  return (
    <section id="plans" className="py-20 md:py-28 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-6">
            Easy Booking and Installment Plans
          </h2>
          <p className="text-gray-600 text-lg">
            Invest in your future with our flexible payment plans. We offer easy monthly installments for prime residential and commercial plots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {installmentPlans.map((plan) => (
            <div 
              key={plan.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col group"
            >
              {/* Flyer Container */}
              <div className="relative h-[500px] sm:h-[600px] w-full bg-gray-50 p-4">
                <Image
                  src={plan.image}
                  alt={plan.title}
                  fill
                  className="object-contain drop-shadow-md group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="p-8 bg-navy text-white text-center">
                <h3 className="text-2xl font-bold mb-3 text-gold">
                  {plan.title}
                </h3>
                <p className="text-gray-300 mb-6 max-w-md mx-auto">
                  {plan.details}
                </p>
                <a
                  href={`https://wa.me/${contact.primaryWhatsApp.replace(/\s+/g, "").replace(/^0/, "92")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-8 py-3 bg-gold text-white font-semibold rounded hover:bg-[#B5952F] transition-colors shadow-lg"
                >
                  Get Booking Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
