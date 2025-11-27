import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            title,
            content,
            excerpt,
            coverImage,
            category,
            location,
            date,
            slug,
            tags
        } = body;

        // Validate required fields
        if (!title || !content || !category || !slug) {
            return NextResponse.json(
                {
                    error: "Missing required fields",
                    required: ["title", "content", "category", "slug"]
                },
                { status: 400 }
            );
        }

        // Validate category
        const validCategories = ['travel', 'work', 'personal'];
        if (!validCategories.includes(category)) {
            return NextResponse.json(
                {
                    error: "Invalid category",
                    validCategories
                },
                { status: 400 }
            );
        }

        // Prepare post data
        const postData = {
            title,
            content,
            excerpt: excerpt || content.substring(0, 150) + "...",
            coverImage: coverImage || "/placeholder-image.jpg",
            category,
            location: location || "",
            date: date || new Date().toISOString(),
            slug,
            tags: Array.isArray(tags) ? tags : [],
            createdAt: Timestamp.now(),
            updatedAt: Timestamp.now(),
        };

        // Add to Firestore
        const docRef = await addDoc(collection(db, "posts"), postData);

        console.log("\n✅ Post created successfully via n8n webhook");
        console.log("Post ID:", docRef.id);
        console.log("Category:", category);
        console.log("Title:", title);

        return NextResponse.json({
            success: true,
            message: "Post created successfully",
            postId: docRef.id,
            slug: slug,
            url: category === 'travel'
                ? `/travel/${slug}`
                : category === 'work'
                    ? `/ai/${slug}`
                    : `/blog/${slug}`
        }, { status: 201 });

    } catch (error) {
        console.error("❌ Error creating post:", error);
        return NextResponse.json({
            error: "Failed to create post",
            details: error instanceof Error ? error.message : "Unknown error"
        }, { status: 500 });
    }
}
