import * as React from "react";
import { useLocation } from "wouter";
import { Mail, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Background from "@/components/Background";
import MagneticButton from "@/components/MagneticButton";
export default function Contact() {
    const [, setLocation] = useLocation();

    // Simple handle for back button
    // complex form logic removed since we are static now

    return (<>
        <Seo title="Contact — Frontend Developer" description="Get in touch for frontend development opportunities." />
        <Background />
        <SiteNav />


        <main className="relative z-10">
            <section className="mx-auto max-w-7xl px-4 pt-14 pb-16 sm:px-6 lg:px-8" data-testid="contact">
                <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                    <div className="lg:col-span-5">
                        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 sm:p-10 shadow-[0_30px_110px_hsl(0_0%_0%/0.55)]">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground">
                                <Mail className="h-3.5 w-3.5 text-primary" />
                                Contact
                            </div>

                            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">
                                Let's build something great.
                            </h1>
                            <p className="mt-3 text-sm text-muted-foreground">
                                I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>

                            <div className="mt-7">
                                <MagneticButton variant="secondary" size="sm" data-testid="contact-back-home" onClick={() => {
                                    setLocation("/");
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }}>
                                    Back to overview
                                </MagneticButton>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8 shadow-[0_30px_110px_hsl(0_0%_0%/0.55)]">
                            <div className="flex flex-col items-center justify-center py-10 text-center">
                                <Mail className="h-12 w-12 text-primary mb-4" />
                                <h3 className="text-2xl font-semibold">Get in Touch</h3>
                                <p className="mt-2 text-muted-foreground max-w-md">
                                    Feel free to reach out directly via email. I look forward to hearing from you.
                                </p>
                                <div className="mt-6">
                                    <MagneticButton variant="primary" size="lg" onClick={() => {
                                        window.location.href = "mailto:contact@example.com";
                                    }}>
                                        Send Email <ArrowRight className="h-4 w-4 inline-block ml-1" />
                                    </MagneticButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <SiteFooter />
    </>);
}
