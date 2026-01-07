import PageHero from "@/components/PageHero";
import Link from "next/link";

export default function PastConferencesPage() {
    const history = [
        { year: 2025, location: "Dar es Salaam, Tanzania", theme: "Education fueling growth" },
        { year: 2024, location: "Kigali, Rwanda", theme: "Education & Technology: A shared vision" },
        { year: 2023, location: "Dakar, Senegal", theme: "New Model for Learning" },
        { year: 2022, location: "Kigali, Rwanda", theme: "Uniting Africa" },
        { year: 2019, location: "Abidjan, Côte d'Ivoire", theme: "Learn, Connect, Grow" },
        { year: 2018, location: "Kigali, Rwanda", theme: "Uniting Africa" },
        { year: 2017, location: "Port Louis, Mauritius", theme: "Context, Content, Connectivity" },
        { year: 2016, location: "Cairo, Egypt", theme: "Making Vision Reality" },
    ];

    return (
        <>
            <PageHero
                title="Past Conferences"
                description="Explore the rich history of the Atlas Conference across the African continent."
                breadcrumb="Past Conferences"
                bgClass="bg-gray-100 text-gray-900"
                textClass="text-gray-600"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-8">
                        {history.map((event) => (
                            <div key={event.year} className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6 border rounded-lg hover:border-primary transition-colors group">
                                <div className="flex-shrink-0 w-24">
                                    <span className="text-3xl font-bold text-primary opacity-80 group-hover:opacity-100">{event.year}</span>
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold font-heading text-gray-900">{event.location}</h3>
                                    <p className="text-gray-600 italic">Theme: "{event.theme}"</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <Link href="#" className="px-4 py-2 text-sm border font-medium text-gray-600 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all">
                                        View Report
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
