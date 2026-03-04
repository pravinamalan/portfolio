import {
    LayoutTemplate,
    ServerCog,
    RefreshCcw,
    LayoutDashboard,
    Smartphone,
    Gauge,
} from "lucide-react";
import portfolioData from "@/data/portfolioData.json";
import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/Reveal";

const iconMap = {
    "Frontend Development": LayoutTemplate,
    "Backend Development": ServerCog,
    "Legacy Code Migration": RefreshCcw,
    "Dashboard & CRM Development": LayoutDashboard,
    "Responsive Web Design": Smartphone,
    "Performance Optimization": Gauge,
};

export default function Services() {
    const { services } = portfolioData;

    return (
        <section id="services" className="py-20 lg:py-24" data-story-section>
            <div className="section-wrap">
                <SectionHeading
                    eyebrow="Services"
                    title="How I Can Help"
                    description="Development services focused on shipping maintainable products with clear business impact."
                    align="center"
                    className="mb-12"
                />

                <Stagger className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service) => {
                        const Icon = iconMap[service.title] ?? LayoutTemplate;
                        return (
                            <StaggerItem key={service.title} data-story-item>
                                <article
                                    className="surface-panel h-full rounded-2xl sm:rounded-3xl p-5 sm:p-6"
                                    data-story-panel
                                    data-tilt-card
                                >
                                    <span className="grid h-12 w-12 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                                        <Icon size={20} />
                                    </span>
                                    <h3 className="mt-5 text-xl font-semibold text-foreground">{service.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                        {service.description}
                                    </p>
                                </article>
                            </StaggerItem>
                        );
                    })}
                </Stagger>
            </div>
        </section>
    );
}
