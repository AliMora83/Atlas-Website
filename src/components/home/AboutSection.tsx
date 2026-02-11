

export default function AboutSection() {
    return (
        <section className="section-padding bg-white" id="about-elearning">
            <div className="container mx-auto px-4">
                <h2 className="text-primary mb-12 text-center">About the Atlas Global Academic Conference</h2>

                {/* Two-column layout: Video left, Content right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto mb-12">
                    {/* Left side: YouTube Video */}
                    <div className="w-full">
                        <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden shadow-xl">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/87hX53kGMhU"
                                title="Atlas Convention Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Right side: About Content */}
                    <div className="space-y-6">
                        <p className="text-md text-gray-700 leading-relaxed">
                            &quot;Dr. Fred Olayele is a strategic global advisor and visionary leader driving impact at the intersection of public policy, markets, and social innovation. A seasoned economist, university professor, and development executive, he previously served as Chief Economist and Senior Vice President at the New York City Economic Development Corporation (NYCEDC), where he provided executive leadership to position New York as a global model for innovation. His diverse career spans global finance with Citigroup, advising Canadian provincial governments on FDI and economic development, and serving as a trusted executive advisor and board member to mission-driven organizations worldwide.&quot;
                            <br /><br />
                            <span className="font-bold">From papers to production.</span><br />
                            ATLAS is built for translation: research → prototypes → commercial solutions → adoption at community scale.
                        </p>
                        <div className="pt-4">
                            <p className="text-sm text-gray-500">Keynote Speaker</p>
                            <p className="text-md font-bold text-gray-900">Dr. Fred Olayele</p>
                            <p className="text-md text-gray-700">Strategic Global Advisor & Economist</p>
                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                                FORMER CHIEF ECONOMIST, NYC ECONOMIC DEVELOPMENT CORPORATION
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
