"use client";

import { BookingForm } from "@/components/booking-form";
import { Music, Disc } from "lucide-react";
import {
    ComicPanel,
    ComicBadge,
    HalftoneBackground,
    ActionText
} from "@/components/comic-effects";
import { djPage } from "@/lib/site-content";
import { comicColors } from "@/lib/design-tokens";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";

export default function DJPage() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-16">
            {/* Hero Section */}
            <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden py-24 px-6">
                <HalftoneBackground
                    color={comicColors.pageThemes.dj.primary}
                    opacity={0.1}
                    className="absolute inset-0"
                />

                {/* Decorative Elements */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none opacity-20"
                    style={{ backgroundColor: comicColors.pageThemes.dj.primary }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center"
                >
                    <ComicBadge color={comicColors.pageThemes.dj.primary} className="mb-6">
                        <Music className="h-4 w-4 inline mr-2" />
                        DJ & Producer
                    </ComicBadge>

                    <h1 className="mb-6 text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight">
                        <Balancer>
                            <span className="comic-text-shadow">
                                {djPage.hero.title.split(' ')[0]}
                                <span style={{ color: comicColors.pageThemes.dj.primary }}>
                                    {' ' + djPage.hero.title.split(' ')[1]}
                                </span>
                            </span>
                        </Balancer>
                    </h1>

                    <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
                        <Balancer>{djPage.hero.subtitle}</Balancer>
                        <br />
                        <Balancer>{djPage.hero.description}</Balancer>
                    </p>
                </motion.div>

                {/* Decorative Action Text */}
                <motion.div
                    className="absolute bottom-10 right-10 hidden lg:block opacity-15 pointer-events-none"
                    initial={{ opacity: 0, rotate: -180, scale: 0 }}
                    animate={{ opacity: 0.15, rotate: -12, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <ActionText color={comicColors.accent.pink} animate={false}>
                        BOOM!
                    </ActionText>
                </motion.div>
            </section>

            {/* Mixes Section */}
            <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t-4" style={{ borderColor: comicColors.neutral.darkest }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-display font-black mb-12 text-center flex items-center justify-center gap-4">
                        <Disc className="w-10 h-10" style={{ color: comicColors.pageThemes.dj.primary }} />
                        <span className="comic-text-shadow">Latest Mixes</span>
                    </h2>

                    <div className="grid grid-cols-1 gap-8">
                        {djPage.mixes.map((mix, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <ComicPanel
                                    className="overflow-hidden"
                                    style={{
                                        borderColor: comicColors.pageThemes.dj.primary,
                                    }}
                                >
                                    <iframe
                                        width="100%"
                                        height="166"
                                        scrolling="no"
                                        frameBorder="no"
                                        allow="autoplay"
                                        src={mix.url}
                                    />
                                </ComicPanel>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Booking Section */}
            <section className="py-24 px-4 md:px-8 border-t-4 relative" style={{ borderColor: comicColors.neutral.darkest }}>
                <HalftoneBackground
                    color={comicColors.pageThemes.dj.secondary}
                    opacity={0.05}
                    className="absolute inset-0"
                />

                <div className="max-w-3xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-black mb-4">
                            <Balancer>
                                <span className="comic-text-shadow">
                                    {djPage.booking.title.split(' ')[0]}
                                    <span style={{ color: comicColors.pageThemes.dj.primary }}>
                                        {' ' + djPage.booking.title.split(' ')[1]}
                                    </span>
                                </span>
                            </Balancer>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            <Balancer>{djPage.booking.description}</Balancer>
                        </p>
                    </div>

                    <ComicPanel
                        className="p-8"
                        style={{
                            borderColor: comicColors.pageThemes.dj.primary,
                        }}
                    >
                        <BookingForm />
                    </ComicPanel>
                </div>
            </section>
        </main>
    );
}
