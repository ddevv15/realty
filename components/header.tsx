"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const primaryNav = [
    { label: "Buy", href: "/buy" },
    { label: "Sell", href: "/sell" },
    { label: "Rent", href: "/rent" },
    { label: "Find an Agent", href: "/agents" },
  ];

  const secondaryNav = [
    { label: "Advertise", href: "/advertise" },
    { label: "Get Help", href: "/support" },
    { label: "Sign In", href: "/signin" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div
        id="header-container"
        className="container mx-auto max-w-7xl px-4 py-4"
      >
        {/* Desktop layout */}
        <div
          id="header-desktop"
          className="hidden md:flex items-center justify-between gap-6"
        >
          <nav id="header-primary-nav" className="flex items-center gap-6">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            id="header-brand"
            href="/"
            className="flex flex-col items-center gap-1 text-center"
          >
            <div className="flex items-center justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent shadow-sm">
                <span className="text-accent-foreground font-bold text-lg">
                  DB
                </span>
              </div>
            </div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              DevBrows Realty
            </span>
          </Link>

          <nav id="header-secondary-nav" className="flex items-center gap-6">
            {secondaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile layout */}
        <div
          id="header-mobile"
          className="flex items-center justify-between md:hidden"
        >
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent shadow-sm">
              <span className="text-accent-foreground font-bold">DB</span>
            </div>
            <span className="text-base font-semibold">DevBrows Realty</span>
          </Link>

          <button
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav
            id="header-mobile-menu"
            className="md:hidden mt-4 flex flex-col gap-4 pb-4"
          >
            {[...primaryNav, ...secondaryNav].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
