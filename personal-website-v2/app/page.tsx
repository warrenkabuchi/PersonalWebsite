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
  Music,
  Globe,
  Flag,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ComicPanel,
  ComicBadge,
  HalftoneBackground,
  ActionText,
  ComicCard
} from "@/components/comic-effects";
import {
  hero,
  about,
  experience,
  skills,
  contact,
  socialLinks,
  footer
} from "@/lib/site-content";
import { comicColors } from "@/lib/design-tokens";
import Balancer from "react-wrap-balancer";
import { AIContactForm } from "@/components/ai-contact-form";

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

  const iconMap = {
    cpu: Cpu,
    cloud: Cloud,
    terminal: Terminal,
    shield: Shield,
    music: Music,
    globe: Globe,
    flag: Flag,
  };

  const colorMap = {
    green: comicColors.accent.green,
    blue: comicColors.primary.blue,
    purple: comicColors.accent.purple,
    orange: comicColors.accent.orange,
    cyan: comicColors.accent.cyan,
    yellow: comicColors.accent.yellow,
    red: comicColors.primary.red,
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-16">
        <HalftoneBackground
          color={comicColors.primary.red}
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
            <div className="space-y-6">
              {/* Badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-3"
              >
                {hero.badges.map((badge, index) => (
                  <motion.div
                    key={badge.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <ComicBadge color={colorMap[badge.color as keyof typeof colorMap]}>
                      {badge.text}
                    </ComicBadge>
                  </motion.div>
                ))}
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight">
                  <Balancer>
                    <span className="comic-text-shadow" style={{ color: comicColors.foreground }}>
                      {hero.headline}
                    </span>
                  </Balancer>
                </h1>
              </motion.div>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-medium"
              >
                <Balancer>{hero.subheadline}</Balancer>
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                size="lg"
                className="font-bold uppercase tracking-wide border-4 transition-all hover:scale-105 hover:-rotate-2"
                style={{
                  backgroundColor: comicColors.primary.red,
                  color: comicColors.neutral.white,
                  borderColor: comicColors.neutral.darkest,
                  boxShadow: `4px 4px 0 ${comicColors.neutral.darkest}`,
                }}
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {hero.cta.primary.text} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-bold uppercase tracking-wide border-4 transition-all hover:scale-105"
                style={{
                  borderColor: comicColors.neutral.darkest,
                  boxShadow: `4px 4px 0 ${comicColors.neutral.darkest}`,
                }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {hero.cta.secondary.text}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Action Text */}
        <motion.div
          className="absolute top-32 right-10 hidden xl:block opacity-20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <ActionText color={comicColors.accent.yellow} animate={false}>
            POW!
          </ActionText>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <HalftoneBackground
          color={comicColors.accent.cyan}
          opacity={0.05}
          className="absolute inset-0"
        />

        <div className="container max-w-5xl mx-auto relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-12"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-display font-black flex items-center gap-3">
                  <Code2 style={{ color: comicColors.accent.cyan }} className="w-10 h-10" />
                  <span className="comic-text-shadow">{about.title}</span>
                </h2>
                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  {about.bio.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Profile Image */}
              <ComicPanel variant="accent">
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src="/images/profile.jpg"
                    alt="Warren Kabuchi"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </ComicPanel>
            </div>

            {/* Beyond the Code Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {about.beyondTheCode.map((item, index) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap];
                const CardComponent = item.href ? 'a' : 'div';

                return (
                  <CardComponent
                    key={index}
                    href={item.href || undefined}
                    className="block group"
                  >
                    <ComicCard
                      color={comicColors.neutral.white}
                      className="h-full"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="p-3 rounded-full border-4"
                          style={{
                            backgroundColor: `${comicColors.accent.purple}20`,
                            borderColor: comicColors.neutral.darkest,
                          }}
                        >
                          <Icon className="w-6 h-6" style={{ color: comicColors.accent.purple }} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg group-hover:scale-105 transition-transform">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </ComicCard>
                  </CardComponent>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 border-t-4" style={{ borderColor: comicColors.neutral.darkest }}>
        <div className="container max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-black mb-12 flex items-center gap-3"
          >
            <Server style={{ color: comicColors.secondary.blue }} className="w-10 h-10" />
            <span className="comic-text-shadow">Professional Journey</span>
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
                <ComicPanel
                  variant="default"
                  className="p-6"
                >
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

      {/* Skills Grid */}
      <section id="skills" className="py-24 px-6 relative">
        <HalftoneBackground
          color={comicColors.accent.green}
          opacity={0.05}
          className="absolute inset-0"
        />

        <div className="container max-w-6xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-black mb-12 flex items-center gap-3"
          >
            <Database style={{ color: comicColors.accent.purple }} className="w-10 h-10" />
            <span className="comic-text-shadow">Technical Arsenal</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {Object.entries(skills).map(([category, data], index) => {
              const Icon = iconMap[data.icon as keyof typeof iconMap];
              const iconColor = colorMap[data.color as keyof typeof colorMap];

              return (
                <motion.div key={index} variants={fadeInUp}>
                  <ComicCard color={comicColors.neutral.white} className="h-full">
                    <div className="space-y-4">
                      <div
                        className="p-3 w-fit rounded-lg border-4"
                        style={{
                          backgroundColor: `${iconColor}20`,
                          borderColor: comicColors.neutral.darkest,
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: iconColor }} />
                      </div>
                      <h3 className="font-display font-bold text-xl">{category}</h3>
                      <ul className="space-y-2">
                        {data.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: iconColor }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ComicCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative border-t-4" style={{ borderColor: comicColors.neutral.darkest }}>
        <HalftoneBackground
          color={comicColors.primary.red}
          opacity={0.05}
          className="absolute inset-0"
        />

        <div className="container max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black">
              <Balancer>
                <span className="comic-text-shadow">
                  {contact.title.split('Architect the Future?')[0]}
                  <span style={{ color: comicColors.primary.red }}>
                    Architect the Future?
                  </span>
                </span>
              </Balancer>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              <Balancer>{contact.description}</Balancer>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <a href={contact.cta.primary.href}>
                <Button
                  size="lg"
                  className="font-bold uppercase border-4 transition-all hover:scale-105"
                  style={{
                    backgroundColor: comicColors.accent.yellow,
                    color: comicColors.neutral.darkest,
                    borderColor: comicColors.neutral.darkest,
                    boxShadow: `4px 4px 0 ${comicColors.neutral.darkest}`,
                  }}
                >
                  <Mail className="w-6 h-6 mr-2" />
                  {contact.cta.primary.text}
                </Button>
              </a>
              <a href={contact.cta.secondary.href} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-bold uppercase border-4 transition-all hover:scale-105"
                  style={{
                    borderColor: comicColors.neutral.darkest,
                    boxShadow: `4px 4px 0 ${comicColors.neutral.darkest}`,
                  }}
                >
                  <Linkedin className="w-6 h-6 mr-2" />
                  {contact.cta.secondary.text}
                </Button>
              </a>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pt-12 max-w-2xl mx-auto"
            >
              <AIContactForm />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t-4" style={{ borderColor: comicColors.neutral.darkest }}>
        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-muted-foreground text-sm">
            {footer.copyright}
          </div>

          <div className="flex items-center gap-6">
            <a
              href={socialLinks.github}
              className="transition-transform hover:scale-110"
              style={{ color: comicColors.muted.foreground }}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
              style={{ color: comicColors.muted.foreground }}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.email}
              className="transition-transform hover:scale-110"
              style={{ color: comicColors.muted.foreground }}
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-muted-foreground text-xs font-mono">
            {footer.stack}
          </div>
        </div>
      </footer>
    </main>
  );
}
