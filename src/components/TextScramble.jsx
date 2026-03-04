import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

export default function TextScramble({
    text,
    delay = 0,
    characterClassName = "",
    variant = "fall"
}) {
    if (!text) return null;

    const letters = Array.from(text);

    const container = {
        hidden: { opacity: 1 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: variant === "zoom" ? 0.15 : (variant === "reveal" ? 0.05 : 0.04),
                delayChildren: delay,
            },
        },
    };

    const revealVariant = {
        hidden: {
            opacity: 0,
            y: 40,
            scale: 0.95,
            rotateX: -45,
            filter: "blur(10px)"
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 70,
                mass: 1.2,
                duration: 1.2
            },
        },
    };

    const fallVariant = {
        hidden: {
            opacity: 0,
            y: -50,
            scale: 0.8,
            filter: "blur(8px)"
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 22,
                stiffness: 80,
                mass: 1,
            },
        },
    };

    const zoomVariant = {
        hidden: {
            opacity: 0,
            scale: 0.4,
            filter: "blur(12px)"
        },
        show: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 1.2,
                ease: [0.23, 1, 0.32, 1], 
            },
        },
    };

    const letterVariant = variant === "zoom" ? zoomVariant : (variant === "reveal" ? revealVariant : fallVariant);

    return (
        <motion.span
            className="inline-flex flex-wrap whitespace-pre will-change-transform"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            style={{ perspective: "1000px" }}
        >
            {letters.map((char, i) => (
                <motion.span
                    key={`${char}-${i}`}
                    variants={letterVariant}
                    className={cn("inline-block relative", characterClassName)}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );
}
