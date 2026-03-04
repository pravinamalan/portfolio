import * as React from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export default function TiltCard({ children, className, intensity = 12, glare = true, ...props }) {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useLayoutEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

    const springConfig = { damping: 25, stiffness: 60, mass: 1, restDelta: 0.001 };
    const rotateX = useSpring(useTransform(y, [0, 1], [intensity, -intensity]), springConfig);
    const rotateY = useSpring(useTransform(x, [0, 1], [-intensity, intensity]), springConfig);

    // Smooth glare effect
    const glareOpacity = useSpring(0, { damping: 25, stiffness: 100 });
    const glareX = useSpring(50, springConfig);
    const glareY = useSpring(50, springConfig);

    function onMouseMove(event) {
        if (isMobile) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        x.set(px);
        y.set(py);
        glareX.set(px * 100);
        glareY.set(py * 100);
        glareOpacity.set(1);
    }

    function onMouseLeave() {
        x.set(0.5);
        y.set(0.5);
        glareOpacity.set(0);
    }

    const glareBackground = useTransform([glareX, glareY], ([gx, gy]) =>
        `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.18), rgba(255,255,255,0) 65%)`
    );

    return (
        <motion.div
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className={cn("relative", !isMobile && "perspective-1000", className)}
            style={{
                rotateX: isMobile ? 0 : rotateX,
                rotateY: isMobile ? 0 : rotateY,
                transformStyle: "preserve-3d",
            }}
            {...props}
        >
            {glare && !isMobile && (
                <motion.div
                    className="pointer-events-none absolute inset-0 rounded-[inherit] z-20"
                    style={{
                        opacity: glareOpacity,
                        background: glareBackground,
                    }}
                    aria-hidden="true"
                />
            )}
            <div className="relative z-10 h-full w-full" style={{ transform: isMobile ? "none" : "translateZ(1px)" }}>
                {children}
            </div>
        </motion.div>
    );
}
