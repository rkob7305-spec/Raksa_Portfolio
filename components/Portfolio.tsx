"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial dark mode state
    setIsDark(document.documentElement.classList.contains('dark'));

    // Listen for theme changes
    const handleThemeChange = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    window.addEventListener('themechange', handleThemeChange);

    // Also observe body class changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      window.removeEventListener('themechange', handleThemeChange);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="portfolio" className="w-full bg-white dark:bg-black py-16 md:py-20">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="font-bold text-[28px] md:text-[32px] uppercase tracking-wider text-black dark:text-white mb-3" style={{ fontFamily: 'Unbounded, sans-serif' }}>Portfolio</h2>
          <div className="w-16 h-[3px] bg-[#F21422] mx-auto"></div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center gap-6 md:gap-8 mb-10 md:mb-12"
        >
          <button
            onClick={() => setActiveFilter("All")}
            className={`relative font-semibold text-[13px] md:text-[14px] pb-2 transition ${
              activeFilter === "All" ? "text-[#F21422]" : `${isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'}`
            }`}
          >
            All
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[#F21422] transition-all duration-300 ${activeFilter === "All" ? "w-full" : "w-0"}`}></span>
          </button>
          <button
            onClick={() => setActiveFilter("Mobile App")}
            className={`relative font-semibold text-[13px] md:text-[14px] pb-2 transition ${
              activeFilter === "Mobile App" ? "text-[#F21422]" : `${isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'}`
            }`}
          >
            Mobile App
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[#F21422] transition-all duration-300 ${activeFilter === "Mobile App" ? "w-full" : "w-0"}`}></span>
          </button>
          <button
            onClick={() => setActiveFilter("Website")}
            className={`relative font-semibold text-[13px] md:text-[14px] pb-2 transition ${
              activeFilter === "Website" ? "text-[#F21422]" : `${isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'}`
            }`}
          >
            Website
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[#F21422] transition-all duration-300 ${activeFilter === "Website" ? "w-full" : "w-0"}`}></span>
          </button>
        </motion.div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {/* E-Commerce App - Show in All and Mobile App */}
            {(activeFilter === "All" || activeFilter === "Mobile App") && (
              <Link href="/portfolio/ecommerce-app">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/5] md:aspect-[3/4] bg-white/10 rounded-[5px] shadow-[0px_4px_9.4px_rgba(0,0,0,0.25)] relative overflow-hidden mb-4 group-hover:shadow-[0px_12px_30px_rgba(0,0,0,0.15)] transition-all duration-500 border border-white/20">
                    <Image src="/img/Frame 563.png" alt="E-commerce App" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                        <Image src="/Icon/search.png" width={20} height={20} alt="View" className="object-contain" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-[15px] md:text-[16px] text-black dark:text-white mb-1 group-hover:text-[#F21422] transition-colors" style={{ fontFamily: 'Unbounded, sans-serif' }}>E-commerce App</h3>
                  <p className="text-[12px] md:text-[13px] text-black/50 dark:text-white/50">Mobile Application • UI/UX Design</p>
                </motion.div>
              </Link>
            )}

            {/* Education Platform - Show in All and Mobile App */}
            {(activeFilter === "All" || activeFilter === "Mobile App") && (
              <Link href="/portfolio/education-platform">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/5] md:aspect-[3/4] bg-white/10 rounded-[5px] shadow-[0px_4px_9.4px_rgba(0,0,0,0.25)] relative overflow-hidden mb-4 group-hover:shadow-[0px_12px_30px_rgba(0,0,0,0.15)] transition-all duration-500 border border-white/20">
                    <Image src="/img/Frame 441.png" alt="University App" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                        <Image src="/Icon/search.png" width={20} height={20} alt="View" className="object-contain" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-[15px] md:text-[16px] text-black dark:text-white mb-1 group-hover:text-[#F21422] transition-colors" style={{ fontFamily: 'Unbounded, sans-serif' }}>Education Platform</h3>
                  <p className="text-[12px] md:text-[13px] text-black/50 dark:text-white/50">Mobile Application • UI/UX Design</p>
                </motion.div>
              </Link>
            )}

            {/* Booking Website - Show in All and Website */}
            {(activeFilter === "All" || activeFilter === "Website") && (
              <Link href="/portfolio/booking-website">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: activeFilter === "Website" ? 0.1 : 0.5 }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/5] md:aspect-[3/4] bg-white/10 rounded-[5px] shadow-[0px_4px_9.4px_rgba(0,0,0,0.25)] relative overflow-hidden mb-4 group-hover:shadow-[0px_12px_30px_rgba(0,0,0,0.15)] transition-all duration-500 border border-white/20">
                    <Image src="/img/booking.png" alt="Booking Website" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                        <Image src="/Icon/search.png" width={20} height={20} alt="View" className="object-contain" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-[15px] md:text-[16px] text-black dark:text-white mb-1 group-hover:text-[#F21422] transition-colors" style={{ fontFamily: 'Unbounded, sans-serif' }}>Booking Website</h3>
                  <p className="text-[12px] md:text-[13px] text-black/50 dark:text-white/50">Web Design • UI/UX Design</p>
                </motion.div>
              </Link>
            )}

            {/* Clone Project - Show only in Mobile App */}
            {activeFilter === "Mobile App" && (
              <Link href="/portfolio/clone-project-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/5] md:aspect-[3/4] bg-white/10 rounded-[5px] shadow-[0px_4px_9.4px_rgba(0,0,0,0.25)] relative overflow-hidden mb-4 group-hover:shadow-[0px_12px_30px_rgba(0,0,0,0.15)] transition-all duration-500 border border-white/20">
                    <Image src="/img/Frame 565.png" alt="Clone Project" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                        <Image src="/Icon/search.png" width={20} height={20} alt="View" className="object-contain" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-[15px] md:text-[16px] text-black dark:text-white mb-1 group-hover:text-[#F21422] transition-colors" style={{ fontFamily: 'Unbounded, sans-serif' }}>Clone Project</h3>
                  <p className="text-[12px] md:text-[13px] text-black/50 dark:text-white/50">Mobile Application • UI/UX Design</p>
                </motion.div>
              </Link>
            )}

            {/* Second Website Card - Show only in Website filter */}
            {activeFilter === "Website" && (
              <Link href="/portfolio/clone-project">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/5] md:aspect-[3/4] bg-white/10 rounded-[5px] shadow-[0px_4px_9.4px_rgba(0,0,0,0.25)] relative overflow-hidden mb-4 group-hover:shadow-[0px_12px_30px_rgba(0,0,0,0.15)] transition-all duration-500 border border-white/20">
                    <Image src="/img/Frame 564.png" alt="Clone project" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                        <Image src="/Icon/search.png" width={20} height={20} alt="View" className="object-contain" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-[15px] md:text-[16px] text-black dark:text-white mb-1 group-hover:text-[#F21422] transition-colors" style={{ fontFamily: 'Unbounded, sans-serif' }}>Clone project</h3>
                  <p className="text-[12px] md:text-[13px] text-black/50 dark:text-white/50">Web Design • UI/UX Design</p>
                </motion.div>
              </Link>
            )}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex justify-center mt-8 md:mt-10"
        >
          <Link href="/portfolio">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${isDark ? 'bg-white/10' : 'bg-white/80'} backdrop-blur-xl backdrop-saturate-150 shadow-[0px_2px_9.4px_rgba(0,0,0,0.25)] rounded-[5px] h-[42px] md:h-[46px] px-8 md:px-10 font-bold text-[13px] md:text-[14px] uppercase ${isDark ? 'text-white' : 'text-black'} hover:text-[#F21422] transition-colors border border-white/10`}
              style={{
                backdropFilter: 'blur(100px) saturate(150%)',
                WebkitBackdropFilter: 'blur(100px) saturate(150%)'
              }}
            >
              View All Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
