import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

function hslVarToHsla(value, alpha) {
    const normalized = value.trim().replace(/\s+/g, " ");
    const [h = "200", s = "80%", l = "60%"] = normalized.split(" ");
    return `hsla(${h}, ${s}, ${l}, ${alpha})`;
}

function ParticleLayer({ reducedMotion }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return undefined;
        }

        const ctx = canvas.getContext("2d");
        if (!ctx) {
            return undefined;
        }

        const rootStyles = getComputedStyle(document.documentElement);
        const primary = hslVarToHsla(rootStyles.getPropertyValue("--primary"), 0.36);
        const accent = hslVarToHsla(rootStyles.getPropertyValue("--accent"), 0.3);
        const soft = "hsla(210, 100%, 98%, 0.16)";
        const palette = [primary, accent, soft];

        const dpr = window.devicePixelRatio || 1;
        let width = 0;
        let height = 0;
        let rafId = 0;

        const particles = [];
        const particleCount = reducedMotion ? 40 : 120;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const seedParticles = () => {
            particles.length = 0;
            for (let i = 0; i < particleCount; i += 1) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * (reducedMotion ? 0.06 : 0.3),
                    vy: (Math.random() - 0.5) * (reducedMotion ? 0.06 : 0.3),
                    radius: Math.random() * 1.8 + 0.7,
                    alpha: Math.random() * 0.48 + 0.17,
                    color: palette[Math.floor(Math.random() * palette.length)],
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i += 1) {
                const p = particles[i];

                if (!reducedMotion) {
                    p.x += p.vx;
                    p.y += p.vy;

                    if (p.x < -8) p.x = width + 8;
                    if (p.x > width + 8) p.x = -8;
                    if (p.y < -8) p.y = height + 8;
                    if (p.y > height + 8) p.y = -8;
                }

                ctx.beginPath();
                ctx.globalAlpha = p.alpha;
                ctx.fillStyle = p.color;
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.globalAlpha = 1;

            if (!reducedMotion) {
                rafId = window.requestAnimationFrame(draw);
            }
        };

        resize();
        seedParticles();
        draw();

        const onResize = () => {
            resize();
            seedParticles();
            if (reducedMotion) {
                draw();
            }
        };

        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
            if (rafId) {
                window.cancelAnimationFrame(rafId);
            }
        };
    }, [reducedMotion]);

    return <canvas aria-hidden="true" ref={canvasRef} className="absolute inset-0 opacity-95" />;
}

export default function Background() {
    const reduce = useReducedMotion();
    return (
        <div className="pointer-events-none fixed inset-0 -z-10 app-grid">
            <ParticleLayer reducedMotion={reduce} />
            <motion.div
                aria-hidden="true"
                className="absolute -left-28 top-10 h-[360px] w-[360px] rounded-full blur-3xl opacity-40 will-change-transform"
                style={{
                    background: "radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.2), transparent 60%)",
                }}
                animate={reduce
                    ? undefined
                    : { x: [0, 15, -10, 0], y: [0, 10, -10, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} />
            <motion.div
                aria-hidden="true"
                className="absolute right-[-80px] top-[-30px] h-[390px] w-[390px] rounded-full blur-3xl opacity-30 will-change-transform"
                style={{
                    background: "radial-gradient(circle at 40% 45%, hsl(var(--accent) / 0.15), transparent 62%)",
                }}
                animate={reduce
                    ? undefined
                    : { x: [0, -15, 10, 0], y: [0, 10, -8, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} />
            <motion.div
                aria-hidden="true"
                className="absolute left-[40%] bottom-[-120px] h-[400px] w-[400px] rounded-full blur-3xl opacity-30 will-change-transform"
                style={{
                    background: "radial-gradient(circle at 40% 40%, hsl(206 80% 62% / 0.15), transparent 62%)",
                }}
                animate={reduce
                    ? undefined
                    : { x: [0, 12, -12, 0], y: [0, -10, 10, 0] }}
                transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }} />
        </div>
    );
}
