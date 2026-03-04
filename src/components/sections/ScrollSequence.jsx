import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const STEPS = [
    {
        title: "I Design",
        description: "Crafting visually stunning and highly intuitive user interfaces with a focus on user experience and modern aesthetics.",
        color: "from-cyan-500 to-blue-500",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-full w-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l9.156-9.156a1.5 1.5 0 10-2.122-2.122L7.41 13.998c-.113.113-.2.253-.254.406L6.5 16.5l2.096-.656a.75.75 0 01.406-.254z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.14 4.12l4.243 4.243" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 19H5" />
            </svg>
        )
    },
    {
        title: "I Develop",
        description: "Transforming designs into robust, scalable applications using cutting-edge technologies and best coding practices.",
        color: "from-purple-500 to-indigo-500",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-full w-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
        )
    },
    {
        title: "I Deploy",
        description: "Ensuring your applications are live, secure, and accessible to everyone, with CI/CD and cloud-native solutions.",
        color: "from-indigo-500 to-cyan-500",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-full w-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
            </svg>
        )
    },
    {
        title: "I Optimize",
        description: "Fine-tuning every aspect of performance to deliver lightning-fast experiences that keep users engaged.",
        color: "from-emerald-500 to-teal-500",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-full w-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        )
    }
];

export default function ScrollSequence() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scrollProgress = useSpring(scrollYProgress, {
        stiffness: 45,
        damping: 25,
        mass: 1.2,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="relative h-[900vh]">
            <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                    <motion.h2
                        style={{ scale: useTransform(scrollProgress, [0, 1], [1, 3]) }}
                        className="text-[20vw] font-bold uppercase will-change-transform"
                    >
                        PROCESS
                    </motion.h2>
                </div>

                <div className="section-wrap relative h-full w-full">
                    {STEPS.map((step, index) => (
                        <StepItem
                            key={step.title}
                            step={step}
                            index={index}
                            progress={scrollProgress}
                        />
                    ))}
                </div>

                <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8">
                    {STEPS.map((_, index) => (
                        <ProgressDot
                            key={index}
                            index={index}
                            progress={scrollProgress}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function StepItem({ step, index, progress }) {
    const start = index / STEPS.length;
    const end = (index + 1) / STEPS.length;

    const opacity = useTransform(
        progress,
        [start, start + 0.05, end - 0.05, end],
        [0, 1, 1, 0]
    );

    const scale = useTransform(
        progress,
        [start, start + 0.1, end - 0.1, end],
        [0.8, 1, 1, 0.8]
    );

    const x = useTransform(
        progress,
        [start, start + 0.1, end - 0.1, end],
        [50, 0, 0, -50]
    );

    const pointerEvents = useTransform(
        progress,
        [start, start + 0.05, end - 0.05, end],
        ["none", "auto", "auto", "none"]
    );

    return (
        <motion.div
            style={{ opacity, scale, x, pointerEvents }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 will-change-[transform,opacity]"
        >
            <div className={cn(
                "mb-8 h-32 w-32 rounded-3xl bg-gradient-to-br p-6 text-white shadow-2xl shadow-primary/20 sm:h-48 sm:w-48 sm:p-10",
                step.color
            )}>
                {step.icon}
            </div>

            <h3 className="mb-4 text-4xl font-bold sm:text-6xl lg:text-7xl">
                <span className={cn("bg-gradient-to-r bg-clip-text text-transparent", step.color)}>
                    {step.title}
                </span>
            </h3>

            <p className="max-w-xl text-lg text-muted-foreground sm:text-xl">
                {step.description}
            </p>

            <div className="mt-12 flex items-center gap-4">
                <div className="h-px w-12 bg-white/10" />
                <span className="text-sm font-mono text-primary">0{index + 1}</span>
                <div className="h-px w-12 bg-white/10" />
            </div>
        </motion.div>
    );
}

function ProgressDot({ index, progress }) {
    const isActive = useTransform(
        progress,
        [index / STEPS.length, (index + 1) / STEPS.length],
        [0, 1]
    );

    return (
        <div className="relative h-2 w-2 rounded-full bg-white/10">
            <motion.div
                style={{ scale: isActive, opacity: isActive }}
                className="absolute inset-0 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]"
            />
        </div>
    );
}
