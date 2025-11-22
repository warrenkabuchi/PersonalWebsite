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
import { ArrowRight, ArrowLeft, Check } from "lucide-react";

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
            // Handle error state if needed
        } finally {
            setIsSubmitting(false);
        }
    }

    if (isSuccess) {
        return (
            <div className="text-center py-12">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-900/30 text-green-500 mb-6">
                    <Check className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2">Request Received!</h3>
                <p className="text-stone-400">I'll start crafting your itinerary and be in touch soon.</p>
                <Button onClick={() => { setIsSuccess(false); setStep(1); form.reset(); }} variant="outline" className="mt-8">
                    Plan Another Trip
                </Button>
            </div>
        );
    }

    return (
        <div className="w-full max-w-xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8 flex gap-2">
                {[1, 2, 3, 4].map((s) => (
                    <div
                        key={s}
                        className={`h-1 flex-1 rounded-full transition-colors duration-300 ${s <= step ? "bg-orange-500" : "bg-stone-800"
                            }`}
                    />
                ))}
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-4"
                            >
                                <h3 className="text-2xl font-serif font-bold">Where to?</h3>
                                <FormField
                                    control={form.control}
                                    name="destination"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Dream Destination</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Japan, Italy, Cape Town..." {...field} />
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
                                            <FormLabel>Approximate Dates</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Summer 2025, Next Month..." {...field} />
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
                                className="space-y-4"
                            >
                                <h3 className="text-2xl font-serif font-bold">The Logistics</h3>
                                <FormField
                                    control={form.control}
                                    name="budget"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Budget Per Person (USD)</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a range" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
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
                                            <FormLabel>Number of Travelers</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="2" {...field} />
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
                                className="space-y-4"
                            >
                                <h3 className="text-2xl font-serif font-bold">The Vibe</h3>
                                <FormField
                                    control={form.control}
                                    name="interests"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>What are you into?</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Foodie tours, hiking, history, nightlife, relaxation..."
                                                    className="resize-none h-32"
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
                                className="space-y-4"
                            >
                                <h3 className="text-2xl font-serif font-bold">Final Details</h3>
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Your Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="John Doe" {...field} />
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
                                            <FormLabel>Email Address</FormLabel>
                                            <FormControl>
                                                <Input placeholder="john@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="flex justify-between pt-4">
                        {step > 1 ? (
                            <Button type="button" variant="outline" onClick={prevStep} className="gap-2">
                                <ArrowLeft className="h-4 w-4" /> Back
                            </Button>
                        ) : (
                            <div />
                        )}

                        {step < 4 ? (
                            <Button type="button" onClick={nextStep} className="bg-orange-600 hover:bg-orange-700 gap-2">
                                Next <ArrowRight className="h-4 w-4" />
                            </Button>
                        ) : (
                            <Button type="submit" className="bg-orange-600 hover:bg-orange-700 w-full md:w-auto" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Submit Request"}
                            </Button>
                        )}
                    </div>
                </form>
            </Form>
        </div>
    );
}
