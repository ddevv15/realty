import { notFound } from "next/navigation";
import Link from "next/link";
import { getPropertyByAddressSlug, getAgentById } from "@/lib/mock-data";
import { PropertyGallery } from "@/components/property-gallery";
import { AgentCard } from "@/components/agent-card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default async function PropertyPage({ params }) {
  const { slug } = await params;
  const property = getPropertyByAddressSlug(slug);

  if (!property) {
    notFound();
  }

  const agent = getAgentById(property.agent);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Back Button */}
          <Link
            href="/"
            className="text-primary hover:text-primary/80 transition-colors mb-6 inline-flex items-center gap-2"
          >
            ← Back to Properties
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Gallery */}
              <PropertyGallery images={[property.image]} />

              {/* Basic Info */}
              <Card className="p-6">
                <div className="mb-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                        {property.title}
                      </h1>
                      <p className="text-lg text-accent font-semibold">
                        {property.location}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {property.address.full}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl md:text-4xl font-bold text-primary">
                        $
                        {(property.price / 1000000)
                          .toFixed(2)
                          .replace(/\.?0+$/, "")}
                        M
                      </div>
                    </div>
                  </div>
                </div>

                {/* Property Stats */}
                <div className="grid grid-cols-3 gap-4 p-6 bg-muted/50 rounded-lg mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">
                      {property.bedrooms}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Bedrooms
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">
                      {property.bathrooms}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Bathrooms
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">
                      {property.sqft.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Sq Ft</div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">
                    About This Property
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {property.description}
                  </p>
                </div>
              </Card>

              {/* Features */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Property Features
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2 text-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Modern Architecture</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Premium Finishes</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Smart Home Ready</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Energy Efficient</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Parking Included</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Security System</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact CTA */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Interested?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Schedule a viewing or get more information from our agent.
                </p>
                <Button className="w-full bg-primary text-primary-foreground hover:opacity-90 mb-2">
                  Request Viewing
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Get More Info
                </Button>
              </Card>

              {/* Agent Card */}
              {agent && (
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Listing Agent
                  </h3>
                  <AgentCard agent={agent} />
                </div>
              )}

              {/* Quick Facts */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Quick Facts
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Property Type
                    </p>
                    <p className="font-semibold text-foreground">
                      {property.type}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Price per Sq Ft
                    </p>
                    <p className="font-semibold text-foreground">
                      ${Math.round(property.price / property.sqft)}/sqft
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
