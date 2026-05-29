"use client";
import Image from "next/image";
import { siteData } from "@/data/siteData";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function About() {
  const { company, contact } = siteData;
  const bilal = contact.persons[0];
  const aslam = contact.persons[1];

  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 relative w-full"
          >
            <div className="relative p-2 bg-white rounded-2xl shadow-xl hover-lift-lg border border-gray-100 z-10">
              <div className="absolute inset-0 border-2 border-gold/30 rounded-2xl transform translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
              <div className="relative h-[500px] w-full rounded-xl overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full relative"
                >
                  <Image
                    src="/assets/al-madinah/office-building.jpg"
                    alt="Al-Madinah Office"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-navy/10 pointer-events-none mix-blend-overlay"></div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold rounded-full opacity-10 blur-3xl z-0"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:w-1/2 relative z-10"
          >
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-12 h-[2px] bg-gold"></span>
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                About The Company
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-6 leading-tight">
              About <span className="text-gradient">Al-Madinah</span> <br className="hidden md:block" /> Real Estate & Builders
            </h2>
            <div className="prose prose-lg text-gray-600 mb-8 relative z-10">
              <p className="mb-4">
                Welcome to <strong>AL Madina Real Estate & Developer</strong>, your go-to
                destination for dream homes and expert real estate guidance. We help clients
                explore residential plots, houses, rental properties, commercial
                opportunities, and investment options with confidence.
              </p>
              <p>
                Our focus is to provide clear communication, trusted property guidance, and
                professional support from inquiry to decision. Whether you are looking to
                buy, sell, rent, or invest, our team is here to help you turn your dream
                into an address.
              </p>
            </div>

            {/* Feature Badges */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {['Trusted Guidance', 'Zaamin City Focus', 'Investment Support', 'Client First Approach'].map((feature, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  key={idx} 
                  className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100 shadow-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                  <span className="text-sm font-medium text-navy">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={bilal.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-navy text-white font-medium rounded-md shadow-lg shadow-navy/20 group hover-lift"
              >
                Contact M. Bilal
                <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-gold" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={aslam.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-navy border border-gray-200 font-medium rounded-md hover:border-gold shadow-sm group hover-lift"
              >
                Contact Raja Aslam
                <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-gold" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={contact.googleMapsSearch}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-navy font-medium underline hover:text-gold transition-colors"
              >
                Visit Office
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
