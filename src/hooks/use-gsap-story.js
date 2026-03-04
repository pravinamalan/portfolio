import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let initialized = false;

function registerGsapPlugins() {
    if (initialized) return;
    gsap.registerPlugin(ScrollTrigger);
    initialized = true;
}

export default function useGsapStory() {
    useLayoutEffect(() => {
        if (typeof window === "undefined") return undefined;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

        registerGsapPlugins();
        const hoverCapable = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        const tiltDisposers = [];

        const context = gsap.context(() => {
            const sections = gsap.utils.toArray("[data-story-section]");
            sections.forEach((section) => {
                const items = section.querySelectorAll("[data-story-item]");
                if (items.length) {
                    gsap.from(items, {
                        opacity: 0,
                        y: 80,
                        scale: 0.98,
                        filter: "blur(12px)",
                        duration: 1.5,
                        stagger: {
                            amount: 0.5,
                            from: "start",
                            ease: "power2.out"
                        },
                        ease: "expo.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                            once: true,
                        },
                    });
                }

                const panels = section.querySelectorAll("[data-story-panel]");
                panels.forEach((panel) => {
                    gsap.fromTo(
                        panel,
                        { y: 40 },
                        {
                            y: -40,
                            ease: "none",
                            scrollTrigger: {
                                trigger: panel,
                                start: "top bottom",
                                end: "bottom top",
                                scrub: 0.8,
                            },
                        },
                    );
                });
            });

            const progressBar = document.querySelector("[data-story-progress]");
            if (progressBar) {
                gsap.fromTo(
                    progressBar,
                    { scaleX: 0 },
                    {
                        scaleX: 1,
                        transformOrigin: "left center",
                        ease: "none",
                        scrollTrigger: {
                            trigger: document.documentElement,
                            start: "top top",
                            end: "bottom bottom",
                            scrub: 0.2,
                        },
                    },
                );
            }

            const cards = gsap.utils.toArray("[data-tilt-card]");
            // Removed manual tilt logic: TiltCard.jsx now handles this via Framer Motion for superior smoothness
        });

        ScrollTrigger.refresh();

        return () => {
            context.revert();
        };
    }, []);
}
