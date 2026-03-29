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
    src: "/img/MacBook Pro 16 Mockup on a Glossy Black Surface (Mockuuups Studio) (1).png",
    alt: "Tropical resort travel website shown on MacBook Pro — glossy black surface",
    title: "Clone Project",
    rule: "UI Design",
    width: 877,
    height: 480,
    href: "/portfolio/clone-project",
  },
  {
    id: 2,
    src: "/img/Mockup 10 (1).png",
    alt: "Find The Place You'll Love — real estate mobile app on two phones, orange scaffold background",
    title: "Ecommerce",
    rule: "UX/UI Design",
    width: 427,
    height: 480,
    href: "/portfolio/ecommerce-app",
  },
  {
    id: 3,
    src: "/img/Mockup 15 (1).png",
    alt: "University finder app shown on two phones — blue and white background",
    title: "Education",
    rule: "Project Lead | UX/UI Design | UX Research",
    width: 765,
    height: 504,
    href: "/portfolio/education-platform",
  },
  {
    id: 4,
    src: "/img/Mockup 31 (1).png",
    alt: "Banking and finance app shown on two phones — dark surface",
    title: "Clone Project",
    rule: "UI Design",
    width: 539,
    height: 504,
    href: "/portfolio/clone-project-2",
  },
  {
    id: 5,
    src: "/img/Rectangle 151 (1).png",
    alt: "Cambodia travel website shown on laptop — dark background",
    title: "Cambo Tour",
    rule: "UX/UI Design",
    width: 1328,
    height: 792,
    href: "/portfolio/booking-website",
  },
]

function EyeIcon() {
  return (
    <Image
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector-sxP3D210MO7DmNOEQQ9aqULOo5aiJk.png"
      alt=""
      width={31}
      height={31}
      className="w-5 h-5 sm:w-6 sm:h-6 md:w-[31px] md:h-[31px]"
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
      {/* Image — blurs on hover */}
      <Image
        src={project.src}
        alt={project.alt}
        width={project.width}
        height={project.height}
        priority={priority}
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
      />

      {/* Scrim: rgba(93,75,75,0.32) per spec */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: "rgba(93, 75, 75, 0.32)" }}
      />

      {/* Overlay: centered 289×129px frame with icon → title → rule stacked */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
        <div className="flex flex-col items-center" style={{ width: "289px", gap: "0px" }}>
          {/* Eye icon — top of frame */}
          <EyeIcon />

          {/* Title — Unbounded 700 20px/25px */}
          <h3
            className="text-center mt-2"
            style={{
              fontFamily: "var(--font-unbounded, sans-serif)",
              fontWeight: 700,
              fontSize: "clamp(12px, 1.6vw, 20px)",
              lineHeight: "25px",
              color: "#FFFFFF",
              width: "281px",
            }}
          >
            {project.title}
          </h3>

          {/* Rule — Inter 700 18px/22px */}
          <p
            className="mt-2"
            style={{
              fontFamily: "var(--font-inter, Inter, sans-serif)",
              fontWeight: 700,
              fontSize: "clamp(10px, 1.4vw, 18px)",
              lineHeight: "22px",
              color: "#FFFFFF",
              whiteSpace: "nowrap",
            }}
          >
            Rule: {project.rule}
          </p>
        </div>
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
