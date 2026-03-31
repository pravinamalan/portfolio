import AnimatedCounter from "@/components/AnimatedCounter";
import portfolioData from "@/data/portfolioData.json";
import { motion } from "framer-motion";
import Tape from "@/components/ui/Tape";

export default function Stats() {
    const { stats } = portfolioData;

    return (
        <section className="py-24 relative overflow-hidden bg-background" data-story-section>
            <div className="section-wrap relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
                    {stats.map((stat, index) => {
                        const match = stat.value.toString().match(/^([\d.]+)(.*)$/);
                        const number = match ? Number.parseFloat(match[1]) : 0;
                        const suffix = match ? match[2] : "";

                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                className="paper-card p-12 text-center relative group bg-white shadow-2xl border-b-8 border-primary/20 hover:border-primary transition-all duration-700 hover:translate-y-[-8px]"
                            >
                                <Tape className="-top-4 left-1/2 -translate-x-1/2 scale-110" rotate={index % 2 === 0 ? 3 : -3} color="rgba(0,0,0,0.1)" />
                                
                                <div className="font-display text-6xl font-black text-foreground sm:text-7xl tracking-tighter leading-none mb-6 group-hover:text-primary transition-colors duration-500">
                                    <AnimatedCounter value={number} suffix={suffix} />
                                </div>

                                <div className="w-12 h-1.5 bg-primary/20 mx-auto mb-6 group-hover:w-20 group-hover:bg-primary transition-all duration-500" />

                                <div className="mono text-[12px] font-black uppercase tracking-[0.3em] text-foreground font-bold leading-[1.4] border-t-2 border-dashed border-border pt-4">
                                    {stat.label.toUpperCase()}
                                </div>

                                {/* Corner Decorative Data Points */}
                                <div className="absolute bottom-3 left-3 flex gap-1 opacity-20">
                                    {[1, 2].map(i => <div key={i} className="w-1 h-1 rounded-full bg-black" />)}
                                </div>
                                <div className="absolute bottom-3 right-3 flex gap-1 opacity-20">
                                    {[1, 2].map(i => <div key={i} className="w-1 h-1 rounded-full bg-black" />)}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
