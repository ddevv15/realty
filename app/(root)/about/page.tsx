import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Elite Realty</h1>
            <p className="text-xl text-muted-foreground">
              Transforming real estate with integrity, expertise, and exceptional service.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="w-full py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Founded in 2010, Elite Realty emerged from a simple vision: to revolutionize the real estate industry
                  by putting clients first and delivering uncompromising service.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  What started as a small team of dedicated agents has grown into one of the region's most respected
                  real estate firms, serving thousands of satisfied clients and closing over $2 billion in property
                  transactions.
                </p>
                <p className="text-lg text-muted-foreground">
                  Today, we remain committed to our founding principles: integrity, expertise, and a genuine commitment
                  to helping our clients achieve their real estate goals.
                </p>
              </div>
              <div className="bg-primary/10 rounded-lg p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">2B+</div>
                  <p className="text-foreground font-semibold">in transactions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Values */}
        <section className="w-full py-16 md:py-20 bg-card">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our Mission & Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg p-8">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-primary">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To connect people with their perfect property and empower them to make confident real estate decisions
                  through expert guidance and transparent communication.
                </p>
              </div>

              <div className="bg-background rounded-lg p-8">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-primary">✓</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Integrity</h3>
                <p className="text-muted-foreground">
                  We believe in honest dealings and transparent communication with all our clients. Your trust is our
                  most valuable asset.
                </p>
              </div>

              <div className="bg-background rounded-lg p-8">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-primary">⭐</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We consistently deliver outstanding service and results that exceed expectations. Quality is never
                  compromised.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Why Choose Elite Realty
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-primary text-primary-foreground">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Experienced Agents</h3>
                  <p className="text-muted-foreground">
                    Our team brings decades of combined real estate experience and deep market knowledge.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-primary text-primary-foreground">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Advanced Technology</h3>
                  <p className="text-muted-foreground">
                    We leverage cutting-edge tools and platforms to find opportunities faster than anyone else.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-primary text-primary-foreground">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Personalized Service</h3>
                  <p className="text-muted-foreground">
                    Every client is unique. We tailor our approach to your specific needs and goals.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-primary text-primary-foreground">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Market Leadership</h3>
                  <p className="text-muted-foreground">
                    Ranked among the top real estate agencies in the region with consistent year-over-year growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Perfect Property?</h2>
            <p className="text-lg opacity-90 mb-8">
              Let our expert agents help you navigate the real estate market with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/agents"
                className="px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-opacity-90 transition-all"
              >
                Meet Our Agents
              </a>
              <a
                href="/"
                className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-all"
              >
                Browse Properties
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
