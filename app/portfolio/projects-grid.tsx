"use client"

import Image from "next/image"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"

interface Project {
  id: number
  src: string
  alt: string
  title: string
  rule: string
  width: number
  height: number
  href: string
}

const projects: Project[] = [
  {
    id: 1,
    src: "/img/MacBook Pro 16 Mockup on a Glossy Black Surface (Mockuuups Studio).png",
    alt: "Tropical resort travel website shown on MacBook Pro — glossy black surface",
    title: "Clone Project",
    rule: "UI Design",
    width: 877,
    height: 480,
    href: "/portfolio/clone-project",
  },
  {
    id: 2,
    src: "/img/Mockup 32.png",
    alt: "Find The Place You'll Love — real estate mobile app on two phones, orange scaffold background",
    title: "Ecommerce",
    rule: "UX/UI Design",
    width: 427,
    height: 480,
    href: "/portfolio/ecommerce-app",
  },
  {
    id: 3,
    src: "/img/Mockup 15.png",
    alt: "University finder app shown on two phones — blue and white background",
    title: "Education",
    rule: "Project Lead | UX/UI Design | UX Research",
    width: 765,
    height: 504,
    href: "/portfolio/education-platform",
  },
  {
    id: 4,
    src: "/img/Mockup 31.png",
    alt: "Banking and finance app shown on two phones — dark surface",
    title: "Clone Project",
    rule: "UI Design",
    width: 539,
    height: 504,
    href: "/portfolio/clone-project-2",
  },
  {
    id: 5,
    src: "/img/Rectangle 151.png",
    alt: "Cambodia travel website shown on laptop — dark background",
    title: "Cambo Tour",
    rule: "UX/UI Design",
    width: 1328,
    height: 792,
    href: "/portfolio/booking-website",
  },
]

function SearchIcon() {
  return (
    <Image
      src="/Icon/search.png"
      alt=""
      width={31}
      height={31}
      className="w-5 h-5 sm:w-6 sm:h-6 md:w-[31px] md:h-[31px]"
      style={{ filter: 'brightness(0) invert(1)' }}
      aria-hidden="true"
    />
  )
}

function ProjectCard({
  project,
  className = "",
  priority = false,
}: {
  project: Project
  className?: string
  priority?: boolean
}) {
  return (
    <Link href={project.href} className={`group relative overflow-hidden bg-muted cursor-pointer ${className}`}>
      {/* Image — blurs on hover (desktop only) */}
      <Image
        src={project.src}
        alt={project.alt}
        width={project.width}
        height={project.height}
        priority={priority}
        className="w-full h-full object-cover transition-all duration-500 md:group-hover:scale-105 md:group-hover:blur-sm"
      />

      {/* Scrim: rgba(93,75,75,0.32) per spec (desktop hover only) */}
      <div
        className="absolute inset-0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-400 hidden md:block"
        style={{ background: "rgba(93, 75, 75, 0.32)" }}
      />

      {/* Desktop Overlay: centered frame with icon → title → rule stacked (hover only) */}
      <div className="absolute inset-0 hidden md:flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
        <div className="flex flex-col items-center px-4" style={{ width: "100%", maxWidth: "289px", gap: "0px" }}>
          {/* Search icon — top of frame */}
          <SearchIcon />

          {/* Title — Unbounded 700 20px/25px */}
          <h3
            className="text-center mt-2"
            style={{
              fontFamily: "var(--font-unbounded, sans-serif)",
              fontWeight: 700,
              fontSize: "clamp(14px, 2vw, 20px)",
              lineHeight: "1.25",
              color: "#FFFFFF",
              width: "100%",
              maxWidth: "281px",
            }}
          >
            {project.title}
          </h3>

          {/* Rule — Inter 700 18px/22px */}
          <p
            className="mt-2 text-center"
            style={{
              fontFamily: "var(--font-inter, Inter, sans-serif)",
              fontWeight: 700,
              fontSize: "clamp(12px, 1.8vw, 18px)",
              lineHeight: "1.4",
              color: "#FFFFFF",
              whiteSpace: "normal",
              maxWidth: "90%",
            }}
          >
            Rule: {project.rule}
          </p>
        </div>
      </div>

      {/* Mobile Display: title and rule at bottom left with gradient (always visible) */}
      <div className="absolute bottom-0 left-0 right-0 md:hidden px-6 py-8" style={{
        background: "linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.75) 40%, rgba(0, 0, 0, 0.4) 70%, transparent 100%)"
      }}>
        <h3
          className="text-left mb-2"
          style={{
            fontFamily: "var(--font-unbounded, sans-serif)",
            fontWeight: 700,
            fontSize: "clamp(24px, 5.5vw, 32px)",
            lineHeight: "1.2",
            color: "#FFFFFF",
            letterSpacing: "-0.02em"
          }}
        >
          {project.title}
        </h3>
        <p
          className="text-left"
          style={{
            fontFamily: "var(--font-inter, Inter, sans-serif)",
            fontWeight: 400,
            fontSize: "clamp(14px, 3.2vw, 18px)",
            lineHeight: "1.5",
            color: "#FFFFFF",
            opacity: 0.95
          }}
        >
          {project.rule}
        </p>
      </div>
    </Link>
  )
}

export default function ProjectsGrid() {
  const { ref: ref1, inView: inView1 } = useInView()
  const { ref: ref2, inView: inView2 } = useInView()
  const { ref: ref3, inView: inView3 } = useInView()

  return (
    <section className="w-full" aria-label="Portfolio projects">

      {/* Row 1 */}
      <div
        ref={ref1 as React.RefObject<HTMLDivElement>}
        className="grid grid-cols-1 md:grid-cols-[877fr_427fr] border-t border-border"
      >
        <div
          className={`border-b md:border-b-0 md:border-r border-border animate-fade-up ${inView1 ? "in-view" : ""}`}
          style={{ aspectRatio: "877/480" }}
        >
          <ProjectCard project={projects[0]} className="w-full h-full" priority />
        </div>
        <div
          className={`animate-fade-up animation-delay-200 ${inView1 ? "in-view" : ""}`}
          style={{ aspectRatio: "427/480" }}
        >
          <ProjectCard project={projects[1]} className="w-full h-full" priority />
        </div>
      </div>

      {/* Row 2 */}
      <div
        ref={ref2 as React.RefObject<HTMLDivElement>}
        className="grid grid-cols-1 md:grid-cols-[765fr_539fr] border-t border-border"
      >
        <div
          className={`border-b md:border-b-0 md:border-r border-border animate-fade-up ${inView2 ? "in-view" : ""}`}
          style={{ aspectRatio: "765/504" }}
        >
          <ProjectCard project={projects[2]} className="w-full h-full" />
        </div>
        <div
          className={`animate-fade-up animation-delay-200 ${inView2 ? "in-view" : ""}`}
          style={{ aspectRatio: "539/504" }}
        >
          <ProjectCard project={projects[3]} className="w-full h-full" />
        </div>
      </div>

      {/* Row 3: Full-width */}
      <div
        ref={ref3 as React.RefObject<HTMLDivElement>}
        className={`border-t border-border animate-fade-up ${inView3 ? "in-view" : ""}`}
        style={{ aspectRatio: "1328/792" }}
      >
        <ProjectCard project={projects[4]} className="w-full h-full" />
      </div>

    </section>
  )
}
