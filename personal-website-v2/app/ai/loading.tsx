export default function AILoading() {
  return (
    <main className="min-h-screen bg-background pt-16">
      <div className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side skeleton */}
          <div className="space-y-6 animate-pulse">
            <div className="h-8 w-48 bg-muted rounded-full" />
            <div className="h-16 w-full bg-muted rounded-lg" />
            <div className="h-6 w-3/4 bg-muted rounded" />
            <div className="h-6 w-1/2 bg-muted rounded" />
            <div className="flex gap-4 pt-4">
              <div className="h-12 w-36 bg-muted rounded-lg" />
              <div className="h-12 w-36 bg-muted rounded-lg" />
            </div>
          </div>

          {/* Right side skeleton */}
          <div className="animate-pulse">
            <div 
              className="h-64 w-full bg-muted rounded-lg border-4"
              style={{ borderColor: 'hsl(0, 0%, 8%)' }}
            />
          </div>
        </div>
      </div>

      {/* Services skeleton */}
      <div className="py-24 border-t-4 px-4 md:px-8" style={{ borderColor: 'hsl(0, 0%, 8%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="h-10 w-48 bg-muted rounded mb-12 animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="h-48 bg-muted rounded-xl border-4 animate-pulse"
                style={{ borderColor: 'hsl(0, 0%, 8%)' }}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}