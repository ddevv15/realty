import { PropertyCard } from "./property-card"

export function FeaturedProperties({ properties }) {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Featured Properties</h2>
          <p className="text-lg text-muted-foreground">Handpicked properties currently available in our portfolio</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}
