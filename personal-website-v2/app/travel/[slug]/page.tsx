import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { BlogPost } from "@/lib/types";
import { MapPin, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HalftoneBackground, ComicPanel } from "@/components/comic-effects";
import { comicColors } from "@/lib/design-tokens";
import { Button } from "@/components/ui/button";

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
        <main className="min-h-screen bg-background text-foreground pt-16">
            <HalftoneBackground
                color={comicColors.secondary.blue}
                opacity={0.05}
                className="fixed inset-0"
            />

            {/* Hero Image */}
            <section className="relative h-[60vh] w-full overflow-hidden border-b-4" style={{ borderColor: comicColors.neutral.darkest }}>
                <img
                    src={post.coverImage}
                    alt={post.title}
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            </section>

            {/* Content */}
            <article className="max-w-4xl mx-auto px-4 md:px-8 -mt-32 relative z-10 pb-24">
                <Link href="/travel">
                    <Button
                        variant="outline"
                        className="mb-8 font-bold uppercase border-4"
                        style={{
                            borderColor: comicColors.neutral.darkest,
                            boxShadow: `3px 3px 0 ${comicColors.neutral.darkest}`,
                        }}
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Journals
                    </Button>
                </Link>

                <ComicPanel variant="accent" className="p-8 mb-8">
                    <h1 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight comic-text-shadow">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap gap-6 text-muted-foreground font-bold">
                        <div className="flex items-center gap-2">
                            <div
                                className="p-2 rounded-full border-3"
                                style={{
                                    backgroundColor: `${comicColors.secondary.blue}20`,
                                    borderColor: comicColors.neutral.darkest
                                }}
                            >
                                <MapPin className="h-5 w-5" style={{ color: comicColors.secondary.blue }} />
                            </div>
                            <span>{post.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div
                                className="p-2 rounded-full border-3"
                                style={{
                                    backgroundColor: `${comicColors.accent.yellow}20`,
                                    borderColor: comicColors.neutral.darkest
                                }}
                            >
                                <Calendar className="h-5 w-5" style={{ color: comicColors.accent.yellow }} />
                            </div>
                            <span>{postDate}</span>
                        </div>
                    </div>
                </ComicPanel>

                <ComicPanel variant="default" className="p-8">
                    <div
                        className="prose prose-lg max-w-none"
                        style={{ color: comicColors.foreground }}
                    >
                        <div
                            className="leading-relaxed whitespace-pre-wrap text-lg"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>
                </ComicPanel>

                <div className="mt-12">
                    <Link href="/travel">
                        <Button
                            size="lg"
                            className="font-bold uppercase border-4"
                            style={{
                                backgroundColor: comicColors.secondary.blue,
                                color: comicColors.neutral.white,
                                borderColor: comicColors.neutral.darkest,
                                boxShadow: `4px 4px 0 ${comicColors.neutral.darkest}`,
                            }}
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            View All Journals
                        </Button>
                    </Link>
                </div>
            </article>
        </main>
    );
}
