"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

export default function ViewAllProjects() {
  const [activeFilter, setActiveFilter] = useState("All");
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

  const allProjects = [
    {
      id: 1,
      title: "E-commerce App",
      category: "Mobile App",
      description: "Mobile Application • UI/UX Design",
      image: "/img/Frame 563.png"
    },
    {
      id: 2,
      title: "Education Platform",
      category: "Mobile App",
      description: "Mobile Application • UI/UX Design",
      image: "/img/Frame 441.png"
    },
    {
      id: 3,
      title: "Booking Website",
      category: "Website",
      description: "Web Design • UI/UX Design",
      image: "/img/booking.png"
    },
    {
      id: 4,
      title: "Clone Project",
      category: "Mobile App",
      description: "Mobile Application • UI/UX Design",
      image: "/img/Frame 565.png"
    },
    {
      id: 5,
      title: "Clone project",
      category: "Website",
      description: "Web Design • UI/UX Design",
      image: "/img/Frame 564.png"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-black dark:text-white hover:text-[#F21422] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold text-[14px] uppercase">Back to Home</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <h1 
            className="font-bold text-[32px] md:text-[40px] uppercase tracking-wider text-black dark:text-white mb-3" 
            style={{ fontFamily: 'Unbounded, sans-serif' }}
          >
            All Projects
          </h1>
          <div className="w-20 h-[3px] bg-[#F21422] mx-auto"></div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center gap-6 md:gap-8 mb-12 md:mb-14"
        >
          <button
            onClick={() => setActiveFilter("All")}
            className={`relative font-semibold text-[14px] md:text-[15px] pb-2 transition ${
              activeFilter === "All" ? "text-[#F21422]" : `${isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'}`
            }`}
          >
            All
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[#F21422] transition-all duration-300 ${activeFilter === "All" ? "w-full" : "w-0"}`}></span>
          </button>
          <button
            onClick={() => setActiveFilter("Mobile App")}
            className={`relative font-semibold text-[14px] md:text-[15px] pb-2 transition ${
              activeFilter === "Mobile App" ? "text-[#F21422]" : `${isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'}`
            }`}
          >
            Mobile App
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[#F21422] transition-all duration-300 ${activeFilter === "Mobile App" ? "w-full" : "w-0"}`}></span>
          </button>
          <button
            onClick={() => setActiveFilter("Website")}
            className={`relative font-semibold text-[14px] md:text-[15px] pb-2 transition ${
              activeFilter === "Website" ? "text-[#F21422]" : `${isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'}`
            }`}
          >
            Website
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[#F21422] transition-all duration-300 ${activeFilter === "Website" ? "w-full" : "w-0"}`}></span>
          </button>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] bg-white rounded-[5px] shadow-[0px_4px_9.4px_rgba(0,0,0,0.25)] relative overflow-hidden mb-4 group-hover:shadow-[0px_12px_30px_rgba(0,0,0,0.15)] transition-all duration-500">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <Image src="/Icon/search.png" width={20} height={20} alt="View" className="object-contain" />
                    </div>
                  </div>
                </div>
                <h3 
                  className="font-semibold text-[15px] md:text-[16px] text-black dark:text-white mb-1 group-hover:text-[#F21422] transition-colors" 
                  style={{ fontFamily: 'Unbounded, sans-serif' }}
                >
                  {project.title}
                </h3>
                <p className="text-[12px] md:text-[13px] text-black/50 dark:text-white/50">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
