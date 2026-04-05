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
  title: "Raksa - UX/UI Designer Portfolio",
  description: "Portfolio of Raksa, a UX/UI Designer from Phnom Penh, Cambodia. Specializing in user experience design, user interface design, and UX research. View my projects including education platforms, e-commerce apps, and web design.",
  keywords: ["UX Designer", "UI Designer", "UX/UI Designer", "Portfolio", "Raksa", "Cambodia", "Phnom Penh", "Web Design", "Mobile App Design", "User Experience", "User Interface"],
  authors: [{ name: "Raksa" }],
  creator: "Raksa",
  publisher: "Raksa",
  verification: {
    google: "smLhYbOtOAMh8FoB_i08aNFh-qEqs49g5-Gu1cJtq2E",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://raksa-portfolio.vercel.app",
    title: "Raksa - UX/UI Designer Portfolio",
    description: "Portfolio of Raksa, a UX/UI Designer from Phnom Penh, Cambodia. Specializing in user experience design, user interface design, and UX research.",
    siteName: "Raksa Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raksa - UX/UI Designer Portfolio",
    description: "Portfolio of Raksa, a UX/UI Designer from Phnom Penh, Cambodia.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Raksa',
    jobTitle: 'UX/UI Designer',
    url: 'https://raksa-portfolio.vercel.app',
    email: 'rkob7305@gmail.com',
    telephone: '+855-16-807-973',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Phnom Penh',
      addressCountry: 'Cambodia',
    },
    sameAs: [
      'https://www.facebook.com/share/1DEmL6ZiBL/?mibextid=wwXIfr',
      'https://www.instagram.com/raksa7851?igsh=cWF2ZHRudXR2MHM%3D&utm_source=qr',
      'https://t.me/raksa_03',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'National University of Management',
    },
    knowsAbout: ['UX Design', 'UI Design', 'User Research', 'Prototyping', 'Wireframing'],
  }

  return (
    <html lang="en" className={`${unbounded.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white dark:bg-black transition-colors duration-300">
        <AnimationProvider>
          {children}
        </AnimationProvider>
      </body>
    </html>
  );
}
