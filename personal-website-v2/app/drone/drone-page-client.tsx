"use client";

import { Home, Music, Glasses, HardHat, Camera, Check, Zap, Play, Film, HelpCircle, ChevronDown, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { CalendlySection } from "@/components/calendly-section";
import {
    ComicPanel,
    ComicBadge,
    HalftoneBackground,
    ComicCard
} from "@/components/comic-effects";
import { dronePage } from "@/lib/site-content";
import { comicColors } from "@/lib/design-tokens";
import { CrossServiceLinks } from "@/components/cross-service-links";
import { motion, AnimatePresence } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { DroneVideo } from "@/lib/types";
import { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

interface DronePageClientProps {
    videos: DroneVideo[];
    faqs: FAQItem[];
}

export function DronePageClient({ videos, faqs }: DronePageClientProps) {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const iconMap = {
        home: Home,
        music: Music,
        glasses: Glasses,
        "hard-hat": HardHat,
    };

    const serviceColors = [
        comicColors.pageThemes.drone.primary,
        comicColors.pageThemes.drone.secondary,
        comicColors.accent.purple,
        comicColors.accent.green,
    ];

    return (
        <main className="min-h-screen bg-background text-foreground pt-16">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
                <HalftoneBackground
                    color={comicColors.pageThemes.drone.primary}
                    opacity={0.08}
                    className="absolute inset-0"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <ComicBadge color={comicColors.pageThemes.drone.primary} className="mb-6">
                            <Camera className="h-4 w-4 inline mr-2" />
                            Sky 360 Visions
                        </ComicBadge>

                        <h1 className="mb-6 text-4xl md:text-6xl font-display font-black tracking-tight">
                            <Balancer>
                                <span className="comic-text-shadow">
                                    {dronePage.hero.title.split(' ').slice(0, -1).join(' ')}{' '}
                                    <span style={{ color: comicColors.pageThemes.drone.primary }}>
                                        {dronePage.hero.title.split(' ').slice(-1)}
                                    </span>
                                </span>
                            </Balancer>
                        </h1>

                        <p className="mb-4 text-xl font-display font-bold" style={{ color: comicColors.pageThemes.drone.secondary }}>
                            {dronePage.hero.subtitle}
                        </p>

                        <p className="mb-8 text-lg text-muted-foreground max-w-lg leading-relaxed">
                            <Balancer>{dronePage.hero.description}</Balancer>
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link href="#services">
                                <Button
                                    size="lg"
                                    className="font-bold uppercase tracking-wide border-4 transition-all hover:scale-105 hover:-rotate-1"
                                    style={{
                                        backgroundColor: comicColors.pageThemes.drone.primary,
                                        color: comicColors.neutral.white,
                                        borderColor: comicColors.neutral.darkest,
                                        boxShadow: `4px 4px 0 ${comicColors.neutral.darkest}`,
                                    }}
                                >
                                    View Services
                                </Button>
                            </Link>
                            <Link href="#schedule">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="font-bold uppercase border-4 transition-all hover:scale-105"
                                    style={{
                                        borderColor: comicColors.neutral.darkest,
                                        boxShadow: `4px 4px 0 ${comicColors.neutral.darkest}`,
                                    }}
                                >
                                    Book a Call
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <ComicPanel variant="accent" className="p-8" borderColor={comicColors.pageThemes.drone.primary}>
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-display font-bold mb-2">The Gear</h3>
                                <p className="text-muted-foreground text-sm">Cutting-edge 360° technology</p>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-center gap-3 p-3 rounded-lg border-2" style={{ borderColor: comicColors.neutral.light }}>
                                    <Zap className="h-5 w-5" style={{ color: comicColors.pageThemes.drone.secondary }} />
                                    <div>
                                        <p className="font-bold">{dronePage.gear.drone}</p>
                                        <p className="text-sm text-muted-foreground">360° Invisible Drone</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg border-2" style={{ borderColor: comicColors.neutral.light }}>
                                    <Camera className="h-5 w-5" style={{ color: comicColors.pageThemes.drone.primary }} />
                                    <div>
                                        <p className="font-bold">{dronePage.gear.camera}</p>
                                        <p className="text-sm text-muted-foreground">8K 360° Camera</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {dronePage.gear.features.map((feature, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-xs font-bold uppercase rounded-full border-2"
                                        style={{
                                            borderColor: comicColors.neutral.darkest,
                                            backgroundColor: index % 2 === 0
                                                ? comicColors.pageThemes.drone.accent
                                                : comicColors.neutral.lightest,
                                        }}
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </ComicPanel>
                    </motion.div>
                </div>
            </section>

            {/* Advantages Section */}
            <section className="py-16 border-t-4" style={{ borderColor: comicColors.neutral.darkest }}>
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-display font-black">
                            <span className="comic-text-shadow">Your Unfair Advantage</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {dronePage.advantages.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-6 rounded-xl border-4"
                                style={{
                                    borderColor: comicColors.neutral.darkest,
                                    boxShadow: `4px 4px 0 ${comicColors.neutral.darkest}`,
                                }}
                            >
                                <h3
                                    className="text-lg font-display font-bold mb-2"
                                    style={{ color: serviceColors[index] }}
                                >
                                    {item.feature}
                                </h3>
                                <p className="text-sm text-muted-foreground">{item.advantage}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 border-t-4" style={{ borderColor: comicColors.neutral.darkest }}>
                <HalftoneBackground
                    color={comicColors.pageThemes.drone.secondary}
                    opacity={0.05}
                    className="absolute inset-0"
                />

                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-black mb-4">
                            <span className="comic-text-shadow">Services</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            <Balancer>
                                Four high-value ways to leverage invisible 360° drone technology
                            </Balancer>
                        </p>
                    </div>

                    <div className="space-y-12">
                        {dronePage.services.map((service, index) => {
                            const Icon = iconMap[service.icon as keyof typeof iconMap];
                            const color = serviceColors[index];
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={service.id}
                                    id={service.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <ComicPanel className="overflow-hidden">
                                        <div className={`grid grid-cols-1 lg:grid-cols-5 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                                            {/* Icon/Visual Side */}
                                            <div
                                                className={`p-8 flex items-center justify-center lg:col-span-2 ${isEven ? '' : 'lg:order-2'}`}
                                                style={{ backgroundColor: `${color}15` }}
                                            >
                                                <div
                                                    className="h-24 w-24 rounded-2xl border-4 flex items-center justify-center"
                                                    style={{
                                                        backgroundColor: color,
                                                        borderColor: comicColors.neutral.darkest,
                                                        boxShadow: `4px 4px 0 ${comicColors.neutral.darkest}`,
                                                    }}
                                                >
                                                    <Icon className="h-12 w-12" style={{ color: comicColors.neutral.white }} />
                                                </div>
                                            </div>

                                            {/* Content Side */}
                                            <div className={`p-8 lg:col-span-3 ${isEven ? '' : 'lg:order-1'}`}>
                                                <ComicBadge color={color} className="mb-4">
                                                    {service.tagline}
                                                </ComicBadge>

                                                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                                                    {service.title}
                                                </h3>

                                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                                    {service.description}
                                                </p>

                                                <div className="space-y-2 mb-6">
                                                    {service.benefits.map((benefit, benefitIndex) => (
                                                        <div key={benefitIndex} className="flex items-start gap-3">
                                                            <Check
                                                                className="h-5 w-5 mt-0.5 flex-shrink-0"
                                                                style={{ color }}
                                                            />
                                                            <span className="text-sm">{benefit}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                <p className="text-sm font-bold" style={{ color }}>
                                                    {service.pricing}
                                                </p>
                                            </div>
                                        </div>
                                    </ComicPanel>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Sample Work Section */}
            <section id="work" className="py-24 border-t-4" style={{ borderColor: comicColors.neutral.darkest }}>
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-12">
                        <ComicBadge color={comicColors.pageThemes.drone.secondary} className="mb-6 inline-flex">
                            <Film className="h-4 w-4 inline mr-2" />
                            Portfolio
                        </ComicBadge>
                        <h2 className="text-3xl md:text-4xl font-display font-black mb-4">
                            <span className="comic-text-shadow">Sample Work</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            <Balancer>
                                See the magic of invisible 360° drone footage in action
                            </Balancer>
                        </p>
                    </div>

                    {videos.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {videos.map((video) => (
                                <motion.div
                                    key={video.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <ComicPanel className="overflow-hidden group cursor-pointer" onClick={() => setActiveVideo(video.videoUrl)}>
                                        <div className="relative aspect-video">
                                            {video.thumbnailUrl ? (
                                                <Image
                                                    src={video.thumbnailUrl}
                                                    alt={video.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div
                                                    className="w-full h-full flex items-center justify-center"
                                                    style={{ backgroundColor: `${comicColors.pageThemes.drone.primary}20` }}
                                                >
                                                    <Camera className="h-12 w-12" style={{ color: comicColors.pageThemes.drone.primary }} />
                                                </div>
                                            )}
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <div
                                                    className="h-16 w-16 rounded-full border-4 flex items-center justify-center"
                                                    style={{
                                                        backgroundColor: comicColors.pageThemes.drone.primary,
                                                        borderColor: comicColors.neutral.white,
                                                    }}
                                                >
                                                    <Play className="h-8 w-8 text-white ml-1" fill="white" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <ComicBadge
                                                color={
                                                    video.category === 'real-estate' ? comicColors.pageThemes.drone.primary :
                                                    video.category === 'events' ? comicColors.pageThemes.drone.secondary :
                                                    video.category === 'vr-spatial' ? comicColors.accent.purple :
                                                    comicColors.accent.green
                                                }
                                                className="mb-2 text-xs"
                                            >
                                                {video.category === 'real-estate' ? 'Real Estate' :
                                                 video.category === 'events' ? 'Events' :
                                                 video.category === 'vr-spatial' ? 'VR/Spatial' :
                                                 'Inspections'}
                                            </ComicBadge>
                                            <h3 className="font-display font-bold text-lg">{video.title}</h3>
                                            {video.description && (
                                                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{video.description}</p>
                                            )}
                                        </div>
                                    </ComicPanel>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <ComicPanel className="max-w-md mx-auto p-8">
                                <div
                                    className="h-20 w-20 rounded-full border-4 flex items-center justify-center mx-auto mb-6"
                                    style={{
                                        backgroundColor: `${comicColors.pageThemes.drone.primary}20`,
                                        borderColor: comicColors.neutral.darkest,
                                    }}
                                >
                                    <Film className="h-10 w-10" style={{ color: comicColors.pageThemes.drone.primary }} />
                                </div>
                                <h3 className="text-xl font-display font-bold mb-2">Coming Soon</h3>
                                <p className="text-muted-foreground">
                                    Sample footage is being prepared. Check back soon to see the magic of invisible 360° aerial cinema.
                                </p>
                            </ComicPanel>
                        </div>
                    )}
                </div>
            </section>

            {/* Video Modal */}
            {activeVideo && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={() => setActiveVideo(null)}
                >
                    <div className="absolute inset-0 bg-black/80" />
                    <div
                        className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden border-4"
                        style={{ borderColor: comicColors.neutral.darkest }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <video
                            src={activeVideo}
                            controls
                            autoPlay
                            preload="metadata"
                            className="w-full h-full"
                        />
                        <button
                            onClick={() => setActiveVideo(null)}
                            className="absolute top-4 right-4 h-10 w-10 rounded-full border-2 flex items-center justify-center bg-black/50 hover:bg-black/70 transition-colors"
                            style={{ borderColor: comicColors.neutral.white }}
                        >
                            <span className="text-white text-xl">&times;</span>
                        </button>
                    </div>
                </div>
            )}

            {/* Calendly Scheduling Section */}
            <CalendlySection
                calendlyUrl={dronePage.calendly.url}
                title={dronePage.calendly.title}
                description={dronePage.calendly.description}
                accentColor={comicColors.pageThemes.drone.primary}
            />

            {/* FAQ Section */}
            <section id="faq" className="py-24 px-4 md:px-8 max-w-4xl mx-auto border-t-4" style={{ borderColor: comicColors.neutral.darkest }}>
                <div className="text-center mb-12">
                    <ComicBadge color={comicColors.pageThemes.drone.secondary} className="mb-6 inline-flex">
                        <HelpCircle className="h-4 w-4 inline mr-2" />
                        FAQ
                    </ComicBadge>
                    <h2 className="text-3xl md:text-4xl font-display font-black mb-4">
                        <span className="comic-text-shadow">Frequently Asked Questions</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        <Balancer>
                            Common questions about 360° drone cinematography and our services.
                        </Balancer>
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
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
                                        style={{ color: comicColors.pageThemes.drone.primary }}
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

            {/* CTA Section */}
            <section className="py-24 px-4 md:px-8 max-w-3xl mx-auto border-t-4" style={{ borderColor: comicColors.neutral.darkest }}>
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-black mb-4">
                        <Balancer>
                            <span className="comic-text-shadow">
                                Ready to <span style={{ color: comicColors.pageThemes.drone.primary }}>Elevate Your Vision</span>?
                            </span>
                        </Balancer>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        <Balancer>
                            Let's discuss your project and create something extraordinary together.
                        </Balancer>
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="#schedule">
                            <Button
                                size="lg"
                                className="font-bold uppercase tracking-wide border-4 transition-all hover:scale-105 hover:-rotate-1"
                                style={{
                                    backgroundColor: comicColors.pageThemes.drone.primary,
                                    color: comicColors.neutral.white,
                                    borderColor: comicColors.neutral.darkest,
                                    boxShadow: `4px 4px 0 ${comicColors.neutral.darkest}`,
                                }}
                            >
                                Get a Free Quote
                            </Button>
                        </Link>
                        <Link href="mailto:hello@warrenkabuchi.com?subject=Sky%20360%20Visions%20Inquiry">
                            <Button
                                size="lg"
                                variant="outline"
                                className="font-bold uppercase border-4 transition-all hover:scale-105"
                                style={{
                                    borderColor: comicColors.neutral.darkest,
                                    boxShadow: `4px 4px 0 ${comicColors.neutral.darkest}`,
                                }}
                            >
                                Send an Email
                            </Button>
                        </Link>
                        <a
                            href={dronePage.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                size="lg"
                                variant="outline"
                                className="font-bold uppercase border-4 transition-all hover:scale-105"
                                style={{
                                    borderColor: comicColors.neutral.darkest,
                                    boxShadow: `4px 4px 0 ${comicColors.neutral.darkest}`,
                                }}
                            >
                                <Instagram className="h-5 w-5 mr-2" />
                                @skyvisions_360
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Cross-Service Links */}
            <CrossServiceLinks currentService="drone" />
        </main>
    );
}
