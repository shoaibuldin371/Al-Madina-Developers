import { siteData } from "@/data/siteData";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";

export default function ContactPersons() {
  const { contact } = siteData;
  const { persons } = contact;

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-semibold uppercase tracking-wider text-sm mb-2 block">
            Expert Guidance
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
            Talk to Our Real Estate Consultants
          </h2>
          <p className="text-gray-600">
            Get in touch with our dedicated professionals who can help you find the perfect property or investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Office Card */}
          <div className="bg-navy rounded-2xl p-8 shadow-xl text-white flex flex-col h-full relative overflow-hidden group hover:shadow-2xl transition-shadow">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="mb-6 relative z-10">
              <h3 className="text-2xl font-serif font-bold text-gold mb-1">Main Contact</h3>
              <p className="text-gray-300 text-sm">Al-Madinah Real Estate</p>
            </div>
            
            <div className="flex-grow space-y-4 relative z-10">
              <div className="flex items-start">
                <PhoneIcon className="w-5 h-5 text-gold mr-3 mt-0.5" />
                <span className="text-lg font-medium">{contact.primaryNumber}</span>
              </div>
              <div className="flex items-start">
                <EnvelopeIcon className="w-5 h-5 text-gold mr-3 mt-0.5" />
                <span className="text-gray-300">{contact.email}</span>
              </div>
              <div className="flex items-start">
                <ChatBubbleLeftEllipsisIcon className="w-5 h-5 text-gold mr-3 mt-0.5" />
                <span className="text-gray-300">{contact.messengerName}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mt-8 relative z-10">
              <a
                href={`tel:${contact.primaryNumber.replace(/\s+/g, "")}`}
                className="flex justify-center items-center py-2.5 bg-gold text-white font-medium rounded hover:bg-[#B5952F] transition-colors text-sm"
              >
                Call Now
              </a>
              <a
                href={`https://wa.me/${contact.primaryWhatsApp.replace(/\s+/g, "").replace(/^0/, "92")}`}
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center py-2.5 bg-[#25D366] text-white font-medium rounded hover:bg-[#20bd5a] transition-colors text-sm"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex justify-center items-center py-2.5 bg-white/10 text-white font-medium rounded hover:bg-white/20 transition-colors text-sm border border-white/20"
              >
                Email
              </a>
              <a
                href={contact.messengerLink}
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center py-2.5 bg-[#0084FF] text-white font-medium rounded hover:bg-[#0074e0] transition-colors text-sm"
              >
                Messenger
              </a>
            </div>
          </div>

          {/* Individual Consultants */}
          {persons.map((person) => (
            <div key={person.id} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="mb-6 relative z-10">
                <h3 className="text-2xl font-serif font-bold text-navy mb-1">{person.name}</h3>
                <p className="text-gold font-medium text-sm uppercase tracking-wide">{person.role}</p>
              </div>
              
              <div className="flex-grow space-y-4 relative z-10">
                <div className="flex items-center">
                  <PhoneIcon className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-lg text-gray-700 font-medium">{person.phone}</span>
                </div>
                <div className="flex items-center">
                  <ChatBubbleLeftEllipsisIcon className="w-5 h-5 text-[#25D366] mr-3" />
                  <span className="text-gray-600">WhatsApp Available</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mt-8 relative z-10">
                <a
                  href={person.callLink}
                  className="flex justify-center items-center py-2.5 bg-navy text-white font-medium rounded hover:bg-opacity-90 transition-colors text-sm"
                >
                  Call
                </a>
                <a
                  href={person.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-center items-center py-2.5 bg-white text-navy font-medium rounded border border-gray-200 hover:bg-gray-50 transition-colors text-sm shadow-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-[#25D366] mr-2"></span>
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
