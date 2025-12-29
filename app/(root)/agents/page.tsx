export default function AgentsPage() {
  return (
    <main id="agents-page" className="bg-background min-h-screen">
      <section className="py-20 md:py-32">
        <div
          id="agents-container"
          className="container mx-auto max-w-4xl px-4"
        >
          <div id="agents-content" className="text-center space-y-6">
            <h1
              id="agents-title"
              className="text-4xl md:text-5xl font-bold text-foreground"
            >
              Find an Agent
            </h1>
            <p
              id="agents-subtitle"
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Connect with our experienced real estate agents who can help you
              buy, sell, or rent properties.
            </p>
            <div id="agents-cta" className="pt-8">
              <a
                id="agents-contact-link"
                href="/contact"
                className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

