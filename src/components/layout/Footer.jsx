import portfolioData from "@/data/portfolioData.json";

export default function Footer() {
    const { personalInfo } = portfolioData;
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-dashed border-border py-12 bg-[#faf8f5]">
            <div className="section-wrap flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center font-display font-black text-primary">PA</div>
                    <div>
                        <p className="mono text-[10px] font-bold uppercase tracking-widest text-foreground">{personalInfo.name}</p>
                        <p className="mono text-[8px] font-bold text-foreground/40 uppercase">Senior Portfolio_V2.0</p>
                    </div>
                </div>
                
                <div className="mono text-[9px] font-bold text-foreground/40 uppercase tracking-[0.2em] space-y-1">
                    <p>© {year} • ALL_RIGHTS_RESERVED</p>
                    <p>STAMP_REF: {Date.now().toString().slice(-8)}</p>
                </div>

                <div className="flex gap-6">
                    {["GITHUB", "LINKEDIN", "TWITTER"].map(s => (
                        <a key={s} href="#" className="mono text-[9px] font-bold text-foreground/30 hover:text-primary transition-colors tracking-widest">{s}</a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
