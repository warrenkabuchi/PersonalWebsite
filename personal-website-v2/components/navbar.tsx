"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
            <div className="container max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="font-bold text-xl tracking-tight text-white">
                    Warren<span className="text-emerald-400">Kabuchi</span>
                </Link>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
                    <Link
                        href="/"
                        className={cn("transition-colors hover:text-white", isActive("/") && "text-white")}
                    >
                        Home
                    </Link>
                    <Link
                        href="/ai"
                        className={cn("transition-colors hover:text-emerald-400", isActive("/ai") && "text-emerald-400")}
                    >
                        AI Consulting
                    </Link>
                    <Link
                        href="/#experience"
                        className="hover:text-white transition-colors"
                    >
                        Experience
                    </Link>
                    <Link
                        href="/dj"
                        className={cn("transition-colors hover:text-purple-400", isActive("/dj") && "text-purple-400")}
                    >
                        DJ
                    </Link>
                    <Link
                        href="/travel"
                        className={cn("transition-colors hover:text-blue-400", isActive("/travel") && "text-blue-400")}
                    >
                        Travel
                    </Link>
                    <Link
                        href="/#contact"
                        className="hover:text-white transition-colors"
                    >
                        Contact
                    </Link>
                </div>
                <Link href="/ai">
                    <Button
                        size="sm"
                        className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold"
                    >
                        Hire Me
                    </Button>
                </Link>
            </div>
        </nav>
    );
}
