import AnimatedCounter from "@/components/AnimatedCounter";
import portfolioData from "@/data/portfolioData.json";

export default function Stats() {
    const { stats } = portfolioData;

    return (
        <section className="py-24 lg:py-32 relative overflow-hidden" data-story-section>
            <div className="section-wrap relative z-10">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => {
                        const match = stat.value.toString().match(/^([\d.]+)(.*)$/);
                        const number = match ? Number.parseFloat(match[1]) : 0;
                        const suffix = match ? match[2] : "";

                        return (
                            <div
                                key={stat.label}
                                className="surface-panel rounded-3xl p-6 sm:p-8 text-center border border-white/5 hover:border-primary/20 transition-colors"
                                data-story-item
                                data-story-panel
                                data-tilt-card
                            >
                                <p className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
                                    <AnimatedCounter value={number} suffix={suffix} />
                                </p>
                                <p className="mt-3 text-xs uppercase tracking-[0.2em] font-bold text-primary/70">
                                    {stat.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
