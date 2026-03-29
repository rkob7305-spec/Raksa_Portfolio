"use client"

import Image from "next/image"
import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"

const categories = ["All", "Mobile App", "Website"]

const projects = [
  {
    id: 1,
    title: "E-commerce mobile App",
    category: "Mobile App",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mockup%2010-n728Jq9u4nrdE3jE4scLmpdEn3PYIq.png",
  },
  {
    id: 2,
    title: "Education Platform",
    category: "Mobile App",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mockup%2015-BU32PJR7Y88agobaww4OK1uNWmRpCQ.png",
  },
  {
    id: 3,
    title: "Cambodia Booking Website",
    category: "Website",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%20151-slZ4mWqeyesa4a15zLLmB10nhMYUTk.png",
    label: "BOOKING WEBSITE",
  },
]

function EyeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="white"/>
    </svg>
  )
}

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const { ref, inView } = useInView()

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="portfolio"
      className="w-full py-16 lg:py-24 px-6 md:px-12 lg:px-20 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-center text-foreground mb-8 tracking-wide animate-fade-up ${inView ? "in-view" : ""}`}
          style={{
            fontFamily: "var(--font-unbounded, sans-serif)",
            fontSize: "clamp(24px, 3vw, 32px)",
            fontWeight: 700,
            letterSpacing: "0.1em",
          }}
        >
          MY PORTFOLIO
        </h2>

        {/* Category Filters */}
        <div className={`flex justify-center gap-6 mb-12 animate-fade-up animation-delay-100 ${inView ? "in-view" : ""}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`transition-colors ${
                activeCategory === cat
                  ? "text-red-500 font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              style={{
                fontFamily: "var(--font-geist-sans, sans-serif)",
                fontSize: "14px",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative aspect-[4/5] overflow-hidden bg-muted cursor-pointer animate-fade-up ${inView ? "in-view" : ""}`}
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
              />

              {/* Overlay scrim */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: "rgba(0, 0, 0, 0.4)" }}
              />

              {/* Label badge */}
              {project.label && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 text-xs font-bold">
                  {project.label}
                </div>
              )}

              {/* Rotated title */}
              <div
                className="absolute bottom-8 left-4 origin-bottom-left"
                style={{ transform: "rotate(-90deg)" }}
              >
                <span
                  className="text-foreground/80 uppercase tracking-wider"
                  style={{
                    fontFamily: "var(--font-geist-sans, sans-serif)",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                  }}
                >
                  {project.title}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <div className="flex items-center gap-2 text-white">
                  <EyeIcon />
                  <span
                    style={{
                      fontFamily: "var(--font-geist-sans, sans-serif)",
                      fontSize: "14px",
                    }}
                  >
                    View
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className={`flex justify-center mt-12 animate-fade-up animation-delay-500 ${inView ? "in-view" : ""}`}>
          <a href="/">
            <button
              className="px-8 py-3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
              style={{
                fontFamily: "var(--font-geist-sans, sans-serif)",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              View All
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
