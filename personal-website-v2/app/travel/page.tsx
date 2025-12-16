import { Metadata } from "next";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { BlogPost } from "@/lib/types";
import { TravelPageClient } from "./travel-page-client";

export const metadata: Metadata = {
    title: "Travel",
    description: "Stories, photos, and insider tips from a globe-trotting adventure seeker. Travel journals and guides for unforgettable experiences around the world.",
    keywords: ["Travel", "Travel Blog", "Adventure", "Travel Tips", "Travel Photography"],
    openGraph: {
        title: "Travel | Warren Kabuchi",
        description: "Stories, photos, and insider tips from a globe-trotting adventure seeker.",
        url: "https://warrenkabuchi.com/travel",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
};

// Convert gs:// URL to https:// URL for Firebase Storage
function convertGsUrl(url: string): string {
    if (url.startsWith('gs://')) {
        // Format: gs://bucket-name/path/to/file
        const match = url.match(/^gs:\/\/([^\/]+)\/(.+)$/);
        if (match) {
            const bucket = match[1];
            const path = encodeURIComponent(match[2]);
            return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${path}?alt=media`;
        }
    }
    return url;
}

async function getBlogPosts(): Promise<BlogPost[]> {
    try {
        const postsQuery = query(
            collection(db, "posts"),
            where("category", "==", "travel"),
            orderBy("date", "desc")
        );
        const querySnapshot = await getDocs(postsQuery);
        return querySnapshot.docs.map((doc) => {
            const data = doc.data();
            return {
                id: doc.id,
                title: data.title,
                slug: data.slug,
                content: data.content,
                excerpt: data.excerpt,
                coverImage: convertGsUrl(data.coverImage || ''),
                location: data.location,
                date: data.date?.seconds ? data.date.seconds * 1000 : data.date,
                createdAt: data.createdAt?.seconds ? data.createdAt.seconds * 1000 : data.createdAt,
                category: data.category,
            } as BlogPost;
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
}

export default async function TravelPage() {
    const posts = await getBlogPosts();
    return <TravelPageClient posts={posts} />;
}
