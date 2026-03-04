import { useRef, useLayoutEffect } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextScramble from "@/components/TextScramble";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

function SectionHeading({
    eyebrow,
    title,
    description,
    align = "left",
    className,
    "data-testid": dataTestId,
}) {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(containerRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 95%",
                        once: true
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className={cn(align === "center" && "text-center", className)}
            data-testid={dataTestId}
        >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.14em] text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                {eyebrow}
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                <TextScramble text={title} />
            </h2>
            <p
                className={cn(
                    "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
                    align === "center" && "mx-auto",
                )}
            >
                {description}
            </p>
        </div>
    );
}

export default SectionHeading;
