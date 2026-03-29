"use client";

import { motion } from "framer-motion";
import { COLORS, FONTS } from "@/lib/constants";

interface SectionHeadingProps {
  title: string;
  isDark: boolean;
  centered?: boolean;
  delay?: number;
}

export function SectionHeading({ 
  title, 
  isDark, 
  centered = true,
  delay = 0 
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`mb-8 md:mb-10 ${centered ? 'text-center' : 'text-center lg:text-left'}`}
    >
      <h2
        className="font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] uppercase tracking-wider mb-3"
        style={{
          fontFamily: FONTS.unbounded,
          fontWeight: 700,
          color: isDark ? "#FFFFFF" : "#000000",
        }}
      >
        {title}
      </h2>
      <div 
        className={`w-20 h-[3px] ${centered ? 'mx-auto' : 'mx-auto lg:mx-0'}`}
        style={{ backgroundColor: COLORS.primary }}
      />
    </motion.div>
  );
}
