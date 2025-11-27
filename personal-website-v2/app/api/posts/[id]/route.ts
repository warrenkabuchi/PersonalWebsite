import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, deleteDoc } from "firebase/firestore";

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        if (!id) {
            return NextResponse.json(
                { error: "Post ID is required" },
                { status: 400 }
            );
        }

        // Delete the post from Firestore
        await deleteDoc(doc(db, "posts", id));

        console.log("\n✅ Post deleted successfully");
        console.log("Post ID:", id);

        return NextResponse.json({
            success: true,
            message: "Post deleted successfully",
            deletedId: id
        });

    } catch (error) {
        console.error("❌ Error deleting post:", error);
        return NextResponse.json({
            error: "Failed to delete post",
            details: error instanceof Error ? error.message : "Unknown error"
        }, { status: 500 });
    }
}
