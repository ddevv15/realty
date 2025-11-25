import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold">DB</span>
              </div>
              <span className="text-lg font-bold">DevBrows Realty</span>
            </div>
            <p className="text-sm opacity-80">
              Your trusted partner in finding the perfect home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/buy"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Buy
                </Link>
              </li>
              <li>
                <Link
                  href="/sell"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Sell
                </Link>
              </li>
              <li>
                <Link
                  href="/rent"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Rent
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a
                  href="tel:+1234567890"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:info@devbrowsrealty.com"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  info@devbrowsrealty.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="opacity-80">123 Main St, City, ST 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm opacity-100">
            © 2025 DevBrows Realty. All rights reserved. Managed and Developed
            by{" "}
            <Link
              href="https://devbrows.com"
              className="opacity-100 hover:underline text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              DevBrows
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
