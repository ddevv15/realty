export default function SupportPage() {
  return (
    <main id="support-page" className="bg-background min-h-screen">
      <section className="py-20 md:py-32">
        <div
          id="support-container"
          className="container mx-auto max-w-4xl px-4"
        >
          <div id="support-content" className="text-center space-y-6">
            <h1
              id="support-title"
              className="text-4xl md:text-5xl font-bold text-foreground"
            >
              Get Help
            </h1>
            <p
              id="support-subtitle"
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              We&apos;re here to help you with any questions or concerns about
              your real estate journey.
            </p>
            <div id="support-cta" className="pt-8">
              <a
                id="support-contact-link"
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
