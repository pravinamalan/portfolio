import React, { useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Typewriter = ({ text, speed = 0.05, delay = 0, className }) => {
    const controls = useAnimation();
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const characters = text.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: speed,
                delayChildren: delay,
            },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            y: -5,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            {characters.map((char, index) => (
                <motion.span
                    variants={child}
                    key={index}
                    className={char === " " ? "mr-1" : ""}
                >
                    {char}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default Typewriter;
