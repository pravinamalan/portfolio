import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function Background() {
    const reduce = useReducedMotion();
    const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Parallax values
    const blob1Transform = `translate(${(mousePos.x - 0.5) * 20}px, ${(mousePos.y - 0.5) * 20}px)`;
    const blob2Transform = `translate(${(mousePos.x - 0.5) * -15}px, ${(mousePos.y - 0.5) * -15}px)`;

    return (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#fdfbf7]">
            {/* Ink Blot 1 (Subtle Brown) */}
            <div
                className="fixed -left-[10%] -top-[10%] h-[500px] w-[600px] rounded-[50%] opacity-[0.03] blur-[100px]"
                style={{
                    background: "radial-gradient(ellipse, #4e3b31 0%, transparent 70%)",
                    animation: reduce ? "none" : "blob1 25s ease-in-out infinite",
                    transform: blob1Transform,
                    transition: "transform 0.6s ease-out"
                }}
            />

            {/* Ink Blot 2 (Faded Red) */}
            <div
                className="fixed -right-[5%] top-[15%] h-[600px] w-[600px] rounded-full opacity-[0.02] blur-[120px]"
                style={{
                    background: "radial-gradient(ellipse, #d94343 0%, transparent 70%)",
                    animation: reduce ? "none" : "blob2 30s ease-in-out infinite reverse",
                    transform: blob2Transform,
                    transition: "transform 0.6s ease-out"
                }}
            />

            {/* Ink Blot 3 (Forest Green) */}
            <div
                className="fixed bottom-[-10%] left-[15%] h-[400px] w-[500px] rounded-[50%] opacity-[0.02] blur-[90px]"
                style={{
                    background: "radial-gradient(ellipse, #488b64 0%, transparent 70%)",
                    animation: reduce ? "none" : "blob3 28s ease-in-out infinite"
                }}
            />

            <style>{`
                @keyframes blob1 {
                    0%, 100% { transform: ${blob1Transform} translate(0, 0) scale(1); }
                    50% { transform: ${blob1Transform} translate(50px, 40px) scale(1.05); }
                }
                @keyframes blob2 {
                    0%, 100% { transform: ${blob2Transform} translate(0, 0) scale(1); }
                    50% { transform: ${blob2Transform} translate(-40px, 30px) scale(0.95); }
                }
                @keyframes blob3 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(30px, -40px) scale(1.02); }
                }
            `}</style>
        </div>
    );
}
