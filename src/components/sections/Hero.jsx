import { motion } from "framer-motion";
import { MapPin, Briefcase, Clock, FileText, Send, Github as GithubIcon, Linkedin as LinkedinIcon, Mail as MailIcon, Calculator, Pin } from "lucide-react";
import portfolioData from "@/data/portfolioData.json";
import TextType from "@/components/TextType";
import Sticker from "@/components/ui/Sticker";
import Tape from "@/components/ui/Tape";
import DraggableNote from "@/components/ui/DraggableNote";

export default function Hero() {
    const { personalInfo, stats, experience } = portfolioData;

    const infoChips = [
        { icon: Briefcase, label: "Frontend Engineer | React" },
        { icon: MapPin, label: personalInfo.location },
        { icon: Clock, label: stats[0].value + " Experience" },
    ];

    const socials = [
        { icon: GithubIcon, href: personalInfo.github ? `https://${personalInfo.github}` : "#", label: "GitHub" },
        { icon: LinkedinIcon, href: personalInfo.linkedin ? `https://${personalInfo.linkedin}` : "#", label: "LinkedIn" },
        { icon: MailIcon, href: `mailto:${personalInfo.email}`, label: "Email" },
    ];

    return (
        <section
            id="hero"
            className="relative lg:min-h-[100dvh] w-full flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden"
            data-story-section
        >
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="relative w-full h-full pointer-events-auto">
                    <DraggableNote
                        initialX={200}
                        initialY={100}
                        initialRotate={-8}
                        color="#fef08a"
                        className="hidden lg:flex"
                    >
                        <Pin className="mb-2 text-red-500" size={20} />
                        <p>Available for <br /> new projects</p>
                    </DraggableNote>

                    {/* <DraggableNote
                        initialX={450}
                        initialY={100}
                        initialRotate={8}
                        color="#bae6fd"
                        className="hidden lg:flex"
                    >
                        <Calculator className="mb-2 text-blue-600" size={20} />
                        <p className="mono font-bold text-xs">LOGIC + DESIGN</p>
                    </DraggableNote> */}

                    <motion.div
                        drag
                        initial={{ x: -500, y: 250, rotate: 15 }}
                        className="absolute cursor-grab active:cursor-grabbing hidden lg:block"
                    >
                        <Sticker importance="high" className="bg-[#d94343] text-white">
                            #PRO-DEV
                        </Sticker>
                    </motion.div>
                </div>
            </div>

            <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative mb-8"
                >
                    <Tape className="-top-4 -left-4" rotate={-15} />
                    <div className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 border border-primary/20 px-4 py-1.5 rounded-sm">
                        Frontend Engineer | Creative Technologist
                    </div>
                </motion.div>

                <div className="overflow-hidden">
                    <h1 className="font-display text-[clamp(2.5rem,8vw,7rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-foreground">
                        WEAVING <br />
                        <span className="text-primary italic">DIGITAL</span> MAGIC.
                    </h1>
                </div>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mb-10 max-w-[600px] text-lg text-foreground/70 leading-relaxed font-sans"
                >
                    I am <span className="font-bold text-foreground underline decoration-primary/30 uppercase">{personalInfo.name}</span>, a developer focused on
                    <span className="text-foreground font-medium"> tactile interfaces</span> and
                    <span className="text-foreground font-medium italic"> performance-first architectures</span>.
                    Merging retro aesthetics with modern tech.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1, delay: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-6 mb-12"
                >
                    <button className="bg-foreground text-background px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all hover:bg-primary hover:text-white active:scale-95 shadow-[4px_4px_0px_#ccc] hover:shadow-[2px_2px_0px_#ccc]">
                        Start Project
                    </button>

                    <button className="flex items-center gap-2 border border-foreground/20 px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all hover:bg-foreground/5">
                        <FileText size={18} /> CV
                    </button>

                    <div className="flex gap-4 ml-4">
                        {socials.map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                className="text-foreground/40 transition-colors hover:text-primary"
                                title={social.label}
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Index Cards Section (replacing glare hover) */}
            <div className="relative z-10 w-full max-w-5xl px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + (i * 0.1) }}
                        className="paper-card p-6 flex flex-col items-center justify-center relative overflow-hidden"
                    >
                        <Tape className="-top-3 left-1/2 -translate-x-1/2" rotate={i % 2 === 0 ? 2 : -2} />
                        <div className="text-4xl font-extrabold text-primary mb-2 mono tracking-tighter">
                            {stat.value}
                        </div>
                        <div className="mono text-[10px] uppercase font-bold text-foreground/40 tracking-widest">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
