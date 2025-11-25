"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { properties } from "@/lib/mock-data"
import { DollarSign, Clock, Home } from "lucide-react"

export default function RentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Find Your Perfect Rental</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our selection of quality rental properties that fit your lifestyle
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
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
            ].map((benefit, idx) => (
              <Card key={idx} className="p-8 text-center">
                <benefit.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Available Rentals</h2>

          {/* Rentals Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.slice(0, 6).map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/homedetails/${property.addressSlug}`}>
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={property.image || "/placeholder.svg"}
                      alt={property.address.full}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      ${Math.round(property.price / 100)}/mo
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{property.address.full}</h3>
                  <div className="flex gap-6 mb-4 text-sm text-muted-foreground">
                    <span>{property.bedrooms} Beds</span>
                    <span>{property.bathrooms} Baths</span>
                    <span>{property.sqft.toLocaleString()} sqft</span>
                  </div>
                  <Button className="w-full bg-transparent" variant="outline" asChild>
                    <Link href={`/homedetails/${property.addressSlug}`}>View Details</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
