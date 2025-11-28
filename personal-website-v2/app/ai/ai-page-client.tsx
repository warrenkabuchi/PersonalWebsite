"use client";

import { Brain, Cpu, Shield, Cloud, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AIContactForm } from "@/components/ai-contact-form";
import { BlogPost } from "@/lib/types";
import {
    ComicPanel,
    ComicBadge,
    HalftoneBackground,
    ComicCard
} from "@/components/comic-effects";
import { aiPage } from "@/lib/site-content";
import { comicColors } from "@/lib/design-tokens";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";

interface AIPageClientProps {
    posts: BlogPost[];
}

export function AIPageClient({ posts }: AIPageClientProps) {
    const iconMap = {
        brain: Brain,
        shield: Shield,
        cloud: Cloud,
    };

    return (
        <main className="min-h-screen bg-background text-foreground pt-16">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
                <HalftoneBackground
                    color={comicColors.pageThemes.ai.primary}
                    opacity={0.08}
                    className="absolute inset-0"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <ComicBadge color={comicColors.pageThemes.ai.primary} className="mb-6">
                            <Brain className="h-4 w-4 inline mr-2" />
                            AI & Governance Consultant
                        </ComicBadge>

                        <h1 className="mb-6 text-4xl md:text-6xl font-display font-black tracking-tight">
                            <Balancer>
                                <span className="comic-text-shadow">
                                    Building Intelligent <span style={{ color: comicColors.pageThemes.ai.primary }}>Enterprise Agents</span>
                                </span>
                            </Balancer>
                        </h1>

                        <p className="mb-8 text-lg text-muted-foreground max-w-lg leading-relaxed">
                            <Balancer>{aiPage.hero.description}</Balancer>
                        </p>

                        <div className="flex gap-4">
                            <Link href="#contact">
                                <Button
                                    size="lg"
                                    className="font-bold uppercase tracking-wide border-4 transition-all hover:scale-105 hover:-rotate-1"
                                    style={{
                                        backgroundColor: comicColors.pageThemes.ai.primary,
                                        color: comicColors.neutral.white,
                                        borderColor: comicColors.neutral.darkest,
                                        boxShadow: `4px 4px 0 ${comicColors.neutral.darkest}`,
                                    }}
                                >
                                    Let's Connect
                                </Button>
                            </Link>
                            <Link href="#insights">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="font-bold uppercase border-4 transition-all hover:scale-105"
                                    style={{
                                        borderColor: comicColors.neutral.darkest,
                                        boxShadow: `4px 4px 0 ${comicColors.neutral.darkest}`,
                                    }}
                                >
                                    View Insights
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <ComicPanel variant="accent" className="p-8">
                            <div className="font-mono text-sm">
                                <p className="mb-2">
                                    <span style={{ color: comicColors.accent.cyan }}>const</span> agent =
                                    <span style={{ color: comicColors.accent.purple }}> new</span> CopilotAgent({`{`}
                                </p>
                                <p className="pl-4 mb-2">
                                    model: <span style={{ color: comicColors.accent.green }}>"gpt-4-turbo"</span>,
                                </p>
                                <p className="pl-4 mb-2">
                                    governance: <span style={{ color: comicColors.accent.purple }}>true</span>,
                                </p>
                                <p className="pl-4 mb-2">
                                    integrations: [
                                    <span style={{ color: comicColors.accent.green }}>"ServiceNow"</span>,
                                    <span style={{ color: comicColors.accent.green }}>"Salesforce"</span>]
                                </p>
                                <p>{`}`});</p>
                            </div>
                        </ComicPanel>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 border-t-4" style={{ borderColor: comicColors.neutral.darkest }}>
                <HalftoneBackground
                    color={comicColors.accent.green}
                    opacity={0.05}
                    className="absolute inset-0"
                />

                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-display font-black mb-12">
                        <span className="comic-text-shadow">Core Services</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {aiPage.services.map((service, index) => {
                            const Icon = iconMap[service.icon as keyof typeof iconMap];
                            const colors = [
                                comicColors.pageThemes.ai.primary,
                                comicColors.accent.purple,
                                comicColors.pageThemes.ai.secondary,
                            ];

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <ComicCard color={comicColors.neutral.white} className="h-full">
                                        <div
                                            className="h-12 w-12 rounded-lg border-4 flex items-center justify-center mb-4"
                                            style={{
                                                backgroundColor: `${colors[index]}20`,
                                                borderColor: comicColors.neutral.darkest,
                                            }}
                                        >
                                            <Icon className="h-6 w-6" style={{ color: colors[index] }} />
                                        </div>
                                        <h3 className="text-xl font-display font-bold mb-2">{service.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                    </ComicCard>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Insights & Publications Section */}
            <section id="insights" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-display font-black mb-4">
                        <span className="comic-text-shadow">Insights & Publications</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        <Balancer>
                            Thoughts on AI architecture, governance, and the future of work. Published here and on Medium.
                        </Balancer>
                    </p>
                </div>

                {posts.length === 0 ? (
                    <p className="text-center text-muted-foreground">No insights published yet.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Link key={post.id} href={`/ai/${post.slug}`}>
                                <motion.div
                                    whileHover={{ y: -4 }}
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
                                        <MapPin className="h-4 w-4" />
                                        <span>{post.location}</span>
                                    </div>
                                    <h3
                                        className="text-2xl font-display font-bold transition-colors"
                                        style={{
                                            color: comicColors.foreground,
                                        }}
                                    >
                                        {post.title}
                                    </h3>
                                    <p className="text-muted-foreground mt-2 line-clamp-2">{post.excerpt}</p>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>

            {/* Consultation Form Section */}
            <section id="contact" className="py-24 px-4 md:px-8 max-w-3xl mx-auto border-t-4" style={{ borderColor: comicColors.neutral.darkest }}>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-display font-black mb-4">
                        <Balancer>
                            <span className="comic-text-shadow">
                                Let's Build Something <span style={{ color: comicColors.pageThemes.ai.primary }}>Intelligent</span>
                            </span>
                        </Balancer>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        <Balancer>
                            Ready to deploy Copilot Studio agents or secure your AI infrastructure?
                            Fill out the form below to schedule a discovery call.
                        </Balancer>
                    </p>
                </div>

                <ComicPanel className="p-8">
                    <AIContactForm />
                </ComicPanel>
            </section>
        </main>
    );
}
