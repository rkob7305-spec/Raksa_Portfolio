import type { Metadata } from "next";
import { Unbounded, Inter } from "next/font/google";
import "./globals.css";
import { AnimationProvider } from "@/components/AnimationProvider";

const unbounded = Unbounded({ 
  subsets: ["latin"],
  variable: "--font-unbounded",
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RAKSA - Portfolio",
  description: "UI/UX Designer Portfolio",
  icons: {
    icon: [
      {
        url: "/Icon/image 16 (2).png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/Icon/image 16 (3).png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/Icon/image 16 (2).png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${unbounded.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white dark:bg-black transition-colors duration-300">
        <AnimationProvider>
          {children}
        </AnimationProvider>
      </body>
    </html>
  );
}
