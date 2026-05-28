import { siteData } from "@/data/siteData";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";

export default function TopContactBar() {
  const { contact } = siteData;

  return (
    <div className="bg-navy text-gray-300 py-2 text-sm border-b border-gray-800 hidden md:block">
      <div className="container mx-auto px-4 flex justify-between items-center max-w-7xl">
        <div className="flex space-x-6 items-center">
          <a
            href={`tel:${contact.primaryNumber.replace(/\s+/g, "")}`}
            className="flex items-center hover:text-gold transition-colors"
          >
            <PhoneIcon className="w-4 h-4 mr-2 text-gold" />
            {contact.primaryNumber}
          </a>
          <a
            href={`https://wa.me/${contact.primaryWhatsApp.replace(/\s+/g, "").replace(/^0/, "92")}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center hover:text-gold transition-colors"
          >
            <ChatBubbleLeftEllipsisIcon className="w-4 h-4 mr-2 text-gold" />
            {contact.primaryWhatsApp}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center hover:text-gold transition-colors"
          >
            <EnvelopeIcon className="w-4 h-4 mr-2 text-gold" />
            {contact.email}
          </a>
        </div>
        <div className="flex items-center">
          <a
            href={contact.googleMapsSearch}
            target="_blank"
            rel="noreferrer"
            className="flex items-center hover:text-gold transition-colors truncate max-w-[400px]"
          >
            <MapPinIcon className="w-4 h-4 mr-2 flex-shrink-0 text-gold" />
            <span className="truncate">{contact.officeLocation}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
