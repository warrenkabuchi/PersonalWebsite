"use client";

import { motion } from "framer-motion";
import { Brain, Cloud, Code, Shield, Disc, Globe, Flag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    ComicPanel,
    ComicBadge,
    ComicCard,
    HalftoneBackground,
} from "@/components/comic-effects";
import { comicColors } from "@/lib/design-tokens";
import { experience } from "@/lib/site-content";
import Balancer from "react-wrap-balancer";

export function AboutPageClient() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <main className="min-h-screen bg-background text-foreground pt-16">
            {/* Hero Section */}
            <section className="relative py-24 px-6">
                <HalftoneBackground
                    color={comicColors.accent.cyan}
                    opacity={0.08}
                    className="absolute inset-0"
                />

                <div className="container max-w-5xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-bold uppercase tracking-wide text-sm"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Home
                        </Link>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <ComicBadge color={comicColors.accent.cyan}>
                                    About Me
                                </ComicBadge>

                                <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight">
                                    <Balancer>
                                        <span className="comic-text-shadow">
                                            I Don&apos;t Just Prompt LLMs;
                                            <span style={{ color: comicColors.accent.cyan }}>
                                                {" "}I Engineer Resilient AI Systems
                                            </span>
                                        </span>
                                    </Balancer>
                                </h1>

                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    With a background spanning Azure Cloud Engineering, FinOps, and AI Research, 
                                    I approach Artificial Intelligence with a &quot;Full Stack&quot; mindset. I understand 
                                    that a great AI model is useless without scalable infrastructure, efficient 
                                    data pipelines, and solid governance guardrails.
                                </p>
                            </div>

                            <ComicPanel variant="accent">
                                <div className="aspect-square overflow-hidden relative">
                                    <Image
                                        src="/images/profile.jpg"
                                        alt="Warren Kabuchi"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                        priority
                                    />
                                </div>
                            </ComicPanel>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Bio Section */}
            <section className="py-24 px-6 border-t-4" style={{ borderColor: comicColors.neutral.darkest }}>
                <div className="container max-w-5xl mx-auto">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Currently, I work as a Senior Technology Consultant, helping Fortune 500 
                                    clients architect Microsoft Copilot Studio agents and Vertex AI solutions. 
                                    My work focuses on the intersection of innovation and compliance—building 
                                    agents that are powerful enough to automate complex workflows but safe 
                                    enough for highly regulated industries like banking and security.
                                </p>
                                <p>
                                    Whether it&apos;s designing RAG architectures, implementing AI governance 
                                    frameworks, or optimizing cloud infrastructure, I bring a holistic approach 
                                    to every project.
                                </p>
                            </div>

                            <ComicCard color={comicColors.neutral.white}>
                                <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                                    <span 
                                        className="w-3 h-3 rounded-full"
                                        style={{ backgroundColor: comicColors.accent.green }}
                                    />
                                    Beyond the Code
                                </h3>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <div
                                            className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border-4"
                                            style={{
                                                backgroundColor: `${comicColors.accent.purple}20`,
                                                borderColor: comicColors.neutral.darkest,
                                            }}
                                        >
                                            <Disc className="h-6 w-6" style={{ color: comicColors.accent.purple }} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">On the Decks</h4>
                                            <p className="text-muted-foreground">
                                                I&apos;m a DJ specializing in Afro-RnB and Hip-Hop mixes.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div
                                            className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border-4"
                                            style={{
                                                backgroundColor: `${comicColors.accent.green}20`,
                                                borderColor: comicColors.neutral.darkest,
                                            }}
                                        >
                                            <Globe className="h-6 w-6" style={{ color: comicColors.accent.green }} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Around the World</h4>
                                            <p className="text-muted-foreground">
                                                Global traveler exploring new cultures and cuisines.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div
                                            className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border-4"
                                            style={{
                                                backgroundColor: `${comicColors.secondary.blue}20`,
                                                borderColor: comicColors.neutral.darkest,
                                            }}
                                        >
                                            <Flag className="h-6 w-6" style={{ color: comicColors.secondary.blue }} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">On the Field</h4>
                                            <p className="text-muted-foreground">
                                                A USSF Certified Referee since age 14, bringing decisive leadership to every project.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </ComicCard>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-24 px-6 border-t-4 relative" style={{ borderColor: comicColors.neutral.darkest }}>
                <HalftoneBackground
                    color={comicColors.accent.green}
                    opacity={0.05}
                    className="absolute inset-0"
                />

                <div className="container max-w-4xl mx-auto relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-display font-black mb-12 flex items-center gap-3"
                    >
                        <Code style={{ color: comicColors.accent.green }} className="w-10 h-10" />
                        <span className="comic-text-shadow">Experience</span>
                    </motion.h2>

                    <div className="space-y-8">
                        {experience.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <ComicPanel variant="default" className="p-6">
                                    <div className="space-y-3">
                                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                            <h3 className="font-display font-bold text-2xl">{job.role}</h3>
                                            <ComicBadge color={comicColors.accent.yellow}>
                                                {job.period}
                                            </ComicBadge>
                                        </div>
                                        <div style={{ color: comicColors.secondary.blue }} className="font-bold text-lg">
                                            {job.company}
                                        </div>
                                        <div className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
                                            {job.focus}
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {job.description}
                                        </p>
                                    </div>
                                </ComicPanel>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-24 px-6 border-t-4" style={{ borderColor: comicColors.neutral.darkest }}>
                <div className="container max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-display font-black mb-12 flex items-center gap-3"
                    >
                        <Brain style={{ color: comicColors.accent.purple }} className="w-10 h-10" />
                        <span className="comic-text-shadow">Technical Arsenal</span>
                    </motion.h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* AI & ML */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0 }}
                        >
                            <ComicCard color={comicColors.neutral.white} className="h-full">
                                <div
                                    className="h-12 w-12 rounded-lg border-4 flex items-center justify-center mb-4"
                                    style={{
                                        backgroundColor: `${comicColors.accent.green}20`,
                                        borderColor: comicColors.neutral.darkest,
                                    }}
                                >
                                    <Brain className="h-6 w-6" style={{ color: comicColors.accent.green }} />
                                </div>
                                <h3 className="font-display font-bold text-lg mb-3">AI & ML</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Copilot Studio", "Azure OpenAI", "Vertex AI", "LangChain", "RAG", "TensorFlow"].map((skill) => (
                                        <span 
                                            key={skill} 
                                            className="px-2 py-1 text-xs font-bold rounded border-2"
                                            style={{
                                                borderColor: comicColors.neutral.darkest,
                                                backgroundColor: `${comicColors.accent.green}15`,
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </ComicCard>
                        </motion.div>

                        {/* Cloud */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <ComicCard color={comicColors.neutral.white} className="h-full">
                                <div
                                    className="h-12 w-12 rounded-lg border-4 flex items-center justify-center mb-4"
                                    style={{
                                        backgroundColor: `${comicColors.secondary.blue}20`,
                                        borderColor: comicColors.neutral.darkest,
                                    }}
                                >
                                    <Cloud className="h-6 w-6" style={{ color: comicColors.secondary.blue }} />
                                </div>
                                <h3 className="font-display font-bold text-lg mb-3">Cloud</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Azure (Expert)", "GCP", "AWS SageMaker", "Bicep (IaC)", "FinOps"].map((skill) => (
                                        <span 
                                            key={skill} 
                                            className="px-2 py-1 text-xs font-bold rounded border-2"
                                            style={{
                                                borderColor: comicColors.neutral.darkest,
                                                backgroundColor: `${comicColors.secondary.blue}15`,
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </ComicCard>
                        </motion.div>

                        {/* DevOps */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <ComicCard color={comicColors.neutral.white} className="h-full">
                                <div
                                    className="h-12 w-12 rounded-lg border-4 flex items-center justify-center mb-4"
                                    style={{
                                        backgroundColor: `${comicColors.accent.purple}20`,
                                        borderColor: comicColors.neutral.darkest,
                                    }}
                                >
                                    <Code className="h-6 w-6" style={{ color: comicColors.accent.purple }} />
                                </div>
                                <h3 className="font-display font-bold text-lg mb-3">DevOps</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Azure DevOps", "CI/CD", "Git", "SQL", "Data Pipelines"].map((skill) => (
                                        <span 
                                            key={skill} 
                                            className="px-2 py-1 text-xs font-bold rounded border-2"
                                            style={{
                                                borderColor: comicColors.neutral.darkest,
                                                backgroundColor: `${comicColors.accent.purple}15`,
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </ComicCard>
                        </motion.div>

                        {/* Governance */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <ComicCard color={comicColors.neutral.white} className="h-full">
                                <div
                                    className="h-12 w-12 rounded-lg border-4 flex items-center justify-center mb-4"
                                    style={{
                                        backgroundColor: `${comicColors.accent.orange}20`,
                                        borderColor: comicColors.neutral.darkest,
                                    }}
                                >
                                    <Shield className="h-6 w-6" style={{ color: comicColors.accent.orange }} />
                                </div>
                                <h3 className="font-display font-bold text-lg mb-3">Governance</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["AI Risk Frameworks", "AuditBoard API", "SoD", "AML Compliance"].map((skill) => (
                                        <span 
                                            key={skill} 
                                            className="px-2 py-1 text-xs font-bold rounded border-2"
                                            style={{
                                                borderColor: comicColors.neutral.darkest,
                                                backgroundColor: `${comicColors.accent.orange}15`,
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </ComicCard>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 border-t-4 relative" style={{ borderColor: comicColors.neutral.darkest }}>
                <HalftoneBackground
                    color={comicColors.primary.red}
                    opacity={0.05}
                    className="absolute inset-0"
                />

                <div className="container max-w-3xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-black mb-6">
                            <Balancer>
                                <span className="comic-text-shadow">
                                    Ready to Build Something{" "}
                                    <span style={{ color: comicColors.primary.red }}>Amazing?</span>
                                </span>
                            </Balancer>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Let&apos;s discuss your next AI project or cloud initiative.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/ai">
                                <Button
                                    size="lg"
                                    className="font-bold uppercase tracking-wide border-4 transition-all hover:scale-105 hover:-rotate-1"
                                    style={{
                                        backgroundColor: comicColors.primary.red,
                                        color: comicColors.neutral.white,
                                        borderColor: comicColors.neutral.darkest,
                                        boxShadow: `4px 4px 0 ${comicColors.neutral.darkest}`,
                                    }}
                                >
                                    AI Consulting
                                </Button>
                            </Link>
                            <Link href="/#contact">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="font-bold uppercase tracking-wide border-4 transition-all hover:scale-105"
                                    style={{
                                        borderColor: comicColors.neutral.darkest,
                                        boxShadow: `4px 4px 0 ${comicColors.neutral.darkest}`,
                                    }}
                                >
                                    Get In Touch
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}