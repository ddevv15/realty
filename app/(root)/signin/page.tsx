export default function SignInPage() {
  return (
    <main id="signin-page" className="bg-background min-h-screen">
      <section className="py-20 md:py-32">
        <div
          id="signin-container"
          className="container mx-auto max-w-4xl px-4"
        >
          <div id="signin-content" className="text-center space-y-6">
            <h1
              id="signin-title"
              className="text-4xl md:text-5xl font-bold text-foreground"
            >
              Sign In
            </h1>
            <p
              id="signin-subtitle"
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Sign in to access your account and manage your property listings.
            </p>
            <div id="signin-note" className="pt-8">
              <p className="text-sm text-muted-foreground">
                Sign in functionality coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

