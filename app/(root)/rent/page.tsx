import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { properties } from "@/lib/data/properties";
import { DollarSign, Clock, Home } from "lucide-react";

const benefits = [
  {
    icon: Home,
    title: "Quality Properties",
    description: "Carefully selected rental homes that meet high standards.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees. You know exactly what you're paying.",
  },
  {
    icon: Clock,
    title: "Quick Process",
    description: "Move in fast with our streamlined application process.",
  },
] as const;

export default function RentPage() {
  return (
    <main id="rent-page" className="bg-background">
      <section className="py-20 md:py-32">
        <div id="rent-content" className="container mx-auto max-w-7xl px-4">
          <div
            id="rent-benefits-grid"
            className="mb-16 grid gap-8 md:grid-cols-3"
          >
            {benefits.map((benefit) => {
              const slug = benefit.title.toLowerCase().replace(/\s+/g, "-");
              return (
                <Card
                  key={benefit.title}
                  id={`rent-benefit-${slug}`}
                  className="p-8 text-center"
                >
                  <benefit.icon className="mx-auto mb-4 h-12 w-12 text-accent" />
                  <h3 className="text-lg font-bold">{benefit.title}</h3>
                  <p className="mt-3 text-muted-foreground">
                    {benefit.description}
                  </p>
                </Card>
              );
            })}
          </div>

          <header id="rent-available-header" className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Available Rentals
            </h2>
          </header>

          <div
            id="rent-grid"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {properties.slice(0, 6).map((property) => (
              <Card
                key={property.id}
                id={`rent-card-${property.addressSlug}`}
                className="overflow-hidden transition-shadow hover:shadow-lg"
              >
                <Link href={`/homedetails/${property.addressSlug}?from=rent`}>
                  <figure className="relative h-64 overflow-hidden">
                    <img
                      src={property.image || "/images/placeholder.svg"}
                      alt={property.address.full}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <span className="absolute right-4 top-4 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">
                      ${Math.round(property.price / 100)}/mo
                    </span>
                  </figure>
                </Link>
                <section className="p-6">
                  <h3 className="text-lg font-bold">{property.address.full}</h3>
                  <ul className="mt-4 flex gap-6 text-sm text-muted-foreground">
                    <li>{property.bedrooms} Beds</li>
                    <li>{property.bathrooms} Baths</li>
                    <li>{property.sqft.toLocaleString()} sqft</li>
                  </ul>
                  <Button
                    className="mt-6 w-full bg-transparent"
                    variant="outline"
                    asChild
                  >
                    <Link href={`/homedetails/${property.addressSlug}?from=rent`}>
                      View Details
                    </Link>
                  </Button>
                </section>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
