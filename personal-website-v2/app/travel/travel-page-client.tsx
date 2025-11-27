"use client";

import { Plane, MapPin, Map, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TravelWizard } from "@/components/travel-wizard";
import { BlogPost } from "@/lib/types";
import Link from "next/link";
import {
    ComicPanel,
    ComicBadge,
    HalftoneBackground,
    ActionText
} from "@/components/comic-effects";
import { travelPage } from "@/lib/site-content";
import { comicColors } from "@/lib/design-tokens";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";

interface TravelPageClientProps {
    posts: BlogPost[];
}

export function TravelPageClient({ posts }: TravelPageClientProps) {
    return (
        <main className="min-h-screen bg-background text-foreground pt-16">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] w-full overflow-hidden py-24 px-6 flex items-end">
                <HalftoneBackground
                    color={comicColors.primary.blue}
                    opacity={0.1}
                    className="absolute inset-0"
                />

                {/* Background Image with Comic Effect */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
                        alt="Travel Hero"
                        className="absolute inset-0 h-full w-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-4xl pb-12"
                >
                    <ComicBadge color={comicColors.accent.green} className="mb-6">
                        <Plane className="h-4 w-4 inline mr-2" />
                        Global Travel Enthusiast
                    </ComicBadge>

                    <h1 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
                        <Balancer>
                            <span className="comic-text-shadow">
                                <span style={{ color: comicColors.primary.blue }}>{travelPage.hero.title}</span>
                            </span>
                        </Balancer>
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-xl mb-8">
                        <Balancer>{travelPage.hero.description}</Balancer>
                    </p>

                    <Button
                        size="lg"
                        className="font-bold uppercase tracking-wide border-4"
                        style={{
                            backgroundColor: comicColors.primary.blue,
                            color: comicColors.neutral.white,
                            borderColor: comicColors.neutral.darkest,
                            boxShadow: `4px 4px 0 ${comicColors.neutral.darkest}`,
                        }}
                        onClick={() => document.getElementById('plan-trip')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Plan My Trip
                    </Button>
                </motion.div>

                {/* Decorative Action Text */}
                <motion.div
                    className="absolute top-20 right-10 hidden xl:block opacity-15 pointer-events-none"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 0.15, scale: 1, rotate: -12 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <ActionText color={comicColors.accent.green} animate={false}>
                        GO!
                    </ActionText>
                </motion.div>
            </section>

            {/* Journal / Grid Section */}
            <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t-4" style={{ borderColor: comicColors.neutral.darkest }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-display font-black mb-12 text-center flex items-center justify-center gap-4">
                        <Map className="w-10 h-10" style={{ color: comicColors.accent.green }} />
                        <span className="comic-text-shadow">Travel Journals</span>
                    </h2>

                    {posts.length === 0 ? (
                        <p className="text-center text-muted-foreground">No blog posts yet. Check back soon!</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, index) => (
                                <Link key={post.id} href={`/travel/${post.slug}`}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group cursor-pointer"
                                    >
                                        <ComicPanel className="overflow-hidden mb-4 aspect-[4/5]">
                                            <img
                                                src={post.coverImage}
                                                alt={post.title}
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </ComicPanel>
                                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                                            <MapPin className="h-4 w-4" style={{ color: comicColors.accent.green }} />
                                            <span>{post.location}</span>
                                        </div>
                                        <h3
                                            className="text-2xl font-display font-bold transition-colors"
                                            style={{ color: comicColors.foreground }}
                                        >
                                            {post.title}
                                        </h3>
                                        <p className="text-muted-foreground mt-2 line-clamp-2">{post.excerpt}</p>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    )}
                </motion.div>
            </section>

            {/* Planning Wizard Section */}
            <section id="plan-trip" className="py-24 px-4 md:px-8 border-t-4 relative" style={{ borderColor: comicColors.neutral.darkest }}>
                <HalftoneBackground
                    color={comicColors.accent.green}
                    opacity={0.05}
                    className="absolute inset-0"
                />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-black mb-4 flex items-center justify-center gap-4">
                            <Compass className="w-10 h-10" style={{ color: comicColors.primary.blue }} />
                            <Balancer>
                                <span className="comic-text-shadow">
                                    Plan Your Next <span style={{ color: comicColors.accent.green }}>Adventure</span>
                                </span>
                            </Balancer>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            <Balancer>
                                Tell me a bit about your dream trip, and let's make it happen.
                            </Balancer>
                        </p>
                    </div>

                    <ComicPanel
                        className="p-8 max-w-4xl mx-auto"
                        style={{
                            borderColor: comicColors.primary.blue,
                        }}
                    >
                        <TravelWizard />
                    </ComicPanel>
                </div>
            </section>
        </main>
    );
}
