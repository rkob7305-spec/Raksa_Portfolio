"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const experienceItems = [
  {
    side: 'left',
    year: '2026',
    title: 'Selected to the final round AI For Education Competition (CADT)',
    role: 'Setup Date & Training Data',
    description: '"Collected and labeled image data to train the detection model and integrated it into the prototype. This project focuses on improving solutions to social challenges"',
  },
  {
    side: 'right',
    year: '2026',
    title: 'Selected to the final round UX/UI Design Competition (NUM)',
    role: 'UX/UI Designer, UX Research & Project Lead',
    description: 'After High School is an educational mobile application designed to help students explore universities and choose suitable majors. In this project, I was responsible for the UX/UI design, where I conducted user research, created user flows, wireframes, and interactive prototypes, and performed usability testing.',
  },
  {
    side: 'left',
    year: '2026',
    title: 'Programming-Based Algorithms Challenge 2026 (NUM)',
    role: '',
    description: 'Completed The Coding Competition as a team at National University of Management',
  },
];

export default function Experience() {
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
    <section id="experience" className="w-full py-16 sm:py-20 md:py-24 relative overflow-hidden bg-[#ffffff] dark:bg-black">
      <div className="max-w-[1982px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="font-bold text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px] text-black dark:text-white uppercase tracking-wider mb-3" style={{ fontFamily: 'Unbounded, sans-serif' }}>Experience</h2>
          <div className="w-20 sm:w-24 h-[3px] bg-[#F21422] mx-auto"></div>
        </motion.div>

        <div className="relative max-w-[1100px] mx-auto mb-10 sm:mb-12 md:mb-14">
          <div className={`hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] ${isDark ? 'bg-white' : 'bg-black/10'} -translate-x-1/2`} />

          <div className="flex flex-col gap-5 sm:gap-6 md:gap-8">
            {experienceItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`flex flex-col md:flex-row items-start gap-4 md:gap-8 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-full md:w-[calc(50%-40px)] bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-[5px] shadow-[0px_2px_9.4px_0px_rgba(0,0,0,0.25)] p-4 sm:p-5 md:p-6 lg:p-7 border border-white/20"
                >
                  <h3 className="font-medium text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-black dark:text-white mb-2 leading-snug" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                    {item.title}
                  </h3>
                  {item.role && (
                    <p className="font-extralight italic text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-black dark:text-white/80 mb-2 sm:mb-3">
                      {item.role}
                    </p>
                  )}
                  <p className="font-light text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-black/50 dark:text-white/50 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>

                <div className="hidden md:flex flex-col items-center gap-2 relative z-10">
                  <div className={`w-4 h-4 rounded-full ${isDark ? 'bg-white' : 'bg-black'} border-4 ${isDark ? 'border-gray-900' : 'border-white'} shadow-md`} />
                  <span className="font-bold text-[18px] md:text-[19px] lg:text-[20px] text-[#555] dark:text-gray-400">
                    {item.year}
                  </span>
                </div>

                <div className="hidden md:block w-[calc(50%-40px)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-14 md:mt-16 lg:mt-20"
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h3 className="font-bold text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] text-black dark:text-white uppercase tracking-wider mb-3" style={{ fontFamily: 'Unbounded, sans-serif' }}>Certificates</h3>
            <div className="w-20 sm:w-24 h-[3px] bg-[#F21422] mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-5 sm:gap-6 md:gap-8 py-4 md:py-8 px-2 sm:px-4">
            {/* Left Certificate */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="w-full max-w-[380px] sm:max-w-[420px] h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px] bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-[5px] shadow-[0px_2px_9.4px_rgba(0,0,0,0.25)] overflow-hidden cursor-pointer relative border border-white/20"
            >
              <img src="/img/certificate1.png" alt="Certificate" className="w-full h-full object-cover"/>
            </motion.div>

            {/* Right Certificate */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="w-full max-w-[380px] sm:max-w-[420px] h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px] bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-[5px] shadow-[0px_2px_9.4px_rgba(0,0,0,0.25)] overflow-hidden cursor-pointer relative border border-white/20"
            >
              <img src="/img/certivicate.png" alt="Certificate" className="w-full h-full object-cover"/>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
