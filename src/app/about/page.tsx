import Image from "next/image";
import { Globe, GraduationCap, Building2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import AboutSubNav from "@/components/AboutSubNav";
import MissionVision from "@/components/MissionVision"; // Import new component
import FAQ from "@/components/FAQ";

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="About"
                description="Atlas Global Academic Conference is the premier gathering for education technology leaders, shaping the future of digital learning across the African continent."
            />

            <AboutSubNav />

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col gap-16 relative">

                    {/* Section 1: Convention Overview */}
                    <section className="pt-8">
                        <div className="grid lg:grid-cols-2 gap-8 items-start">
                            {/* Left Column - Text Content */}
                            <div className="space-y-8">
                                <div>
                                    <h1 className="text-4xl font-bold font-heading text-primary mb-6">CONVENTION OVERVIEW</h1>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        The ATLAS Global Academic Conference is the knowledge and innovation pillar of the ATLAS Convention—a global academic and industry-facing platform for thought leaders, researchers, policymakers, and practitioners to engage on Africa’s development agenda. —designed to translate research into market-ready solutions, scalable pilots, and investable community transformation.
                                    </p>
                                    <p className="text-base text-gray-700 leading-relaxed mt-4 font-bold">
                                        From papers to production.
                                    </p>
                                    <p className="text-base text-gray-700 leading-relaxed mt-2">
                                        ATLAS is built for translation: research → prototypes → commercial solutions → adoption at community scale.
                                    </p>
                                </div>

                                {/* Statistics Grid */}
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-sm text-gray-500 mb-2">Host Countries</p>
                                        <p className="text-4xl font-bold text-gray-900">3</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-2">Delegates</p>
                                        <p className="text-4xl font-bold text-gray-900">5,000</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-2">Countries Represented</p>
                                        <p className="text-4xl font-bold text-gray-900">133+</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-2">Sponsors & Exhibitors</p>
                                        <p className="text-4xl font-bold text-gray-900">300+</p>
                                    </div>
                                    <div className="col-span-2">
                                        <p className="text-sm text-gray-500 mb-2">Chamber Presidents / Ministers / City Mayors</p>
                                        <p className="text-4xl font-bold text-gray-900">100+</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Hero Image */}
                            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="/images/about.jpeg"
                                    alt="Convention Overview"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Feature Cards */}
                    <section className="relative mt-12">
                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Card 1: Countries Represented */}
                            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex gap-4 mb-4">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                                        <Globe className="w-8 h-8" />
                                    </div>
                                    <div className="w-full h-16 bg-gray-100 rounded-lg"></div>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Countries Represented</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    The Atlas Convention 2024 Global Edition will bring together experts from all sectors in +133 countries.
                                </p>
                            </div>

                            {/* Card 2: Universities Represented */}
                            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex gap-4 mb-4">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                                        <GraduationCap className="w-8 h-8" />
                                    </div>
                                    <div className="w-full h-16 bg-gray-100 rounded-lg"></div>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Universities Represented</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    The Atlas Convention 2024 Global Edition will bring together experts from all sectors in +133 countries.
                                </p>
                            </div>

                            {/* Card 3: Mayors & Ministers */}
                            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex gap-4 mb-4">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                                        <Building2 className="w-8 h-8" />
                                    </div>
                                    <div className="w-full h-16 bg-gray-100 rounded-lg"></div>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Mayors & Ministers</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    The Atlas Convention 2024 Global Edition will bring together experts from all sectors in +133 countries.
                                </p>
                            </div>
                        </div>
                    </section>




                    {/* Section 2.5: Mission & Vision */}
                    <MissionVision />

                    {/* Section 4: FAQ */}
                    <FAQ />



                </div>
            </div>
        </div>
    );
}
