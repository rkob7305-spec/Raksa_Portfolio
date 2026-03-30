"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function PortfolioHeader() {
  const { ref, inView } = useInView()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))

    const handleThemeChange = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }

    window.addEventListener('themechange', handleThemeChange)

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    return () => {
      window.removeEventListener('themechange', handleThemeChange)
      observer.disconnect()
    }
  }, [])

  function toggleTheme() {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle("dark", next)
    window.dispatchEvent(new Event('themechange'))
  }

  return (
    <header
      ref={ref as React.RefObject<HTMLElement>}
      className="w-full px-6 md:px-10 lg:px-16 xl:px-20 py-12 md:py-16 lg:py-20 border-b border-border relative"
    >
      {/* Theme Toggle Button - Top Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
        onClick={toggleTheme}
        className="absolute top-6 right-6 md:top-8 md:right-10 flex backdrop-blur-md shadow-[0px_2px_9.4px_rgba(0,0,0,0.25)] h-[50px] md:h-[60px] items-center justify-center px-3 gap-2 md:gap-3 cursor-pointer border border-white/20"
        style={{
          borderRadius: '30px',
          minWidth: '120px',
          width: 'fit-content',
          background: 'rgba(255, 255, 255, 0.1)'
        }}
      >
        <motion.div
          className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] bg-[#D9D9D9]/20 shadow-md rounded-full flex items-center justify-center flex-shrink-0"
          animate={{ rotate: isDark ? 360 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isDark ? "dark" : "light"}
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
            key={isDark ? "dark-text" : "light-text"}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`font-inter font-medium text-[14px] md:text-[16px] uppercase whitespace-nowrap ${isDark ? 'text-white' : 'text-black'}`}
            style={{ fontFamily: 'Inter, sans-serif', paddingRight: '8px' }}
          >
            {isDark ? "DARK" : "LIGHT"}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 lg:gap-16">

          {/* Left block */}
          <div
            className={`flex flex-col items-center justify-center gap-2 shrink-0 w-full md:w-[350px] animate-fade-up${inView ? " in-view" : ""}`}
          >
            <Image
              src={isDark 
                ? "/Icon/image 16 (3).png"
                : "/Icon/image 16 (2).png"
              }
              alt="RS Logo"
              width={100}
              height={112}
              priority
              style={{ width: "clamp(70px, 8vw, 100px)", height: "auto" }}
            />
            <h1
              className="uppercase text-center"
              style={{
                fontFamily: "var(--font-unbounded, sans-serif)",
                fontSize: "clamp(32px, 5vw, 55px)",
                fontWeight: 700,
                lineHeight: "1.2",
                color: isDark ? '#FFFFFF' : '#000000',
              }}
            >
              PORTFOLIO
            </h1>
          </div>

          {/* Vertical divider — md+ */}
          <div
            className={`hidden md:block self-stretch shrink-0 animate-fade-in animation-delay-200 ${inView ? "in-view" : ""}`}
            style={{ 
              width: "1px", 
              minHeight: "200px", 
              background: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)" 
            }}
          />

          {/* Horizontal divider — mobile only */}
          <div 
            className="block md:hidden h-px w-full" 
            style={{ background: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)" }} 
          />

          {/* Right: description */}
          <div
            className={`flex items-center justify-center md:justify-start md:flex-1 w-full animate-fade-up animation-delay-300${inView ? " in-view" : ""}`}
          >
            <p
              className="font-sans lowercase text-center md:text-left"
              style={{
                fontFamily: "var(--font-inter, Inter, sans-serif)",
                fontWeight: 400,
                fontSize: "clamp(15px, 1.5vw, 18px)",
                lineHeight: "1.6",
                color: isDark ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.6)",
                maxWidth: "500px",
              }}
            >
              i created this project to develop and strengthen my design skills.
              during the process, i applied ui/ux design principles, practiced
              problem-solving, and focused on designing a clear and user-friendly
              experience.
            </p>
          </div>

        </div>
      </div>
    </header>
  )
}
