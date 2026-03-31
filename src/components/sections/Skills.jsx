import { motion } from "framer-motion";
import { Layout, Server, Terminal, Users, Hash } from "lucide-react";
import portfolioData from "@/data/portfolioData.json";
import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/Reveal";
import FloppyDisk from "@/components/ui/FloppyDisk";
import Tape from "@/components/ui/Tape";

const categoryMeta = {
    Frontend: {
        icon: Layout,
        color: "#fff9f0", // Warm Cream
    },
    "Backend and Database": {
        icon: Server,
        color: "#f0f9f4", // Sage Green
    },
    "Tools and Workflow": {
        icon: Terminal,
        color: "#fef2f2", // Faded Red
    },
    "Professional Skills": {
        icon: Users,
        color: "#f0f4f9", // Cold Blue
    },
};

export default function Skills() {
    const { skills } = portfolioData;
    const allSkills = Object.values(skills).flat();

    return (
        <section id="skills" className="py-24 lg:py-24 relative overflow-hidden bg-background" data-story-section>
            <div className="section-wrap">
                {/* Section Header */}
                <SectionHeading
                    eyebrow="Competency"
                    title="Storage ~Vault~"
                    description="Professional development stack and methodology retrieved from high-capacity archives."
                    align="center"
                    className="mb-32"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
                    {Object.entries(skills).map(([category, items], idx) => {
                        const meta = categoryMeta[category] || { icon: Layout, color: "#fff" };

                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center"
                            >
                                <div className="relative mb-8">
                                    <FloppyDisk label={category.split(' ')[0]} className="scale-110 shadow-2xl" />
                                    <Tape className="-top-4 -right-10" rotate={15} color="rgba(78,59,49,0.1)" />
                                </div>

                                <div className="paper-card w-full p-6 bg-white min-h-[250px]">
                                    <div className="flex items-center gap-2 mb-6 border-b border-dashed border-border pb-4">
                                        <meta.icon size={16} className="text-primary" />
                                        <h3 className="mono text-xs font-bold uppercase tracking-widest text-foreground/80">
                                            {category}
                                        </h3>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {items.map((skill) => (
                                            <span
                                                key={skill}
                                                className="mono text-[10px] font-bold text-foreground/40 bg-foreground/5 px-2 py-1 border border-foreground/5"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Tech Ticker Strip (Punch Card Style) */}
                <div className="mt-24 border-y border-dashed border-border py-8 overflow-hidden bg-white/30">
                    <div className="flex w-[200%] animate-[marquee_25s_linear_infinite] items-center gap-12">
                        {[...allSkills, ...allSkills, ...allSkills].map((skill, i) => (
                            <div
                                key={i}
                                className="shrink-0 flex items-center gap-2"
                            >
                                <div className="w-2 h-2 rounded-full border border-primary/20" />
                                <span className="mono text-xs font-bold text-foreground/30 uppercase tracking-widest">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
