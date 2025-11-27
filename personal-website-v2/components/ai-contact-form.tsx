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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { comicColors } from "@/lib/design-tokens";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name is required." }),
    email: z.string().email({ message: "Invalid email address." }),
    company: z.string().optional(),
    role: z.string().optional(),
    interest: z.string().min(1, { message: "Please select an area of interest." }),
    message: z.string().min(10, { message: "Please provide a brief message." }),
});

export function AIContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            role: "",
            interest: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        setResponseMessage(null);

        try {
            const res = await fetch("/api/booking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...values, type: "ai" }),
            });

            if (!res.ok) throw new Error("Failed to submit");

            setResponseMessage({
                type: "success",
                text: "🎉 Request sent! I'll be in touch shortly."
            });
            form.reset();
        } catch (error) {
            console.error(error);
            setResponseMessage({
                type: "error",
                text: "Something went wrong. Please try again or email me directly."
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    // Show success state
    if (responseMessage?.type === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
            >
                <div
                    className="inline-flex h-20 w-20 items-center justify-center rounded-full border-4 mb-6"
                    style={{
                        backgroundColor: `${comicColors.pageThemes.ai.primary}20`,
                        borderColor: comicColors.pageThemes.ai.primary,
                    }}
                >
                    <CheckCircle2 className="h-10 w-10" style={{ color: comicColors.pageThemes.ai.primary }} />
                </div>
                <h3 className="text-3xl font-display font-black mb-3">Request Received!</h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    I'll review your consultation request and be in touch shortly to schedule a discovery call.
                </p>
                <Button
                    onClick={() => setResponseMessage(null)}
                    className="font-bold uppercase tracking-wide border-4"
                    style={{
                        backgroundColor: comicColors.pageThemes.ai.primary,
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
                                        placeholder="Jane Doe"
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
                                <FormLabel className="font-bold">Work Email *</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="jane@company.com"
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
                        name="company"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Company</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Acme Corp"
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
                        name="role"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Role</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="CTO, Product Manager..."
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
                    name="interest"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-bold">Area of Interest *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="border-2">
                                        <SelectValue placeholder="Select a topic" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className="z-50">
                                    <SelectItem value="copilot">Copilot Studio Agents</SelectItem>
                                    <SelectItem value="governance">AI Governance & PPAC</SelectItem>
                                    <SelectItem value="azure">Azure AI Foundry / RAG</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-bold">Message *</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell me about your project or challenge..."
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
                        backgroundColor: comicColors.pageThemes.ai.primary,
                        color: comicColors.neutral.white,
                        borderColor: comicColors.neutral.darkest,
                        boxShadow: `4px 4px 0 ${comicColors.neutral.darkest}`,
                    }}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Sending..." : "Request Consultation"}
                </Button>

                {responseMessage?.type === "error" && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 p-4 rounded-lg border-2 bg-red-50 border-red-500 text-red-800"
                    >
                        <XCircle className="w-5 h-5 flex-shrink-0" />
                        <p className="text-sm font-medium">{responseMessage.text}</p>
                    </motion.div>
                )}
            </form>
        </Form>
    );
}
