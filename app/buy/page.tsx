"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { properties } from "@/lib/mock-data"

export default function BuyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Find Your Dream Home</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our curated collection of properties available for purchase
            </p>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Link key={property.id} href={`/homedetails/${property.addressSlug}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={property.image || "/placeholder.svg"}
                      alt={property.address.full}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      ${property.price.toLocaleString()}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">{property.address.full}</h3>
                    <div className="flex gap-6 mb-4 text-sm text-muted-foreground">
                      <span>{property.bedrooms} Beds</span>
                      <span>{property.bathrooms} Baths</span>
                      <span>{property.sqft.toLocaleString()} sqft</span>
                    </div>
                    <Button className="w-full bg-transparent" variant="outline">
                      View Details
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
