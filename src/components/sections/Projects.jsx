import { motion } from "framer-motion";
import { FolderKanban, Sparkles } from "lucide-react";
import portfolioData from "@/data/portfolioData.json";
import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

export default function Projects() {
    const { projects } = portfolioData;
    const durations = [3, 4, 3.5, 4.5];

    return (
        <section id="projects" className="py-20 lg:py-24" data-story-section>
            <div className="section-wrap">
                <SectionHeading
                    eyebrow="Projects"
                    title="Selected Work"
                    description="Recent products I contributed to, including frontend architecture, backend integration, and end-to-end delivery."
                    align="center"
                    className="mb-12"
                />

                <Stagger className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {projects.map((project, index) => {
                        const isLarge = index === 0 || index === 3;
                        const duration = durations[index % durations.length];

                        return (
                            <StaggerItem
                                key={project.title}
                                className={isLarge ? "lg:col-span-7" : "lg:col-span-5"}
                                data-story-item
                            >
                                <motion.div
                                    animate={{ y: [0, -12, 0] }}
                                    transition={{
                                        duration: duration,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.2
                                    }}
                                    className="h-full"
                                >
                                    <TiltCard
                                        className="surface-panel h-full overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-white/5 hover:border-primary/20 transition-colors"
                                        data-story-panel
                                        data-tilt-card
                                    >
                                        <div className="flex h-full flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                                            <div className="flex-1 space-y-4">
                                                <div className="flex flex-wrap items-center gap-3">
                                                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-primary shadow-inner">
                                                        <FolderKanban size={20} />
                                                    </span>
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-foreground sm:text-3xl">{project.title}</h3>
                                                        <p className="text-sm font-medium text-muted-foreground/80">{project.subtitle}</p>
                                                    </div>
                                                </div>

                                                <div className="flex gap-2">
                                                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary">
                                                        <Sparkles size={12} />
                                                        {project.role}
                                                    </span>
                                                </div>

                                                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                                                    {project.description}
                                                </p>

                                                <div className="flex flex-wrap gap-2 pt-2">
                                                    {project.techStack.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-xs font-mono text-foreground/70"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="shrink-0">
                                                <motion.div
                                                    whileHover={{ rotate: 5, scale: 1.1 }}
                                                    className="h-24 w-24 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center border border-white/10"
                                                >
                                                    <FolderKanban size={40} className="text-primary/40" />
                                                </motion.div>
                                            </div>
                                        </div>
                                    </TiltCard>
                                </motion.div>
                            </StaggerItem>
                        );
                    })}
                </Stagger>
            </div>
        </section>
    );
}
