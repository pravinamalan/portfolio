import {
    LayoutTemplate,
    ServerCog,
    RefreshCcw,
    LayoutDashboard,
    Smartphone,
    Gauge,
    Hash
} from "lucide-react";
import portfolioData from "@/data/portfolioData.json";
import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { useRef } from "react";
import Tape from "@/components/ui/Tape";

const iconMap = {
    "Frontend Development": LayoutTemplate,
    "Backend Development": ServerCog,
    "MERN Stack Development": Smartphone,
    "Legacy Code Migration": RefreshCcw,
    "Dashboard and CRM Development": LayoutDashboard,
    "Performance Optimization": Gauge,
};

export default function Services() {
    const services = portfolioData.expertise || [];

    return (
        <section id="services" className="py-24 lg:py-24 relative overflow-hidden bg-background" data-story-section>
            <div className="section-wrap">
                <SectionHeading
                    eyebrow="Capabilities"
                    title="Work ~Orders~"
                    description="Professional development services with high-fidelity business impact."
                    align="center"
                    className="mb-32"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {services.map((service, idx) => {
                        const Icon = iconMap[service.title] ?? LayoutTemplate;
                        return (
                            <StaggerItem key={service.title} data-story-item>
                                <div className="paper-card p-10 h-full relative group bg-white hover:-rotate-1 transition-transform duration-500">
                                    <Tape className="-top-2 left-10" rotate={-5} color="rgba(78,59,49,0.1)" />

                                    <div className="flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-8">
                                            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm text-primary">
                                                <Icon size={24} />
                                            </div>
                                            <div className="mono text-[10px] font-bold text-foreground/40 uppercase tracking-widest text-right">
                                                TICKET_ID: 00{idx + 1}
                                            </div>
                                        </div>

                                        <h3 className="font-display text-xl font-extrabold text-foreground mb-4">
                                            {service.title}
                                        </h3>

                                        <div className="w-8 h-1 bg-primary/20 mb-6" />

                                        <p className="font-sans text-[1rem] leading-relaxed text-foreground/60 italic">
                                            "{service.description}"
                                        </p>

                                        <div className="mt-auto pt-8 border-t-2 border-dashed border-border flex justify-between items-center">
                                            <div className="mono text-xs font-bold text-foreground/60 uppercase tracking-widest">SERVICE_STATUS: ACTIVE</div>
                                            <div className="w-4 h-4 bg-primary/10 rounded-full animate-pulse" />
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
