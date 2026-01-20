"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, Camera, Music, Plane, ArrowRight } from "lucide-react";
import { ComicPanel, ComicBadge } from "@/components/comic-effects";
import { comicColors } from "@/lib/design-tokens";
import Balancer from "react-wrap-balancer";

type ServiceType = "ai" | "drone" | "dj" | "travel";

interface ServiceInfo {
    href: string;
    title: string;
    description: string;
    icon: typeof Brain;
    color: string;
    badge: string;
}

const services: Record<ServiceType, ServiceInfo> = {
    ai: {
        href: "/ai",
        title: "AI Consulting",
        description: "Enterprise AI agents, Copilot Studio, and governance frameworks.",
        icon: Brain,
        color: comicColors.pageThemes.ai.primary,
        badge: "AI & Governance",
    },
    drone: {
        href: "/drone",
        title: "Sky 360 Visions",
        description: "Invisible drone footage for real estate, events, and VR content.",
        icon: Camera,
        color: comicColors.pageThemes.drone.primary,
        badge: "Aerial Cinema",
    },
    dj: {
        href: "/dj",
        title: "DJ Services",
        description: "Deep House, Afro-Tech, and Melodic Techno for your events.",
        icon: Music,
        color: comicColors.pageThemes.dj.primary,
        badge: "Events & Music",
    },
    travel: {
        href: "/travel",
        title: "Travel Consulting",
        description: "Custom itineraries and insider tips for unforgettable trips.",
        icon: Plane,
        color: comicColors.secondary.blue,
        badge: "Travel",
    },
};

interface CrossServiceLinksProps {
    currentService: ServiceType;
    title?: string;
}

export function CrossServiceLinks({
    currentService,
    title = "Explore Other Services",
}: CrossServiceLinksProps) {
    const otherServices = (Object.keys(services) as ServiceType[]).filter(
        (s) => s !== currentService
    );

    return (
        <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t-4" style={{ borderColor: comicColors.neutral.darkest }}>
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-black mb-4">
                    <span className="comic-text-shadow">{title}</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    <Balancer>
                        More ways I can help bring your vision to life.
                    </Balancer>
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherServices.map((serviceKey, index) => {
                    const service = services[serviceKey];
                    const Icon = service.icon;

                    return (
                        <motion.div
                            key={serviceKey}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={service.href} className="block group">
                                <ComicPanel className="p-6 h-full transition-all group-hover:scale-[1.02]">
                                    <div className="flex flex-col h-full">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div
                                                className="h-12 w-12 rounded-lg border-4 flex items-center justify-center flex-shrink-0"
                                                style={{
                                                    backgroundColor: `${service.color}20`,
                                                    borderColor: comicColors.neutral.darkest,
                                                }}
                                            >
                                                <Icon className="h-6 w-6" style={{ color: service.color }} />
                                            </div>
                                            <ComicBadge color={service.color} className="text-xs">
                                                {service.badge}
                                            </ComicBadge>
                                        </div>

                                        <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h3>

                                        <p className="text-muted-foreground text-sm mb-4 flex-1">
                                            {service.description}
                                        </p>

                                        <div
                                            className="flex items-center gap-2 text-sm font-bold transition-transform group-hover:translate-x-2"
                                            style={{ color: service.color }}
                                        >
                                            Learn More <ArrowRight className="h-4 w-4" />
                                        </div>
                                    </div>
                                </ComicPanel>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
