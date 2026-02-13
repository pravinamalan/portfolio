import * as React from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CalendarDays,
  Crown,
  Gauge,
  Layers,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  Wand2,
} from "lucide-react";

import Seo from "@/components/Seo";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Background from "@/components/Background";
import MagneticButton from "@/components/MagneticButton";
import HeroMockDashboard from "@/components/HeroMockDashboard";
import LogoMarquee from "@/components/LogoMarquee";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import PricingTable from "@/components/PricingTable";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import TiltCard from "@/components/TiltCard";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  "data-testid": dataTestId,
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  "data-testid"?: string;
}) {
  return (
    <div className={align === "center" ? "text-center" : ""} data-testid={dataTestId}>
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_18px_hsl(var(--primary)/0.35)]" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
      <p className={align === "center" ? "mx-auto" : "" + " mt-3 max-w-2xl text-sm text-muted-foreground"}>{description}</p>
    </div>
  );
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const problems = [
  {
    icon: Layers,
    title: "Too many tools, no single truth",
    desc: "Events in one system, announcements in another, analytics nowhere. Your team loses time to context switching.",
  },
  {
    icon: MessagesSquare,
    title: "Resident engagement feels random",
    desc: "Without segmentation and patterns, it’s impossible to predict what will land—so everything becomes guesswork.",
  },
  {
    icon: Gauge,
    title: "Leadership asks for proof",
    desc: "A beautiful calendar is not impact. You need measurable ROI to justify programs and staffing.",
  },
] as const;

const features = [
  {
    icon: Sparkles,
    title: "Announcements that feel premium",
    desc: "Compose, schedule, and deliver updates with a polished resident experience that reflects your brand.",
    mock: (
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold">Announcement</div>
          <div className="text-xs text-muted-foreground">Scheduled</div>
        </div>
        <div className="mt-3 space-y-2">
          <div className="h-3 w-3/4 rounded-full bg-white/10" />
          <div className="h-3 w-5/6 rounded-full bg-white/10" />
          <div className="h-3 w-2/3 rounded-full bg-white/10" />
        </div>
        <div className="mt-4 rounded-2xl bg-[linear-gradient(135deg,hsl(var(--primary)/0.18),hsl(var(--accent)/0.10))] px-3 py-2 text-xs text-foreground/85">
          Delivery optimized for peak open times.
        </div>
      </div>
    ),
  },
  {
    icon: CalendarDays,
    title: "Events that fill themselves",
    desc: "RSVPs, reminders, and follow-ups are automated—so your team focuses on the experience, not the logistics.",
    mock: (
      <div className="grid gap-3">
        {[
          { t: "Rooftop Social", s: "Sat · 5:00 PM", a: "112 RSVPs" },
          { t: "Wellness Workshop", s: "Thu · 6:30 PM", a: "48 RSVPs" },
        ].map((e) => (
          <div key={e.t} className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-sm font-semibold">{e.t}</div>
            <div className="mt-1 text-xs text-muted-foreground">{e.s}</div>
            <div className="mt-3 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-foreground/80">
              <BadgeCheck className="mr-1 h-3.5 w-3.5 text-primary" />
              {e.a}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: BarChart3,
    title: "Analytics with narrative",
    desc: "Understand what drives retention and satisfaction. Turn activity into insights leadership trusts.",
    mock: (
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold">Engagement</div>
          <div className="text-xs text-muted-foreground">QTD</div>
        </div>
        <div className="mt-4 grid grid-cols-5 gap-2">
          {[20, 44, 35, 62, 56, 70, 58, 64, 50, 72].slice(0, 10).map((h, idx) => (
            <div key={idx} className="flex h-20 items-end">
              <div
                className="w-3.5 rounded-t-xl bg-white/10"
                style={{ height: `${h}%` }}
              />
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-muted-foreground">
          Lift from automations: <span className="text-foreground/90 font-semibold">+18%</span>
        </div>
      </div>
    ),
  },
  {
    icon: Wand2,
    title: "Automations that stay tasteful",
    desc: "Trigger reminders, follow-ups, and targeted updates without sounding robotic. Keep the tone human.",
    mock: (
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
        <div className="text-sm font-semibold">Automation</div>
        <div className="mt-2 text-xs text-muted-foreground">If RSVP = yes → send reminder 2h before</div>
        <div className="mt-4 grid gap-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-foreground/80">
            Condition: RSVP confirmed
          </div>
          <div className="rounded-2xl bg-[linear-gradient(135deg,hsl(var(--primary)/0.20),transparent)] px-3 py-2 text-xs text-foreground/85">
            Action: Reminder message + calendar link
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Trust built in",
    desc: "Clear roles, audit-friendly flows, and a system you can confidently roll out portfolio-wide.",
    mock: (
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold">Permissions</div>
          <div className="text-xs text-muted-foreground">Secure</div>
        </div>
        <div className="mt-4 grid gap-2">
          {["Manager", "Leasing", "Maintenance"].map((r) => (
            <div key={r} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs">
              <span className="text-foreground/85">{r}</span>
              <span className="rounded-full bg-white/[0.06] px-2 py-1 text-[10px] text-muted-foreground">Scoped</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: Crown,
    title: "Design that residents notice",
    desc: "A calm, premium UI that elevates your community brand—because perception is part of retention.",
    mock: (
      <div className="rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_20%_10%,hsl(var(--primary)/0.20),transparent_50%),radial-gradient(circle_at_90%_60%,hsl(var(--accent)/0.12),transparent_55%)] p-4">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-foreground/85">
          “Welcome home.” — a message that feels like your brand.
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="h-16 rounded-2xl border border-white/10 bg-white/[0.04]" />
          <div className="h-16 rounded-2xl border border-white/10 bg-white/[0.04]" />
        </div>
      </div>
    ),
  },
] as const;

const faqs = [
  {
    q: "Is ApartEase only for large properties?",
    a: "No—Starter is designed for smaller communities. Professional is built for most teams, and Enterprise supports portfolios.",
  },
  {
    q: "Do residents need to download an app?",
    a: "ApartEase can support app-like experiences, but your rollout can start with web-first flows. The key is consistency and clarity.",
  },
  {
    q: "Can we segment residents (e.g., building, floor plans)?",
    a: "Yes. Segmentation is core to Professional. You can tailor announcements and event invites with a calm, respectful tone.",
  },
  {
    q: "How do you measure engagement?",
    a: "Opens, RSVPs, responses, and trend metrics are visualized in a narrative-friendly dashboard. Enough detail for operators; enough clarity for leadership.",
  },
  {
    q: "Is there onboarding support?",
    a: "Professional includes guided setup. Enterprise includes dedicated success and rollout planning.",
  },
  {
    q: "Can we request a demo before buying?",
    a: "Absolutely. Use “Request demo” and tell us your community size—our team will tailor the walkthrough.",
  },
] as const;

export default function Landing() {
  const [, setLocation] = useLocation();

  return (
    <>
      <Seo
        title="ApartEase — Premium community operations for modern apartments"
        description="A luxury SaaS marketing experience for ApartEase: announcements, events, engagement, and analytics—wrapped in glassmorphism and gold accents."
      />
      <Background />
      <SiteNav />

      <main className="relative z-10">
        {/* HERO */}
        <section className="mx-auto max-w-7xl px-4 pt-14 pb-10 sm:px-6 lg:px-8 lg:pt-20" data-testid="hero">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_18px_hsl(var(--primary)/0.35)]" />
                  Luxury-grade resident engagement
                </div>
                <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.02] tracking-tight">
                  Run your community
                  <span className="text-glow"> like a flagship brand</span>.
                </h1>
                <p className="mt-4 max-w-xl text-base text-muted-foreground">
                  ApartEase is the calm, premium operating system for announcements, events, and engagement—backed by analytics that prove impact.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <MagneticButton
                    variant="primary"
                    size="lg"
                    data-testid="hero-cta-request-demo"
                    onClick={() => {
                      setLocation("/contact?intent=demo");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Request a demo <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                  <MagneticButton
                    variant="secondary"
                    size="lg"
                    data-testid="hero-cta-see-pricing"
                    onClick={() => {
                      setLocation("/pricing");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    See pricing
                  </MagneticButton>

                  <button
                    type="button"
                    onClick={() => scrollToId("features")}
                    className="sm:ml-1 rounded-2xl px-3 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors focus-premium"
                    data-testid="hero-cta-scroll-features"
                  >
                    Explore features
                  </button>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {[
                    { k: "Setup", v: "Minutes" },
                    { k: "Engagement lift", v: "Up to 24%" },
                    { k: "Support", v: "White-glove" },
                  ].map((s) => (
                    <div key={s.k} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                      <div className="text-xs text-muted-foreground">{s.k}</div>
                      <div className="mt-1 text-sm font-semibold text-foreground/90">{s.v}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="animate-floaty"
              >
                <HeroMockDashboard />
              </motion.div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8" data-testid="trust">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 shadow-[0_18px_60px_hsl(0_0%_0%/0.35)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-muted-foreground">
                Trusted by modern teams who care about craft and clarity.
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Uptime", value: "99.9%" },
                  { label: "Onboarding", value: "White-glove" },
                  { label: "Security", value: "Role-based" },
                ].map((c) => (
                  <div
                    key={c.label}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-foreground/80"
                    data-testid={`trust-chip-${c.label.toLowerCase()}`}
                  >
                    <span className="text-muted-foreground">{c.label}:</span> {c.value}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <LogoMarquee />
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" data-testid="problem">
          <SectionHeading
            eyebrow="The problem"
            title="Community ops deserve better than duct tape."
            description="Most resident engagement is stitched together from tools that weren’t designed to work together. ApartEase replaces the patchwork with one premium flow."
          />

          <Stagger className="mt-8 grid gap-4 md:grid-cols-3">
            {problems.map((p) => {
              const Icon = p.icon;
              return (
                <StaggerItem key={p.title}>
                  <TiltCard className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_60px_hsl(0_0%_0%/0.35)]">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.05]">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="mt-4 text-lg font-semibold">{p.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </TiltCard>
                </StaggerItem>
              );
            })}
          </Stagger>
        </section>

        {/* FEATURES */}
        <section id="features" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" data-testid="features">
          <SectionHeading
            eyebrow="Features"
            title="Beautiful workflows. Measurable outcomes."
            description="Every part of ApartEase is designed for velocity and polish—so residents feel cared for and teams get time back."
          />

          <div className="mt-10 grid gap-5">
            {features.map((f, idx) => {
              const Icon = f.icon;
              const reversed = idx % 2 === 1;
              return (
                <Reveal key={f.title} y={24} className="w-full">
                  <div
                    className={`
                      grid items-center gap-5 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8 shadow-[0_22px_80px_hsl(0_0%_0%/0.38)]
                      lg:grid-cols-12
                    `}
                  >
                    <div className={`lg:col-span-6 ${reversed ? "lg:order-2" : ""}`}>
                      <div className="flex items-center gap-3">
                        <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.05]">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="text-xl font-semibold">{f.title}</div>
                      </div>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{f.desc}</p>

                      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                        <MagneticButton
                          variant="secondary"
                          size="sm"
                          data-testid={`feature-cta-demo-${idx}`}
                          onClick={() => {
                            setLocation("/contact?intent=demo");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Request demo
                        </MagneticButton>
                        <button
                          type="button"
                          onClick={() => {
                            setLocation("/pricing");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className="rounded-2xl px-3 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors focus-premium"
                          data-testid={`feature-cta-pricing-${idx}`}
                        >
                          View pricing →
                        </button>
                      </div>
                    </div>

                    <div className={`lg:col-span-6 ${reversed ? "lg:order-1" : ""}`}>
                      <TiltCard className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                        >
                          {f.mock}
                        </motion.div>
                      </TiltCard>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" data-testid="how-it-works">
          <SectionHeading
            eyebrow="How it works"
            title="From idea → impact in three steps."
            description="A timeline built for operators: fast setup, premium delivery, clear results."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              { step: "01", title: "Configure your community", desc: "Import basics, set roles, define resident segments. Done." },
              { step: "02", title: "Ship announcements & events", desc: "Schedule with a luxury tone, automate reminders, keep it human." },
              { step: "03", title: "Prove what moved", desc: "See engagement trends, ROI signals, and what to repeat next week." },
            ].map((s, idx) => (
              <Reveal key={s.step} delay={idx * 0.05} className="h-full">
                <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_60px_hsl(0_0%_0%/0.35)]">
                  <div className="absolute -left-1 top-6 h-10 w-1 rounded-full bg-[linear-gradient(180deg,hsl(var(--primary)),hsl(var(--accent)))] opacity-70" />
                  <div className="text-xs text-muted-foreground">Step {s.step}</div>
                  <div className="mt-2 text-lg font-semibold">{s.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-[linear-gradient(135deg,hsl(var(--primary)/0.14),hsl(var(--accent)/0.08),transparent_65%)] p-6 shadow-[0_24px_90px_hsl(0_0%_0%/0.45)]">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-foreground/90 font-semibold">Want to see it on your own community?</div>
              <MagneticButton
                variant="primary"
                size="sm"
                data-testid="how-cta-demo"
                onClick={() => {
                  setLocation("/contact?intent=demo");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Request demo <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </div>
        </section>

        {/* IMPACT STATS */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" data-testid="impact">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,hsl(223_47%_10%/0.7),hsl(223_47%_10%/0.35))] p-7 sm:p-10 shadow-[0_30px_110px_hsl(0_0%_0%/0.55)]">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_18px_hsl(var(--accent)/0.35)]" />
                  Impact
                </div>
                <div className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
                  Momentum you can measure.
                </div>
                <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                  When announcements feel premium and events run smoothly, residents respond—and teams reclaim their week.
                </p>
              </div>

              <MagneticButton
                variant="secondary"
                size="sm"
                data-testid="impact-cta-pricing"
                onClick={() => {
                  setLocation("/pricing");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Explore plans
              </MagneticButton>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { v: 24, s: "%", label: "median engagement lift" },
                { v: 38, s: "%", label: "faster event ops" },
                { v: 312, s: "+", label: "RSVPs per month" },
                { v: 18, s: "min", label: "to publish campaigns" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
                  data-testid={`impact-card-${stat.label.replace(/\s+/g, "-")}`}
                >
                  <div className="text-4xl font-semibold tracking-tight">
                    <AnimatedCounter value={stat.v} suffix={stat.s} data-testid={`impact-counter-${stat.label.replace(/\s+/g, "-")}`} />
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <TestimonialCarousel />
        </section>

        {/* PRICING */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" data-testid="pricing-section">
          <PricingTable
            onSelectPlan={(planKey) => {
              // Marketing: selecting a plan routes to contact with intent
              setLocation(`/contact?intent=demo&plan=${encodeURIComponent(planKey)}`);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" data-testid="faq">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered with clarity."
            description="Short, direct, operator-friendly. If you need something specific, contact us."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.slice(0, 3).map((f, idx) => (
                  <AccordionItem key={f.q} value={`left-${idx}`} className="border-white/10">
                    <AccordionTrigger data-testid={`faq-q-${idx}`}>{f.q}</AccordionTrigger>
                    <AccordionContent data-testid={`faq-a-${idx}`} className="text-sm text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.slice(3).map((f, idx) => (
                  <AccordionItem key={f.q} value={`right-${idx}`} className="border-white/10">
                    <AccordionTrigger data-testid={`faq-q-r-${idx}`}>{f.q}</AccordionTrigger>
                    <AccordionContent data-testid={`faq-a-r-${idx}`} className="text-sm text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8" data-testid="final-cta">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(135deg,hsl(var(--primary)/0.18),hsl(var(--accent)/0.10),transparent_65%)] p-7 sm:p-10 shadow-[0_40px_140px_hsl(0_0%_0%/0.65)]">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_40%_40%,hsl(var(--primary)/0.30),transparent_60%)] blur-2xl" />
              <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_40%_40%,hsl(var(--accent)/0.22),transparent_60%)] blur-2xl" />

              <div className="relative z-10 grid gap-6 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-foreground/80">
                    <BadgeCheck className="h-3.5 w-3.5 text-primary" /> Premium rollout, calm workflow
                  </div>
                  <div className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
                    Make your community feel unmistakably elevated.
                  </div>
                  <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                    Request a tailored demo and see how ApartEase turns routine communication into a polished resident experience.
                  </p>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <MagneticButton
                    variant="primary"
                    size="lg"
                    className="w-full"
                    data-testid="final-cta-demo"
                    onClick={() => {
                      setLocation("/contact?intent=demo");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Request a demo <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                  <MagneticButton
                    variant="secondary"
                    size="lg"
                    className="w-full"
                    data-testid="final-cta-contact"
                    onClick={() => {
                      setLocation("/contact");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Contact sales
                  </MagneticButton>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
