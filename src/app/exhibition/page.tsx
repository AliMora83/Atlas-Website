import ExhibitionHero from "@/components/ExhibitionHero";
import ExhibitionDetails from "@/components/ExhibitionDetails";
import LogoScroller from "@/components/LogoScroller";

export default function ExhibitionPage() {
    const partnerLogos = [
        { src: "/images/partners/partner-1.png", alt: "EduTech Solutions" },
        { src: "/images/partners/partner-2.png", alt: "LearnHub" },
        { src: "/images/partners/partner-3.png", alt: "SmartClass" },
        { src: "/images/partners/partner-4.png", alt: "ConnectEd" },
        { src: "/images/partners/partner-5.png", alt: "TechLearn" },
        { src: "/images/partners/partner-6.png", alt: "DigitalEdu" },
        { src: "/images/partners/partner-7.png", alt: "BrightMinds" },
        { src: "/images/partners/partner-8.png", alt: "Innovation Labs" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <ExhibitionHero />
            <LogoScroller logos={partnerLogos} speed={40} />
            <ExhibitionDetails />
        </div>
    );
}
