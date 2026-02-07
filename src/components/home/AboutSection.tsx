import Link from "next/link";

export default function AboutSection() {
    return (
        <section className="section-padding bg-white" id="about-elearning">
            <div className="container mx-auto px-4">
                <h2 className="text-primary mb-12 text-center">About the Atlas Global Academic Conference</h2>

                {/* Two-column layout: Video left, Content right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
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
                            The ATLAS Global Academic Conference is the knowledge and innovation pillar of the <span className="font-bold">ATLAS Convention</span>—a global academic and industry-facing platform for thought leaders, researchers, policymakers, and practitioners to engage on Africa’s development agenda. —designed to translate research into market-ready solutions, scalable pilots, and investable community transformation.
                            <br /><br />
                            <span className="font-bold">From papers to production.</span><br />
                            ATLAS is built for translation: research → prototypes → commercial solutions → adoption at community scale.
                        </p>
                        <div className="pt-4">
                            <Link
                                href="/about"
                                className="btn-primary"
                            >
                                FIND OUT MORE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
