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
        <div className="pointer-events-none fixed inset-0 z-[10000] mix-blend-difference">
            <motion.div
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                className="absolute flex items-center justify-center rounded-full bg-white"
                animate={{
                    width: hoverState === "project" ? 100 : 12,
                    height: hoverState === "project" ? 40 : 12,
                    borderRadius: hoverState === "project" ? "20px" : "50%",
                    scale: hoverState === "link" ? 2.5 : 1,
                    opacity: hoverState === "link" ? 0.5 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
                {hoverState === "project" && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-[10px] font-bold uppercase tracking-wider text-black"
                    >
                        View →
                    </motion.span>
                )}
            </motion.div>
        </div>
    );
}
