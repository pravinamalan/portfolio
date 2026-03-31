import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/SectionHeading";
import Tape from "@/components/ui/Tape";

const STEPS = [
    {
        phase: "01",
        title: "The *Blueprint*",
        label: "STRATEGY & DESIGN",
        description: "Crafting visually stunning and highly intuitive user interfaces with a focus on user experience and modern aesthetics.",
    },
    {
        phase: "02",
        title: "The *Assembly*",
        label: "DEVELOPMENT",
        description: "Transforming designs into robust, scalable applications using cutting-edge technologies and best coding practices.",
    },
    {
        phase: "03",
        title: "The *Release*",
        label: "DEPLOYMENT",
        description: "Ensuring your applications are live, secure, and accessible to everyone, with CI/CD and cloud-native solutions.",
    },
    {
        phase: "04",
        title: "The *Tune-Up*",
        label: "OPTIMIZATION",
        description: "Fine-tuning every aspect of performance to deliver lightning-fast experiences that keep users engaged.",
    }
];

export default function ScrollSequence() {
    return (
        <section id="process" className="py-24 lg:py-32 relative overflow-hidden bg-background" data-story-section>
            <div className="section-wrap">
                <SectionHeading
                    eyebrow="Workflow"
                    title="The *Process*"
                    description="A structured approach to building high-performance digital products."
                    align="center"
                    className="mb-24"
                />

                <div className="max-w-4xl mx-auto space-y-12">
                    {STEPS.map((step, index) => (
                        <motion.div
                            key={step.phase}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={cn(
                                "relative flex flex-col md:flex-row items-center gap-12",
                                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            )}
                        >
                            <div className="w-full md:w-1/2">
                                <div className="paper-card p-10 relative bg-white group hover:rotate-1 transition-transform">
                                    <Tape className="-top-2 left-10" rotate={-5} color="rgba(78,59,49,0.1)" />
                                    
                                    <div className="mono text-[10px] font-bold text-primary/60 mb-4 tracking-widest uppercase">
                                        PHASE_{step.phase} • {step.label}
                                    </div>
                                    
                                    <h3 className="font-display text-3xl font-extrabold text-foreground mb-6">
                                        <div dangerouslySetInnerHTML={{ __html: step.title.replace(/\*(.*?)\*/g, '<span class="text-primary italic">$1</span>') }} />
                                    </h3>

                                    <p className="font-sans text-[0.95rem] leading-relaxed text-foreground/60 italic">
                                        "{step.description}"
                                    </p>

                                    <div className="mt-8 pt-6 border-t border-dashed border-border flex justify-between">
                                        <div className="flex gap-1">
                                            {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-primary/20" />)}
                                        </div>
                                        <div className="mono text-[8px] font-bold text-foreground/10">BLUEPRINT_SV_{step.phase}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden md:flex w-1/2 items-center justify-center">
                                <div className="font-display text-[10rem] font-black text-foreground/20 select-none leading-none">
                                    {step.phase}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
