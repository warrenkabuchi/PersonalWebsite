import { NextResponse } from "next/server";
import { adminStorage } from "@/lib/firebase-admin";

// Increase body size limit to 10MB for image uploads
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('image') as File;

        if (!file) {
            return NextResponse.json(
                { error: "No image file provided" },
                { status: 400 }
            );
        }

        // Validate file type
        if (!file.type.startsWith('image/')) {
            return NextResponse.json(
                { error: "File must be an image" },
                { status: 400 }
            );
        }

        // Convert File to Buffer for Admin SDK
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Create unique filename
        const timestamp = Date.now();
        const filename = `${timestamp}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;

        // EXPLICITLY specify the bucket - do not rely on defaults
        const bucketName = 'personal-website-kabuchi.appspot.com';
        const bucket = adminStorage.bucket(bucketName);
        const fileRef = bucket.file(`blog-images/${filename}`);

        // Upload the file
        await fileRef.save(buffer, {
            metadata: {
                contentType: file.type,
            },
            public: true, // Make file publicly accessible
        });

        // Make the file public and get URL
        await fileRef.makePublic();
        const publicUrl = `https://storage.googleapis.com/${bucketName}/blog-images/${filename}`;

        console.log("\n✅ Image uploaded successfully");
        console.log("Filename:", filename);
        console.log("URL:", publicUrl);

        return NextResponse.json({
            success: true,
            url: publicUrl,
            filename: filename
        }, { status: 201 });

    } catch (error) {
        console.error("❌ Error uploading image:", error);
        return NextResponse.json({
            error: "Failed to upload image",
            details: error instanceof Error ? error.message : "Unknown error"
        }, { status: 500 });
    }
}
