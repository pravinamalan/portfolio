import { useRef } from "react";
import portfolioData from "@/data/portfolioData.json";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export default function About() {
    const { personalInfo, quickFacts } = portfolioData;

    return (
        <section id="about" className="relative py-24 lg:py-32 overflow-hidden" data-story-section>
            {/* Background Decor */}
            <div className="absolute top-1/4 -right-20 h-96 w-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -left-20 h-96 w-96 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="section-wrap relative z-10">
                <SectionHeading
                    eyebrow="About"
                    title="Profile Overview"
                    description="A quick summary of background, strengths, and the type of opportunities I am currently targeting."
                    align="center"
                    className="mb-16"
                />

                <div className="grid gap-8 lg:gap-12">
                    <Reveal
                        y={30}
                        className="surface-panel mx-auto w-full max-w-5xl rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-14 border border-white/5"
                        data-story-item
                        data-story-panel
                        data-tilt-card
                    >
                        <p className="text-lg leading-relaxed text-muted-foreground lg:text-xl lg:leading-loose text-center">
                            {personalInfo.bio}
                        </p>
                    </Reveal>

                    <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {quickFacts.map((fact) => (
                            <StaggerItem key={fact.label}>
                                <div
                                    className="surface-panel h-full rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 hover:border-primary/20 transition-colors border border-white/5"
                                    data-story-item
                                    data-story-panel
                                    data-tilt-card
                                >
                                    <p className="text-xs uppercase tracking-[0.2em] text-primary/70 font-bold">
                                        {fact.label}
                                    </p>
                                    <p className="mt-4 text-base font-semibold leading-relaxed text-foreground lg:text-lg">
                                        {fact.value}
                                    </p>
                                </div>
                            </StaggerItem>
                        ))}
                    </Stagger>
                </div>
            </div>
        </section>
    );
}
