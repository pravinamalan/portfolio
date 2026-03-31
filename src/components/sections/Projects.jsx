import { ArrowUpRight, Github, ExternalLink, Hash, Globe, Cpu, Database, Circle } from "lucide-react";
import { motion } from "framer-motion";
import portfolioData from "@/data/portfolioData.json";
import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import Tape from "@/components/ui/Tape";

const projectConfigs = [
    {
        bg: "bg-[#fef08a]", // Sunflower Yellow
        icon: Database,
        accent: "text-blue-600",
    },
    {
        bg: "bg-[#bae6fd]", // Sky Blue
        icon: Globe,
        accent: "text-indigo-600",
    },
    {
        bg: "bg-[#bbf7d0]", // Mint Green
        icon: Cpu,
        accent: "text-emerald-700",
    },
    {
        bg: "bg-[#fbcfe8]", // Flamingo Pink
        icon: Globe,
        accent: "text-rose-600",
    },
];

export default function Projects() {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="py-32 lg:py-48 relative overflow-hidden bg-background" data-story-section>
            <div className="section-wrap relative">
                <SectionHeading
                    eyebrow="Portfolio_Matrix"
                    title="Case ~Studies~ & *Drafts*"
                    description="A sequential timeline of digital systems engineered for elite performance."
                    align="center"
                    className="mb-40"
                />

                <div className="relative mx-auto max-w-7xl">
                    <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 lg:w-2 bg-foreground/5 -translate-x-1/2 z-0">
                        <div className="absolute inset-0 bg-dashed-gradient animate-[pulse_4s_infinite]" />
                    </div>

                    <div className="flex flex-col gap-32 lg:gap-48">
                        {projects.map((project, index) => {
                            const config = projectConfigs[index % projectConfigs.length];
                            const Icon = config.icon;
                            const isOdd = index % 2 !== 0;

                            return (
                                <div 
                                    key={project.title}
                                    className={cn(
                                        "relative flex flex-col items-center lg:flex-row w-full justify-between",
                                        isOdd ? "lg:flex-row-reverse" : "lg:flex-row"
                                    )}
                                >
                                    <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                                        <motion.div 
                                            whileInView={{ scale: [0, 1.2, 1], rotate: [0, 90, 45] }}
                                            className="w-12 h-12 lg:w-16 lg:h-16 bg-white border-4 lg:border-8 border-foreground/10 flex items-center justify-center rotate-45 shadow-xl group-hover:bg-primary transition-colors"
                                        >
                                            <span className="mono text-xs lg:text-sm font-black text-foreground -rotate-45">0{index + 1}</span>
                                        </motion.div>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, x: isOdd ? 100 : -100 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        className={cn(
                                            "w-full lg:w-[45%] pl-24 lg:pl-0",
                                            "relative grid grid-cols-1 overflow-hidden paper-card shadow-2xl bg-white group"
                                        )}
                                    >
                                        <div className={cn(
                                            "relative h-[220px] overflow-hidden flex items-center justify-center",
                                            config.bg
                                        )}>
                                            <div className="absolute inset-0 opacity-[0.08] pointer-events-none" 
                                                style={{ backgroundImage: `radial-gradient(circle, #000 2px, transparent 2px)`, backgroundSize: '16px 16px' }} 
                                            />
                                            
                                            <Tape className="-top-3 left-10" rotate={-5} color="rgba(0,0,0,0.1)" />
                                            
                                            <motion.div 
                                                whileHover={{ scale: 1.1, rotate: 2 }}
                                                className="relative z-10 p-6 bg-white/20 backdrop-blur-md rounded-full border-4 border-white/20"
                                            >
                                                <Icon size={64} className={cn("text-white drop-shadow-2xl", config.accent)} strokeWidth={1.5} />
                                            </motion.div>

                                            <div className="absolute top-4 right-4 mono text-[8px] font-black tracking-widest text-foreground/20 uppercase bg-white/40 px-2 py-1">
                                                BUILD_STATUS: V1.0
                                            </div>
                                        </div>

                                        <div className="p-8 lg:p-10 flex flex-col">
                                            <div className="flex items-center gap-3 mono text-[10px] font-black tracking-[0.3em] text-foreground/30 mb-6 border-b border-dashed border-border pb-3">
                                                <Hash size={12} /> PROTOCOL_{index + 1}
                                            </div>

                                            <h3 className="font-display text-3xl lg:text-4xl font-black text-foreground leading-[1.0] tracking-tightest mb-6 uppercase">
                                                {project.title}
                                            </h3>

                                            <p className="font-sans text-lg text-foreground/60 leading-relaxed mb-8 border-l-4 border-primary/10 pl-6 italic">
                                                "{project.description}"
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {project.techStack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="mono text-sm font-black uppercase tracking-widest text-foreground/60 bg-foreground/5 px-2 py-1 border border-foreground/30"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex items-center justify-between pt-8 border-t border-dashed border-border/50">
                                                <div className="flex gap-4">
                                                    {project.github && (
                                                        <a href={project.github} target="_blank" rel="noreferrer" className="text-foreground/30 hover:text-primary transition-all">
                                                            <Github size={20} />
                                                        </a>
                                                    )}
                                                    {project.live && (
                                                        <a href={project.live} target="_blank" rel="noreferrer" className="text-foreground/30 hover:text-primary transition-all">
                                                            <ExternalLink size={20} />
                                                        </a>
                                                    )}
                                                </div>
                                                
                                                <motion.button
                                                    whileHover={{ scale: 1.1, x: 5 }}
                                                    className="flex items-center gap-2 mono text-[10px] font-black uppercase tracking-widest text-primary border-b-2 border-primary/20"
                                                >
                                                    View_Details <ArrowUpRight size={14} />
                                                </motion.button>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <div className="hidden lg:block w-[45%]" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
