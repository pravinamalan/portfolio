import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function SectionHeading({
    eyebrow,
    title,
    description,
    align = "left",
    className,
}) {
    const renderTitle = (text) => {
        if (typeof text !== "string") return text;
        
        const parts = text.split(/(\*.*?\*|~.*?~|_.*?_)/g);
        
        return parts.map((part, i) => {
            if (part.startsWith("*") && part.endsWith("*")) {
                return (
                    <span key={i} className="marker-circle mx-2 px-1">
                        {part.slice(1, -1)}
                    </span>
                );
            }
            if (part.startsWith("~") && part.endsWith("~")) {
                return (
                    <span key={i} className="wavy-underline mx-2 pb-1">
                        {part.slice(1, -1)}
                    </span>
                );
            }
            if (part.startsWith("_") && part.endsWith("_")) {
                return <span key={i} className="italic text-primary">{part.slice(1, -1)}</span>;
            }
            return part;
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.34, 1.2, 0.64, 1] }}
            className={cn(align === "center" && "text-center flex flex-col items-center", className)}
        >
            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-foreground mb-6">
                <div className="h-[1.5px] w-12 bg-foreground/10" />
                {eyebrow}
                <div className="h-[1.5px] w-12 bg-foreground/10" />
            </div>

            <h2 className="font-display text-[clamp(2.1rem,3vw,3.5rem)] font-black leading-[0.95] tracking-wider text-foreground">
                {renderTitle(title)}
            </h2>

            {description && (
                <p
                    className={cn(
                        "mt-8 font-sans text-lg sm:text-xl font-bold leading-relaxed text-foreground/60 max-w-3xl",
                        align === "center" && "mx-auto"
                    )}
                >
                    {description}
                </p>
            )}
        </motion.div>
    );
}

export default SectionHeading;
