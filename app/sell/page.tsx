"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle2, TrendingUp, Shield, Users } from "lucide-react"

export default function SellPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Sell Your Property</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Maximize your property value with our expert selling strategies and dedicated support
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Selling Process</h2>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { step: "1", title: "Free Consultation", description: "Discuss your selling goals" },
              { step: "2", title: "Property Valuation", description: "Professional market analysis" },
              { step: "3", title: "Marketing", description: "Showcase to qualified buyers" },
              { step: "4", title: "Closing", description: "Complete the sale smoothly" },
            ].map((item) => (
              <Card key={item.step} className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Market Expertise",
                description: "We understand the local market trends and price your property competitively.",
              },
              {
                icon: Shield,
                title: "Complete Protection",
                description: "Navigate paperwork and legalities with our experienced team.",
              },
              {
                icon: Users,
                title: "Qualified Buyers",
                description: "We connect you with serious buyers ready to make an offer.",
              },
              {
                icon: CheckCircle2,
                title: "Smooth Closing",
                description: "We handle all details to ensure a seamless transaction.",
              },
            ].map((feature, idx) => (
              <Card key={idx} className="p-8 border-l-4 border-accent">
                <feature.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Sell?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get a free home valuation and start your selling journey today.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
