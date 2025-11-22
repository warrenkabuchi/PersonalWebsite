"use client";

import { motion } from "framer-motion";
import { ArrowRight, Music, Plane, Brain, User } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BentoItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  className?: string;
  bgImage?: string;
}

const BentoItem = ({ title, description, icon, href, className, bgImage }: BentoItemProps) => {
  return (
    <Link href={href} className={cn("group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900", className)}>
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img src={bgImage} alt={title} className="h-full w-full object-cover opacity-40 transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
        </div>
      )}

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800/50 text-zinc-100 backdrop-blur-sm transition-colors group-hover:bg-zinc-700/50">
          {icon}
        </div>

        <div>
          <h3 className="mb-2 text-2xl font-bold text-white">{title}</h3>
          <p className="text-sm text-zinc-400">{description}</p>
        </div>

        <div className="absolute right-6 top-6 opacity-0 transition-opacity group-hover:opacity-100">
          <ArrowRight className="h-6 w-6 text-white" />
        </div>
      </div>
    </Link>
  );
};

export function BentoGrid() {
  return (
    <div className="grid min-h-[80vh] w-full max-w-7xl grid-cols-1 gap-4 p-4 md:grid-cols-3 md:grid-rows-2">
      {/* AI Career - Large Tile */}
      <BentoItem
        title="AI & Governance"
        description="Enterprise AI Solutions, Copilot Studio, and Governance Frameworks."
        icon={<Brain className="h-6 w-6" />}
        href="/ai"
        className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-blue-950/20 to-zinc-900/50 hover:border-blue-500/30"
        bgImage="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
      />

      {/* DJ Career - Tall Tile */}
      <BentoItem
        title="Sonic Journeys"
        description="Deep House, Afro-Tech, and Melodic Techno Mixes."
        icon={<Music className="h-6 w-6" />}
        href="/dj"
        className="md:col-span-1 md:row-span-2 bg-gradient-to-br from-purple-950/20 to-zinc-900/50 hover:border-purple-500/30"
        bgImage="https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?q=80&w=2074&auto=format&fit=crop"
      />

      {/* Travel - Wide Tile */}
      <BentoItem
        title="Wanderlust"
        description="Global Travel Consulting & Photo Journal."
        icon={<Plane className="h-6 w-6" />}
        href="/travel"
        className="md:col-span-2 bg-gradient-to-br from-emerald-950/20 to-zinc-900/50 hover:border-emerald-500/30"
        bgImage="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
      />

      {/* About - Small Tile */}
      <BentoItem
        title="About Me"
        description="Tech Consultant by day, DJ by night."
        icon={<User className="h-6 w-6" />}
        href="/about"
        className="md:col-span-1 bg-zinc-900"
      />
    </div>
  );
}
