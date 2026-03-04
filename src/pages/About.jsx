import { useLocation } from "wouter";
import Seo from "@/components/Seo";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Background from "@/components/Background";
import MagneticButton from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";
import { BadgeCheck, Crown, Sparkles } from "lucide-react";
export default function About() {
    const [, setLocation] = useLocation();
    return (<>
        <Seo title="About — Pravin Amalan" description="A short company page for ApartEase: premium community operations, resident engagement, and analytics—designed with luxury-grade UI." />
        <Background />
        <SiteNav />

        <main className="relative z-10">
            <section className="mx-auto max-w-7xl px-4 pt-14 pb-16 sm:px-6 lg:px-8" data-testid="about">
                <Reveal>
                    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 sm:p-10 shadow-[0_30px_110px_hsl(0_0%_0%/0.55)]">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground">
                            <Crown className="h-3.5 w-3.5 text-primary" />
                            About Me
                        </div>
                        <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">
                            Passionate about building exceptional digital experiences.
                        </h1>
                        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                            I am a Frontend Developer with over 3 years of experience in crafting high-performance, visually stunning web applications.
                            My philosophy revolves around the belief that code should be as beautiful as the design it brings to life.
                            I specialize in React, modern JavaScript, and creating intuitive user interfaces that delight users.
                        </p>

                        <div className="mt-8 grid gap-4 md:grid-cols-3">
                            {[
                                { icon: Sparkles, title: "Attention to Detail", desc: "Every pixel matters. I strive for perfection in every layout and interaction." },
                                { icon: BadgeCheck, title: "Clean Code", desc: "Writing maintainable, scalable, and efficient code is my standard." },
                                { icon: Crown, title: "User-Centric", desc: "I prioritize the user experience, ensuring accessibility and usability for all." },
                            ].map((c) => {
                                const Icon = c.icon;
                                return (<div key={c.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.05]">
                                        <Icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <div className="mt-4 text-lg font-semibold">{c.title}</div>
                                    <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                                </div>);
                            })}
                        </div>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <MagneticButton variant="primary" size="lg" data-testid="about-cta-contact" onClick={() => {
                                setLocation("/contact");
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }}>
                                Get in Touch
                            </MagneticButton>
                            <MagneticButton variant="secondary" size="lg" data-testid="about-cta-home" onClick={() => {
                                setLocation("/");
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }}>
                                View Portfolio
                            </MagneticButton>
                        </div>
                    </div>
                </Reveal>
            </section>
        </main>

        <SiteFooter />
    </>);
}
