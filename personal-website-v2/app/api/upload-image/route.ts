import { NextResponse } from "next/server";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "@/lib/firebase";

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

        // Convert File to ArrayBuffer then to Uint8Array
        const arrayBuffer = await file.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);

        // Create unique filename
        const timestamp = Date.now();
        const filename = `${timestamp}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;

        // Upload to Firebase Storage
        const storage = getStorage(app);
        const storageRef = ref(storage, `blog-images/${filename}`);

        await uploadBytes(storageRef, buffer, {
            contentType: file.type,
        });

        // Get public URL
        const downloadURL = await getDownloadURL(storageRef);

        console.log("\n✅ Image uploaded successfully");
        console.log("Filename:", filename);
        console.log("URL:", downloadURL);

        return NextResponse.json({
            success: true,
            url: downloadURL,
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
