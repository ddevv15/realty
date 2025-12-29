import type { ReactNode } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function RootGroupLayout({ children }: { children: ReactNode }) {
  return (
    <div id="marketing-shell" className="bg-background text-foreground">
      <Header />
      <main id="marketing-main" className="min-h-screen">
        <div id="marketing-container" className="flex flex-col min-h-screen">
          <div id="marketing-content" className="flex-1">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
