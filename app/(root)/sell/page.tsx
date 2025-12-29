import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { CheckCircle2, TrendingUp, Shield, Users } from "lucide-react";

const sellingSteps = [
  { step: "1", title: "Free Consultation", description: "Discuss your selling goals" },
  { step: "2", title: "Property Valuation", description: "Professional market analysis" },
  { step: "3", title: "Marketing", description: "Showcase to qualified buyers" },
  { step: "4", title: "Closing", description: "Complete the sale smoothly" },
] as const;

const sellingBenefits = [
  {
    icon: TrendingUp,
    title: "Market Expertise",
    description: "We understand local trends and price your property competitively.",
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
] as const;

export default function SellPage() {
  return (
    <main id="sell-page" className="bg-background">
      <section className="bg-secondary/30 py-16 md:py-24">
        <div id="sell-hero" className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Sell Your Property</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Maximize your property value with our expert selling strategies and dedicated support
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div id="sell-process" className="container mx-auto max-w-7xl px-4">
          <header className="mb-16 text-center" id="sell-process-header">
            <h2 className="text-3xl font-bold md:text-4xl">Our Selling Process</h2>
          </header>

          <div id="sell-steps-grid" className="mb-12 grid gap-6 md:grid-cols-4">
            {sellingSteps.map((item) => (
              <Card key={item.step} id={`sell-step-${item.step}`} className="p-6 text-center">
                <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl font-bold text-accent-foreground">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>

          <div id="sell-benefits-grid" className="grid gap-8 md:grid-cols-2">
            {sellingBenefits.map((feature) => {
              const slug = feature.title.toLowerCase().replace(/\s+/g, "-");
              return (
                <Card
                  key={feature.title}
                  id={`sell-benefit-${slug}`}
                  className="border-l-4 border-accent p-8"
                >
                  <feature.icon className="mb-4 h-12 w-12 text-accent" />
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="mt-3 text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground md:py-32">
        <div id="sell-cta" className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to Sell?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            Get a free home valuation and start your selling journey today.
          </p>
          <Link href="/contact" id="sell-cta-link">
            <Button size="lg" variant="secondary" className="mt-8">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
