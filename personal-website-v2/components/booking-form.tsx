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
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { comicColors } from "@/lib/design-tokens";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().min(10, {
        message: "Please enter a valid phone number.",
    }),
    eventType: z.string().min(2, {
        message: "Event type is required.",
    }),
    date: z.string().min(1, {
        message: "Date is required.",
    }),
    details: z.string().optional(),
});

export function BookingForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            eventType: "",
            date: "",
            details: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        setMessage(null);

        try {
            const response = await fetch("/api/booking", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...values, type: "dj" }),
            });

            if (!response.ok) {
                throw new Error("Failed to submit booking request.");
            }

            setMessage({
                type: "success",
                text: "🎉 Booking request sent! I'll get back to you shortly."
            });
            form.reset();
        } catch (error) {
            console.error(error);
            setMessage({
                type: "error",
                text: "Something went wrong. Please try again or email me directly."
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    // Show success state
    if (message?.type === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
            >
                <div
                    className="inline-flex h-20 w-20 items-center justify-center rounded-full border-4 mb-6"
                    style={{
                        backgroundColor: `${comicColors.pageThemes.dj.primary}20`,
                        borderColor: comicColors.pageThemes.dj.primary,
                    }}
                >
                    <CheckCircle2 className="h-10 w-10" style={{ color: comicColors.pageThemes.dj.primary }} />
                </div>
                <h3 className="text-3xl font-display font-black mb-3">Booking Received!</h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    I'll review your event details and get back to you shortly with availability and pricing.
                </p>
                <Button
                    onClick={() => setMessage(null)}
                    className="font-bold uppercase tracking-wide border-4"
                    style={{
                        backgroundColor: comicColors.pageThemes.dj.primary,
                        color: comicColors.neutral.white,
                        borderColor: comicColors.neutral.darkest,
                        boxShadow: `4px 4px 0 ${comicColors.neutral.darkest}`,
                    }}
                >
                    Submit Another Request
                </Button>
            </motion.div>
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Name *</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="John Doe"
                                        className="border-2"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Email *</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="border-2"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Phone *</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="+1 (555) 000-0000"
                                        className="border-2"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Event Date *</FormLabel>
                                <FormControl>
                                    <Input
                                        type="date"
                                        className="border-2"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="eventType"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-bold">Event Type *</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Wedding, Corporate, Private Party..."
                                    className="border-2"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-bold">Additional Details</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell me more about the vibe, venue, and music preferences..."
                                    className="resize-none border-2 min-h-[120px]"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    className="w-full font-bold uppercase tracking-wide border-4 transition-all hover:scale-105 hover:-rotate-1"
                    style={{
                        backgroundColor: comicColors.pageThemes.dj.primary,
                        color: comicColors.neutral.white,
                        borderColor: comicColors.neutral.darkest,
                        boxShadow: `4px 4px 0 ${comicColors.neutral.darkest}`,
                    }}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Sending..." : "Request Booking"}
                </Button>

                {message?.type === "error" && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 p-4 rounded-lg border-2 bg-red-50 border-red-500 text-red-800"
                    >
                        <XCircle className="w-5 h-5 flex-shrink-0" />
                        <p className="text-sm font-medium">{message.text}</p>
                    </motion.div>
                )}
            </form>
        </Form>
    );
}
