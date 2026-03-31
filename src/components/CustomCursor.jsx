import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [hoverState, setHoverState] = useState("default");

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 250, damping: 35 });
    const springY = useSpring(mouseY, { stiffness: 250, damping: 35 });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
        if (isTouchDevice) return;

        setIsVisible(true);
        document.body.style.cursor = "none";

        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isLink = target.closest("a") || target.closest("button");
            const isProjectCard = target.closest("[data-tilt-card]");

            if (isProjectCard) {
                setHoverState("project");
            } else if (isLink) {
                setHoverState("link");
            } else {
                setHoverState("default");
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            document.body.style.cursor = "auto";
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    if (!isVisible) return null;


    return (
        <div className="pointer-events-none fixed inset-0 z-[10000]">
            <motion.div
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                className="absolute flex items-center justify-center rounded-full bg-foreground border border-white/20"
                animate={{
                    width: hoverState === "project" ? 80 : 10,
                    height: hoverState === "project" ? 30 : 10,
                    borderRadius: hoverState === "project" ? "4px" : "50%",
                    scale: hoverState === "link" ? 3 : 1,
                    opacity: 1,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
                {hoverState === "project" && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mono text-[8px] font-bold uppercase tracking-widest text-background"
                    >
                        OPEN_FILE
                    </motion.span>
                )}
            </motion.div>
        </div>
    );
}
