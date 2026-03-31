import { Briefcase, CalendarRange, MapPin, Hash, Circle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import portfolioData from "@/data/portfolioData.json";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { useRef } from "react";
import CassettePlayer from "@/components/ui/CassettePlayer";
import Tape from "@/components/ui/Tape";

export default function Experience() {
    const { experience } = portfolioData;
    const containerRef = useRef(null);

    return (
        <section id="experience" className="py-24 lg:py-32 relative overflow-hidden bg-background" data-story-section ref={containerRef}>
            <div className="section-wrap relative">
                <SectionHeading
                    eyebrow="Timeline"
                    title="Career ~Logs~"
                    description="Professional history retrieved from high-fidelity engineering modules."
                    align="center"
                    className="mb-32"
                />

                {/* Cassette Anchor */}
                <div className="flex justify-center mb-28">
                    <div className="relative group">
                        <CassettePlayer containerRef={containerRef} className="scale-125 md:scale-150 group-hover:scale-155 transition-transform duration-1000" />
                        <Tape className="-top-10 -left-16" rotate={-15} color="rgba(78,59,49,0.15)" />
                    </div>
                </div>

                <div className="mx-auto max-w-5xl relative">
                    {/* The Tape Timeline (Center Line) */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[6px] bg-foreground/10 -translate-x-1/2 z-0" />
                    
                    <div className="flex flex-col gap-24">
                        {experience.map((item, index) => (
                            <Reveal
                                key={`${item.company}-${item.position}`}
                                y={60}
                                delay={index * 0.1}
                                className="relative w-full"
                            >
                                <div className={`relative flex items-center justify-center md:justify-between w-full ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    
                                    {/* Timeline Node */}
                                    <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-primary rounded-sm border-4 border-white -translate-x-1/2 z-20 shadow-xl hidden md:block rotate-45" />

                                    <div className="w-full md:w-[46%] pl-20 md:pl-0">
                                        <div className="paper-card p-10 relative bg-white group hover:translate-y-[-8px] transition-all duration-700 shadow-2xl">
                                            <Tape className="-top-4 left-1/2 -translate-x-1/2 rotate-[-2deg]" color="rgba(0,0,0,0.08)" />
                                            
                                            <header className="mb-8 border-b-2 border-dashed border-border/50 pb-6">
                                                <div className="flex items-center gap-3 mono text-[12px] font-black text-primary mb-3">
                                                    <Hash size={14} /> LOG_ENTRY #00{index + 1}
                                                </div>
                                                <h3 className="font-display text-3xl font-black text-foreground leading-[1.1] tracking-tighter mb-4">
                                                    {item.position.toUpperCase()}
                                                </h3>
                                                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 mono text-[11px] font-black uppercase tracking-[0.1em] text-foreground">
                                                    <span className="px-2 py-1 bg-primary/10 text-primary">{item.company}</span>
                                                    <span className="flex items-center gap-2 text-foreground/40"><CalendarRange size={12} /> {item.duration}</span>
                                                    <span className="flex items-center gap-2 text-foreground/40"><MapPin size={12} /> {item.location}</span>
                                                </div>
                                            </header>

                                            <div className="space-y-6">
                                                {/* High Contrast Body Text */}
                                                <p className="font-sans text-[1.05rem] leading-[1.65] text-foreground font-medium italic border-l-4 border-primary/5 pl-6">
                                                    "{item.description}"
                                                </p>

                                                <div className="space-y-4 pt-6">
                                                    {item.achievements.map((point, i) => (
                                                        <div key={i} className="flex items-start gap-4">
                                                            <Circle size={8} className="mt-2 text-primary fill-primary shrink-0" />
                                                            <span className="font-sans text-[0.95rem] text-foreground/90 leading-relaxed font-bold">
                                                                {point}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Corner Stamp */}
                                            <div className="absolute top-4 right-4 opacity-[0.03] select-none pointer-events-none">
                                                <Briefcase size={80} className="rotate-[-15deg]" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Offset for visual rhythm on desktop */}
                                    <div className="hidden md:block w-[46%]" />
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
