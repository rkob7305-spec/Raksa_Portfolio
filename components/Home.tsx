"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HomeSection() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const htmlElement = document.documentElement;
      setIsDark(htmlElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    const handleThemeChange = () => {
      checkDarkMode();
    };
    
    window.addEventListener('themechange', handleThemeChange);
    
    const observer = new MutationObserver(() => {
      checkDarkMode();
    });
    
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    return () => {
      window.removeEventListener('themechange', handleThemeChange);
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="home"
      className="relative w-full min-h-screen overflow-hidden pt-20 md:pt-24"
      style={{
        background: isDark 
          ? 'linear-gradient(71.32deg, #000000 0%, #94010A 91.62%)'
          : '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Container with max-width */}
      <div 
        className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          boxSizing: 'border-box',
        }}
      >
        {/* Main Flex Container - Browser Compatible */}
        <div
          className="hero-container"
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            flexWrap: 'nowrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* RIGHT SIDE - Portrait Photo */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="hero-image-column"
            style={{
              flex: '0 0 auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: 0,
            }}
          >
            {/* Pole */}
            <motion.div 
              animate={{ 
                scaleY: [1, 1.01, 1],
                rotateZ: [0, 0.5, -0.5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative bg-gradient-to-b from-gray-500 via-gray-600 to-gray-500 rounded-full -mb-2"
              style={{
                width: '3px',
                height: 'clamp(80px, 10vw, 140px)',
                boxShadow: "inset 1px 0 2px rgba(0,0,0,0.4), 1px 0 3px rgba(0,0,0,0.2)"
              }}
            />

            {/* Portrait Card */}
            <motion.div
              animate={{ 
                rotateY: [-2, 2, -2],
                rotateX: [1, -1, 1],
                y: [0, -5, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ 
                y: -15,
                rotateY: 5,
                rotateX: -3,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative backdrop-blur-xl rounded-[16px] shadow-[0px_20px_60px_rgba(0,0,0,0.3)] overflow-hidden border border-white/20"
              style={{
                width: 'clamp(280px, 35vw, 480px)',
                height: 'clamp(410px, 50vw, 700px)',
                transformStyle: "preserve-3d",
                boxShadow: "0 25px 50px rgba(0,0,0,0.3), 0 10px 20px rgba(0,0,0,0.2)",
                background: 'rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-90"
                  style={{
                    backgroundImage: `url(${isDark ? '/img/my_img5.png' : '/img/my_img1.png'})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>
              </div>

              <div className="relative px-6 py-5 h-full flex flex-col justify-end">
                <div className="absolute top-5 left-6 right-6 h-[2px] bg-white/30"></div>

                <div className="mb-5">
                  <h2 className="font-bold text-[32px] sm:text-[40px] md:text-[48px] text-white leading-none mb-2 tracking-tight" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                    KOB<br/>RAKSA
                  </h2>
                  <p className={`font-inter font-medium text-[11px] sm:text-[12px] md:text-[13px] ${isDark ? 'text-[#F21422]' : 'text-gray-200'} uppercase tracking-[0.2em]`}>
                    UX/UI Designer
                  </p>
                </div>

                <div className="flex items-end justify-between">
                  <div className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 overflow-hidden">
                    <img 
                      src="/Icon/image 16 (3).png" 
                      alt="Logo" 
                      className="w-full h-full object-contain p-2" 
                    />
                  </div>
                </div>
              </div>

              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[14px] h-[14px] bg-gray-700 rounded-full shadow-inner border-2 border-gray-600"></div>
            </motion.div>
          </motion.div>

          {/* LEFT SIDE - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="hero-text-column"
            style={{
              flex: '1 1 auto',
              display: 'flex',
              flexDirection: 'column',
              minWidth: 0,
              maxWidth: '420px',
            }}
          >
            <div 
              className="px-5 sm:px-6 py-5 sm:py-6 bg-white/10 backdrop-blur-md rounded-[5px] shadow-[0px_4px_20px_rgba(0,0,0,0.15)]"
              style={{
                textAlign: 'left',
              }}
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="font-inter font-bold text-[22px] sm:text-[26px] md:text-[32px] lg:text-[34px] text-[#F21422] leading-tight mb-3 tracking-tight uppercase"
                style={{
                  letterSpacing: '0.16em',
                }}
              >
                UX/UI Designer
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="font-inter font-medium text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed"
                style={{ 
                  color: isDark ? '#FFFFFF' : 'rgba(0, 0, 0, 0.75)' 
                }}
              >
                "I create clean, modern, and user friendly designs that balance aesthetics with usability, ensuring intuitive and impactful digital experiences."
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Responsive Styles for Mobile */}
      <style jsx>{`
        @media (max-width: 1023px) {
          .hero-container {
            flex-direction: column !important;
            gap: 2rem !important;
          }
          
          .hero-image-column {
            order: 1;
          }
          
          .hero-text-column {
            order: 2;
            max-width: 100% !important;
            text-align: center !important;
          }
          
          .hero-text-column > div {
            text-align: center !important;
          }
        }
        
        /* Ensure flexbox works in all browsers */
        .hero-container {
          -webkit-box-orient: horizontal;
          -webkit-box-direction: reverse;
          -ms-flex-direction: row-reverse;
        }
        
        .hero-image-column,
        .hero-text-column {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
        }
      `}</style>
    </section>
  );
}
