import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { properties } from "@/lib/data/properties";

export default function BuyPage() {
  return (
    <main id="buy-page" className="bg-background">
      <section className="py-20 md:py-32">
        <div
          id="buy-grid-container"
          className="container mx-auto max-w-7xl px-4"
        >
          <div
            id="buy-grid"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {properties.map((property) => (
              <Link
                key={property.id}
                id={`buy-card-link-${property.addressSlug}`}
                href={`/homedetails/${property.addressSlug}?from=buy`}
              >
                <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
                  <figure
                    id={`buy-card-media-${property.addressSlug}`}
                    className="relative h-64 overflow-hidden"
                  >
                    <img
                      src={property.image || "/images/placeholder.svg"}
                      alt={property.address.full}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <span
                      id={`buy-card-price-${property.addressSlug}`}
                      className="absolute right-4 top-4 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground"
                    >
                      ${property.price.toLocaleString()}
                    </span>
                  </figure>
                  <section
                    id={`buy-card-body-${property.addressSlug}`}
                    className="flex flex-1 flex-col p-6"
                  >
                    <h3 className="text-lg font-bold">
                      {property.address.full}
                    </h3>
                    <ul className="mt-4 flex gap-6 text-sm text-muted-foreground">
                      <li>{property.bedrooms} Beds</li>
                      <li>{property.bathrooms} Baths</li>
                      <li>{property.sqft.toLocaleString()} sqft</li>
                    </ul>
                    <Button
                      className="mt-6 w-full bg-transparent"
                      variant="outline"
                    >
                      View Details
                    </Button>
                  </section>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
