import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function POST(request: Request) {
    try {
        // 1. Authentication Check
        const apiKey = process.env.N8N_API_KEY;
        if (!apiKey) {
            console.error("N8N_API_KEY is not defined in environment variables.");
            return NextResponse.json({ error: "Server Configuration Error" }, { status: 500 });
        }

        const authHeader = request.headers.get("authorization");
        if (authHeader !== `Bearer ${apiKey}`) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // 2. Parse Body
        const body = await request.json();
        const { title, content, category, excerpt, coverImage, location, date } = body;

        // 3. Validation
        if (!title || !content || !category) {
            return NextResponse.json(
                { error: "Missing required fields: title, content, category" },
                { status: 400 }
            );
        }

        // 4. Generate Slug
        const slug = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");

        // 5. Create Post Object
        const newPost = {
            title,
            slug,
            content,
            excerpt: excerpt || content.substring(0, 150) + "...",
            coverImage: coverImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
            location: location || "Remote",
            date: date || new Date().toISOString(),
            category,
            createdAt: new Date().toISOString(),
        };

        // 6. Save to Firestore
        const docRef = await addDoc(collection(db, "posts"), newPost);

        return NextResponse.json({ success: true, id: docRef.id, slug }, { status: 201 });
    } catch (error) {
        console.error("Error creating post:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
