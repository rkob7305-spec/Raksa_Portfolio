"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function Contact() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial dark mode state
    setIsDark(document.documentElement.classList.contains('dark'));

    // Listen for theme changes
    const handleThemeChange = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    window.addEventListener('themechange', handleThemeChange);

    // Also observe body class changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      window.removeEventListener('themechange', handleThemeChange);
      observer.disconnect();
    };
  }, []);

  return (
    <footer id="contact" className={`w-full ${isDark ? 'bg-[#850109]' : 'bg-black'} py-12 md:py-20 relative overflow-hidden mt-auto`}>
      <div className="max-w-[1000px] mx-auto px-6 md:px-8">
        {/* Logo/Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="font-bold text-[24px] md:text-[32px] text-white uppercase tracking-[0.2em] md:tracking-[0.3em]" style={{ fontFamily: 'Unbounded, sans-serif' }}>Raksa</h2>
          <div className="w-20 h-[3px] bg-[#F21422] mx-auto mt-3 md:mt-4"></div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-4 md:gap-6 mb-8 md:mb-12"
        >
          <div className="flex items-center gap-2 md:gap-3 text-white/80 hover:text-white transition">
            <MapPin className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-[14px] md:text-[16px]">Phnom Penh, Cambodia</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-white/80">
            <a href="tel:+85516807973" className="flex items-center gap-2 hover:text-white transition">
              <Phone className="w-4 h-4" />
              <span className="text-[13px] md:text-[15px]">+855 16 807 973</span>
            </a>
            <span className="hidden md:block text-white/20">|</span>
            <a href="mailto:rkob7305@gmail.com" className="flex items-center gap-2 hover:text-white transition">
              <Mail className="w-4 h-4" />
              <span className="text-[13px] md:text-[15px]">rkob7305@gmail.com</span>
            </a>
          </div>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12"
        >
          <motion.a
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.facebook.com/share/1DEmL6ZiBL/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 md:w-10 md:h-10 rounded-lg transition flex items-center justify-center"
          >
            <Image src="/Icon/fb2.png" width={36} height={36} alt="Facebook" className="object-contain md:w-[40px] md:h-[40px]" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.instagram.com/raksa7851?igsh=cWF2ZHRudXR2MHM%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 md:w-10 md:h-10 rounded-lg transition flex items-center justify-center"
          >
            <Image src="/Icon/ig2.png" width={36} height={36} alt="Instagram" className="object-contain md:w-[40px] md:h-[40px]" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            href="https://t.me/raksa_03"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 md:w-10 md:h-10 rounded-lg transition flex items-center justify-center"
          >
            <Image src="/Icon/tl2.png" width={36} height={36} alt="Telegram" className="object-contain md:w-[40px] md:h-[40px]" />
          </motion.a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center pt-6 md:pt-8 border-t border-white/10"
        >
          <p className="text-[12px] md:text-[13px] text-white/40">© 2026 <span style={{ fontFamily: 'Unbounded, sans-serif' }}>Raksa</span>. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
