import ExhibitionHero from "@/components/ExhibitionHero";
import ExhibitionFeatures from "@/components/ExhibitionFeatures";
import ExhibitionDetails from "@/components/ExhibitionDetails";

export default function ExhibitionPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <ExhibitionHero />
            <ExhibitionFeatures />
            <ExhibitionDetails />
        </div>
    );
}
