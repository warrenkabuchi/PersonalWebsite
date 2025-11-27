"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        location: "",
        coverImage: "",
        excerpt: "",
        content: "",
        category: "travel",
    });

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
            setIsAuthenticated(true);
        } else {
            alert("Incorrect password");
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await addDoc(collection(db, "posts"), {
                ...formData,
                date: Date.now(),
                createdAt: Date.now(),
            });
            alert("Blog post created successfully!");
            router.push("/travel");
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Error creating post. Check console for details.");
        } finally {
            setLoading(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
                <form onSubmit={handleLogin} className="p-8 border border-border rounded-lg max-w-sm w-full">
                    <h1 className="text-2xl font-bold mb-4">Admin Access</h1>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        className="w-full p-2 mb-4 bg-secondary rounded border border-input"
                    />
                    <button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground p-2 rounded font-medium hover:opacity-90"
                    >
                        Login
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen p-8 max-w-4xl mx-auto bg-background text-foreground">
            <h1 className="text-3xl font-bold mb-8">Create New Blog Post</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium mb-2">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="w-full p-2 bg-secondary rounded border border-input"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Slug (URL)</label>
                        <input
                            type="text"
                            name="slug"
                            value={formData.slug}
                            onChange={handleChange}
                            required
                            className="w-full p-2 bg-secondary rounded border border-input"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                            className="w-full p-2 bg-secondary rounded border border-input"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Cover Image URL</label>
                        <input
                            type="url"
                            name="coverImage"
                            value={formData.coverImage}
                            onChange={handleChange}
                            required
                            className="w-full p-2 bg-secondary rounded border border-input"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full p-2 bg-secondary rounded border border-input"
                        >
                            <option value="travel">Travel</option>
                            <option value="work">Work</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Excerpt (Short Summary)</label>
                    <textarea
                        name="excerpt"
                        value={formData.excerpt}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full p-2 bg-secondary rounded border border-input"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Content (Markdown/HTML)</label>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        required
                        rows={15}
                        className="w-full p-2 bg-secondary rounded border border-input font-mono text-sm"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-primary-foreground p-3 rounded font-bold hover:opacity-90 disabled:opacity-50"
                >
                    {loading ? "Publishing..." : "Publish Post"}
                </button>
            </form >
        </div >
    );
}
