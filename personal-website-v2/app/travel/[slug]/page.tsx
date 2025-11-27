import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { BlogPost } from "@/lib/types";
import { MapPin, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getBlogPost(slug: string): Promise<BlogPost | null> {
    try {
        const postsQuery = query(collection(db, "posts"), where("slug", "==", slug));
        const querySnapshot = await getDocs(postsQuery);

        if (querySnapshot.empty) {
            return null;
        }

        const doc = querySnapshot.docs[0];
        return {
            id: doc.id,
            ...doc.data(),
        } as BlogPost;
    } catch (error) {
        console.error("Error fetching post:", error);
        return null;
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getBlogPost(slug);

    if (!post) {
        notFound();
    }

    const postDate = new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 pt-16">
            {/* Hero Image */}
            <section className="relative h-[60vh] w-full overflow-hidden">
                <img
                    src={post.coverImage}
                    alt={post.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
            </section>

            {/* Content */}
            <article className="max-w-4xl mx-auto px-4 md:px-8 -mt-32 relative z-10">
                <Link
                    href="/travel"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-500 transition-colors mb-8"
                >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to Journals</span>
                </Link>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    {post.title}
                </h1>

                <div className="flex flex-wrap gap-6 text-slate-400 mb-12">
                    <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        <span>{post.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        <span>{postDate}</span>
                    </div>
                </div>

                <div className="prose prose-invert prose-lg max-w-none">
                    <div
                        className="text-slate-300 leading-relaxed whitespace-pre-wrap"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>

                <div className="mt-16 pt-8 border-t border-slate-800">
                    <Link
                        href="/travel"
                        className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors font-medium"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span>View All Journals</span>
                    </Link>
                </div>
            </article>

            <div className="h-24" />
        </main>
    );
}
