import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Oswald, Bangers } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://warrenkabuchi.com'),
  title: {
    default: "Warren Kabuchi | AI Engineer & Cloud Architect",
    template: "%s | Warren Kabuchi",
  },
  description: "AI Engineer specializing in enterprise AI agents, cloud architecture, and governance frameworks. Building intelligent systems that are powerful and compliant.",
  keywords: ["AI Engineer", "Cloud Architect", "Copilot Studio", "Azure", "GCP", "AI Governance", "Enterprise AI"],
  authors: [{ name: "Warren Kabuchi" }],
  creator: "Warren Kabuchi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://warrenkabuchi.com",
    siteName: "Warren Kabuchi",
    title: "Warren Kabuchi | AI Engineer & Cloud Architect",
    description: "Architecting the Future of Enterprise AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Warren Kabuchi - AI Engineer & Cloud Architect",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${oswald.variable} ${bangers.variable} font-sans antialiased bg-background text-foreground`}
      >
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded-md focus:font-bold focus:border-4 focus:border-foreground"
        >
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content">
          {children}
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
