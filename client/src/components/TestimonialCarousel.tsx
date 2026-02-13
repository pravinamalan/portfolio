import * as React from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Mina S.",
    role: "Community Manager",
    quote:
      "ApartEase turned resident updates from a chore into a ritual. We ship announcements in minutes—and engagement actually went up.",
  },
  {
    name: "Jordan K.",
    role: "Property Operations",
    quote:
      "The analytics are the difference. We finally understand what residents respond to, and we can prove impact to leadership.",
  },
  {
    name: "Elena R.",
    role: "Leasing Lead",
    quote:
      "The UI feels premium—like a product our residents expect. Events became smoother, and our team stopped juggling spreadsheets.",
  },
  {
    name: "Sam P.",
    role: "Regional Manager",
    quote:
      "Rolling it out portfolio-wide was painless. The workflows are thoughtful, and the brand polish makes us look top-tier.",
  },
] as const;

export default function TestimonialCarousel({ className }: { className?: string }) {
  const [i, setI] = React.useState(0);

  function prev() {
    setI((p) => (p - 1 + testimonials.length) % testimonials.length);
  }
  function next() {
    setI((p) => (p + 1) % testimonials.length);
  }

  React.useEffect(() => {
    const t = window.setInterval(() => next(), 6500);
    return () => window.clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const item = testimonials[i];

  return (
    <div className={cn("relative", className)} data-testid="testimonials">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-3xl sm:text-4xl font-semibold tracking-tight">Loved by teams who care about craft.</div>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            A few words from operators who wanted elegance—and got leverage.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-foreground/85 transition-all duration-300 hover:bg-white/[0.08] focus-premium"
            data-testid="testimonials-prev"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-foreground/85 transition-all duration-300 hover:bg-white/[0.08] focus-premium"
            data-testid="testimonials-next"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 shadow-[0_18px_60px_hsl(0_0%_0%/0.42)]">
        <div className="flex items-start gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]">
            <Quote className="h-5 w-5 text-primary" />
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1"
            >
              <p className="text-base sm:text-lg leading-relaxed text-foreground/90">“{item.quote}”</p>
              <div className="mt-5 flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold">{item.name}</div>
                  <div className="text-xs text-muted-foreground">{item.role}</div>
                </div>

                <div className="flex sm:hidden items-center gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-foreground/85 transition-all duration-300 hover:bg-white/[0.08] focus-premium"
                    data-testid="testimonials-prev-mobile"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-foreground/85 transition-all duration-300 hover:bg-white/[0.08] focus-premium"
                    data-testid="testimonials-next-mobile"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
