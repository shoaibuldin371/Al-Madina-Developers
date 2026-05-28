"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/siteData";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { company, contact } = siteData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Properties", href: "#properties" },
    { name: "Plans", href: "#plans" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "glass shadow-md py-3" : "bg-white/80 backdrop-blur-md py-4 md:py-5 border-b border-gray-100/50"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-full border-2 border-gold flex-shrink-0 shadow-sm">
            <Image
              src={company.logo}
              alt={company.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 48px, 56px"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-bold text-navy leading-tight">
              Al-Madinah
            </span>
            <span className="text-xs md:text-sm text-gray-600 font-medium">
              Real Estate and Builders
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-navy hover:text-gold transition-colors group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/${contact.primaryWhatsApp.replace(/\s+/g, "").replace(/^0/, "92")}`}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 text-sm font-medium text-navy border border-navy rounded-full hover:bg-navy hover:text-white transition-colors"
          >
            WhatsApp
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`tel:${contact.primaryNumber.replace(/\s+/g, "")}`}
            className="flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-gold rounded-full hover:shadow-md transition-all"
          >
            <PhoneIcon className="w-4 h-4 mr-2" />
            Call Now
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-navy hover:text-gold transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full glass shadow-xl border-t border-gray-100 overflow-hidden"
          >
            <div className="py-4 px-4 flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-base font-medium text-navy hover:text-gold block py-2 border-b border-gray-200/50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col space-y-3 pt-2"
              >
                <a
                  href={`https://wa.me/${contact.primaryWhatsApp.replace(/\s+/g, "").replace(/^0/, "92")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center px-4 py-3 text-sm font-medium text-navy border border-navy rounded-md"
                >
                  WhatsApp
                </a>
                <a
                  href={`tel:${contact.primaryNumber.replace(/\s+/g, "")}`}
                  className="w-full flex justify-center items-center px-4 py-3 text-sm font-medium text-white bg-gradient-gold rounded-md"
                >
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
