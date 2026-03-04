import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const base = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)", scale: 0.98 },
    show: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 },
};

export function Reveal({ children, className, delay = 0, y = 30, once = true, ...props }) {
    if (props["data-story-item"]) {
        return (
            <div className={cn(className)} {...props}>
                {children}
            </div>
        );
    }

    const ref = React.useRef(null);
    const inView = useInView(ref, { margin: "-10% 0px -10% 0px", once });
    return (
        <motion.div
            ref={ref}
            className={cn(className)}
            variants={{
                hidden: { ...base.hidden, y },
                show: { ...base.show, y: 0 },
            }}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{
                type: "spring",
                damping: 25,
                stiffness: 50,
                mass: 1.2,
                delay,
                restDelta: 0.001,
                opacity: { duration: 0.8, ease: [0.23, 1, 0.32, 1], delay },
                filter: { duration: 0.6, ease: [0.23, 1, 0.32, 1], delay }
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function Stagger({
    children,
    className,
    stagger = 0.1,
    delayChildren = 0.1,
    ...props
}) {
    return (
        <motion.div
            className={cn(className)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            variants={{
                hidden: {},
                show: { transition: { staggerChildren: stagger, delayChildren } },
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className, ...props }) {
    if (props["data-story-item"]) {
        return (
            <div className={cn(className)} {...props}>
                {children}
            </div>
        );
    }

    return (
        <motion.div
            className={cn(className)}
            variants={base}
            transition={{
                type: "spring",
                damping: 25,
                stiffness: 50,
                mass: 1.2,
                restDelta: 0.001,
                opacity: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
                filter: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
}
