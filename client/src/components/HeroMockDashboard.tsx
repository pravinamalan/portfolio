import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BarChart3, CalendarDays, Bell, Sparkles, TrendingUp } from "lucide-react";
import TiltCard from "@/components/TiltCard";
import { cn } from "@/lib/utils";

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
      <div className="text-[11px] text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm font-semibold text-foreground/90">{value}</div>
    </div>
  );
}

function Bar({ h, active }: { h: number; active?: boolean }) {
  return (
    <div className="flex h-20 items-end">
      <div
        className={cn(
          "w-3.5 rounded-t-xl transition-all duration-500",
          active
            ? "bg-[linear-gradient(180deg,hsl(var(--primary)),hsl(var(--accent)))] shadow-[0_18px_40px_hsl(var(--primary)/0.20)]"
            : "bg-white/10",
        )}
        style={{ height: `${h}%` }}
      />
    </div>
  );
}

export default function HeroMockDashboard({ className }: { className?: string }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [18, -18]);
  const rotate = useTransform(scrollYProgress, [0, 1], [1.5, -1.5]);

  return (
    <motion.div ref={ref} style={{ y, rotate }} className={cn("relative", className)} data-testid="hero-mock">
      <div className="absolute -inset-6 -z-10 rounded-[2.25rem] bg-[radial-gradient(circle_at_20%_10%,hsl(var(--primary)/0.30),transparent_55%),radial-gradient(circle_at_90%_60%,hsl(var(--accent)/0.22),transparent_55%)] blur-2xl" />
      <TiltCard className="glass-strong grad-border rounded-[2.25rem] p-5 shadow-[0_30px_90px_hsl(0_0%_0%/0.55)]">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.06]">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold">Community Pulse</div>
              <div className="text-xs text-muted-foreground">Last 7 days</div>
            </div>
          </div>
          <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-foreground/80">
            Live
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <MiniStat label="Announcements" value="18 sent" />
          <MiniStat label="Event RSVPs" value="312" />
          <MiniStat label="Engagement" value="+24%" />
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-5">
          <div className="lg:col-span-3 rounded-3xl border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground/90">
                <BarChart3 className="h-4 w-4 text-primary" /> Activity
              </div>
              <div className="text-xs text-muted-foreground">Weekly</div>
            </div>

            <div className="mt-4 flex items-end justify-between gap-2">
              <Bar h={35} />
              <Bar h={52} />
              <Bar h={44} />
              <Bar h={70} active />
              <Bar h={58} />
              <Bar h={62} />
              <Bar h={48} />
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <TrendingUp className="h-4 w-4 text-accent" />
                Professional plan users see a median <span className="text-foreground/90 font-semibold">+19%</span> RSVP lift.
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid gap-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground/90">
                <CalendarDays className="h-4 w-4 text-primary" /> Upcoming
              </div>
              <div className="mt-3 grid gap-2">
                {[
                  { t: "Lobby Coffee", s: "Tomorrow · 9:00 AM" },
                  { t: "Fitness Workshop", s: "Thu · 6:30 PM" },
                  { t: "Rooftop Social", s: "Sat · 5:00 PM" },
                ].map((e) => (
                  <div key={e.t} className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2">
                    <div className="text-sm font-semibold">{e.t}</div>
                    <div className="text-xs text-muted-foreground">{e.s}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground/90">
                  <Bell className="h-4 w-4 text-primary" /> Notifications
                </div>
                <div className="text-xs text-muted-foreground">Now</div>
              </div>
              <div className="mt-3 rounded-2xl border border-white/10 bg-[linear-gradient(135deg,hsl(var(--primary)/0.15),hsl(var(--accent)/0.10))] px-3 py-2">
                <div className="text-sm font-semibold">New RSVP wave</div>
                <div className="text-xs text-muted-foreground">+34 residents confirmed for Rooftop Social.</div>
              </div>
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
