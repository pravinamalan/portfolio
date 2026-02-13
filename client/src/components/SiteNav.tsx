import { Link, useLocation } from "wouter";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Sparkles } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import MagneticButton from "@/components/MagneticButton";
import { cn } from "@/lib/utils";

type NavItem = { label: string; href: string; anchor?: string };

const navItems: NavItem[] = [
  { label: "Features", href: "/", anchor: "features" },
  { label: "How it works", href: "/", anchor: "how" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

function scrollToAnchor(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function SiteNav() {
  const [location, setLocation] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const items = useMemo(() => navItems, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNav(item: NavItem) {
    if (item.anchor) {
      if (location !== "/") setLocation("/");
      // wait a tick for route paint
      setTimeout(() => scrollToAnchor(item.anchor!), 50);
    } else {
      setLocation(item.href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div className="sticky top-0 z-50">
      <motion.div
        className={cn(
          "mx-auto w-full",
          "px-4 sm:px-6 lg:px-8",
        )}
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={cn(
            "mt-3 rounded-2xl",
            "glass",
            scrolled ? "shadow-lux" : "shadow-[0_10px_40px_hsl(0_0%_0%/0.28)]",
          )}
          data-testid="site-nav"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-5">
            <Link
              href="/"
              className="group flex items-center gap-3 rounded-xl px-2 py-1 focus-premium"
              data-testid="nav-logo"
              onClick={(e) => {
                e.preventDefault();
                setLocation("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className="relative grid h-10 w-10 place-items-center rounded-2xl grad-border bg-white/[0.04]">
                <div className="grid h-[34px] w-[34px] place-items-center rounded-xl bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)/.35),transparent_62%),radial-gradient(circle_at_70%_60%,hsl(var(--accent)/.22),transparent_62%)]">
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
              </div>
              <div className="leading-tight">
                <div className="text-base font-semibold tracking-tight">ApartEase</div>
                <div className="text-xs text-muted-foreground">Luxury community ops</div>
              </div>
            </Link>

            <div className="hidden items-center gap-1 md:flex">
              {items.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNav(item)}
                  className="rounded-xl px-3 py-2 text-sm text-foreground/80 transition-all duration-300 hover:bg-white/[0.06] hover:text-foreground focus-premium"
                  data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <MagneticButton
                variant="secondary"
                size="sm"
                data-testid="nav-request-demo"
                onClick={() => {
                  setLocation("/contact?intent=demo");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Request demo
              </MagneticButton>
              <MagneticButton
                variant="primary"
                size="sm"
                data-testid="nav-get-started"
                onClick={() => {
                  // This is a marketing site; route to pricing as “start”
                  setLocation("/pricing");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Get started
              </MagneticButton>
            </div>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    type="button"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.04] text-foreground/90 transition-all duration-300 hover:bg-white/[0.08] focus-premium"
                    data-testid="nav-mobile-open"
                    aria-label="Open menu"
                  >
                    <Menu className="h-5 w-5" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[92vw] border-white/10 bg-background/60 p-0 backdrop-blur-xl">
                  <div className="p-5">
                    <SheetHeader>
                      <SheetTitle className="text-left text-2xl">ApartEase</SheetTitle>
                    </SheetHeader>

                    <div className="mt-5 space-y-1">
                      {items.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => {
                            handleNav(item);
                          }}
                          className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm text-foreground/85 transition-all duration-300 hover:bg-white/[0.07] focus-premium"
                          data-testid={`nav-mobile-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>

                    <div className="mt-6 grid gap-2">
                      <MagneticButton
                        variant="secondary"
                        size="lg"
                        className="w-full"
                        data-testid="nav-mobile-request-demo"
                        onClick={() => {
                          setLocation("/contact?intent=demo");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        Request demo
                      </MagneticButton>
                      <MagneticButton
                        variant="primary"
                        size="lg"
                        className="w-full"
                        data-testid="nav-mobile-get-started"
                        onClick={() => {
                          setLocation("/pricing");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        Get started
                      </MagneticButton>
                    </div>

                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-muted-foreground">
                      <span className="text-foreground/90">Tip:</span> On the landing page, use “Features” and “How it works” to jump to sections.
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
