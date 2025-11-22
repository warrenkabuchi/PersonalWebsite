"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Brain, Cloud, Code, Shield, Disc, Leaf, Flag } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30">
            {/* Navigation */}
            <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                    <Link
                        href="/"
                        className="group flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-emerald-400"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>
                    <div className="text-sm font-bold tracking-wider text-zinc-100">
                        WARREN KABUCHI
                    </div>
                </div>
            </nav>

            <div className="mx-auto max-w-4xl px-6 pt-32 pb-20">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h1 className="mb-6 text-4xl font-black tracking-tighter sm:text-6xl">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Me</span>
                    </h1>
                    <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
                        I don't just prompt LLMs; I engineer resilient AI systems.
                    </p>
                </motion.div>

                {/* Bio Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-20 grid gap-12 md:grid-cols-2"
                >
                    <div className="space-y-6 text-zinc-300 leading-relaxed">
                        <p>
                            With a background spanning Azure Cloud Engineering, FinOps, and AI Research, I approach Artificial Intelligence with a "Full Stack" mindset. I understand that a great AI model is useless without scalable infrastructure, efficient data pipelines, and solid governance guardrails.
                        </p>
                        <p>
                            Currently, I work as a Senior Technology Consultant, helping Fortune 500 clients architect Microsoft Copilot Studio agents and Vertex AI solutions. My work focuses on the intersection of innovation and compliance—building agents that are powerful enough to automate complex workflows but safe enough for highly regulated industries like banking and security.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
                        <h3 className="mb-6 text-xl font-bold text-white flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                            Beyond the Code
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                                    <Disc className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-zinc-100">On the decks</h4>
                                    <p className="text-sm text-zinc-400">I’m a DJ specializing in Afro-RnB and Hip-Hop mixes.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                                    <Leaf className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-zinc-100">In the soil</h4>
                                    <p className="text-sm text-zinc-400">I’m an avid plant dad, currently caring for an Alocasia Polly.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                                    <Flag className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-zinc-100">On the field</h4>
                                    <p className="text-sm text-zinc-400">A USSF Certified Referee since age 14, bringing decisive leadership to every project.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </motion.section>

                {/* Experience Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-20"
                >
                    <h2 className="mb-10 text-3xl font-bold tracking-tight flex items-center gap-3">
                        <span className="text-emerald-400">#</span> Experience
                    </h2>

                    <div className="space-y-12 border-l-2 border-zinc-800 pl-8 ml-4 relative">
                        {/* Role 1 */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-zinc-950 bg-emerald-500"></span>
                            <div className="mb-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                                <h3 className="text-xl font-bold text-white">Senior Technology Consultant</h3>
                                <span className="text-emerald-400 font-medium">Protiviti</span>
                                <span className="text-sm text-zinc-500">Dec 2024 – Present</span>
                            </div>
                            <p className="mb-4 text-sm font-medium text-zinc-400 uppercase tracking-wide">Focus: AI Engineering & Governance</p>
                            <ul className="list-disc list-outside ml-4 space-y-2 text-zinc-300">
                                <li>Architected a custom Microsoft Copilot Studio agent for a major tech client, integrating AuditBoard APIs to reduce manual audit triage by 30%.</li>
                                <li>Developed comprehensive "Red/Yellow Zone" AI Governance Frameworks for banking clients to ensure regulatory compliance.</li>
                                <li>Led technical workshops on Agentic workflows, training client IT teams on prompt engineering and lifecycle management.</li>
                            </ul>
                        </div>

                        {/* Role 2 */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-zinc-950 bg-zinc-700"></span>
                            <div className="mb-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                                <h3 className="text-xl font-bold text-white">Technology Consultant</h3>
                                <span className="text-emerald-400 font-medium">Protiviti</span>
                                <span className="text-sm text-zinc-500">Mar 2023 – Dec 2024</span>
                            </div>
                            <p className="mb-4 text-sm font-medium text-zinc-400 uppercase tracking-wide">Focus: Cloud & Multi-Cloud AI</p>
                            <ul className="list-disc list-outside ml-4 space-y-2 text-zinc-300">
                                <li>Developed a License Plate Detection system using GCP Vertex AI and Computer Vision for a regional transportation authority.</li>
                                <li>Led the infrastructure deployment for an Azure AI Search application using Bicep (IaC) and Azure DevOps pipelines.</li>
                                <li>Analyzed a $5M+ Azure infrastructure footprint, implementing FinOps strategies and data pipeline optimizations.</li>
                            </ul>
                        </div>

                        {/* Role 3 */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-zinc-950 bg-zinc-700"></span>
                            <div className="mb-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                                <h3 className="text-xl font-bold text-white">Lead Machine Learning Engineer</h3>
                                <span className="text-emerald-400 font-medium">Hagos Marketing</span>
                            </div>
                            <p className="mb-4 text-sm font-medium text-zinc-400 uppercase tracking-wide">Focus: Startup / AWS Build</p>
                            <ul className="list-disc list-outside ml-4 space-y-2 text-zinc-300">
                                <li>Directed a technical team of 5 in designing and deploying the company's first cloud-native AI infrastructure on AWS.</li>
                                <li>Architected a Deep Learning Recommendation System on SageMaker, modernizing market basket analysis using TensorFlow.</li>
                            </ul>
                        </div>

                        {/* Role 4 */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-zinc-950 bg-zinc-700"></span>
                            <div className="mb-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                                <h3 className="text-xl font-bold text-white">Research Fellow</h3>
                                <span className="text-emerald-400 font-medium">National Science Foundation</span>
                            </div>
                            <p className="mb-4 text-sm font-medium text-zinc-400 uppercase tracking-wide">Focus: NLP & AI Safety</p>
                            <ul className="list-disc list-outside ml-4 space-y-2 text-zinc-300">
                                <li>Engineered a Supervised Machine Learning Pipeline (XGBoost) to detect misinformation in news articles.</li>
                                <li>Collaborated on large-scale text annotation and feature engineering (TF-IDF/NLP).</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Skills Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="mb-10 text-3xl font-bold tracking-tight flex items-center gap-3">
                        <span className="text-emerald-400">#</span> Technical Arsenal
                    </h2>

                    <div className="grid gap-6 sm:grid-cols-2">
                        {/* AI & ML */}
                        <div className="group rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 transition-colors hover:border-emerald-500/50 hover:bg-zinc-900/50">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                                    <Brain className="h-5 w-5" />
                                </div>
                                <h3 className="font-bold text-white">AI & ML</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["Microsoft Copilot Studio", "Azure OpenAI", "Vertex AI", "LangChain", "RAG", "Vector Embeddings", "TensorFlow"].map((skill) => (
                                    <span key={skill} className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-300 border border-zinc-700/50">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Cloud */}
                        <div className="group rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 transition-colors hover:border-cyan-500/50 hover:bg-zinc-900/50">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                                    <Cloud className="h-5 w-5" />
                                </div>
                                <h3 className="font-bold text-white">Cloud</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["Azure (Expert)", "GCP", "AWS SageMaker", "Bicep (IaC)", "FinOps"].map((skill) => (
                                    <span key={skill} className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-300 border border-zinc-700/50">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* DevOps */}
                        <div className="group rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 transition-colors hover:border-purple-500/50 hover:bg-zinc-900/50">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                                    <Code className="h-5 w-5" />
                                </div>
                                <h3 className="font-bold text-white">DevOps</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["Azure DevOps", "CI/CD", "Git", "SQL", "Data Pipelines"].map((skill) => (
                                    <span key={skill} className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-300 border border-zinc-700/50">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Governance */}
                        <div className="group rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 transition-colors hover:border-orange-500/50 hover:bg-zinc-900/50">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400">
                                    <Shield className="h-5 w-5" />
                                </div>
                                <h3 className="font-bold text-white">Governance</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["AI Risk Frameworks", "AuditBoard API", "SoD", "AML Compliance"].map((skill) => (
                                    <span key={skill} className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-300 border border-zinc-700/50">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>
            </div>
        </main>
    );
}
