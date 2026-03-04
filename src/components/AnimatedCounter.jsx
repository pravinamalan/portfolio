import * as React from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
export default function AnimatedCounter({ value, suffix = "", prefix = "", duration = 1.1, className, "data-testid": dataTestId, }) {
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: true, margin: "-15% 0px -20% 0px" });
    const mv = useMotionValue(0);
    const spring = useSpring(mv, { stiffness: 90, damping: 18 });
    const [display, setDisplay] = React.useState(0);

    React.useEffect(() => {
        if (!inView)
            return;
        mv.set(value);
    }, [inView, value]);

    React.useEffect(() => {
        const unsub = spring.on("change", (latest) => {
            if (value % 1 !== 0) {
                setDisplay(latest.toFixed(1));
            } else {
                setDisplay(Math.round(latest));
            }
        });
        return () => unsub();
    }, [spring, value]);

    return (
        <motion.span
            ref={ref}
            className={className}
            transition={{ duration }}
            data-testid={dataTestId}
        >
            {prefix}
            {display.toLocaleString()}
            {suffix}
        </motion.span>
    );
}
