"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Scroll detection to update active link
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => ({
        id: link.href.replace('#', ''),
        label: link.label
      }));

      const scrollPosition = window.scrollY + 200;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if we're near the bottom of the page (within 100px)
      if (windowHeight + window.scrollY >= documentHeight - 100) {
        setActiveLink("Contact");
        return;
      }

      // Check each section from bottom to top
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          // Check if we're within this section
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveLink(sections[i].label);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function toggleTheme() {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      window.dispatchEvent(new Event('themechange'));
      return next;
    });
  }

  const handleNavClick = (label: string, href: string) => {
    setActiveLink(label);
    setIsMobileMenuOpen(false);
    const sectionId = href.replace("#", "");
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = sectionId === "about" ? -120 : -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full px-4 md:px-6 py-4 z-50">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-2 md:gap-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[44px] font-bold uppercase tracking-tight leading-tight flex-shrink-0"
            style={{ 
              fontFamily: 'Unbounded, sans-serif',
              color: isDark ? '#FFFFFF' : '#000000'
            }}
          >
            RaKSA
          </motion.div>

          {/* Center Nav Links - Tablet & Desktop */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex px-4 md:px-6 lg:px-8 py-4 lg:py-5 shadow-[0_2px_9.4px_rgba(0,0,0,0.25)] backdrop-blur-sm flex-shrink border border-white/20"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '5px'
            }}
          >
            <ul className="flex items-center gap-4 md:gap-6 lg:gap-8">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.label, link.href);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-[13px] md:text-[14px] lg:text-[15px] font-bold uppercase tracking-wide transition-colors whitespace-nowrap ${
                      activeLink === link.label
                        ? "text-[#F21422]"
                        : isDark 
                          ? "text-white hover:text-[#F21422]/70"
                          : "text-black hover:text-[#F21422]/70"
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif', lineHeight: '18px', fontStyle: 'normal' }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Side - Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Theme Toggle - Tablet & Desktop */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              onClick={toggleTheme}
              className="hidden md:flex backdrop-blur-md shadow-[0px_2px_9.4px_rgba(0,0,0,0.25)] h-[60px] items-center justify-center px-3 gap-3 cursor-pointer border border-white/20"
              style={{
                borderRadius: '30px',
                minWidth: '140px',
                width: 'fit-content',
                background: 'rgba(255, 255, 255, 0.1)'
              }}
            >
              <motion.div
                className="w-[48px] h-[48px] bg-[#D9D9D9]/20 shadow-md rounded-full flex items-center justify-center flex-shrink-0"
                animate={{ rotate: isDark ? 360 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDark ? "dark-desktop" : "light-desktop"}
                    initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={isDark ? "/Icon/Vector (1).png" : "/Icon/light.png"}
                      alt={isDark ? "Dark Mode" : "Light Mode"}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
              <AnimatePresence mode="wait">
                <motion.span
                  key={isDark ? "dark-text-desktop" : "light-text-desktop"}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`font-inter font-medium text-[16px] uppercase whitespace-nowrap ${isDark ? 'text-white' : 'text-black'}`}
                  style={{ fontFamily: 'Inter, sans-serif', paddingRight: '8px' }}
                >
                  {isDark ? "DARK" : "LIGHT"}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Mobile Menu Button - Shows on Phone Only */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex h-[50px] w-[50px] items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-all hover:scale-105 active:scale-95 border border-white/20"
              style={{
                background: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
                borderRadius: '5px'
              }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" style={{ color: isDark ? '#FFFFFF' : '#000000' }} />
              ) : (
                <Menu className="h-6 w-6" style={{ color: isDark ? '#FFFFFF' : '#000000' }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown - Phone Only */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 w-full mt-2 px-4"
            >
              <div 
                className="shadow-[0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-md border border-white/20 overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                  borderRadius: '5px'
                }}
              >
                {/* Navigation Links */}
                <div className="px-6 pt-6 pb-4">
                  <ul className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(link.label, link.href);
                          }}
                          className={`block text-[16px] font-bold uppercase tracking-wide transition-all py-3 px-4 rounded-lg ${
                            activeLink === link.label
                              ? "text-[#F21422] bg-[#F21422]/10"
                              : isDark 
                                ? "text-white hover:text-[#F21422] hover:bg-white/5"
                                : "text-black hover:text-[#F21422] hover:bg-black/5"
                          }`}
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Light Mode Toggle - Mobile/Tablet */}
                <div className="px-6 pb-6">
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleTheme}
                    className="flex backdrop-blur-md shadow-[0px_2px_9.4px_rgba(0,0,0,0.25)] rounded-[30px] h-[60px] mx-auto items-center justify-center px-3 gap-3 cursor-pointer border border-white/20"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      minWidth: '140px',
                      width: 'fit-content'
                    }}
                  >
                    <motion.div
                      className="w-[48px] h-[48px] bg-[#D9D9D9]/20 shadow-md rounded-full flex items-center justify-center"
                      animate={{ rotate: isDark ? 360 : 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={isDark ? "dark-mobile" : "light-mobile"}
                          initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
                          transition={{ duration: 0.4 }}
                        >
                          <Image
                            src={isDark ? "/Icon/Vector (1).png" : "/Icon/light.png"}
                            alt={isDark ? "Dark Mode" : "Light Mode"}
                            width={20}
                            height={20}
                            className="object-contain"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </motion.div>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={isDark ? "dark-text-mobile" : "light-text-mobile"}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`font-inter font-medium text-[16px] uppercase ${isDark ? 'text-white' : 'text-black'} pr-3`}
                      >
                        {isDark ? "DARK" : "LIGHT"}
                      </motion.span>
                    </AnimatePresence>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
