"use client";

import Image from "next/image";
import { Brain, Cpu, Shield, Cloud, MapPin, HelpCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AIContactForm } from "@/components/ai-contact-form";
import { CalendlySection } from "@/components/calendly-section";
import { BlogPost } from "@/lib/types";
import {
    ComicPanel,
    ComicBadge,
    HalftoneBackground,
    ComicCard
} from "@/components/comic-effects";
import { aiPage } from "@/lib/site-content";
import { comicColors } from "@/lib/design-tokens";
import { CrossServiceLinks } from "@/components/cross-service-links";
import { motion, AnimatePresence } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { useState } from "react";

const aiFAQs = [
    {
        question: "What types of AI agents can you build with Copilot Studio?",
        answer: "I specialize in building custom AI agents that integrate with enterprise systems like ServiceNow, Salesforce, SharePoint, and internal databases. These agents can handle customer service automation, knowledge management, internal IT support, and complex workflow orchestration with full governance controls.",
    },
    {
        question: "How do you ensure AI governance and compliance?",
        answer: "I implement comprehensive governance frameworks including prompt guardrails, content filtering, audit logging, role-based access controls, and compliance monitoring. All solutions are designed to meet enterprise security standards and regulatory requirements like SOC 2, HIPAA, and GDPR where applicable.",
    },
    {
        question: "What's your approach to RAG (Retrieval-Augmented Generation) architecture?",
        answer: "My RAG implementations use Azure AI Search or similar vector databases combined with careful chunking strategies, embedding optimization, and semantic reranking. I focus on maximizing retrieval accuracy while minimizing hallucinations through context engineering and citation validation.",
    },
    {
        question: "Do you work with cloud platforms other than Azure?",
        answer: "While I specialize in Microsoft Azure and Copilot Studio, I also have extensive experience with Google Cloud Platform (Vertex AI, Document AI) and AWS (Bedrock, SageMaker). I can design multi-cloud architectures or help migrate between platforms.",
    },
];

interface AIPageClientProps {
    posts: BlogPost[];
}

export function AIPageClient({ posts }: AIPageClientProps) {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

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
                            <Link href="#schedule">
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
                                    Schedule a Call
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

            {/* Calendly Scheduling Section - Primary CTA */}
            <CalendlySection
                calendlyUrl={aiPage.calendly.url}
                title={aiPage.calendly.title}
                description={aiPage.calendly.description}
                accentColor={comicColors.pageThemes.ai.primary}
            />

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
                                        <div className="relative h-full w-full">
                                            <Image
                                                src={post.coverImage}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </div>
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

            {/* FAQ Section */}
            <section id="faq" className="py-24 px-4 md:px-8 max-w-4xl mx-auto border-t-4" style={{ borderColor: comicColors.neutral.darkest }}>
                <div className="text-center mb-12">
                    <ComicBadge color={comicColors.pageThemes.ai.secondary} className="mb-6 inline-flex">
                        <HelpCircle className="h-4 w-4 inline mr-2" />
                        FAQ
                    </ComicBadge>
                    <h2 className="text-3xl md:text-4xl font-display font-black mb-4">
                        <span className="comic-text-shadow">Frequently Asked Questions</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        <Balancer>
                            Common questions about AI consulting, Copilot Studio, and enterprise governance.
                        </Balancer>
                    </p>
                </div>

                <div className="space-y-4">
                    {aiFAQs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ComicPanel className="overflow-hidden">
                                <button
                                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                                    className="w-full p-6 flex items-center justify-between text-left"
                                >
                                    <h3 className="font-display font-bold text-lg pr-4">{faq.question}</h3>
                                    <ChevronDown
                                        className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${openFAQ === index ? "rotate-180" : ""}`}
                                        style={{ color: comicColors.pageThemes.ai.primary }}
                                    />
                                </button>
                                <AnimatePresence>
                                    {openFAQ === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </ComicPanel>
                        </motion.div>
                    ))}
                </div>
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

            {/* Cross-Service Links */}
            <CrossServiceLinks currentService="ai" />
        </main>
    );
}
