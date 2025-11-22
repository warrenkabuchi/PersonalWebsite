import { Brain, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AIContactForm } from "@/components/ai-contact-form";

export default function AIPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-white pt-16">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-950/50 px-4 py-1.5 text-sm font-medium text-blue-400 ring-1 ring-blue-800">
                            <Brain className="h-4 w-4" />
                            <span>AI & Governance Consultant</span>
                        </div>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
                            Building Intelligent <br />
                            <span className="text-blue-500">Enterprise Agents</span>
                        </h1>
                        <p className="mb-8 text-lg text-slate-400 max-w-lg">
                            Specializing in Microsoft Copilot Studio, Azure AI Foundry, and Governance Frameworks. I help organizations deploy secure, scalable AI solutions.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#contact">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                    Request Consultation
                                </Button>
                            </Link>
                            <Link href="#">
                                <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-900 hover:text-white">
                                    View Case Studies
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-blue-900/20 to-slate-900 border border-slate-800 p-8 flex items-center justify-center">
                        {/* Abstract Graphic or Code Snippet */}
                        <div className="text-slate-500 font-mono text-sm">
                            <p className="mb-2"><span className="text-blue-400">const</span> agent = <span className="text-purple-400">new</span> CopilotAgent({`{`}</p>
                            <p className="pl-4 mb-2">model: <span className="text-green-400">"gpt-4-turbo"</span>,</p>
                            <p className="pl-4 mb-2">governance: <span className="text-purple-400">true</span>,</p>
                            <p className="pl-4 mb-2">integrations: [<span className="text-green-400">"ServiceNow"</span>, <span className="text-green-400">"Salesforce"</span>]</p>
                            <p>{`}`});</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-slate-900/30 border-y border-slate-800">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl font-bold mb-12">Core Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-colors">
                            <div className="h-12 w-12 bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-500 mb-4">
                                <Brain className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Agent Development</h3>
                            <p className="text-slate-400 text-sm">
                                Custom Copilot Studio agents tailored to your business workflows. Integration with internal APIs and data sources.
                            </p>
                        </div>

                        {/* Service 2 */}
                        <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-colors">
                            <div className="h-12 w-12 bg-purple-900/20 rounded-lg flex items-center justify-center text-purple-500 mb-4">
                                <CheckCircle2 className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Governance & Security</h3>
                            <p className="text-slate-400 text-sm">
                                Implementing PPAC and Purview policies to ensure data safety, compliance, and responsible AI usage.
                            </p>
                        </div>

                        {/* Service 3 */}
                        <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-colors">
                            <div className="h-12 w-12 bg-green-900/20 rounded-lg flex items-center justify-center text-green-500 mb-4">
                                <ArrowRight className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Azure AI Solutions</h3>
                            <p className="text-slate-400 text-sm">
                                End-to-end RAG pipelines using Azure AI Foundry and OpenAI models for enterprise knowledge retrieval.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Consultation Form Section */}
            <section id="contact" className="py-24 px-4 md:px-8 max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Let's Build Something Intelligent</h2>
                    <p className="text-slate-400">
                        Ready to deploy Copilot Studio agents or secure your AI infrastructure? <br />
                        Fill out the form below to schedule a discovery call.
                    </p>
                </div>

                <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-2xl">
                    <AIContactForm />
                </div>
            </section>
        </main>
    );
}
