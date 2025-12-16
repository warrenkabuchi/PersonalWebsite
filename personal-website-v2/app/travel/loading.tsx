export default function TravelLoading() {
  return (
    <main className="min-h-screen bg-background pt-16">
      {/* Hero skeleton */}
      <div className="relative min-h-[70vh] w-full py-24 px-6 flex items-end">
        <div className="animate-pulse space-y-6 max-w-4xl pb-12">
          <div className="h-8 w-48 bg-muted rounded-full" />
          <div className="h-20 w-full max-w-2xl bg-muted rounded-lg" />
          <div className="h-6 w-3/4 bg-muted rounded" />
          <div className="h-12 w-40 bg-muted rounded-lg" />
        </div>
      </div>

      {/* Posts grid skeleton */}
      <div className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t-4" style={{ borderColor: 'hsl(0, 0%, 8%)' }}>
        <div className="h-10 w-48 bg-muted rounded mb-12 mx-auto animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="animate-pulse">
              <div 
                className="aspect-[4/5] bg-muted rounded-lg border-4 mb-4"
                style={{ borderColor: 'hsl(0, 0%, 8%)' }}
              />
              <div className="h-4 w-24 bg-muted rounded mb-2" />
              <div className="h-8 w-full bg-muted rounded mb-2" />
              <div className="h-4 w-3/4 bg-muted rounded" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}