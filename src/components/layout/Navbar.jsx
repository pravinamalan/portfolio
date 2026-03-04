import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 18);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div className="section-wrap pt-4">
                <nav
                    className={cn(
                        "flex items-center justify-between rounded-2xl border px-4 py-3 transition-all md:px-6",
                        scrolled
                            ? "surface-panel border-white/15"
                            : "border-white/8 bg-black/15 backdrop-blur-md",
                    )}
                >
                    <a href="#hero" className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl border border-primary/40 bg-primary/15 text-sm font-semibold text-primary">
                            PA
                        </span>
                        <span className="hidden text-sm font-semibold tracking-wide text-foreground sm:inline">
                            PRAVIN AMALAN
                        </span>
                    </a>

                    <div className="hidden items-center gap-6 lg:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="hidden lg:block">
                        <a href="#contact">
                            <MagneticButton size="sm">Hire Me</MagneticButton>
                        </a>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="rounded-lg border border-white/10 p-2 text-muted-foreground transition-colors hover:text-foreground lg:hidden"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </nav>

                {isOpen && (
                    <div className="mt-3 rounded-2xl border border-white/12 bg-black/35 p-4 backdrop-blur-xl lg:hidden">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-2 rounded-lg bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground"
                            >
                                Hire Me
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
