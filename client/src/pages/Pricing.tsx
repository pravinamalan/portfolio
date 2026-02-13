import * as React from "react";
import { useLocation } from "wouter";
import { ArrowRight, Sparkles } from "lucide-react";
import Seo from "@/components/Seo";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Background from "@/components/Background";
import PricingTable from "@/components/PricingTable";
import MagneticButton from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";

export default function Pricing() {
  const [, setLocation] = useLocation();

  return (
    <>
      <Seo
        title="Pricing — ApartEase"
        description="Choose a plan for ApartEase: Starter, Professional, Enterprise. Premium community operations with gold-accented clarity."
      />
      <Background />
      <SiteNav />

      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-4 pt-14 pb-10 sm:px-6 lg:px-8" data-testid="pricing-page-hero">
          <Reveal>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 sm:p-10 shadow-[0_30px_110px_hsl(0_0%_0%/0.55)]">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground">
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                    Pricing
                  </div>
                  <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">
                    Plans that scale with your community.
                  </h1>
                  <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                    Start tasteful. Go professional. Or roll out enterprise-wide with white-glove success.
                  </p>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <MagneticButton
                    variant="secondary"
                    size="sm"
                    data-testid="pricing-hero-back-home"
                    onClick={() => {
                      setLocation("/");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Back to overview
                  </MagneticButton>
                  <MagneticButton
                    variant="primary"
                    size="sm"
                    data-testid="pricing-hero-contact"
                    onClick={() => {
                      setLocation("/contact?intent=demo");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Request demo <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" data-testid="pricing-page-table">
          <PricingTable
            onSelectPlan={(planKey) => {
              setLocation(`/contact?intent=demo&plan=${encodeURIComponent(planKey)}`);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            initialBilling="annual"
          />
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8" data-testid="pricing-page-faq-note">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_70px_hsl(0_0%_0%/0.40)]">
              <div className="text-lg font-semibold">Need procurement help?</div>
              <p className="mt-2 text-sm text-muted-foreground">
                We can provide a short ROI overview, security notes, and an onboarding plan—tailored to your portfolio.
              </p>
              <div className="mt-4">
                <MagneticButton
                  variant="secondary"
                  size="sm"
                  data-testid="pricing-page-procurement-contact"
                  onClick={() => {
                    setLocation("/contact?intent=contact");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Contact us
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
