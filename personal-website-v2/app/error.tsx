"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="text-center max-w-2xl">
        {/* Comic-style Error */}
        <div 
          className="inline-block mb-8 px-8 py-4 border-4 rounded-lg transform rotate-2"
          style={{
            backgroundColor: 'hsl(25, 95%, 55%)',
            borderColor: 'hsl(0, 0%, 8%)',
            boxShadow: '6px 6px 0 hsl(0, 0%, 8%)',
          }}
        >
          <span 
            className="text-6xl md:text-7xl font-display font-black text-white"
            style={{
              textShadow: '3px 3px 0 hsl(0, 0%, 8%), 6px 6px 0 rgba(0,0,0,0.3)',
              WebkitTextStroke: '2px hsl(0, 0%, 8%)',
            }}
          >
            OOPS!
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-display font-black mb-4 comic-text-shadow">
          Something Went Wrong
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Don&apos;t worry, even superheroes have off days. Let&apos;s try to fix this.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="font-bold uppercase tracking-wide border-4 transition-all hover:scale-105 hover:-rotate-1"
            style={{
              backgroundColor: 'hsl(145, 70%, 50%)',
              color: 'hsl(0, 0%, 8%)',
              borderColor: 'hsl(0, 0%, 8%)',
              boxShadow: '4px 4px 0 hsl(0, 0%, 8%)',
            }}
            onClick={() => reset()}
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </Button>
          
          <Link href="/">
            <Button
              size="lg"
              variant="outline"
              className="font-bold uppercase tracking-wide border-4 transition-all hover:scale-105"
              style={{
                borderColor: 'hsl(0, 0%, 8%)',
                boxShadow: '4px 4px 0 hsl(0, 0%, 8%)',
              }}
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Button>
          </Link>
        </div>

        {/* Error details for development */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-muted rounded-lg text-left">
            <p className="font-mono text-sm text-muted-foreground">
              <strong>Error:</strong> {error.message}
            </p>
            {error.digest && (
              <p className="font-mono text-xs text-muted-foreground mt-2">
                <strong>Digest:</strong> {error.digest}
              </p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}