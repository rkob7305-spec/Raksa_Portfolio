"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
    
    const handleThemeChange = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    window.addEventListener('themechange', handleThemeChange);
    
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
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

  const skills = [
    { name: 'UX/UI Design', level: 80 },
    { name: 'UX Research', level: 70 },
    { name: 'Knowledge Basics For Web', level: 50 },
    { name: 'Tool Figma', level: 85 },
  ];

  return (
    <section 
      id="about" 
      className="relative w-full"
      style={{
        background: isDark ? '#000000' : '#FFFFFF',
        paddingTop: 'clamp(3rem, 8vw, 6rem)',
        paddingBottom: 'clamp(3rem, 8vw, 6rem)',
      }}
    >
      {/* Container with max-width */}
      <div 
        className="about-container"
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(1rem, 4vw, 2rem)',
          boxSizing: 'border-box',
          WebkitBoxSizing: 'border-box',
          MozBoxSizing: 'border-box',
        }}
      >
        
        {/* Two-Column Layout */}
        <div
          className="about-grid"
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'center',
            WebkitBoxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            boxSizing: 'border-box',
          }}
        >
          
          {/* LEFT COLUMN - Portrait Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="portrait-column"
            style={{
              flex: '0 0 auto',
              width: 'clamp(280px, 40%, 450px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <div 
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '3/4',
                overflow: 'hidden',
                borderRadius: '5px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <Image
                src={isDark ? "/img/my_img4.png" : "/img/my_img2.png"}
                alt="Raksa - UX/UI Designer"
                fill
                priority
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center top',
                }}
              />
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="content-column"
            style={{
              flex: '1 1 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(2rem, 4vw, 3rem)',
              minWidth: 0,
            }}
          >
            
            {/* ABOUT ME SECTION */}
            <div>
              <div className="text-center mb-8 sm:mb-10">
                <h2 
                  className="font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] uppercase tracking-wider mb-3"
                  style={{
                    fontFamily: 'Unbounded, sans-serif',
                    fontWeight: 700,
                    color: isDark ? '#FFFFFF' : '#000000',
                  }}
                >
                  ABOUT ME
                </h2>
                <div className="w-20 h-[3px] bg-[#F21422] mx-auto"></div>
              </div>
              
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(15px, 1.5vw, 18px)',
                  lineHeight: '1.7',
                  color: isDark ? '#FFFFFF' : '#000000',
                  textAlign: 'justify',
                }}
              >
                My name is <span style={{ fontFamily: 'Unbounded, sans-serif', fontWeight: 700 }}>Raksa</span>, and I'm passionate about UI/UX design. I enjoy creating clean, modern, and user friendly interfaces. I like designing apps that not only look good but also feel smooth and easy to use. I focus on making sure everything is clear, simple, and intuitive so users can enjoy the experience without confusion. I also joined a UI/UX competition at the National University of Management (NUM), where I improved my creativity, design thinking, and problem-solving through practical challenges.
              </p>
            </div>

            {/* SKILLS SECTION */}
            <div>
              <div className="text-center mb-8">
                <h3 
                  className="font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] uppercase tracking-wider mb-3"
                  style={{
                    fontFamily: 'Unbounded, sans-serif',
                    fontWeight: 700,
                    color: isDark ? '#FFFFFF' : '#000000',
                  }}
                >
                  SKILL
                </h3>
                <div className="w-20 h-[3px] bg-[#F21422] mx-auto"></div>
              </div>

              {/* Skills List */}
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.75rem',
                }}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Skill Name and Percentage */}
                    <div 
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '0.75rem',
                      }}
                    >
                      <span 
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 400,
                          fontSize: 'clamp(15px, 1.5vw, 18px)',
                          color: isDark ? '#FFFFFF' : '#000000',
                        }}
                      >
                        {skill.name}
                      </span>
                      <span 
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 600,
                          fontSize: 'clamp(15px, 1.5vw, 18px)',
                          color: isDark ? '#7C0109' : '#000000',
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div 
                      style={{
                        width: '100%',
                        height: '10px',
                        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.2)' : '#E5E5E5',
                        borderRadius: '5px',
                        overflow: 'hidden',
                        position: 'relative',
                      }}
                    >
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.2, 
                          delay: 0.2 + index * 0.1, 
                          ease: "easeOut" 
                        }}
                        style={{
                          height: '100%',
                          backgroundColor: isDark ? '#7C0109' : '#000000',
                          borderRadius: '5px',
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        /* Tablet - Adjust spacing */
        @media (min-width: 1024px) {
          .about-grid {
            gap: 2.5rem !important;
            position: relative !important;
          }
          
          .portrait-column {
            position: absolute !important;
            left: 76px !important;
            top: 3170px !important;
            width: clamp(250px, 38%, 350px) !important;
            margin-top: 100!important;
          }
        }
        
        /* Mobile - Stack vertically */
        @media (max-width: 767px) {
          .about-grid {
            flex-direction: column !important;
            gap: 2rem !important;
            align-items: center !important;
          }
          
          .portrait-column {
            width: 100% !important;
            max-width: 400px !important;
          }
          
          .content-column {
            gap: 2rem !important;
          }
        }
        
        /* Browser compatibility */
        .about-container,
        .about-grid,
        .portrait-column,
        .content-column {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
        }
        
        /* Flexbox vendor prefixes for older browsers */
        .about-grid {
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -webkit-flex-direction: row;
          -ms-flex-direction: row;
          flex-direction: row;
        }
        
        .content-column {
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
        }
      `}</style>
    </section>
  );
}
