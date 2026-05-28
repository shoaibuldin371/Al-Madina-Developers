import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/siteData";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  const { company, contact, services } = siteData;

  const currentYear = new Date().getFullYear();
  // Use requested year if it's past 2026 or just use 2026 as requested in prompt "© 2026 Al-Madinah Real Estate..."
  const displayYear = "2026";

  return (
    <footer className="bg-navy text-gray-300 pt-20 border-t-4 border-gold relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-14 h-14 bg-white rounded-full overflow-hidden border-2 border-gold flex-shrink-0">
                <Image
                  src={company.logo}
                  alt={company.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-white leading-tight">
                  Al-Madinah
                </span>
                <span className="text-xs text-gold font-medium uppercase tracking-wider">
                  Real Estate
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              {company.aboutShort}
            </p>
            <div className="pt-4">
              <a
                href={contact.facebookLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-[#1877F2] text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#home" className="hover:text-gold transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2"></span> Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-gold transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2"></span> About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-gold transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2"></span> Services
                </Link>
              </li>
              <li>
                <Link href="#properties" className="hover:text-gold transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2"></span> Featured Properties
                </Link>
              </li>
              <li>
                <Link href="#plans" className="hover:text-gold transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2"></span> Installment Plans
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-gold transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2"></span> Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Our Services</h4>
            <ul className="space-y-3 text-sm">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link href="#services" className="hover:text-gold transition-colors inline-flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 mr-2"></span> {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPinIcon className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">{contact.officeLocation}</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                <a href={`tel:${contact.primaryNumber.replace(/\s+/g, "")}`} className="text-gray-400 hover:text-white transition-colors">
                  {contact.primaryNumber}
                </a>
              </li>
              <li className="flex items-center">
                <EnvelopeIcon className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                <a href={`mailto:${contact.email}`} className="text-gray-400 hover:text-white transition-colors break-all">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="py-6 border-t border-white/10 text-center text-sm text-gray-500">
          <p>© {displayYear} {company.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
