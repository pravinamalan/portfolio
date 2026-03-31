import { useEffect, useState } from "react";
import { Menu, X, Send, Hash } from "lucide-react";
import portfolioData from "@/data/portfolioData.json";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const { personalInfo } = portfolioData;
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <>
            <header
                className={cn(
                    "fixed inset-x-0 top-0 z-[100] transition-all duration-500",
                    scrolled
                        ? "bg-[#fdfbf7]/95 py-4 backdrop-blur-xl border-b-2 border-border/50 shadow-md"
                        : "bg-transparent py-8 border-none"
                )}
            >
            <div className="section-wrap flex items-center justify-between">
                <a 
                    href="#"
                    className={cn(
                        "relative z-10 transition-all duration-500 tracking-tighter uppercase font-display font-black text-2xl",
                        "hover:scale-105 active:scale-95"
                    )}
                >
                    {personalInfo.name.split(' ')[0]}<span className="text-primary italic font-black"> AMALAN</span>
                </a>
                
                <nav className="hidden items-center gap-10 lg:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative mono text-[11px] font-black uppercase tracking-[0.25em] text-foreground/50 transition-all duration-300 hover:text-primary group"
                        >
                            {link.name}
                            <span className="absolute -bottom-2 left-0 h-[3px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                        </a>
                    ))}
                </nav>

                <div className="hidden lg:block">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center border-2 border-foreground px-10 py-3 font-display text-sm font-semibold uppercase tracking-wider text-foreground transition-all duration-300 hover:bg-foreground hover:text-background shadow-[4px_4px_0px_rgba(0,0,0,0.1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                    >
                        Get In Touch
                    </a>
                </div>

                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="group relative h-12 w-12 flex items-center justify-center rounded-sm border-2 border-foreground/10 bg-white shadow-sm transition-all lg:hidden active:scale-90"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-foreground" />}
                </button>
                </div>
            </header>

            <div
                className={cn(
                    "fixed inset-0 z-[200] bg-[#fdfbf7] lg:hidden flex flex-col transition-all duration-700 ease-expo",
                    isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
                )}
            >
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none dot-grid" />
                
                <div className="relative flex flex-col h-full p-8 overflow-y-auto">
                    <div className="flex items-center justify-between border-b-2 border-dashed border-border/50 pb-8">
                        <span className="font-display text-2xl font-black tracking-tighter text-foreground uppercase italic">
                            MENU_TERMINAL
                        </span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="h-12 w-12 flex items-center justify-center border-2 border-primary text-primary transition-all active:scale-90 bg-white shadow-sm"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-6 py-4">
                        {navLinks.map((link, i) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "flex items-center gap-6 font-display text-4xl font-black text-foreground transition-all duration-700",
                                    isOpen ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
                                )}
                                style={{ transitionDelay: `${i * 100 + 200}ms` }}
                            >
                                <span className="mono text-xs font-black text-primary opacity-40 italic">0{i + 1}</span>
                                <span className="uppercase tracking-tighter hover:italic hover:translate-x-4 transition-all">{link.name}</span>
                            </a>
                        ))}
                    </nav>

                    <div className="mt-auto pt-12 border-t-2 border-dashed border-border/50">
                        <div className="mono text-[10px] font-black text-foreground/30 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <Hash size={12} /> SYSTEM_READY_FOR_ENGAGEMENT
                        </div>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-4 bg-primary px-8 py-5 font-display text-2xl font-black text-white uppercase tracking-tighter shadow-[8px_8px_0px_rgba(217,67,67,0.15)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
                        >
                            Get In Touch <Send size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
