"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="text-center max-w-2xl">
        {/* Comic-style 404 */}
        <div 
          className="inline-block mb-8 px-8 py-4 border-4 rounded-lg transform -rotate-3"
          style={{
            backgroundColor: 'hsl(355, 85%, 55%)',
            borderColor: 'hsl(0, 0%, 8%)',
            boxShadow: '6px 6px 0 hsl(0, 0%, 8%)',
          }}
        >
          <span 
            className="text-8xl md:text-9xl font-display font-black text-white"
            style={{
              textShadow: '3px 3px 0 hsl(0, 0%, 8%), 6px 6px 0 rgba(0,0,0,0.3)',
              WebkitTextStroke: '2px hsl(0, 0%, 8%)',
            }}
          >
            404!
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-display font-black mb-4 comic-text-shadow">
          Page Not Found
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Oops! The page you&apos;re looking for seems to have vanished into the digital void.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button
              size="lg"
              className="font-bold uppercase tracking-wide border-4 transition-all hover:scale-105 hover:-rotate-1"
              style={{
                backgroundColor: 'hsl(45, 100%, 55%)',
                color: 'hsl(0, 0%, 8%)',
                borderColor: 'hsl(0, 0%, 8%)',
                boxShadow: '4px 4px 0 hsl(0, 0%, 8%)',
              }}
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Button>
          </Link>
          
          <Button
            size="lg"
            variant="outline"
            className="font-bold uppercase tracking-wide border-4 transition-all hover:scale-105"
            style={{
              borderColor: 'hsl(0, 0%, 8%)',
              boxShadow: '4px 4px 0 hsl(0, 0%, 8%)',
            }}
            onClick={() => typeof window !== 'undefined' && window.history.back()}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Decorative elements */}
        <div className="mt-16 opacity-10">
          <div 
            className="inline-block text-6xl font-black transform rotate-12"
            style={{ color: 'hsl(45, 100%, 55%)' }}
          >
            WHOOPS!
          </div>
        </div>
      </div>
    </main>
  );
}