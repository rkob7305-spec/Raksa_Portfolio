"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Education() {
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
    <section id="education" className="w-full bg-white dark:bg-black py-16 sm:py-20 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
      >
        <h2 className="font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] uppercase tracking-wider mb-3 dark:text-white" style={{ fontFamily: 'Unbounded, sans-serif', fontWeight: 700 }}>My Education</h2>
        <div className="w-20 sm:w-24 h-[3px] bg-[#F21422] mx-auto"></div>
      </motion.div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 md:gap-6 cursor-pointer rounded-[5px] p-4 sm:p-5 md:p-6 transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-md hover:shadow-[0px_2px_9.4px_0px_rgba(0,0,0,0.25)] border border-white/20"
        >
          <div className={`w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] ${isDark ? 'bg-white/10' : 'bg-white'} rounded-[5px] flex items-center justify-center shrink-0 shadow-[0px_4px_9.4px_rgba(0,0,0,0.25)] border border-white/20`}>
            <div className="w-[60px] h-[70px] sm:w-[70px] sm:h-[80px] md:w-[80px] md:h-[90px] lg:w-[90px] lg:h-[100px] relative">
              <Image
                src={isDark ? "/Icon/step2.png" : "/Icon/step.png"}
                alt="IT Academy STEP"
                fill
                className="object-contain opacity-100"
              />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-medium text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-black dark:text-white mb-2" style={{ fontFamily: 'Unbounded, sans-serif' }}>UX/UI Design course</h3>
            <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-black/60 dark:text-white/60 font-normal leading-relaxed">
              Successfully completed a 20-hour "UX/UI Design" course at IT Academy STEP Institute Cambodia. (January 05 - March 09) 2026
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 md:gap-6 cursor-pointer rounded-[5px] p-4 sm:p-5 md:p-6 transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-md hover:shadow-[0px_2px_9.4px_0px_rgba(0,0,0,0.25)] border border-white/20"
        >
          <div className="w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] bg-white/10 rounded-[5px] flex items-center justify-center shrink-0 shadow-[0px_4px_9.4px_rgba(0,0,0,0.25)] border border-white/20">
            <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px] relative">
              <Image
                src={isDark ? "/Icon/mok2.png" : "/Icon/mork.png"}
                alt="University Logo"
                fill
                className="object-contain opacity-100"
              />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-medium text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-black dark:text-white mb-2" style={{ fontFamily: 'Unbounded, sans-serif' }}>
              Information Technology. <span className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-normal italic">(second year)</span>
            </h3>
            <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-black/60 dark:text-white/60 font-normal leading-relaxed">
              National University of Management, Phnom Penh. (2026 - Present)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
