"use client";

import Image from "next/image";
import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";

export default function Hero() {
  const { hero, contact } = siteData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="home" className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
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
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <motion.div 
          className="max-w-2xl text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block py-1 px-3 rounded-full bg-gold/20 text-gold border border-gold/30 text-sm font-semibold tracking-wider mb-6 glass"
          >
            PREMIUM REAL ESTATE
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 drop-shadow-md"
          >
            {hero.heading}
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl font-light leading-relaxed"
          >
            {hero.subheading}
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#properties"
              className="px-8 py-4 bg-gradient-gold text-white text-center font-semibold rounded-md hover:shadow-lg transition-all shadow-gold/20 border border-transparent"
            >
              Explore Properties
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`https://wa.me/${contact.primaryWhatsApp.replace(/\s+/g, "").replace(/^0/, "92")}`}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-white/10 text-white text-center font-semibold rounded-md glass hover:bg-white/20 transition-all"
            >
              WhatsApp Now
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:${contact.primaryNumber.replace(/\s+/g, "")}`}
              className="px-8 py-4 bg-transparent text-white text-center font-semibold rounded-md border border-white hover:bg-white hover:text-navy transition-all"
            >
              Call Consultant
            </motion.a>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="pt-8 border-t border-white/20"
          >
            <p className="text-sm text-gray-300 mb-4 uppercase tracking-wider font-semibold">
              Specializing In
            </p>
            <div className="flex flex-wrap gap-3">
              {hero.trustBadges.map((badge, index) => (
                <motion.span
                  whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.15)" }}
                  key={index}
                  className="px-3 py-1 bg-white/5 glass border border-white/10 rounded-full text-xs text-gray-200 cursor-default"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
