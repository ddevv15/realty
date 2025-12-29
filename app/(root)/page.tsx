import Link from "next/link";
import { ArrowRight, TrendingUp, Key, Zap, Users, Shield } from "lucide-react";

const services = [
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
] as const;

const differentiators = [
  {
    icon: Zap,
    title: "Fast Process",
    description: "Quick and efficient transactions to help you move faster.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced agents dedicated to your success.",
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description: "20+ years of serving our community with integrity.",
  },
] as const;

export default function HomePage() {
  return (
    <main id="home-main">
      <section
        id="home-hero"
        className="relative flex min-h-[420px] items-center overflow-hidden border-b border-border bg-slate-900 text-primary-foreground"
      >
        <div
          id="home-hero-background"
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[url('/images/headerImg.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/80 via-slate-950/60 to-slate-900/40" />
        </div>

        <div
          id="home-hero-content"
          className="relative z-10 container mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16 md:flex-row md:items-center"
        >
          <div id="home-hero-copy" className="max-w-xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-200/80">
              DevBrows Realty
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Find the home that fits your next chapter.
            </h1>
            <p className="max-w-md text-sm text-slate-100/80 md:text-base">
              Search by neighborhood, city, or property type and explore
              hand‑picked homes across the market.
            </p>
          </div>

          <div
            id="home-hero-search-wrapper"
            className="w-full max-w-md md:ml-auto"
          >
            <div
              id="home-hero-search"
              className="flex items-center gap-2 rounded-xl bg-white/95 p-2 text-foreground shadow-lg backdrop-blur"
            >
              <input
                id="home-hero-search-input"
                type="text"
                placeholder="Search by city, neighborhood, or type..."
                className="flex-1 rounded-lg border border-transparent bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-accent"
              />
              <button
                id="home-hero-search-button"
                className="whitespace-nowrap rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Search
              </button>
            </div>
            <p
              id="home-hero-search-hint"
              className="mt-2 text-xs text-slate-100/80"
            >
              Try &quot;Downtown loft&quot;, &quot;Family home&quot;, or
              &quot;Oak Park&quot;.
            </p>
          </div>
        </div>
      </section>

      <section
        id="home-cta-cards"
        className="border-b border-border bg-background py-12 md:py-16"
      >
        <div
          id="home-cta-container"
          className="container mx-auto max-w-7xl px-4"
        >
          <div
            id="home-cta-grid"
            className="grid gap-6 md:grid-cols-3 md:gap-8"
          >
            <Link
              id="home-cta-buy"
              href="/buy"
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card/60 p-10 md:p-12 min-h-[420px] shadow-sm transition hover:-translate-y-1 hover:border-accent hover:shadow-md"
            >
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Buy
                </p>
                <h3 className="text-lg font-semibold">Find your next home</h3>
                <p className="text-sm text-muted-foreground">
                  Explore curated listings, compare neighborhoods, and tour
                  homes that match your wishlist.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-accent group-hover:underline">
                Browse homes
              </span>
            </Link>

            <Link
              id="home-cta-rent"
              href="/rent"
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card/60 p-10 md:p-12 min-h-[420px] shadow-sm transition hover:-translate-y-1 hover:border-accent hover:shadow-md"
            >
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Rent
                </p>
                <h3 className="text-lg font-semibold">
                  Stay flexible, live comfortably
                </h3>
                <p className="text-sm text-muted-foreground">
                  Discover rentals with the right price, location, and amenities
                  for your lifestyle.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-accent group-hover:underline">
                View rentals
              </span>
            </Link>

            <Link
              id="home-cta-sell"
              href="/sell"
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card/60 p-10 md:p-12 min-h-[420px] shadow-sm transition hover:-translate-y-1 hover:border-accent hover:shadow-md"
            >
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent text-center">
                  Sell
                </p>
                <h3 className="text-lg font-semibold text-center">
                  List with confidence
                </h3>
                <p className="text-sm text-muted-foreground text-center">
                  Get expert pricing guidance, modern marketing, and a smoother
                  selling experience.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-accent group-hover:underline text-center">
                Start selling
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="home-info"
        className="border-b border-border bg-background py-12 md:py-16"
      >
        <div
          id="home-info-container"
          className="container mx-auto max-w-4xl px-4"
        >
          <div id="home-info-content" className="space-y-6 text-center">
            <h2
              id="home-info-title"
              className="text-2xl font-semibold md:text-3xl"
            >
              Your trusted real estate partner
            </h2>
            <div
              id="home-info-text"
              className="space-y-4 text-sm text-muted-foreground md:text-base"
            >
              <p>
                With over 20 years of experience in the real estate market, we
                understand that buying, selling, or renting a property is one of
                life&apos;s most significant decisions. Our team of dedicated
                professionals is committed to making your real estate journey
                smooth, transparent, and successful.
              </p>
              <p>
                We combine local market expertise with modern technology to
                provide you with the best possible service. Whether you&apos;re
                a first-time buyer, seasoned investor, or looking for your next
                rental, we&apos;re here to guide you every step of the way.
              </p>
              <p>
                Ready to get started? Explore our listings, connect with our
                agents, or reach out to learn more about how we can help you
                achieve your real estate goals.
              </p>
            </div>
            <div id="home-info-cta" className="pt-4">
              <Link
                id="home-info-contact-link"
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
