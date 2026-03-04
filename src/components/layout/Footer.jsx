import portfolioData from "@/data/portfolioData.json";

export default function Footer() {
    const { personalInfo } = portfolioData;
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 py-8">
            <div className="section-wrap flex flex-col items-center justify-between gap-3 text-center text-xs uppercase tracking-[0.12em] text-muted-foreground md:flex-row md:text-left">
                <p>{personalInfo.name}</p>
                <p>Designed and developed by {personalInfo.name}</p>
                <p>{year} All rights reserved</p>
            </div>
        </footer>
    );
}
