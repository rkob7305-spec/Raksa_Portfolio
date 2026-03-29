import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        unbounded: ['var(--font-unbounded)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        text: ['var(--font-unbounded)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
