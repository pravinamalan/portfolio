import { useRef } from "react";
import { CalendarRange, MapPin, Briefcase } from "lucide-react";
import portfolioData from "@/data/portfolioData.json";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export default function Experience() {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="py-24 lg:py-32 relative overflow-hidden" data-story-section>
            <div className="section-wrap relative">
                <SectionHeading
                    eyebrow="Experience"
                    title="Professional Journey"
                    description="Roles, outcomes, and technical contributions delivered in production environments."
                    align="center"
                    className="mb-16"
                />

                <div className="mx-auto max-w-4xl space-y-8">
                    {experience.map((item, index) => (
                        <Reveal
                            key={`${item.company}-${item.position}`}
                            y={40}
                            delay={index * 0.15}
                            className="w-full"
                        >
                            <article
                                className="surface-panel rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 border border-white/5"
                                data-story-panel
                                data-tilt-card
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-6 sm:pb-8">
                                    <div className="flex items-center gap-4 sm:gap-5">
                                        <div className="grid h-12 w-12 sm:h-16 sm:w-16 place-items-center rounded-xl sm:rounded-2xl bg-primary/10 text-primary border border-primary/20 shrink-0">
                                            <Briefcase size={22} sm={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-tight">{item.position}</h3>
                                            <p className="mt-0.5 sm:mt-1 text-base sm:text-lg font-medium text-primary/90">{item.company}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                        <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl border border-white/10 bg-white/[0.03] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-muted-foreground whitespace-nowrap">
                                            <CalendarRange size={12} sm={14} className="text-primary" />
                                            {item.duration}
                                        </div>
                                        <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl border border-white/10 bg-white/[0.03] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-muted-foreground whitespace-nowrap">
                                            <MapPin size={12} sm={14} className="text-primary" />
                                            {item.location}
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 sm:pt-8">
                                    <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
                                        {item.description}
                                    </p>

                                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                        {item.achievements.map((point) => (
                                            <div
                                                key={point}
                                                className="group flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 hover:bg-white/[0.04] transition-all duration-300"
                                            >
                                                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-[10px] font-bold group-hover:scale-110 transition-transform">
                                                    ✓
                                                </span>
                                                <span className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                                                    {point}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
