"use client";

import { useEffect } from "react";
import { Calendar } from "lucide-react";
import { track } from "@vercel/analytics";
import { ComicPanel, ComicBadge } from "@/components/comic-effects";
import { comicColors } from "@/lib/design-tokens";
import Balancer from "react-wrap-balancer";

interface CalendlySectionProps {
    calendlyUrl: string;
    title?: string;
    description?: string;
    accentColor?: string;
}

export function CalendlySection({
    calendlyUrl,
    title = "Schedule a Meeting",
    description = "Book a time that works for you and let's discuss your project.",
    accentColor = comicColors.pageThemes.ai.primary,
}: CalendlySectionProps) {
    useEffect(() => {
        // Load Calendly widget script
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        // Track when Calendly section is viewed
        track("calendly_section_viewed", {
            title: title,
        });

        // Listen for Calendly events
        const handleCalendlyEvent = (e: MessageEvent) => {
            if (e.data.event && e.data.event.indexOf("calendly") === 0) {
                if (e.data.event === "calendly.event_scheduled") {
                    track("calendly_meeting_scheduled", {
                        title: title,
                    });
                }
            }
        };

        window.addEventListener("message", handleCalendlyEvent);

        return () => {
            // Cleanup
            document.body.removeChild(script);
            window.removeEventListener("message", handleCalendlyEvent);
        };
    }, [title]);

    return (
        <section
            id="schedule"
            className="py-24 px-4 md:px-8 max-w-5xl mx-auto border-t-4"
            style={{ borderColor: comicColors.neutral.darkest }}
        >
            <div className="text-center mb-12">
                <ComicBadge color={accentColor} className="mb-6 inline-flex">
                    <Calendar className="h-4 w-4 inline mr-2" />
                    Book a Meeting
                </ComicBadge>

                <h2 className="text-3xl md:text-4xl font-display font-black mb-4">
                    <Balancer>
                        <span className="comic-text-shadow">
                            {title}
                        </span>
                    </Balancer>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    <Balancer>{description}</Balancer>
                </p>
            </div>

            <ComicPanel className="p-2 md:p-4">
                <div
                    className="calendly-inline-widget"
                    data-url={calendlyUrl}
                    style={{
                        minWidth: "320px",
                        height: "700px",
                    }}
                />
            </ComicPanel>
        </section>
    );
}
