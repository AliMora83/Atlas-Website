import PageHero from "@/components/PageHero";
import ConferenceHistory from "@/components/ConferenceHistory";
import HostCity from "@/components/HostCity";
import Partners from "@/components/Partners";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="About Atlas Conference"
                description="The premier gathering for education technology leaders, shaping the future of digital learning across the African continent."
                breadcrumb="About"
                bgClass="bg-gray-900 text-white"
                textClass="text-gray-200"
            />

            {/* Overview Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold font-heading text-primary mb-8">Our Vision & Mission</h2>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        Atlas Conference is the key networking event for ICT supported education, training, and skills development in Africa. It brings together high-level policy makers, decision makers, and practitioners from education, business, and government.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Since its inception, the conference has been fostering a pan-African network of educational professionals, sharing best practices, and igniting innovation to solve the continent's most pressing educational challenges.
                    </p>
                </div>
            </section>

            <HostCity />
            <ConferenceHistory />
            <Partners />
        </div>
    );
}
