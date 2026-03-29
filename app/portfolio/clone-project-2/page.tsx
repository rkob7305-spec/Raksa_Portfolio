"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";

export default function EcommerceDetailPage() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    
    const handleThemeChange = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    
    window.addEventListener("themechange", handleThemeChange);
    
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    
    return () => {
      window.removeEventListener("themechange", handleThemeChange);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`min-h-screen ${isDark ? "bg-black" : "bg-white"}`}>
      {/* Project Header Section */}
      <ProjectHeader isDark={isDark} />

      {/* Content Cards */}
      <ProjectShowcase isDark={isDark} />

      {/* View All Projects Button */}
      <ViewAllProjectsButton isDark={isDark} />

      {/* Footer */}
      <Footer isDark={isDark} />
    </div>
  );
}

// Logo Component
function RSLogo({ isDark }: { isDark: boolean }) {
  return (
    <Image
      src={isDark ? "/Icon/image 16 (3).png" : "/Icon/image 16 (2).png"}
      alt="Logo"
      width={72}
      height={86}
      className={isDark ? "brightness-0 invert" : ""}
    />
  );
}

// Project Header Component
function ProjectHeader({ isDark }: { isDark: boolean }) {
  const title = "ACELEDA";
  const badge = " CLone project";
  const description = `This app was designed as a practice project to strengthen my UX/UI design skills and learn more about the mobile app development process.`;
  const meta = [{ label: "Role", value: "UI Design" }];

  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 md:px-12 lg:px-15 py-12 md:py-16 lg:py-20 flex flex-col items-center">
      {/* Logo */}
      <motion.div 
        className="mb-14"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <RSLogo isDark={isDark} />
      </motion.div>

      {/* Body */}
      <motion.div
        className="w-full grid grid-cols-[1fr_2px_1fr] items-start gap-0 max-md:grid-cols-1 max-md:grid-rows-[auto_auto_auto]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Left Section */}
        <motion.div
          className="pr-16 py-8 flex flex-col justify-center items-start gap-5 min-h-[220px] max-md:pr-0 max-md:pb-8 max-md:min-h-0"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1
            className="font-barlow-condensed font-black text-[clamp(36px,4.5vw,58px)] tracking-tight leading-none uppercase"
            style={{ color: isDark ? "#FFFFFF" : "#0d0d0d" }}
          >
            {title.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < title.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
          <span
            className="font-barlow-condensed font-extrabold text-[13px] tracking-[0.2em] uppercase flex items-center gap-2"
            style={{ color: isDark ? "#F21422" : "#c0161a" }}
          >
            <span 
              className="inline-block w-[18px] h-[2px] shrink-0"
              style={{ backgroundColor: isDark ? "#F21422" : "#c0161a" }}
            />
            {badge}
          </span>
        </motion.div>

        {/* Divider */}
        <motion.div
          aria-hidden="true"
          className="w-[2px] self-stretch min-h-[220px] max-md:w-full max-md:h-[2px] max-md:min-h-0"
          style={{ backgroundColor: isDark ? "rgba(255, 255, 255, 0.12)" : "#e0e0dc" }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />

        {/* Right Section */}
        <motion.div
          className="pl-16 py-8 flex flex-col gap-6 max-md:pl-0 max-md:pt-8"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.p
            className="text-[clamp(14px,1.15vw,16px)] leading-[1.75] font-normal max-w-[600px]"
            style={{ color: isDark ? "rgba(255, 255, 255, 0.5)" : "#5a5a58" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {description}
          </motion.p>

          <motion.p
            className="text-[clamp(13px,1.05vw,15px)] leading-[1.7] font-normal"
            style={{ color: isDark ? "rgba(255, 255, 255, 0.4)" : "#5a5a58" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
          </motion.p>

          <motion.div 
            className="flex flex-col gap-1 pt-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {meta.map((item) => (
              <React.Fragment key={item.label}>
                <span
                  className="font-unbounded font-bold text-[15px] tracking-[0.04em] uppercase"
                  style={{ color: isDark ? "#FFFFFF" : "#0d0d0d" }}
                >
                  {item.label}
                </span>
                <span
                  className="text-[14.5px] italic tracking-[0.01em]"
                  style={{ color: isDark ? "rgba(255, 255, 255, 0.65)" : "#8a8a87" }}
                >
                  {item.value}
                </span>
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Project Showcase Section
function ProjectShowcase({ isDark }: { isDark: boolean }) {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-14 py-8 md:py-12 space-y-8 md:space-y-12">
      <ImageCard isDark={isDark} />
      <ImageCard2 isDark={isDark} />
    </section>
  );
}

// Image Card 1
function ImageCard({ isDark }: { isDark: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full max-w-[1328px] mx-auto rounded-[5px] relative overflow-hidden"
      style={{ 
        background: "rgba(255, 255, 255, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0px 4px 9.4px rgba(0, 0, 0, 0.15)",
        aspectRatio: "1328/800",
        minHeight: "400px"
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="relative w-full h-full">
          <Image
            src={isDark ? "/img/clone1.png" : "/img/clone1.png"}
            alt="E-commerce App Design"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
}

// Image Card 2
function ImageCard2({ isDark }: { isDark: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      className="w-full max-w-[1328px] mx-auto rounded-[5px] relative overflow-hidden"
      style={{ 
        background: "rgba(255, 255, 255, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0px 4px 9.4px rgba(0, 0, 0, 0.15)",
        aspectRatio: "1328/800",
        minHeight: "400px"
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="relative w-full h-full">
          <Image
            src="/img/clone2.png"
            alt="Education Platform Design"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
}

// View All Projects Button
function ViewAllProjectsButton({ isDark }: { isDark: boolean }) {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <motion.a
          href="/portfolio"
          className={`${isDark ? 'bg-white/10' : 'bg-white/80'} backdrop-blur-xl backdrop-saturate-150 shadow-[0px_2px_9.4px_rgba(0,0,0,0.25)] rounded-[5px] h-[42px] md:h-[46px] px-8 md:px-10 font-bold text-[13px] md:text-[14px] uppercase ${isDark ? 'text-white' : 'text-black'} hover:text-[#F21422] transition-colors border border-white/10 flex items-center justify-center`}
          style={{
            backdropFilter: 'blur(100px) saturate(150%)',
            WebkitBackdropFilter: 'blur(100px) saturate(150%)'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Projects
        </motion.a>
      </motion.div>
    </section>
  );
}

// Footer Component
function Footer({ isDark }: { isDark: boolean }) {
  return (
    <footer
      className={`w-full ${
        isDark ? "bg-[#850109]" : "bg-black"
      } py-12 md:py-16 lg:py-20`}
    >
      <div className="max-w-[1000px] mx-auto px-6 md:px-8">
        <FooterLogo />
        <FooterContact />
        <FooterSocial />
        <FooterCopyright />
      </div>
    </footer>
  );
}

// Footer Logo
function FooterLogo() {
  return (
    <motion.div 
      className="text-center mb-8 md:mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-unbounded font-bold text-[24px] md:text-[32px] text-white uppercase tracking-[0.2em] md:tracking-[0.3em]">
        Raksa
      </h2>
      <motion.div 
        className="w-20 h-[3px] bg-[#F21422] mx-auto mt-3 md:mt-4"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
    </motion.div>
  );
}

// Footer Contact
function FooterContact() {
  return (
    <motion.div 
      className="flex flex-col items-center gap-4 md:gap-6 mb-8 md:mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.div 
        className="flex items-center gap-2 md:gap-3 text-white/80"
        whileHover={{ scale: 1.05, color: "#FFFFFF" }}
        transition={{ duration: 0.2 }}
      >
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="text-[14px] md:text-[16px]">Phnom Penh, Cambodia</span>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-white/80">
        <motion.a 
          href="tel:+85516807973" 
          className="flex items-center gap-2 hover:text-white transition"
          whileHover={{ scale: 1.05, x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-[13px] md:text-[15px]">+855 16 807 973</span>
        </motion.a>
        <span className="hidden md:block text-white/20">|</span>
        <motion.a 
          href="mailto:rkob7305@gmail.com" 
          className="flex items-center gap-2 hover:text-white transition"
          whileHover={{ scale: 1.05, x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-[13px] md:text-[15px]">rkob7305@gmail.com</span>
        </motion.a>
      </div>
    </motion.div>
  );
}

// Footer Social
function FooterSocial() {
  const socialLinks = [
    { href: "https://www.facebook.com/share/1DEmL6ZiBL/?mibextid=wwXIfr", icon: "/Icon/fb2.png", alt: "Facebook", rotate: 5 },
    { href: "https://www.instagram.com/raksa7851?igsh=cWF2ZHRudXR2MHM%3D&utm_source=qr", icon: "/Icon/ig2.png", alt: "Instagram", rotate: -5 },
    { href: "https://t.me/raksa_03", icon: "/Icon/tl2.png", alt: "Telegram", rotate: 5 },
  ];

  return (
    <motion.div 
      className="flex items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.alt}
          whileHover={{ scale: 1.2, rotate: social.rotate }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center"
        >
          <Image
            src={social.icon}
            width={36}
            height={36}
            alt={social.alt}
            className="object-contain md:w-[40px] md:h-[40px]"
          />
        </motion.a>
      ))}
    </motion.div>
  );
}

// Footer Copyright
function FooterCopyright() {
  return (
    <motion.div 
      className="text-center pt-6 md:pt-8 border-t border-white/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <p className="text-[12px] md:text-[13px] text-white/40">
        © 2025 <span className="font-unbounded">Raksa</span>. All rights reserved.
      </p>
    </motion.div>
  );
}
