/**
 * LayoutWrapper Component
 * 
 * Provides consistent container and spacing across all sections
 * Ensures proper alignment and responsive behavior
 */

import React from 'react';

interface LayoutWrapperProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  noPadding?: boolean;
}

const maxWidthClasses = {
  sm: 'max-w-[800px]',
  md: 'max-w-[1000px]',
  lg: 'max-w-[1200px]',
  xl: 'max-w-[1400px]',
  full: 'max-w-full',
};

export default function LayoutWrapper({ 
  children, 
  className = '', 
  maxWidth = 'lg',
  noPadding = false 
}: LayoutWrapperProps) {
  return (
    <div 
      className={`
        w-full 
        ${maxWidthClasses[maxWidth]} 
        mx-auto 
        ${noPadding ? '' : 'px-4 sm:px-6 md:px-8 lg:px-12'} 
        ${className}
      `}
      style={{
        boxSizing: 'border-box',
      }}
    >
      {children}
    </div>
  );
}

/**
 * Section Wrapper - For full-width sections with consistent padding
 */
interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: string;
}

export function SectionWrapper({ 
  children, 
  className = '', 
  id,
  background 
}: SectionWrapperProps) {
  return (
    <section 
      id={id}
      className={`w-full py-16 md:py-20 lg:py-24 ${className}`}
      style={{
        background: background,
        boxSizing: 'border-box',
      }}
    >
      {children}
    </section>
  );
}
