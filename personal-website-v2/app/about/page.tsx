import { Metadata } from "next";
import { AboutPageClient } from "./about-page-client";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Warren Kabuchi - AI Engineer & Cloud Architect with expertise in enterprise AI agents, cloud architecture, and governance frameworks.",
  openGraph: {
    title: "About | Warren Kabuchi",
    description: "AI Engineer & Cloud Architect with expertise in enterprise AI agents, cloud architecture, and governance frameworks.",
    url: "https://warrenkabuchi.com/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
    return <AboutPageClient />;
}
