import portfolioData from "@/data/portfolioData.json";

export default function Footer() {
    const { personalInfo } = portfolioData;
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-dashed border-border py-12 bg-[#faf8f5]">
            <div className="section-wrap flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center font-display font-black text-primary">PA</div>
                    <div>
                        <p className="mono text-base font-bold uppercase tracking-widest text-foreground">{personalInfo.name}</p>
                        <p className="mono text-sm font-bold text-foreground/40 uppercase">Portfolio</p>
                    </div>
                </div>
                
                <div className="mono text-sm font-bold text-foreground/40 uppercase tracking-[0.2em] space-y-1">
                    <p>© {year} • ALL_RIGHTS_RESERVED</p>
                </div>

                <div className="flex gap-6">
                    {["GITHUB", "LINKEDIN", "MAIL"].map(s => (
                        <a key={s} href="#" className="mono text-sm font-bold text-foreground/60 hover:text-primary transition-colors tracking-widest">{s}</a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
