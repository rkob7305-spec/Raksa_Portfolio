// Color constants
export const COLORS = {
  primary: "#F21422",
  primaryDark: "#c0161a",
  darkRed: "#850109",
  skillRed: "#7C0109",
} as const;

// Font families
export const FONTS = {
  unbounded: "Unbounded, sans-serif",
  inter: "Inter, sans-serif",
} as const;

// Animation durations
export const ANIMATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.7,
  verySlow: 1.2,
} as const;

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

// Common styles
export const COMMON_STYLES = {
  redUnderline: {
    width: "80px",
    height: "3px",
    backgroundColor: COLORS.primary,
  },
  cardBorder: {
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  cardBackground: {
    background: "rgba(255, 255, 255, 0.1)",
  },
  glassmorphism: {
    backdropFilter: "blur(100px) saturate(150%)",
    WebkitBackdropFilter: "blur(100px) saturate(150%)",
  },
} as const;
