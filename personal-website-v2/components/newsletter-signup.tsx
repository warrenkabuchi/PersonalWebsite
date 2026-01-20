"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { comicColors } from "@/lib/design-tokens";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, Sparkles } from "lucide-react";
import { ComicPanel, ComicBadge } from "@/components/comic-effects";
import { track } from "@vercel/analytics";

const formSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address." }),
});

interface NewsletterSignupProps {
    variant?: "inline" | "card";
    title?: string;
    description?: string;
    accentColor?: string;
    leadMagnet?: {
        title: string;
        description: string;
    };
}

export function NewsletterSignup({
    variant = "card",
    title = "Stay in the Loop",
    description = "Get insights on AI governance, enterprise agents, and cloud architecture delivered to your inbox.",
    accentColor = comicColors.primary.red,
    leadMagnet,
}: NewsletterSignupProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        setError(null);

        try {
            const res = await fetch("/api/booking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...values,
                    type: "newsletter",
                    name: values.email.split("@")[0], // Use email prefix as name
                }),
            });

            if (!res.ok) throw new Error("Failed to subscribe");

            // Track conversion event
            track("newsletter_signup", {
                source: leadMagnet ? "lead_magnet" : "general",
            });

            setIsSuccess(true);
            form.reset();
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
            >
                <div
                    className="inline-flex h-16 w-16 items-center justify-center rounded-full border-4 mb-4"
                    style={{
                        backgroundColor: `${comicColors.accent.green}20`,
                        borderColor: comicColors.accent.green,
                    }}
                >
                    <CheckCircle2 className="h-8 w-8" style={{ color: comicColors.accent.green }} />
                </div>
                <h3 className="text-xl font-display font-black mb-2">You're In!</h3>
                <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                    Thanks for subscribing. Check your inbox for a confirmation email.
                </p>
            </motion.div>
        );
    }

    if (variant === "inline") {
        return (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="border-2 h-12"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        className="h-12 font-bold uppercase tracking-wide border-4 transition-all hover:scale-105"
                        style={{
                            backgroundColor: accentColor,
                            color: comicColors.neutral.white,
                            borderColor: comicColors.neutral.darkest,
                            boxShadow: `4px 4px 0 ${comicColors.neutral.darkest}`,
                        }}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "..." : "Subscribe"}
                    </Button>
                </form>
                {error && (
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                )}
            </Form>
        );
    }

    return (
        <ComicPanel className="p-8">
            <div className="text-center mb-6">
                <ComicBadge color={accentColor} className="mb-4 inline-flex">
                    <Mail className="h-4 w-4 inline mr-2" />
                    Newsletter
                </ComicBadge>
                <h3 className="text-2xl font-display font-black mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm max-w-md mx-auto">{description}</p>
            </div>

            {leadMagnet && (
                <div
                    className="p-4 rounded-lg border-2 mb-6"
                    style={{
                        backgroundColor: `${accentColor}10`,
                        borderColor: comicColors.neutral.light,
                    }}
                >
                    <div className="flex items-start gap-3">
                        <Sparkles className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: accentColor }} />
                        <div>
                            <p className="font-bold text-sm">{leadMagnet.title}</p>
                            <p className="text-muted-foreground text-xs">{leadMagnet.description}</p>
                        </div>
                    </div>
                </div>
            )}

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="border-2 h-12 text-center"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        className="w-full h-12 font-bold uppercase tracking-wide border-4 transition-all hover:scale-105 hover:-rotate-1"
                        style={{
                            backgroundColor: accentColor,
                            color: comicColors.neutral.white,
                            borderColor: comicColors.neutral.darkest,
                            boxShadow: `4px 4px 0 ${comicColors.neutral.darkest}`,
                        }}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Subscribing..." : "Subscribe"}
                    </Button>

                    {error && (
                        <p className="text-red-500 text-sm text-center">{error}</p>
                    )}

                    <p className="text-xs text-muted-foreground text-center">
                        No spam, unsubscribe anytime.
                    </p>
                </form>
            </Form>
        </ComicPanel>
    );
}
