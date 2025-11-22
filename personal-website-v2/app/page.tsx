"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Cpu,
  Cloud,
  Shield,
  Code2,
  Database,
  Server,
  Globe,
  Music,
  Leaf,
  Flag,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skills = {
    "Generative AI": {
      icon: <Cpu className="w-6 h-6 text-emerald-400" />,
      items: ["Copilot Studio", "LangChain", "RAG Architecture", "OpenAI API", "Prompt Engineering"]
    },
    "Cloud Operations": {
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      items: ["Azure Expert", "Google Cloud Platform", "Bicep / Terraform", "FinOps", "Vertex AI"]
    },
    "DevOps & Engineering": {
      icon: <Terminal className="w-6 h-6 text-purple-500" />,
      items: ["CI/CD Pipelines", "Docker & Kubernetes", "GitOps", "SQL / NoSQL", "Python"]
    },
    "Governance & Compliance": {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      items: ["AuditBoard", "AML Frameworks", "Risk Management", "AI Safety", "Policy as Code"]
    }
  };

  const experience = [
    {
      role: "Senior Technology Consultant",
      company: "Protiviti",
      period: "2023 - Present",
      focus: "AI Governance & Agents",
      description: "Leading the implementation of enterprise-grade AI agents and governance frameworks. Architecting secure, scalable solutions for Fortune 500 clients."
    },
    {
      role: "Technology Consultant",
      company: "Protiviti",
      period: "2021 - 2023",
      focus: "Multi-Cloud & Computer Vision",
      description: "Designed and deployed computer vision models on Azure and GCP. Optimized cloud infrastructure for high-performance computing tasks."
    },
    {
      role: "Lead Machine Learning Engineer",
      company: "Hagos Marketing",
      period: "2020 - 2021",
      focus: "AWS SageMaker Architecture",
      description: "Built end-to-end ML pipelines using AWS SageMaker. Improved model inference times by 40% through architecture optimization."
    },
    {
      role: "Research Fellow",
      company: "National Science Foundation",
      period: "2019 - 2020",
      focus: "NLP & AI Safety",
      description: "Conducted research on bias mitigation in Large Language Models. Published findings on AI safety protocols."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-950 to-slate-950" />

        <div className="container max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-3 text-sm font-mono text-emerald-400"
              >
                <span className="px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-900">Azure</span>
                <span className="px-3 py-1 rounded-full bg-blue-950/50 border border-blue-900 text-blue-400">GCP</span>
                <span className="px-3 py-1 rounded-full bg-purple-950/50 border border-purple-900 text-purple-400">Copilot Studio</span>
                <span className="px-3 py-1 rounded-full bg-yellow-950/50 border border-yellow-900 text-yellow-400">Python</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                Architecting the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                  Future of Enterprise AI
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed">
                I build, deploy, and govern intelligent agents that solve real business problems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold"
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-slate-950">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-12"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                  <Code2 className="text-emerald-400" /> About Me
                </h2>
                <div className="prose prose-invert text-slate-400 leading-relaxed">
                  <p>
                    I am a data-driven AI Engineer with a deep background in Azure Cloud & FinOps.
                    My passion lies in bridging the gap between cutting-edge AI research and practical,
                    scalable enterprise solutions.
                  </p>
                  <p>
                    With years of experience in multi-cloud architectures, I specialize in building
                    robust infrastructure that supports the next generation of intelligent applications.
                    From governance frameworks to autonomous agents, I ensure AI is not just powerful,
                    but safe and compliant.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <div className="relative aspect-square rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/profile.jpg"
                    alt="Warren Kabuchi"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <a href="/dj" className="block group">
                <Card className="h-full bg-slate-900/50 border-slate-800 group-hover:border-purple-500/50 transition-colors">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="p-3 rounded-full bg-purple-500/10 text-purple-400">
                      <Music className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors">DJ & Producer</h3>
                      <p className="text-sm text-slate-400">Spinning house & techno.</p>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <a href="/travel" className="block group">
                <Card className="h-full bg-slate-900/50 border-slate-800 group-hover:border-blue-500/50 transition-colors">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">Global Traveler</h3>
                      <p className="text-sm text-slate-400">Exploring the world.</p>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <Card className="bg-slate-900/50 border-slate-800 hover:border-emerald-500/50 transition-colors">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-400">
                    <Flag className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">USSF Referee</h3>
                    <p className="text-sm text-slate-400">Fair play on the weekends.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-slate-950/50">
        <div className="container max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-12 flex items-center gap-3"
          >
            <Server className="text-blue-500" /> Professional Journey
          </motion.h2>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 bg-slate-950 group-[.is-active]:border-emerald-500 text-slate-500 group-[.is-active]:text-emerald-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="w-3 h-3 bg-current rounded-full opacity-60" />
                </div>

                <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-900 border-slate-800 p-6 hover:border-slate-700 transition-all">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <h3 className="font-bold text-white text-lg">{job.role}</h3>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-950/30 px-2 py-1 rounded border border-emerald-900/50 mt-1 sm:mt-0">
                      {job.period}
                    </span>
                  </div>
                  <div className="text-blue-400 font-medium mb-2">{job.company}</div>
                  <div className="text-sm text-slate-500 font-mono mb-3 uppercase tracking-wider">{job.focus}</div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {job.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section id="skills" className="py-24 px-6 bg-slate-950">
        <div className="container max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-12 flex items-center gap-3"
          >
            <Database className="text-purple-500" /> Technical Arsenal
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {Object.entries(skills).map(([category, data], index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors">
                  <CardHeader>
                    <div className="mb-2 p-2 w-fit rounded-lg bg-slate-950 border border-slate-800">
                      {data.icon}
                    </div>
                    <CardTitle className="text-white text-lg">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {data.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-slate-950 to-slate-950" />
        <div className="container max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to <span className="text-emerald-400">Architect the Future?</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Whether you need to deploy autonomous agents, secure your cloud infrastructure, or just want to chat about the latest in AI—I'm always open to new opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <a
                href="mailto:hello@warrenkabuchi.com"
                className="group flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 rounded-full font-bold text-lg transition-all hover:scale-105"
              >
                <Mail className="w-6 h-6" />
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/warrenkabuchi"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-blue-600 text-white rounded-full font-bold text-lg transition-all hover:scale-105 border border-slate-700 hover:border-blue-500"
              >
                <Linkedin className="w-6 h-6" />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-900 bg-slate-950">
        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Warren Kabuchi. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/warrenkabuchi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:hello@warrenkabuchi.com" className="text-slate-400 hover:text-emerald-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-slate-600 text-xs font-mono">
            Built with Next.js 14 & Tailwind
          </div>
        </div>
      </footer>
    </main>
  );
}
