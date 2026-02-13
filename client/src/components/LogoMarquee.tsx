import * as React from "react";
import { cn } from "@/lib/utils";

const logos = [
  "Apex Communities",
  "BrightRent",
  "CivicWorks",
  "Harbor Homes",
  "Luma Living",
  "Northgate",
  "Orchard PM",
  "Sage Residences",
];

export default function LogoMarquee({ className }: { className?: string }) {
  const items = [...logos, ...logos];

  return (
    <div className={cn("relative overflow-hidden", className)} data-testid="trust-marquee">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />

      <div className="group flex gap-8 py-2">
        <div className="marquee flex min-w-full shrink-0 items-center justify-around gap-8">
          {items.map((name, idx) => (
            <div
              key={`${name}-${idx}`}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-foreground/80 shadow-[0_12px_30px_hsl(0_0%_0%/0.25)] transition-colors duration-300 group-hover:bg-white/[0.06]"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/90 shadow-[0_0_20px_hsl(var(--primary)/0.45)]" />
              <span className="whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee {
          animation: marquee 22s linear infinite;
        }
        .group:hover .marquee {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
