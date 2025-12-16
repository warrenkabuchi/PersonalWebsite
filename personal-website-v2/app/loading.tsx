export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="relative inline-block">
          {/* Comic-style loading spinner */}
          <div 
            className="w-20 h-20 border-4 rounded-full animate-spin"
            style={{
              borderColor: 'hsl(0, 0%, 90%)',
              borderTopColor: 'hsl(355, 85%, 55%)',
            }}
          />
          <div 
            className="absolute inset-0 w-20 h-20 border-4 rounded-full animate-spin"
            style={{
              borderColor: 'transparent',
              borderRightColor: 'hsl(45, 100%, 55%)',
              animationDirection: 'reverse',
              animationDuration: '1.5s',
            }}
          />
        </div>
        <p className="mt-6 text-lg font-display font-bold uppercase tracking-wide text-muted-foreground">
          Loading...
        </p>
      </div>
    </main>
  );
}