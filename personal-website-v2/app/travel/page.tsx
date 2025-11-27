import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { BlogPost } from "@/lib/types";
import { TravelPageClient } from "./travel-page-client";

async function getBlogPosts(): Promise<BlogPost[]> {
    try {
        const postsQuery = query(
            collection(db, "posts"),
            where("category", "==", "travel"),
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

export default async function TravelPage() {
    const posts = await getBlogPosts();
    return <TravelPageClient posts={posts} />;
}
