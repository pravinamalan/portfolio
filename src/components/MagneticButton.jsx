import * as React from "react";
import { motion, useReducedMotion, useSpring, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export default function MagneticButton({
    className,
    strength = 16,
    variant = "primary",
    size = "md",
    children,
    ...props
}) {
    const reduceMotion = useReducedMotion();
    const ref = React.useRef(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const isMobile = React.useMemo(() => {
        if (typeof window === "undefined") return false;
        return window.matchMedia("(pointer: coarse)").matches;
    }, []);

    const onMouseMove = (event) => {
        if (reduceMotion || isMobile) return;
        const element = ref.current;
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        mouseX.set((event.clientX - centerX) / strength);
        mouseY.set((event.clientY - centerY) / strength);
    };

    const onMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const sizes = {
        sm: "rounded-xl px-4 py-2 text-sm",
        md: "rounded-xl px-5 py-2.5 text-sm",
        lg: "rounded-2xl px-6 py-3 text-sm sm:text-base",
    };

    const variants = {
        primary:
            "border border-primary/30 bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(197_94%_52%))] text-primary-foreground shadow-[0_16px_38px_hsl(201_100%_12%/0.45)] hover:brightness-110",
        secondary:
            "border border-white/12 bg-white/[0.04] text-foreground hover:bg-white/[0.08]",
        ghost:
            "border border-white/10 bg-transparent text-foreground hover:bg-white/[0.05]",
    };

    return (
        <motion.button
            ref={ref}
            type="button"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            whileTap={{ scale: 0.98 }}
            style={reduceMotion ? {} : { x, y }}
            className={cn(
                "focus-premium inline-flex items-center justify-center gap-2 font-medium",
                sizes[size],
                variants[variant],
                className,
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
}
