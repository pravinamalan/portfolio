import { useEffect } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ScrollSequence from "@/components/sections/ScrollSequence";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Stats from "@/components/sections/Stats";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Background from "@/components/Background";
import CustomCursor from "@/components/CustomCursor";
import useGsapStory from "@/hooks/use-gsap-story";

import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

function AppContent() {
    useGsapStory();
    useLenis(ScrollTrigger.update);

    useEffect(() => {
        const handleMouseMove = (e) => {
            document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            className="min-h-screen text-foreground selection:bg-primary/30 relative"
            style={{
                background: `radial-gradient(700px circle at var(--mouse-x) var(--mouse-y), rgba(139, 92, 246, 0.06), transparent 80%)`
            }}
        >
            <div
                className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.025]"
                aria-hidden="true"
            >
                <svg className="h-full w-full">
                    <filter id="noise">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.85"
                            numOctaves="4"
                            stitchTiles="stitch"
                        />
                        <feColorMatrix type="saturate" values="0" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noise)" />
                </svg>
            </div>

            <CustomCursor />
            <Background />

            <Navbar />
            <main className="relative z-10">
                <Hero />
                <About />
                <ScrollSequence />
                <Skills />
                <Services />
                <Projects />
                <Experience />
                <Stats />
                <Contact />
            </main>
            <Footer />
            <SpeedInsights />
            <Analytics />
        </div>
    );
}

function App() {
    return (
        <ReactLenis root options={{
            lerp: 0.08,
            duration: 1.5,
            smoothWheel: true,
            wheelMultiplier: 1.1,
            touchMultiplier: 1.5,
            infinite: false,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo easing
        }}>
            <AppContent />
        </ReactLenis>
    );
}

export default App;
