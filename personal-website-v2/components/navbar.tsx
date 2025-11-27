"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigation } from "@/lib/site-content";
import { comicColors } from "@/lib/design-tokens";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Navbar() {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        if (pathname !== '/') return;

        const sections = ['experience', 'contact'];
        const observers: IntersectionObserver[] = [];

        sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (!element) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveSection(`#${sectionId}`);
                        }
                    });
                },
                {
                    rootMargin: '-20% 0px -60% 0px',
                    threshold: 0.1
                }
            );

            observer.observe(element);
            observers.push(observer);
        });

        // Check initial scroll position
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // If near top, clear active section
            if (scrollPosition < 100) {
                setActiveSection("");
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            observers.forEach((observer) => observer.disconnect());
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname]);

    const isActive = (path: string) => {
        // For homepage sections with hashes
        if (path.startsWith('#') && pathname === '/') {
            return activeSection === path;
        }
        // For regular pages
        return pathname === path;
    };

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 border-b-4 bg-background/95 backdrop-blur-md"
            style={{ borderColor: comicColors.neutral.darkest }}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <div className="container max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link
                    href="/"
                    className="font-display text-2xl tracking-tight hover:scale-105 transition-transform"
                >
                    <span className="text-foreground">Warren </span>
                    <span style={{ color: comicColors.primary.red }}>Kabuchi</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wide text-muted-foreground">
                    {navigation.links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "transition-all hover:scale-110 relative group",
                                isActive(link.href) && "scale-110"
                            )}
                            style={{
                                color: isActive(link.href)
                                    ? link.theme === 'ai' ? comicColors.accent.cyan
                                        : link.theme === 'dj' ? comicColors.accent.purple
                                            : link.theme === 'travel' ? comicColors.secondary.blue
                                                : comicColors.primary.red
                                    : undefined
                            }}
                        >
                            {link.label}
                            {isActive(link.href) && (
                                <motion.div
                                    className="absolute -bottom-1 left-0 right-0 h-1 rounded-full"
                                    style={{ backgroundColor: comicColors.accent.yellow }}
                                    layoutId="navbar-indicator"
                                />
                            )}
                        </Link>
                    ))}
                </div>

                <Link href={navigation.cta.href}>
                    <Button
                        size="sm"
                        className="font-bold uppercase tracking-wide border-3 transition-all hover:scale-105 hover:-rotate-2"
                        style={{
                            backgroundColor: comicColors.accent.yellow,
                            color: comicColors.neutral.darkest,
                            borderColor: comicColors.neutral.darkest,
                            boxShadow: `3px 3px 0 ${comicColors.neutral.darkest}`,
                        }}
                    >
                        {navigation.cta.text}
                    </Button>
                </Link>
            </div>
        </motion.nav>
    );
}
