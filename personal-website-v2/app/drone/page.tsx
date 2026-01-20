import { Metadata } from "next";
import { DronePageClient } from "./drone-page-client";
import { ServiceSchema, FAQSchema, VideoSchema } from "@/components/structured-data";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { DroneVideo } from "@/lib/types";

const droneFAQs = [
    {
        question: "What makes your 360° drone footage different from regular aerial video?",
        answer: "Our footage uses specialized 360° cameras that capture everything around the drone, combined with post-processing that removes the drone from the final video. This creates a magical floating camera effect where viewers see smooth, cinematic footage without any visible equipment—perfect for immersive property tours and VR content.",
    },
    {
        question: "Can you fly indoors for real estate tours?",
        answer: "Yes! Our compact, quiet drone is specifically designed for indoor flight. It can safely navigate through homes, capturing seamless tours that flow from curb appeal through every room and out to the backyard—all in one continuous shot without cuts.",
    },
    {
        question: "What formats do you deliver the final video in?",
        answer: "One of the biggest advantages of 360° capture is flexibility in post-production. From a single flight, we can deliver vertical video for social media (Instagram Reels, TikTok), widescreen for YouTube and websites, square format, and full 360° for VR headsets like Apple Vision Pro and Meta Quest.",
    },
    {
        question: "How quickly can I get my footage after the shoot?",
        answer: "Standard turnaround is 48-72 hours for edited content. Rush delivery (24-hour or same-day) is available for an additional fee. During busy seasons, we recommend booking at least a week in advance to secure your preferred date.",
    },
];

export const metadata: Metadata = {
    title: "Sky 360 Visions | 360° Aerial Cinema",
    description: "Cinematic aerial footage where the drone disappears. Specializing in luxury real estate tours, event coverage, VR content, and site documentation.",
    keywords: ["Sky 360 Visions", "Aerial Cinematography", "360 Video", "Real Estate Videography", "Event Coverage", "VR Content", "Drone Services", "Invisible Drone"],
    openGraph: {
        title: "Sky 360 Visions | 360° Aerial Cinema",
        description: "Cinematic aerial footage where the drone disappears. Luxury real estate tours, event coverage, VR content, and site documentation.",
        url: "https://warrenkabuchi.com/drone",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
};

async function getDroneVideos(): Promise<DroneVideo[]> {
    try {
        const videosQuery = query(
            collection(db, "drone-videos"),
            orderBy("createdAt", "desc")
        );
        const querySnapshot = await getDocs(videosQuery);
        return querySnapshot.docs.map((doc) => {
            const data = doc.data();
            return {
                id: doc.id,
                title: data.title,
                description: data.description,
                videoUrl: data.videoUrl,
                thumbnailUrl: data.thumbnailUrl,
                category: data.category,
                featured: data.featured,
                createdAt: data.createdAt?.seconds ? data.createdAt.seconds * 1000 : data.createdAt,
            } as DroneVideo;
        });
    } catch (error) {
        console.error("Error fetching drone videos:", error);
        return [];
    }
}

export const revalidate = 300; // ISR: Revalidate every 5 minutes

export default async function DronePage() {
    const videos = await getDroneVideos();

    return (
        <>
            <ServiceSchema
                name="Sky 360 Visions"
                description="Cinematic aerial footage where the drone disappears. Luxury real estate tours, event coverage, VR content, and site documentation."
                serviceType="Aerial Cinematography"
            />
            <FAQSchema faqs={droneFAQs} />
            {videos.map((video) => (
                <VideoSchema
                    key={video.id}
                    name={video.title}
                    description={video.description || `${video.title} - 360° aerial cinematography`}
                    thumbnailUrl={video.thumbnailUrl || "https://warrenkabuchi.com/og-image.png"}
                    uploadDate={new Date(video.createdAt).toISOString()}
                    contentUrl={video.videoUrl}
                />
            ))}
            <DronePageClient videos={videos} faqs={droneFAQs} />
        </>
    );
}
