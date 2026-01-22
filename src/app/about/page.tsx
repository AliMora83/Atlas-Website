import Link from "next/link";
import PageHero from "@/components/PageHero";
import AboutSubNav from "@/components/AboutSubNav";

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
                                        Investing in Africa&apos;s Prosperity is the exciting theme of the Atlas Convention 2024 Global Edition, a landmark event that will bring together experts from all sectors in +133 countries.
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
                            <div className="relative h-full min-h-[400px] bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl overflow-hidden shadow-lg">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-white text-center p-8">
                                        <div className="text-6xl mb-4">🏙️</div>
                                        <p className="text-sm opacity-75">Hero Image Placeholder</p>
                                        <p className="text-xs opacity-50 mt-2">Replace with actual image</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Feature Cards */}
                    <section className="relative mt-12">
                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Card 1: Countries Represented */}
                            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex gap-4 mb-4">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-2xl flex-shrink-0">
                                        🌍
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
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-2xl flex-shrink-0">
                                        🎓
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
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-2xl flex-shrink-0">
                                        🏛️
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



                    {/* Section 3: Additional Resources / Downloads */}
                    <section className="bg-gray-50 -mx-4 px-4 py-16 border-y border-gray-100 relative">
                        <div className="max-w-4xl">
                            <h2 className="text-3xl font-bold font-heading text-primary mb-8">More information about Atlas Global Academic Conference</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { name: "Atlas Global Academic Conference Fact Sheet", href: "#/resources/factsheet.pdf" },
                                    { name: "Atlas Global Academic Conference Network & Reach", href: "#/resources/network-reach.pdf" },
                                    { name: "Atlas Global Academic Conference Executive Summary", href: "#/resources/executive-summary.pdf" },
                                    { name: "Atlas Global Academic Conference Strategic Overview", href: "#/resources/strategic-overview.pdf" }
                                ].map((resource) => (
                                    <a
                                        key={resource.name}
                                        href={resource.href}
                                        className="flex items-center gap-4 bg-white p-6 rounded-xl border-l-4 border-accent shadow-sm hover:shadow-md transition-all group"
                                    >
                                        <div className="p-3 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                <polyline points="14 2 14 8 20 8"></polyline>
                                                <line x1="12" y1="18" x2="12" y2="12"></line>
                                                <polyline points="9 15 12 12 15 15"></polyline>
                                            </svg>
                                        </div>
                                        <span className="font-bold text-gray-700 group-hover:text-accent transition-colors underline underline-offset-4 decoration-accent/20 group-hover:decoration-accent">
                                            {resource.name}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Testimonial / Social Proof Section */}
                    <section className="py-16 relative overflow-hidden rounded-3xl bg-secondary/5 border-2 border-secondary/20">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 -m-8 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute bottom-0 left-0 -m-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>

                        <div className="max-w-4xl mx-auto px-8 text-center relative">
                            <svg className="w-12 h-12 text-secondary mb-8 mx-auto opacity-50" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V4H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.017 21L2.017 18C2.017 16.8954 2.91243 16 4.017 16H7.017C7.56928 16 8.017 15.5523 8.017 15V9C8.017 8.44772 7.56928 8 7.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56928 13 2.017 13H0.017V4H10.017V15C10.017 18.3137 7.33072 21 4.017 21H2.017Z" />
                            </svg>

                            <blockquote className="space-y-8">
                                <div>
                                    <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed italic">
                                        "After being absent for over nine consecutive years, attending the conference felt like a rebirth. I left with renewed energy and a firm resolve never to miss it again. The experience was enlightening and rewarding in every way."
                                    </p>
                                    <footer className="mt-6">
                                        <cite className="not-italic">
                                            <span className="block font-bold text-lg text-primary">— Lumai Mubanga</span>
                                            <span className="text-gray-500 font-medium italic">Nchanga Secondary Trust School</span>
                                        </cite>
                                    </footer>
                                </div>

                                <div className="pt-8 border-t border-secondary/20">
                                    <p className="text-xl text-gray-700 leading-relaxed">
                                        "It was an informative, engaging, and inspiring experience, filled with opportunities for networking and collaboration. My team left Atlas Global Academic Conference with pages of notes and fresh ideas on how we can strengthen and improve our innovation."
                                    </p>
                                    <footer className="mt-4">
                                        <cite className="not-italic">
                                            <span className="block font-bold text-gray-900">— Sarah Boateng</span>
                                            <span className="text-gray-500 font-medium italic">Director of Innovation, African Tech Hub</span>
                                        </cite>
                                    </footer>
                                </div>
                            </blockquote>
                        </div>
                    </section>


                </div>
            </div>
        </div>
    );
}
