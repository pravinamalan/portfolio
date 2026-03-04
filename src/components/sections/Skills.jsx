import portfolioData from "@/data/portfolioData.json";
import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/Reveal";

export default function Skills() {
    const { skills } = portfolioData;

    return (
        <section id="skills" className="py-20 lg:py-24" data-story-section>
            <div className="section-wrap">
                <SectionHeading
                    eyebrow="Expertise"
                    title="Technology Stack"
                    description="Core technologies I use to deliver production-grade applications across frontend, backend, and collaborative workflows."
                    align="center"
                    className="mb-12"
                />

                <Stagger className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {Object.entries(skills).map(([category, items]) => (
                        <StaggerItem key={category} data-story-item>
                            <article
                                className="surface-panel h-full rounded-3xl p-6"
                                data-story-panel
                                data-tilt-card
                            >
                                <h3 className="text-lg font-semibold text-foreground">{category}</h3>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-muted-foreground"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
        </section>
    );
}
