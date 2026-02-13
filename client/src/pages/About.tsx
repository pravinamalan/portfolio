import { useLocation } from "wouter";
import Seo from "@/components/Seo";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Background from "@/components/Background";
import MagneticButton from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";
import { BadgeCheck, Crown, Sparkles } from "lucide-react";

export default function About() {
  const [, setLocation] = useLocation();

  return (
    <>
      <Seo
        title="About — ApartEase"
        description="A short company page for ApartEase: premium community operations, resident engagement, and analytics—designed with luxury-grade UI."
      />
      <Background />
      <SiteNav />

      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-4 pt-14 pb-16 sm:px-6 lg:px-8" data-testid="about">
          <Reveal>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 sm:p-10 shadow-[0_30px_110px_hsl(0_0%_0%/0.55)]">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground">
                <Crown className="h-3.5 w-3.5 text-primary" />
                About
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">
                Built for teams who believe details matter.
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                ApartEase exists for a simple reason: community operations should feel calm, premium, and measurable.
                Residents respond to clarity and care. Teams deserve tools that respect their time.
                We’re building a product that looks like a flagship and works like a system.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  { icon: Sparkles, title: "Luxury-grade UX", desc: "Glass, motion, and hierarchy that feels expensive—because it should." },
                  { icon: BadgeCheck, title: "Operator-friendly", desc: "Fast to learn, faster to ship. Less admin. More signal." },
                  { icon: Crown, title: "Brand-forward", desc: "Residents experience your community through every message you send." },
                ].map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.05]">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="mt-4 text-lg font-semibold">{c.title}</div>
                      <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <MagneticButton
                  variant="primary"
                  size="lg"
                  data-testid="about-cta-demo"
                  onClick={() => {
                    setLocation("/contact?intent=demo");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Request a demo
                </MagneticButton>
                <MagneticButton
                  variant="secondary"
                  size="lg"
                  data-testid="about-cta-pricing"
                  onClick={() => {
                    setLocation("/pricing");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  View pricing
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
