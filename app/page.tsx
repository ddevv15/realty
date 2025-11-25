"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp, Key, Zap, Users, Shield } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight animate-fade-in-up">
                Find Your <span className="text-accent">Perfect Home</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md animate-fade-in-up delay-100">
                Discover your ideal property with DevBrows Realty. Whether
                you're buying, selling, or renting, we're here to guide you
                every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up delay-200">
                <Link
                  href="/buy"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
                >
                  Start Searching
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-foreground px-8 py-3 font-semibold hover:bg-secondary transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden animate-scale-in delay-300">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 z-10" />
              <img
                src="/modern-luxury-home-interior.jpg"
                alt="Modern luxury home"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the service that fits your real estate needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ArrowRight,
                title: "Buy",
                description:
                  "Find the perfect home with our curated listings and expert guidance.",
                href: "/buy",
              },
              {
                icon: TrendingUp,
                title: "Sell",
                description:
                  "Maximize your property value with our proven selling strategies.",
                href: "/sell",
              },
              {
                icon: Key,
                title: "Rent",
                description:
                  "Discover rental properties that match your lifestyle and budget.",
                href: "/rent",
              },
            ].map((service, idx) => (
              <Link
                key={service.title}
                href={service.href}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
              >
                <div className="h-full rounded-xl border border-border bg-card p-8 hover:border-accent transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                  <service.icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
                    Explore <ArrowRight size={20} className="ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose DevBrows Realty
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to making your real estate experience exceptional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Fast Process",
                description:
                  "Quick and efficient transactions to help you move faster.",
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Experienced agents dedicated to your success.",
              },
              {
                icon: Shield,
                title: "Trusted Partner",
                description:
                  "20+ years of serving our community with integrity.",
              },
            ].map((feature, idx) => (
              <div
                key={feature.title}
                className="animate-fade-in-up p-6 rounded-lg border border-border/50 hover:border-accent hover:bg-secondary/50 transition-all"
                style={{ animationDelay: `${0.15 * (idx + 1)}s` }}
              >
                <feature.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Property?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Start your real estate journey with DevBrows Realty today and
            experience the difference.
          </p>
          <Link
            href="/buy"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
