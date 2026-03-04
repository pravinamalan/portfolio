import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BarChart3, CalendarDays, Bell, Sparkles, TrendingUp } from "lucide-react";
import TiltCard from "@/components/TiltCard";
import { cn } from "@/lib/utils";
function MiniStat({ label, value }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
            <div className="text-[11px] text-muted-foreground">{label}</div>
            <div className="mt-1 text-sm font-semibold text-foreground/90">{value}</div>
        </div>
    );
}
function Bar({ h, active }) {
    return (
        <div className="flex h-20 items-end">
            <div className={cn("w-3.5 rounded-t-xl transition-all duration-500", active
                ? "bg-[linear-gradient(180deg,hsl(var(--primary)),hsl(var(--accent)))] shadow-[0_18px_40px_hsl(var(--primary)/0.20)]"
                : "bg-white/10")} style={{ height: `${h}%` }} />
        </div>
    );
}
export default function HeroMockDashboard({ className }) {
    return (
        <div className={cn("relative mx-auto max-w-2xl", className)} data-testid="hero-mock">
            <div className="absolute -inset-6 -z-10 rounded-[2.25rem] bg-[radial-gradient(circle_at_20%_10%,hsl(var(--primary)/0.30),transparent_55%),radial-gradient(circle_at_90%_60%,hsl(var(--accent)/0.22),transparent_55%)] blur-2xl" />
            <TiltCard className="glass-strong grad-border rounded-xl overflow-hidden shadow-[0_30px_90px_hsl(0_0%_0%/0.55)]">
                <div className="flex items-center gap-2 border-b border-white/10 bg-black/40 px-4 py-3">
                    <div className="flex gap-1.5">
                        <div className="h-3 w-3 rounded-full bg-red-500/80" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                        <div className="h-3 w-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="ml-4 text-xs font-mono text-muted-foreground">Portfolio.jsx</div>
                </div>
                <div className="p-4 bg-[#0d1117] text-xs sm:text-sm font-mono leading-relaxed overflow-x-auto">
                    <div className="flex">
                        <span className="w-6 text-muted-foreground select-none">1</span>
                        <span className="text-purple-400">import</span> <span className="text-white">React</span> <span className="text-purple-400">from</span> <span className="text-green-300">'react'</span>;
                    </div>
                    <div className="flex">
                        <span className="w-6 text-muted-foreground select-none">2</span>
                        <span className="text-purple-400">import</span> <span className="text-yellow-300">{`{ motion }`}</span> <span className="text-purple-400">from</span> <span className="text-green-300">'framer-motion'</span>;
                    </div>
                    <div className="flex">
                        <span className="w-6 text-muted-foreground select-none">3</span>
                    </div>
                    <div className="flex">
                        <span className="w-6 text-muted-foreground select-none">4</span>
                        <span className="text-purple-400">export</span> <span className="text-purple-400">default</span> <span className="text-blue-400">function</span> <span className="text-yellow-300">Portfolio</span>() {`{`}
                    </div>
                    <div className="flex">
                        <span className="w-6 text-muted-foreground select-none">5</span>
                        <span className="pl-4 text-purple-400">return</span> (
                    </div>
                    <div className="flex">
                        <span className="w-6 text-muted-foreground select-none">6</span>
                        <span className="pl-8 text-blue-400">&lt;motion.div</span>
                    </div>
                    <div className="flex">
                        <span className="w-6 text-muted-foreground select-none">7</span>
                        <span className="pl-12 text-blue-300">initial=</span>{`{{ `}<span className="text-blue-300">opacity:</span> <span className="text-orange-300">0</span> {`}}`}
                    </div>
                    <div className="flex">
                        <span className="w-6 text-muted-foreground select-none">8</span>
                        <span className="pl-12 text-blue-300">animate=</span>{`{{ `}<span className="text-blue-300">opacity:</span> <span className="text-orange-300">1</span> {`}}`}
                    </div>
                    <div className="flex">
                        <span className="w-6 text-muted-foreground select-none">9</span>
                        <span className="pl-12 text-blue-300">transition=</span>{`{{ `}<span className="text-blue-300">duration:</span> <span className="text-orange-300">0.8</span> {`}}`}
                    </div>
                    <div className="flex">
                        <span className="w-6 text-muted-foreground select-none">10</span>
                        <span className="pl-8 text-blue-400">&gt;</span>
                    </div>
                    <div className="flex">
                        <span className="w-6 text-muted-foreground select-none">11</span>
                        <span className="pl-12 text-white">Hello World! Welcome to my digital space.</span>
                    </div>
                    <div className="flex">
                        <span className="w-6 text-muted-foreground select-none">12</span>
                        <span className="pl-8 text-blue-400">&lt;/motion.div&gt;</span>
                    </div>
                    <div className="flex">
                        <span className="w-6 text-muted-foreground select-none">13</span>
                        <span className="pl-4">);</span>
                    </div>
                    <div className="flex">
                        <span className="w-6 text-muted-foreground select-none">14</span>
                        <span>{`}`}</span>
                    </div>
                </div>
            </TiltCard>
        </div>
    );
}
