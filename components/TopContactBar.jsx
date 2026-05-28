"use client";
import { siteData } from "@/data/siteData";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function TopContactBar() {
  const { contact } = siteData;

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.1 } }
      }}
      className="bg-navy text-gray-300 py-2 text-xs md:text-sm border-b border-gray-800 hidden md:block"
    >
      <div className="container mx-auto px-4 flex justify-between items-center max-w-7xl">
        <div className="flex space-x-6 items-center">
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.05, color: "#D4AF37" }}
            href={`tel:${contact.primaryNumber.replace(/\s+/g, "")}`}
            className="flex items-center transition-colors"
          >
            <PhoneIcon className="w-4 h-4 mr-2 text-gold" />
            {contact.primaryNumber}
          </motion.a>
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.05, color: "#D4AF37" }}
            href={`https://wa.me/${contact.primaryWhatsApp.replace(/\s+/g, "").replace(/^0/, "92")}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center transition-colors"
          >
            <ChatBubbleLeftEllipsisIcon className="w-4 h-4 mr-2 text-gold" />
            {contact.primaryWhatsApp}
          </motion.a>
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.05, color: "#D4AF37" }}
            href={`mailto:${contact.email}`}
            className="flex items-center transition-colors"
          >
            <EnvelopeIcon className="w-4 h-4 mr-2 text-gold" />
            {contact.email}
          </motion.a>
        </div>
        <div className="flex items-center">
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.02, color: "#D4AF37" }}
            href={contact.googleMapsSearch}
            target="_blank"
            rel="noreferrer"
            className="flex items-center transition-colors truncate max-w-[400px]"
          >
            <MapPinIcon className="w-4 h-4 mr-2 flex-shrink-0 text-gold" />
            <span className="truncate">{contact.officeLocation}</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
