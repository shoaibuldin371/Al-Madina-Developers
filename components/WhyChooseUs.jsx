"use client";
import { siteData } from "@/data/siteData";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const { whyChooseUs } = siteData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 md:py-28 bg-gray-50 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/3"
          >
            <span className="text-gold font-semibold uppercase tracking-wider text-sm mb-2 block">
              Our Advantages
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-6 leading-tight">
              Why Choose Al-Madinah
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              We stand out in the real estate market by providing focused expertise, clear communication, and a commitment to helping you make the best property decisions.
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-gold"
            >
              <p className="text-navy font-medium italic">
                "Turning dreams into addresses with trust and professional guidance."
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div 
                variants={itemVariants}
                key={index} 
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all flex"
              >
                <div className="flex-shrink-0 mr-4">
                  <CheckCircleIcon className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
