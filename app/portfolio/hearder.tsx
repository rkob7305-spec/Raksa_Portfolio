"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"
import { useEffect, useState } from "react"

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

  return (
    <header
      ref={ref as React.RefObject<HTMLElement>}
      className="w-full px-6 md:px-10 lg:px-16 xl:px-20 py-12 md:py-16 lg:py-20 border-b border-border"
    >
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
