import { motion } from "framer-motion";
import { MapPin, Briefcase, Clock, FileText, Send, Github as GithubIcon, Linkedin as LinkedinIcon, Mail as MailIcon, Calculator, Pin } from "lucide-react";
import portfolioData from "@/data/portfolioData.json";
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
                        initialX={350}
                        initialY={120}
                        initialRotate={-8}
                        color="#fef08a"
                        className="hidden xl:flex z-50"
                    >
                        <Pin className="mb-2 text-red-500" size={20} />
                        <p>Open to <br /> Full-time Opportunities</p>
                    </DraggableNote>

                    <motion.div
                        drag
                        initial={{ x: 1400, y: 250, rotate: 10 }}
                        className="absolute cursor-grab active:cursor-grabbing hidden xl:block"
                    >
                        <Sticker importance="high" className="bg-[#d94343] text-white">
                           <a href="#contact"># HIRE-ME NOW!</a>
                        </Sticker>
                    </motion.div>
                    <div className="absolute hidden lg:block right-10 lg:right-[10%] xl:right-[10%] top-1/3 z-20 select-none pointer-events-none transform rotate-6 scale-90 lg:scale-105 xl:scale-110">
                        <motion.div 
                            initial={{ y: 20, opacity: 0, rotate: 12 }}
                            animate={{ y: 0, opacity: 1, rotate: 6 }}
                            transition={{ duration: 1.2, delay: 0.8 }}
                            className="relative w-56 h-72 bg-[#fffeff] shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.2)] border-x border-t border-black/5 flex flex-col p-6 overflow-hidden"
                            style={{
                                clipPath: 'polygon(0% 0%, 100% 0%, 100% 92%, 94% 97%, 88% 92%, 82% 97%, 76% 92%, 70% 97%, 64% 92%, 58% 97%, 52% 92%, 46% 97%, 40% 92%, 34% 97%, 28% 92%, 22% 97%, 16% 92%, 10% 97%, 4% 92%, 0% 97%)',
                                backgroundImage: `
                                    linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
                                `,
                                backgroundSize: '12px 12px'
                            }}
                        >
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-white/40 backdrop-blur-sm border border-white/20 opacity-60 rotate-2 z-30" />

                            <div className="mono text-[8px] font-black tracking-widest text-foreground/80 uppercase mb-6 flex justify-between">
                                <span>Ref_No: 004/SYS</span>
                                <span>Draft_Mode</span>
                            </div>

                            <svg viewBox="0 0 100 100" className="w-full h-full text-blue-600/40 stroke-current stroke-[1.5] fill-none overflow-visible">
                                <motion.rect 
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 2, delay: 1 }}
                                    x="0" y="0" width="80" height="25" rx="2" 
                                />
                                <motion.circle 
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1, delay: 1.5 }}
                                    cx="15" cy="12.5" r="6" 
                                />
                                <motion.line x1="30" y1="9" x2="70" y2="9" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.8 }} />
                                <motion.line x1="30" y1="16" x2="60" y2="16" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.0 }} />

                                <motion.rect x="0" y="35" width="35" height="35" rx="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.2 }} />
                                <motion.rect x="45" y="35" width="35" height="35" rx="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.4 }} />

                                <motion.path 
                                    d="M -10 90 Q 40 120 90 90" 
                                    stroke="#D94343" 
                                    strokeWidth="3" 
                                    strokeDasharray="4 4"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 0.6 }}
                                    transition={{ duration: 1.5, delay: 2.6 }}
                                />
                            </svg>

                            <div className="mt-auto mono text-[10px] font-bold text-foreground/80 text-right italic">
                                Built for high fidelity_
                            </div>
                        </motion.div>
                    </div>
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
                    <div className="mono text-sm font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 border border-primary/20 px-4 py-1.5 rounded-sm">
                        {personalInfo.title}
                    </div>
                </motion.div>

                <div className="overflow-hidden">
                    <h1 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-extrabold leading-[1.2] tracking-[0.04em] text-foreground">
                        BUILDING <br />
                        <span className="text-primary italic">PRODUCTION-READY </span> WEB APPLICATIONS..
                    </h1>
                </div>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mb-10 mt-10 max-w-[900px] text-[20px] text-foreground/70 leading-loose font-sans"
                >
                    I am <span className="font-bold text-foreground underline decoration-primary/30 uppercase">{personalInfo.name}</span>, I build responsive, production-ready web applications
                    <span className="text-foreground font-medium"> with strong UI quality, clean architecture, and reliable performance </span> across
                    <span className="text-foreground font-medium italic"> healthcare, education, CRM, and apartment management domains.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1, delay: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-6 mb-12"
                >
                    <button className="bg-foreground text-background px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all hover:bg-primary hover:text-white active:scale-95 shadow-[4px_4px_0px_#ccc] hover:shadow-[2px_2px_0px_#ccc]">
                        <a href="#contact">Hire Me</a>
                    </button>

                    <a 
                        href="/OS_RESUME_V2.pdf" 
                        download 
                        className="flex items-center gap-2 border border-foreground/20 px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all hover:bg-foreground/5"
                    >
                        <FileText size={18} /> CV
                    </a>

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
