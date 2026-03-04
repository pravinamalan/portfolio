import { useEffect, useRef } from "react";
import {
    ArrowRight,
    BriefcaseBusiness,
    Download,
    Github,
    Linkedin,
    Mail,
    MapPin,
} from "lucide-react";
import portfolioData from "@/data/portfolioData.json";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import TextScramble from "@/components/TextScramble";

export default function Hero() {
    const { personalInfo, stats, experience } = portfolioData;
    const currentRole = experience[0];

    const heroRef = useRef(null);

    return (
        <section
            ref={heroRef}
            id="hero"
            className="relative flex min-h-[100dvh] lg:h-screen flex-col items-center justify-start lg:justify-center overflow-visible pb-2 pt-32 sm:pt-40 lg:pt-40"
            data-story-section
        >
            <div className="absolute inset-0 z-0 bg-transparent pointer-events-none" />

            <div className="absolute inset-0 z-10 opacity-30 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-cyan-500/20 blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-[150px]" />

                <div className="absolute top-[15%] right-[3%] opacity-20 rotate-[35deg]">
                    <MapPin size={120} className="text-primary" strokeWidth={1} />
                </div>
                <div className="absolute bottom-[20%] left-[5%] opacity-20 -rotate-12">
                    <BriefcaseBusiness size={140} className="text-cyan-500" strokeWidth={1} />
                </div>
            </div>

            <div className="section-wrap relative z-30">
                <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                    <Stagger className="space-y-4 sm:space-y-8">
                        <StaggerItem data-story-item>
                            <span className="chip border-primary/30 text-primary">
                                Open to Full-time and Freelance Projects
                            </span>
                        </StaggerItem>

                        <StaggerItem data-story-item>
                            <h1 className="max-w-3xl text-[28px] sm:text-5xl lg:text-3xl xl:text-4xl font-semibold leading-[1.1]">
                                Building high-performance products with clean UI and reliable engineering.
                                <span className="mt-3 block text-[38px] sm:text-7xl lg:text-6xl xl:text-7xl">
                                    <TextScramble
                                        text={personalInfo.name}
                                        characterClassName="headline-gradient"
                                        variant="zoom"
                                    />
                                </span>
                            </h1>
                        </StaggerItem>

                        <StaggerItem data-story-item>
                            <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-lg">
                                {personalInfo.bio}
                            </p>
                        </StaggerItem>

                        <StaggerItem className="flex flex-wrap gap-3" data-story-item>
                            <span className="chip">
                                <BriefcaseBusiness size={14} className="mr-2" />
                                {personalInfo.title}
                            </span>
                            <span className="chip">
                                <MapPin size={14} className="mr-2" />
                                {personalInfo.location}
                            </span>
                            <span className="chip">{stats[0].value} experience</span>
                        </StaggerItem>

                        <StaggerItem className="flex flex-wrap gap-3 pt-2" data-story-item>
                            <a href="#contact">
                                <MagneticButton size="lg">
                                    Start a Conversation <ArrowRight size={16} />
                                </MagneticButton>
                            </a>
                            <a href="/resume.pdf" download="Pravin_Amalan_Resume.pdf">
                                <MagneticButton variant="secondary" size="lg">
                                    Download Resume <Download size={16} />
                                </MagneticButton>
                            </a>
                        </StaggerItem>

                        <StaggerItem className="flex items-center gap-4 pt-2" data-story-item>
                            <a
                                href={`https://${personalInfo.github}`}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full border border-white/10 p-2.5 text-muted-foreground transition-colors hover:text-foreground"
                                aria-label="GitHub"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href={`https://${personalInfo.linkedin}`}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full border border-white/10 p-2.5 text-muted-foreground transition-colors hover:text-foreground"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="rounded-full border border-white/10 p-2.5 text-muted-foreground transition-colors hover:text-foreground"
                                aria-label="Email"
                            >
                                <Mail size={18} />
                            </a>
                        </StaggerItem>
                    </Stagger>

                    <Reveal
                        className="surface-panel sm:animate-float-slow rounded-3xl p-5 sm:p-8"
                        delay={0.2}
                        data-story-item
                        data-tilt-card
                    >
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                                Professional Snapshot
                            </p>
                            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.85)]" />
                        </div>

                        <div className="space-y-6 pt-4">
                            <div>
                                <p className="text-sm text-muted-foreground">Current Role</p>
                                <p className="mt-1 text-lg font-semibold text-foreground">
                                    {currentRole.position} at {currentRole.company}
                                </p>
                            </div>

                            <div className="grid gap-3 grid-cols-2">
                                {stats.map((item) => (
                                    <div
                                        key={item.label}
                                        className="rounded-2xl border border-white/10 bg-white/[0.02] p-3 sm:p-4"
                                        data-tilt-card
                                    >
                                        <p className="text-xl sm:text-2xl font-semibold text-foreground">{item.value}</p>
                                        <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.12em] text-muted-foreground">
                                            {item.label}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <ul className="space-y-2">
                                {currentRole.achievements.slice(0, 3).map((point) => (
                                    <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 top-0 z-40 pointer-events-none overflow-hidden">
                <div className="absolute top-[70%] right-10 h-16 w-16 border-2 border-cyan-500/30 rounded-lg rotate-12" />
                <div className="absolute top-1/4 left-10 h-12 w-12 border-2 border-primary/30 rounded-full" />
                <div className="absolute bottom-20 left-1/2 h-20 w-1 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
        </section>
    );
}
