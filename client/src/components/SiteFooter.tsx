import { Link } from "wouter";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/10" data-testid="site-footer">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-2xl font-semibold tracking-tight">ApartEase</div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              A premium operating system for modern apartment communities—events, announcements, resident engagement,
              and analytics, wrapped in a product your team will actually love using.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-foreground/80 transition-all duration-300 hover:bg-white/[0.08] hover:text-foreground focus-premium"
                data-testid="footer-social-twitter"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-foreground/80 transition-all duration-300 hover:bg-white/[0.08] hover:text-foreground focus-premium"
                data-testid="footer-social-github"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-foreground/80 transition-all duration-300 hover:bg-white/[0.08] hover:text-foreground focus-premium"
                data-testid="footer-social-linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-foreground/80 transition-all duration-300 hover:bg-white/[0.08] hover:text-foreground focus-premium"
                data-testid="footer-contact"
                aria-label="Contact"
              >
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:col-span-7 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold text-foreground/90">Product</div>
              <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
                <Link href="/#features" className="hover:text-foreground transition-colors" data-testid="footer-link-features">
                  Features
                </Link>
                <Link href="/pricing" className="hover:text-foreground transition-colors" data-testid="footer-link-pricing">
                  Pricing
                </Link>
                <Link href="/resources" className="hover:text-foreground transition-colors" data-testid="footer-link-resources">
                  Resources
                </Link>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-foreground/90">Company</div>
              <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
                <Link href="/about" className="hover:text-foreground transition-colors" data-testid="footer-link-about">
                  About
                </Link>
                <Link href="/contact" className="hover:text-foreground transition-colors" data-testid="footer-link-contact">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-foreground/90">Legal</div>
              <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
                <button
                  type="button"
                  className="text-left hover:text-foreground transition-colors focus-premium rounded-lg"
                  data-testid="footer-link-privacy"
                  onClick={() => window.alert("Privacy Policy placeholder")}
                >
                  Privacy policy
                </button>
                <button
                  type="button"
                  className="text-left hover:text-foreground transition-colors focus-premium rounded-lg"
                  data-testid="footer-link-terms"
                  onClick={() => window.alert("Terms placeholder")}
                >
                  Terms
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} ApartEase. All rights reserved.</div>
          <div className="text-foreground/70">Deep navy. Gold edge. Quietly unstoppable.</div>
        </div>
      </div>
    </footer>
  );
}
