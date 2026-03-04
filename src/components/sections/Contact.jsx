import {
    ArrowUpRight,
    CalendarDays,
    Github,
    Linkedin,
    Mail,
    Send
} from "lucide-react";
import portfolioData from "@/data/portfolioData.json";
import SectionHeading from "@/components/SectionHeading";
import MagneticButton from "@/components/MagneticButton";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export default function Contact() {
    const { personalInfo } = portfolioData;

    const contactCards = [
        {
            icon: Mail,
            label: "Email",
            value: personalInfo.email,
            href: `mailto:${personalInfo.email}`,
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: personalInfo.linkedin,
            href: `https://${personalInfo.linkedin}`,
        },
        {
            icon: Github,
            label: "GitHub",
            value: personalInfo.github,
            href: `https://${personalInfo.github}`,
        },
    ];

    return (
        <section id="contact" className="pb-24 pt-20 lg:pb-32 lg:pt-24 overflow-hidden" data-story-section>
            <div className="section-wrap">
                <SectionHeading
                    eyebrow="Contact"
                    title="Let's Build Something Valuable"
                    description="I am actively available for full-time roles and selective freelance projects. Reach out and I will respond quickly."
                    align="center"
                    className="mb-16"
                />

                <div className="grid gap-5 sm:gap-8 lg:gap-12 lg:grid-cols-[1.15fr_0.85fr] items-start">
                    <Reveal
                        y={15}
                        className="surface-panel rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-10 lg:p-14 border border-white/5"
                        data-story-item
                        data-story-panel
                        data-tilt-card
                    >
                        <h3 className="text-xl sm:text-3xl font-bold text-foreground">Write a Message</h3>
                        <p className="mt-3 text-[13px] sm:text-base text-muted-foreground leading-relaxed">
                            Have a specific project or role in mind? Drop the details here.
                        </p>

                        <form className="mt-6 sm:mt-12 space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-[10px] sm:text-xs uppercase tracking-widest text-primary/70 font-bold ml-1">Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] sm:text-xs uppercase tracking-widest text-primary/70 font-bold ml-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] sm:text-xs uppercase tracking-widest text-primary/70 font-bold ml-1">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all resize-none"
                                />
                            </div>

                            <MagneticButton className="w-full py-4 sm:py-5 text-sm sm:text-lg font-bold" strength={10}>
                                Send Message <Send size={16} className="ml-2" />
                            </MagneticButton>
                        </form>
                    </Reveal>

                    <div className="flex flex-col gap-5 sm:gap-8">
                        <Stagger className="grid gap-3 sm:gap-4">
                            {contactCards.map((item) => (
                                <StaggerItem key={item.label}>
                                    <article
                                        className="surface-panel rounded-xl sm:rounded-3xl p-4 sm:p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 border border-white/5 group"
                                        data-tilt-card
                                    >
                                        <div className="flex items-center gap-3 sm:gap-5">
                                            <span className="grid h-10 w-10 sm:h-14 sm:w-14 place-items-center rounded-lg sm:rounded-2xl border border-primary/25 bg-primary/10 text-primary group-hover:scale-110 transition-transform shrink-0">
                                                <item.icon size={20} className="sm:scale-[1.2]" />
                                            </span>
                                            <div className="min-w-0 flex-1">
                                                <p className="text-[9px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                                    {item.label}
                                                </p>
                                                <a
                                                    href={item.href}
                                                    target={item.href.startsWith("http") ? "_blank" : undefined}
                                                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                                                    className="mt-0.5 flex items-center gap-1 text-[13px] sm:text-lg font-bold text-foreground transition-colors hover:text-primary"
                                                >
                                                    <span className="truncate block">{item.value}</span>
                                                    <ArrowUpRight size={16} className="shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                </StaggerItem>
                            ))}
                        </Stagger>

                        <Reveal
                            y={10}
                            delay={0.4}
                            className="surface-panel rounded-xl sm:rounded-3xl p-5 sm:p-10 border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.05))]"
                        >
                            <p className="inline-flex items-center gap-2 text-sm sm:text-lg font-bold text-foreground">
                                <CalendarDays size={18} className="text-primary" />
                                Availability
                            </p>
                            <p className="mt-3 sm:mt-6 text-[13px] sm:text-lg text-muted-foreground leading-relaxed">
                                I am currently open for full-time opportunities and strategic freelance projects.
                                Based in {personalInfo.location}, working globally.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
