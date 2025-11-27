"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { BlogPost } from "@/lib/types";
import { Trash2, Eye, Plus } from "lucide-react";
import Link from "next/link";

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [posts, setPosts] = useState<(BlogPost & { id: string })[]>([]);
    const [loading, setLoading] = useState(false);
    const [showCreateForm, setShowCreateForm] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        location: "",
        coverImage: "",
        excerpt: "",
        content: "",
        category: "travel",
        tags: "",
    });

    useEffect(() => {
        if (isAuthenticated) {
            loadPosts();
        }
    }, [isAuthenticated]);

    const loadPosts = async () => {
        setLoading(true);
        try {
            const postsQuery = query(collection(db, "posts"), orderBy("createdAt", "desc"));
            const querySnapshot = await getDocs(postsQuery);
            const fetchedPosts = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as (BlogPost & { id: string })[];
            setPosts(fetchedPosts);
        } catch (error) {
            console.error("Error fetching posts:", error);
            alert("Error loading posts");
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
            setIsAuthenticated(true);
        } else {
            alert("Incorrect password");
        }
    };

    const handleDelete = async (postId: string, postTitle: string) => {
        if (!confirm(`Are you sure you want to delete "${postTitle}"?`)) {
            return;
        }

        try {
            const response = await fetch(`/api/posts/${postId}`, {
                method: "DELETE",
            });

            if (!response.ok) throw new Error("Failed to delete");

            alert("Post deleted successfully!");
            loadPosts(); // Reload the list
        } catch (error) {
            console.error("Error deleting post:", error);
            alert("Error deleting post");
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
            const response = await fetch("/api/posts/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    tags: formData.tags.split(",").map(t => t.trim()).filter(Boolean),
                }),
            });

            if (!response.ok) throw new Error("Failed to create post");

            alert("Blog post created successfully!");
            setFormData({
                title: "",
                slug: "",
                location: "",
                coverImage: "",
                excerpt: "",
                content: "",
                category: "travel",
                tags: "",
            });
            setShowCreateForm(false);
            loadPosts();
        } catch (error) {
            console.error("Error creating post:", error);
            alert("Error creating post. Check console for details.");
        } finally {
            setLoading(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
                <form onSubmit={handleLogin} className="p-8 border-4 border-foreground rounded-lg max-w-sm w-full shadow-lg">
                    <h1 className="text-3xl font-display font-black mb-6">Admin Access</h1>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        className="w-full p-3 mb-6 bg-secondary rounded border-2 border-input"
                    />
                    <button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground p-3 rounded font-bold hover:opacity-90 border-2 border-foreground"
                    >
                        Login
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 p-8 max-w-7xl mx-auto bg-background text-foreground">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-display font-black">Admin Dashboard</h1>
                <button
                    onClick={() => setShowCreateForm(!showCreateForm)}
                    className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-bold hover:opacity-90 border-2 border-foreground"
                >
                    <Plus className="w-5 h-5" />
                    {showCreateForm ? "Cancel" : "Create New Post"}
                </button>
            </div>

            {showCreateForm && (
                <div className="mb-12 p-6 border-4 border-foreground rounded-lg bg-secondary">
                    <h2 className="text-2xl font-display font-black mb-6">Create New Post</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold mb-2">Title *</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 bg-background rounded border-2 border-input"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Slug (URL) *</label>
                                <input
                                    type="text"
                                    name="slug"
                                    value={formData.slug}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 bg-background rounded border-2 border-input"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full p-2 bg-background rounded border-2 border-input"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Cover Image URL *</label>
                                <input
                                    type="url"
                                    name="coverImage"
                                    value={formData.coverImage}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 bg-background rounded border-2 border-input"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Category *</label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full p-2 bg-background rounded border-2 border-input"
                                >
                                    <option value="travel">Travel</option>
                                    <option value="work">Work/AI</option>
                                    <option value="personal">Personal</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Tags (comma-separated)</label>
                                <input
                                    type="text"
                                    name="tags"
                                    value={formData.tags}
                                    onChange={handleChange}
                                    placeholder="tokyo, japan, travel"
                                    className="w-full p-2 bg-background rounded border-2 border-input"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2">Excerpt</label>
                            <textarea
                                name="excerpt"
                                value={formData.excerpt}
                                onChange={handleChange}
                                rows={3}
                                className="w-full p-2 bg-background rounded border-2 border-input"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2">Content (HTML) *</label>
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                required
                                rows={15}
                                className="w-full p-2 bg-background rounded border-2 border-input font-mono text-sm"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary text-primary-foreground p-3 rounded font-bold hover:opacity-90 disabled:opacity-50 border-2 border-foreground"
                        >
                            {loading ? "Publishing..." : "Publish Post"}
                        </button>
                    </form>
                </div>
            )}

            <div>
                <h2 className="text-2xl font-display font-black mb-6">All Posts ({posts.length})</h2>
                {loading && <p>Loading posts...</p>}
                {!loading && posts.length === 0 && <p>No posts yet.</p>}
                <div className="space-y-4">
                    {posts.map((post) => {
                        const postUrl = post.category === 'travel'
                            ? `/travel/${post.slug}`
                            : post.category === 'work'
                                ? `/ai/${post.slug}`
                                : `/blog/${post.slug}`;

                        return (
                            <div
                                key={post.id}
                                className="p-6 border-4 border-foreground rounded-lg bg-secondary flex items-center justify-between hover:shadow-lg transition-shadow"
                            >
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-xl font-bold">{post.title}</h3>
                                        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded uppercase">
                                            {post.category}
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        {post.location} • {new Date(post.date).toLocaleDateString()}
                                    </p>
                                    <p className="text-sm line-clamp-2">{post.excerpt}</p>
                                </div>
                                <div className="flex items-center gap-3 ml-6">
                                    <Link
                                        href={postUrl}
                                        target="_blank"
                                        className="p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                                        title="View post"
                                    >
                                        <Eye className="w-5 h-5" />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(post.id, post.title)}
                                        className="p-3 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                                        title="Delete post"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
