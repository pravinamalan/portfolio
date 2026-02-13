import * as React from "react";
import { Check, Crown, Sparkles } from "lucide-react";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";
import { cn } from "@/lib/utils";

type Billing = "monthly" | "annual";

const plans = [
  {
    key: "starter",
    name: "Starter",
    priceMonthly: 199,
    priceAnnual: 169,
    description: "For small communities needing elegance without overhead.",
    icon: Sparkles,
    features: ["Announcements", "Events & RSVPs", "Basic analytics", "Email support"],
  },
  {
    key: "pro",
    name: "Professional",
    priceMonthly: 399,
    priceAnnual: 339,
    description: "The full operating system for modern resident engagement.",
    icon: Crown,
    highlighted: true,
    features: [
      "Everything in Starter",
      "Automations & scheduling",
      "Resident segments",
      "Advanced analytics dashboard",
      "Priority support",
    ],
  },
  {
    key: "enterprise",
    name: "Enterprise",
    priceMonthly: 799,
    priceAnnual: 679,
    description: "For portfolios and teams that demand white-glove.",
    icon: Crown,
    features: [
      "Everything in Pro",
      "Custom workflows",
      "SLA + dedicated success",
      "SSO (coming soon)",
      "Security reviews",
    ],
  },
] as const;

export default function PricingTable({
  onSelectPlan,
  initialBilling = "monthly",
}: {
  onSelectPlan: (planKey: string) => void;
  initialBilling?: Billing;
}) {
  const [billing, setBilling] = React.useState<Billing>(initialBilling);

  return (
    <div data-testid="pricing-table">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="text-3xl sm:text-4xl font-semibold tracking-tight">Pricing, with a calm edge.</div>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Toggle annual billing for a <span className="text-foreground/90 font-semibold">15% discount</span>. Professional is built for
            most communities.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-1.5">
          <div className="grid grid-cols-2 gap-1">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={cn(
                "rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 focus-premium",
                billing === "monthly" ? "bg-white/[0.10] text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
              data-testid="pricing-toggle-monthly"
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling("annual")}
              className={cn(
                "rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 focus-premium",
                billing === "annual" ? "bg-white/[0.10] text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
              data-testid="pricing-toggle-annual"
            >
              Annual <span className="ml-1 rounded-full bg-primary/20 px-2 py-0.5 text-[10px] text-primary">-15%</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {plans.map((p) => {
          const price = billing === "monthly" ? p.priceMonthly : p.priceAnnual;
          const Icon = p.icon;

          return (
            <TiltCard
              key={p.key}
              className={cn(
                "relative rounded-3xl p-6 sm:p-7",
                p.highlighted ? "grad-border glass-strong" : "glass",
              )}
            >
              {p.highlighted && (
                <div
                  className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-[0_16px_40px_hsl(var(--primary)/0.25)]"
                  data-testid="pricing-highlight-badge"
                >
                  Most popular
                </div>
              )}

              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <div className={cn("grid h-10 w-10 place-items-center rounded-2xl border", p.highlighted ? "border-white/18 bg-white/[0.08]" : "border-white/12 bg-white/[0.05]")}>
                      <Icon className={cn("h-5 w-5", p.highlighted ? "text-primary" : "text-foreground/85")} />
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{p.name}</div>
                      <div className="text-xs text-muted-foreground">{p.description}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-end gap-2">
                <div className="text-4xl font-semibold tracking-tight">
                  ${price}
                </div>
                <div className="pb-1 text-sm text-muted-foreground">/ month</div>
              </div>

              <div className="mt-5 grid gap-2.5">
                {p.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm text-foreground/85">
                    <Check className="mt-0.5 h-4 w-4 text-primary" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <MagneticButton
                  variant={p.highlighted ? "primary" : "secondary"}
                  size="lg"
                  className="w-full"
                  data-testid={`pricing-select-${p.key}`}
                  onClick={() => onSelectPlan(p.key)}
                >
                  Choose {p.name}
                </MagneticButton>
              </div>
            </TiltCard>
          );
        })}
      </div>
    </div>
  );
}
