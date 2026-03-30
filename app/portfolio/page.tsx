"use client"

import PortfolioHeader from "./hearder"
import ProjectsGrid from "./projects-grid"
import PortfolioFooter from "./footer"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black">
      {/* Header Section */}
      <PortfolioHeader />
      
      {/* Projects Grid Section */}
      <ProjectsGrid />
      
      {/* Footer Section */}
      <PortfolioFooter />
    </div>
  )
}
