import { motion } from "framer-motion";
import { Download, ArrowRight, Sparkles, Briefcase, FileText } from "lucide-react";
import portfolioData from "@/data/portfolioData.json";
import SectionHeading from "@/components/SectionHeading";
import Tape from "@/components/ui/Tape";
import Typewriter from "@/components/ui/Typewriter";
import Sticker from "@/components/ui/Sticker";
import { cn } from "@/lib/utils";

const HOT_SKILLS = ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"];

export default function About() {
    const { personalInfo, skills } = portfolioData;
    const allSkills = [
        ...skills.Frontend,
        ...skills["Backend and Database"]
    ];

    return (
        <section
            id="about"
            className="relative py-24 lg:py-24 overflow-hidden bg-background"
            data-story-section
        >
            <div className="section-wrap relative z-10">
                <SectionHeading
                    eyebrow="Introduction"
                    title="About *Me*"
                    description="Professional summary and technical foundations."
                    align="center"
                    className="mb-20"
                />

                <div className="grid gap-16 lg:grid-cols-[450px_1fr] items-start max-w-7xl mx-auto">

                    <div className="relative group">
                        <Tape className="-top-4 -left-4 z-20" rotate={-15} color="rgba(78,59,49,0.15)" />
                        <Tape className="-bottom-4 -right-4 z-20" rotate={165} color="rgba(217,67,67,0.12)" />

                        <div className="paper-card p-6 relative bg-white shadow-2xl">
                            <div className="relative aspect-[4/5] overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 ease-in-out">
                                <img src="/about-bg.png" alt={personalInfo.name} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity" />
                            </div>

                            <div className="mt-6 flex items-center justify-between border-t border-dashed border-border pt-4">
                                <div className="mono text-[11px] text-foreground font-black uppercase tracking-tighter">
                                    IMG_REF: {personalInfo.name.split(' ')[0].toUpperCase()}_V1.0
                                </div>
                                <div className="flex gap-2">
                                    {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/30" />)}
                                </div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ rotate: 10, scale: 0.9 }}
                            whileInView={{ rotate: -8, scale: 1.1 }}
                            className="absolute -bottom-8 -left-8 z-30"
                        >
                            <Sticker className="bg-primary text-white border-2 border-white px-6 py-4 shadow-2xl font-black text-xl" rotate={-8}>
                                {personalInfo.title.split(' ')[0] === "Senior" ? "SENIOR" : "EXPERT"}
                            </Sticker>
                        </motion.div>
                    </div>
                    <div className="flex flex-col pt-4">
                        <div className="mono text-[12px] font-black text-primary mb-8 flex items-center gap-3">
                            <FileText size={18} /> 001_BIOGRAPHY_RAW.DOC
                        </div>

                        <div className="space-y-8 mb-12">
                            <Typewriter
                                text={personalInfo.bio || `I build responsive, production-ready web applications with strong UI quality, clean architecture, and reliable performance. My focus is creating products that are easy to use, easy to maintain, and aligned with business goals.`}
                                className="text-lg font-sans text-foreground leading-relaxed font-medium tracking-wider"
                                speed={0.015}
                            />

                            <Typewriter
                                text={`With 3+ years of delivering production projects at Mercu — across healthcare, education, CRM, and apartment management — I bring full-stack experience and end-to-end ownership to every product I work on.`}
                                className="text-lg font-sans text-foreground leading-relaxed font-medium tracking-wider"
                                speed={0.015}
                                delay={1.5}
                            />
                        </div>

                        <div className="paper-card p-10 relative mb-12 overflow-hidden bg-[#fafafa] border-l-8 border-primary">
                            <div className="absolute top-0 right-0 p-6 mono text-lg text-foreground/60 font-black">STACK</div>
                            <h4 className="mono text-sm font-black text-foreground uppercase tracking-[0.3em] mb-8 border-b border-dashed border-border pb-4">TECHNICAL SKILLS</h4>

                            <div className="flex flex-wrap gap-4">
                                {allSkills.map((skill) => {
                                    const isHot = HOT_SKILLS.includes(skill);
                                    return (
                                        <motion.span
                                            key={skill}
                                            whileHover={{ y: -4, rotate: Math.random() * 4 - 2, scale: 1.05 }}
                                            className={cn(
                                                "px-6 py-3 text-xs font-black mono border-2 transition-all cursor-default shadow-[4px_4px_0px_rgba(0,0,0,0.05)]",
                                                isHot
                                                    ? "bg-white border-primary text-primary shadow-[4px_4px_0px_hsl(var(--primary))]"
                                                    : "bg-white border-border text-foreground hover:border-primary/40"
                                            )}
                                        >
                                            {skill.toUpperCase()}
                                        </motion.span>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-8">
                            <a
                                href="#contact"
                                className="bg-foreground text-background px-12 py-5 font-black uppercase tracking-[0.2em] transition-all hover:bg-primary hover:text-white shadow-[6px_6px_0px_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0px_hsl(var(--primary))]"
                            >
                                Contact Personnel
                            </a>
                            <a
                                href="/OS_RESUME_V2.pdf"
                                download
                                className="flex items-center gap-3 mono text-sm font-black text-foreground hover:text-primary transition-all group"
                            >
                                <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                                <span className="border-b-2 border-primary/20 group-hover:border-primary transition-colors">RESUME.PDF</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}