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
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { comicColors } from "@/lib/design-tokens";

// Define schema for each step
const step1Schema = z.object({
    destination: z.string().min(2, "Destination is required"),
    travelDates: z.string().min(2, "Dates are required"),
});

const step2Schema = z.object({
    budget: z.string().min(1, "Please select a budget range"),
    travelers: z.string().min(1, "Number of travelers is required"),
});

const step3Schema = z.object({
    interests: z.string().min(2, "Tell me what you like!"),
});

const step4Schema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
});

// Combined schema for final submission
const formSchema = step1Schema.merge(step2Schema).merge(step3Schema).merge(step4Schema);

export function TravelWizard() {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            destination: "",
            travelDates: "",
            budget: "",
            travelers: "",
            interests: "",
            name: "",
            email: "",
        },
        mode: "onChange",
    });

    // Validate current step before moving forward
    const nextStep = async () => {
        let isValid = false;
        if (step === 1) isValid = await form.trigger(["destination", "travelDates"]);
        if (step === 2) isValid = await form.trigger(["budget", "travelers"]);
        if (step === 3) isValid = await form.trigger(["interests"]);

        if (isValid) setStep((s) => s + 1);
    };

    const prevStep = () => setStep((s) => s - 1);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        setError(null);
        try {
            const res = await fetch("/api/booking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...values, type: "travel" }),
            });

            if (!res.ok) throw new Error("Failed to submit");
            setIsSuccess(true);
        } catch (error) {
            console.error(error);
            setError("Something went wrong. Please try again or email me directly.");
        } finally {
            setIsSubmitting(false);
        }
    }

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
            >
                <div
                    className="inline-flex h-20 w-20 items-center justify-center rounded-full border-4 mb-6"
                    style={{
                        backgroundColor: `${comicColors.accent.green}20`,
                        borderColor: comicColors.accent.green,
                    }}
                >
                    <CheckCircle2 className="h-10 w-10" style={{ color: comicColors.accent.green }} />
                </div>
                <h3 className="text-3xl font-display font-black mb-3">Request Received!</h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    I'll start crafting your perfect itinerary and be in touch soon.
                </p>
                <Button
                    onClick={() => { setIsSuccess(false); setStep(1); form.reset(); }}
                    className="font-bold uppercase tracking-wide border-4"
                    style={{
                        backgroundColor: comicColors.primary.blue,
                        color: comicColors.neutral.white,
                        borderColor: comicColors.neutral.darkest,
                        boxShadow: `4px 4px 0 ${comicColors.neutral.darkest}`,
                    }}
                >
                    Plan Another Trip
                </Button>
            </motion.div>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-10 flex gap-3">
                {[1, 2, 3, 4].map((s) => (
                    <div
                        key={s}
                        className={`h-2 flex-1 rounded-full transition-all duration-300 border-2 ${s <= step
                                ? "border-transparent"
                                : "border-muted"
                            }`}
                        style={{
                            backgroundColor: s <= step ? comicColors.primary.blue : 'transparent',
                        }}
                    />
                ))}
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h3 className="text-3xl font-display font-black">Where to?</h3>
                                <FormField
                                    control={form.control}
                                    name="destination"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-bold">Dream Destination *</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Japan, Italy, Cape Town..."
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
                                    name="travelDates"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-bold">Approximate Dates *</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Summer 2025, Next Month..."
                                                    className="border-2"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h3 className="text-3xl font-display font-black">The Logistics</h3>
                                <FormField
                                    control={form.control}
                                    name="budget"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-bold">Budget Per Person (USD) *</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="border-2">
                                                        <SelectValue placeholder="Select a range" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className="z-50">
                                                    <SelectItem value="budget">$1,000 - $2,500</SelectItem>
                                                    <SelectItem value="mid">$2,500 - $5,000</SelectItem>
                                                    <SelectItem value="luxury">$5,000 - $10,000+</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="travelers"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-bold">Number of Travelers *</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="number"
                                                    placeholder="2"
                                                    className="border-2"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h3 className="text-3xl font-display font-black">The Vibe</h3>
                                <FormField
                                    control={form.control}
                                    name="interests"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-bold">What are you into? *</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Foodie tours, hiking, history, nightlife, relaxation..."
                                                    className="resize-none border-2 min-h-[120px]"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h3 className="text-3xl font-display font-black">Final Details</h3>
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-bold">Your Name *</FormLabel>
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
                                            <FormLabel className="font-bold">Email Address *</FormLabel>
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
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {error && (
                        <div className="flex items-center gap-3 p-4 rounded-lg border-2 bg-red-50 border-red-500 text-red-800">
                            <XCircle className="w-5 h-5 flex-shrink-0" />
                            <p className="text-sm font-medium">{error}</p>
                        </div>
                    )}

                    <div className="flex justify-between pt-6">
                        {step > 1 ? (
                            <Button
                                type="button"
                                variant="outline"
                                onClick={prevStep}
                                className="gap-2 border-2"
                            >
                                <ArrowLeft className="h-4 w-4" /> Back
                            </Button>
                        ) : (
                            <div />
                        )}

                        {step < 4 ? (
                            <Button
                                type="button"
                                onClick={nextStep}
                                className="gap-2 font-bold uppercase tracking-wide border-4 transition-all hover:scale-105"
                                style={{
                                    backgroundColor: comicColors.primary.blue,
                                    color: comicColors.neutral.white,
                                    borderColor: comicColors.neutral.darkest,
                                    boxShadow: `4px 4px 0 ${comicColors.neutral.darkest}`,
                                }}
                            >
                                Next <ArrowRight className="h-4 w-4" />
                            </Button>
                        ) : (
                            <Button
                                type="submit"
                                className="w-full md:w-auto font-bold uppercase tracking-wide border-4 transition-all hover:scale-105 hover:-rotate-1"
                                style={{
                                    backgroundColor: comicColors.accent.green,
                                    color: comicColors.neutral.white,
                                    borderColor: comicColors.neutral.darkest,
                                    boxShadow: `4px 4px 0 ${comicColors.neutral.darkest}`,
                                }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Submit Request"}
                            </Button>
                        )}
                    </div>
                </form>
            </Form>
        </div>
    );
}
