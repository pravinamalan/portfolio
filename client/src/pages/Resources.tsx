import { useLocation } from "wouter";
import Seo from "@/components/Seo";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Background from "@/components/Background";
import MagneticButton from "@/components/MagneticButton";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { BookOpen, FileText, ArrowRight, Sparkles } from "lucide-react";

const resources = [
  {
    type: "Guide",
    title: "The Premium Engagement Playbook",
    desc: "A short framework to plan announcements and events with brand-level clarity.",
    icon: BookOpen,
  },
  {
    type: "Template",
    title: "Event Run-of-Show Checklist",
    desc: "A calm checklist that makes event ops predictable and repeatable.",
    icon: FileText,
  },
  {
    type: "Brief",
    title: "Proving ROI to Leadership",
    desc: "How to connect engagement metrics to retention narratives.",
    icon: Sparkles,
  },
] as const;

export default function Resources() {
  const [, setLocation] = useLocation();

  return (
    <>
      <Seo
        title="Resources — ApartEase"
        description="Resources placeholder page for ApartEase: guides, templates, and briefs for premium resident engagement."
      />
      <Background />
      <SiteNav />

      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-4 pt-14 pb-16 sm:px-6 lg:px-8" data-testid="resources">
          <Reveal>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 sm:p-10 shadow-[0_30px_110px_hsl(0_0%_0%/0.55)]">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground">
                <BookOpen className="h-3.5 w-3.5 text-primary" />
                Resources
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">
                Operator-friendly knowledge, designed with taste.
              </h1>
              <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
                This is a placeholder library. In a full build, these become articles, downloadable templates, and product education.
              </p>

              <div className="mt-7">
                <MagneticButton
                  variant="primary"
                  size="sm"
                  data-testid="resources-cta-contact"
                  onClick={() => {
                    setLocation("/contact?intent=contact");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Request a resource pack <ArrowRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </div>
          </Reveal>

          <Stagger className="mt-8 grid gap-4 md:grid-cols-3">
            {resources.map((r, idx) => {
              const Icon = r.icon;
              return (
                <StaggerItem key={r.title}>
                  <button
                    type="button"
                    className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left shadow-[0_18px_60px_hsl(0_0%_0%/0.35)] transition-all duration-300 hover:bg-white/[0.06] focus-premium"
                    onClick={() => window.alert("Resource download placeholder")}
                    data-testid={`resources-card-${idx}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted-foreground">
                        {r.type}
                      </div>
                      <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.05]">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="mt-4 text-lg font-semibold group-hover:text-foreground">{r.title}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
                  </button>
                </StaggerItem>
              );
            })}
          </Stagger>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
