import { Metadata } from "next";
import { DJPageClient } from "./dj-page-client";

export const metadata: Metadata = {
  title: "DJ",
  description: "Deep House, Afro-Tech, and Melodic Techno. Available for clubs, festivals, and private events. Curating atmospheres that move the soul and the feet.",
  keywords: ["DJ", "Deep House", "Afro-Tech", "Melodic Techno", "DJ Booking", "Music Producer"],
  openGraph: {
    title: "DJ | Warren Kabuchi",
    description: "Deep House, Afro-Tech, and Melodic Techno. Available for clubs, festivals, and private events.",
    url: "https://warrenkabuchi.com/dj",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function DJPage() {
    return <DJPageClient />;
}
