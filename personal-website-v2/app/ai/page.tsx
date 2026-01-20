import { Metadata } from "next";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { BlogPost } from "@/lib/types";
import { AIPageClient } from "./ai-page-client";
import { ServiceSchema, FAQSchema } from "@/components/structured-data";

const aiFAQs = [
    {
        question: "What types of AI agents can you build with Copilot Studio?",
        answer: "I specialize in building custom AI agents that integrate with enterprise systems like ServiceNow, Salesforce, SharePoint, and internal databases. These agents can handle customer service automation, knowledge management, internal IT support, and complex workflow orchestration with full governance controls.",
    },
    {
        question: "How do you ensure AI governance and compliance?",
        answer: "I implement comprehensive governance frameworks including prompt guardrails, content filtering, audit logging, role-based access controls, and compliance monitoring. All solutions are designed to meet enterprise security standards and regulatory requirements like SOC 2, HIPAA, and GDPR where applicable.",
    },
    {
        question: "What's your approach to RAG (Retrieval-Augmented Generation) architecture?",
        answer: "My RAG implementations use Azure AI Search or similar vector databases combined with careful chunking strategies, embedding optimization, and semantic reranking. I focus on maximizing retrieval accuracy while minimizing hallucinations through context engineering and citation validation.",
    },
    {
        question: "Do you work with cloud platforms other than Azure?",
        answer: "While I specialize in Microsoft Azure and Copilot Studio, I also have extensive experience with Google Cloud Platform (Vertex AI, Document AI) and AWS (Bedrock, SageMaker). I can design multi-cloud architectures or help migrate between platforms.",
    },
];

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

export const revalidate = 300; // ISR: Revalidate every 5 minutes

export default async function AIPage() {
    const posts = await getBlogPosts();
    return (
        <>
            <ServiceSchema
                name="AI Consulting Services"
                description="Enterprise AI agent development, governance frameworks, and Copilot Studio implementation."
                serviceType="AI Consulting"
            />
            <FAQSchema faqs={aiFAQs} />
            <AIPageClient posts={posts} />
        </>
    );
}
