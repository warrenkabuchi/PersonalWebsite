import { Metadata } from "next";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { BlogPost } from "@/lib/types";
import { AIPageClient } from "./ai-page-client";
import { ServiceSchema } from "@/components/structured-data";

export const metadata: Metadata = {
    title: "AI Consulting",
    description: "Enterprise AI agent development, governance frameworks, and Copilot Studio implementation. Building intelligent systems that are powerful and compliant.",
    keywords: ["AI Consulting", "Copilot Studio", "Azure OpenAI", "AI Governance", "Enterprise AI", "RAG Architecture"],
    openGraph: {
        title: "AI Consulting | Warren Kabuchi",
        description: "Enterprise AI agent development, governance frameworks, and Copilot Studio implementation.",
        url: "https://warrenkabuchi.com/ai",
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
            where("category", "==", "work"),
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

export default async function AIPage() {
    const posts = await getBlogPosts();
    return (
        <>
            <ServiceSchema
                name="AI Consulting Services"
                description="Enterprise AI agent development, governance frameworks, and Copilot Studio implementation."
                serviceType="AI Consulting"
            />
            <AIPageClient posts={posts} />
        </>
    );
}
