export function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-br from-primary/5 to-accent/5 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col gap-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Find Your Dream Home</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Browse our curated selection of premium properties in the most desirable neighborhoods.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Search by location or property type..."
            className="flex-1 px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground"
          />
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Search
          </button>
        </div>
      </div>
    </section>
  )
}
