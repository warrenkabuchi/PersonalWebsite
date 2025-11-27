import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { BlogPost } from "@/lib/types";
import { AIPageClient } from "./ai-page-client";

async function getBlogPosts(): Promise<BlogPost[]> {
    try {
        const postsQuery = query(
            collection(db, "posts"),
            where("category", "==", "work"),
            orderBy("date", "desc")
        );
        const querySnapshot = await getDocs(postsQuery);
        return querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        })) as BlogPost[];
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
}

export default async function AIPage() {
    const posts = await getBlogPosts();
    return <AIPageClient posts={posts} />;
}
