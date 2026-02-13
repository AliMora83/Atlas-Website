import ExhibitionHero from "@/components/ExhibitionHero";
import ExhibitionDetails from "@/components/ExhibitionDetails";

export default function ExhibitionPage() {


    return (
        <div className="flex flex-col min-h-screen">
            <ExhibitionHero />
            {/* <LogoScroller logos={partnerLogos} speed={40} /> */}
            <ExhibitionDetails />
        </div>
    );
}
