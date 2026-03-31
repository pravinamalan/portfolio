import { lazy, Suspense, useEffect } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ScrollSequence from "@/components/sections/ScrollSequence";
import About from "@/components/sections/About";

// Lazy load below-the-fold sections
const Skills = lazy(() => import("@/components/sections/Skills"));
const Services = lazy(() => import("@/components/sections/Services"));
const Projects = lazy(() => import("@/components/sections/Projects"));
const Experience = lazy(() => import("@/components/sections/Experience"));
const Stats = lazy(() => import("@/components/sections/Stats"));
const Contact = lazy(() => import("@/components/sections/Contact"));
const Footer = lazy(() => import("@/components/layout/Footer"));
import Background from "@/components/Background";
import CustomCursor from "@/components/CustomCursor";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

function AppContent() {
    useLenis();

    useEffect(() => {
        let rafId;
        const handleMouseMove = (e) => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
                document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
                rafId = null;
            });
        };
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div className="min-h-screen text-foreground relative app-grid">

            <div
                className="fixed inset-0 pointer-events-none z-0"
                style={{
                    background: `radial-gradient(700px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(139, 92, 246, 0.06), transparent 80%)`
                }}
            />

            <div className="noise-overlay" />

            <Background />
            <Navbar />

            <main className="relative z-10">
                <Hero />
                <About />
                <ScrollSequence />
                <Suspense fallback={null}>
                    <Skills />
                    <Services />
                    <Projects />
                    <Experience />
                    <Stats />
                    <Contact />
                </Suspense>
            </main>
            <Suspense fallback={null}>
                <Footer />
            </Suspense>
            <SpeedInsights />
            <Analytics />
        </div>
    );
}

function App() {
    return (
        <ReactLenis root options={{
            lerp: 0.12,
            duration: 1.2,
            smoothWheel: true,
            wheelMultiplier: 0.9,
            touchMultiplier: 1.8,
            infinite: false,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        }}>
            <AppContent />
        </ReactLenis>
    );
}

export default App;