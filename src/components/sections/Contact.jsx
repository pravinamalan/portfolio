import { useRef, useState } from "react";
import {
    ArrowUpRight,
    Github,
    Linkedin,
    Mail,
    Send,
    MapPin,
    MessageSquare,
    Hash,
    CheckCircle2,
    XCircle,
    Loader2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import portfolioData from "@/data/portfolioData.json";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import Tape from "@/components/ui/Tape";
import Sticker from "@/components/ui/Sticker";

export default function Contact() {
    const { personalInfo } = portfolioData;
    const [status, setStatus] = useState("idle"); // idle, submitting, success, error
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const socials = [
        { icon: Github, href: `https://${personalInfo.github}`, label: "GitHub" },
        { icon: Linkedin, href: `https://${personalInfo.linkedin}`, label: "LinkedIn" },
        { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
    ];

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "ID Required";
        if (!formData.email.trim()) {
            newErrors.email = "Address Required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid Format";
        }
        if (!formData.message.trim()) newErrors.message = "Payload Required";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setStatus("submitting");

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <section id="contact" className="pb-32 pt-24 overflow-hidden relative bg-[#fdfbf7]" data-story-section>
            <div className="section-wrap relative z-10">
                <SectionHeading
                    eyebrow="Reach Out"
                    title="DROP ME A ~LINE~"
                    description="Open for elite software engineering and product design collaborations."
                    align="center"
                    className="mb-32"
                />

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-20 max-w-7xl mx-auto items-start">

                    <div className="relative group order-2 lg:order-1">
                        <Tape className="-top-6 left-1/4 -translate-x-1/4 z-20" rotate={-10} color="rgba(78,59,49,0.2)" />

                        <div className="paper-card p-12 lg:p-16 relative bg-white shadow-[0_30px_60px_-12px_rgba(0,0,0,0.15)] border-[1px] border-gray-200 tactile-corners">
                            <div className="corner-bl" />
                            <div className="corner-br" />
                            
                            <div className="flex justify-between items-start mb-16 pb-0">
                                <div className="dark:text-gray-300 duration-500 font-medium leading-relaxed max-w-[100%] mb-10 text-gray-700 text-md transition-colors">
                                    Want to work together? If you think I can help you with your project drop me an email at
                                    <span className="inline-block relative ml-1 align-middle">
                                        <div className="relative inline-block px-3 py-1 mx-1 align-middle bg-white dark:bg-[#111] rounded shadow-sm border border-gray-200 dark:border-gray-800 select-none">
                                            <span className="font-bold text-black dark:text-white transition-colors duration-500 select-all tracking-wider relative z-0 pointer-events-none">
                                                {personalInfo.email}
                                            </span>
                                        </div>
                                    </span>
                                    {" "}or leave a message below and I'll get right back to you.
                                </div>
                            </div>

                            <form className="space-y-16" onSubmit={handleSubmit}>
                                <div className="grid gap-16 md:grid-cols-2">
                                    <div className="relative">
                                        <label className={cn(
                                            "mono text-[11px] font-black uppercase tracking-widest absolute -top-8 left-0 transition-colors",
                                            errors.name ? "text-red-500" : "text-foreground/40"
                                        )}>
                                            {errors.name ? `ERROR: ${errors.name}` : "Sender_Identity"}
                                        </label>
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Enter Legal Name..."
                                            className={cn(
                                                "w-full bg-transparent border-b-2 border-dashed py-4 font-mono text-lg text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-foreground/40 font-bold",
                                                errors.name ? "border-red-500/50" : "border-black/40"
                                            )}
                                        />
                                    </div>
                                    <div className="relative">
                                        <label className={cn(
                                            "mono text-[11px] font-black uppercase tracking-widest absolute -top-8 left-0 transition-colors",
                                            errors.email ? "text-red-500" : "text-foreground/40"
                                        )}>
                                            {errors.email ? `ERROR: ${errors.email}` : "Electronic_Address"}
                                        </label>
                                        <input
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            type="email"
                                            placeholder="john@example.com"
                                            className={cn(
                                                "w-full bg-transparent border-b-2 border-dashed py-4 font-mono text-lg text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-foreground/40 font-bold",
                                                errors.email ? "border-red-500/50" : "border-black/40"
                                            )}
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <label className={cn(
                                        "mono text-[11px] font-black uppercase tracking-widest absolute -top-8 left-0 transition-colors",
                                        errors.message ? "text-red-500" : "text-foreground/40"
                                    )}>
                                        {errors.message ? `ERROR: ${errors.message}` : "Transmission_Payload"}
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Detailed software inquiry or project brief..."
                                        className={cn(
                                            "w-full bg-transparent border-b-2 border-dashed py-4 font-mono text-lg text-foreground focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-foreground/40 font-bold",
                                            errors.message ? "border-red-500/50" : "border-black/40"
                                        )}
                                    />
                                </div>

                                <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-10">
                                    <div className="flex items-center gap-4 italic text-foreground font-sans text-sm font-bold">
                                        <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-white shadow-sm animate-pulse" />
                                        Typically responds in <span className="text-primary tracking-tighter">24h</span>
                                    </div>

                                    <div className="flex flex-col items-center md:items-end gap-4 min-w-[200px]">
                                        <AnimatePresence mode="wait">
                                            {status === "success" && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="flex items-center gap-2 text-green-600 mono text-xs font-black uppercase tracking-tight"
                                                >
                                                    <CheckCircle2 size={16} /> Transmission Successful
                                                </motion.div>
                                            )}
                                            {status === "error" && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="flex items-center gap-2 text-red-600 mono text-xs font-black uppercase tracking-tight"
                                                >
                                                    <XCircle size={16} /> System Fault Detected
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        <motion.button
                                            whileHover={{ scale: 1.02, rotate: -1.5, y: -5 }}
                                            whileTap={{ scale: 0.98 }}
                                            disabled={status === "submitting"}
                                            className={cn(
                                                "relative group transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                                                status === "success" && "pointer-events-none"
                                            )}
                                        >
                                            <div className="absolute inset-0 bg-primary/20 rounded-sm skew-x-3 group-hover:bg-primary/30 transition-all opacity-0 group-hover:opacity-100" />
                                            <span className="relative flex items-center gap-5 px-12 py-5 border-2 border-primary font-display text-md font-black text-primary uppercase tracking-wider hover:bg-primary hover:text-white transition-all shadow-[8px_8px_0px_rgba(217,67,67,0.1)]">
                                                {status === "submitting" ? (
                                                    <>Processing <Loader2 size={24} className="animate-spin" /></>
                                                ) : status === "success" ? (
                                                    <>Delivered <CheckCircle2 size={24} /></>
                                                ) : (
                                                    <>Execute_Send <Send size={24} /></>
                                                )}
                                            </span>
                                        </motion.button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="flex flex-col gap-10 order-1 lg:order-2">
                        <div className="paper-card p-10 relative bg-white transform rotate-1 shadow-2xl border-l-[10px] border-primary">
                            <Tape className="-top-4 left-10" rotate={8} color="rgba(217,67,67,0.15)" />
                            <h4 className="mono text-[12px] font-black text-foreground uppercase tracking-widest mb-10 border-b-2 border-dashed border-border/50 pb-4">Business_Card_V2</h4>

                            <div className="flex items-center gap-6 mb-10 group cursor-default">
                                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-sm border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all">
                                    <Mail size={32} />
                                </div>
                                <div className="flex flex-col">
                                    <div className="mono text-[9px] font-black text-foreground/40 uppercase mb-1">Direct_Channel</div>
                                    <div className="font-mono text-lg font-black text-foreground border-b-2 border-primary/20">{personalInfo.email}</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group cursor-default">
                                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-sm border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all">
                                    <MapPin size={32} />
                                </div>
                                <div className="flex flex-col">
                                    <div className="mono text-[9px] font-black text-foreground/40 uppercase mb-1">Station_Location</div>
                                    <div className="font-mono text-lg font-black text-foreground border-b-2 border-primary/20">{personalInfo.location || "Tirunelveli, INDIA"}</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            {socials.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ y: -8, rotate: i % 2 === 0 ? 3 : -3, scale: 1.05 }}
                                    className="paper-card p-6 bg-white flex items-center justify-center grow shadow-xl hover:shadow-2xl transition-all border-b-4 border-primary/10 hover:border-primary"
                                >
                                    <social.icon size={28} className="text-foreground hover:text-primary transition-colors" />
                                </motion.a>
                            ))}
                        </div>

                        <Sticker className="bg-foreground text-background self-start mt-4 px-8 py-5 text-lg font-black tracking-[0.2em] shadow-2xl border-4 border-white" rotate={-5}>
                            AVAILABLE_FOR_HIRE
                        </Sticker>
                    </div>

                </div>
            </div>
        </section>
    );
}
