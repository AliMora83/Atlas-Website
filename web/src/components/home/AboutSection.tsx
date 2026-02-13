import Image from 'next/image';
import { featuredSpeakers } from '@/data/speakers';

export default function AboutSection() {
    return (
        <section className="section-padding bg-white" id="about-elearning">
            <div className="container mx-auto px-4">
                <h2 className="text-primary mb-12 text-center">About the Atlas Global Academic Conference</h2>

                {/* Two-column layout: Video left, Content right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto mb-12">
                    {/* Left side: YouTube Video */}
                    <div className="w-full">
                        <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden shadow-xl mb-8">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/87hX53kGMhU"
                                title="Atlas Convention Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* Speaker Bio */}
                        {featuredSpeakers.length > 0 && (
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-bold text-primary mb-4">Speaker Bio</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {featuredSpeakers[0].bio}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Right side: About Content */}
                    <div className="space-y-6">
                        <p className="text-md text-gray-700 leading-relaxed mb-6">
                            The ATLAS Global Academic Conference is the knowledge and innovation pillar of the ATLAS Convention—a global academic and industry-facing platform for thought leaders, researchers, policymakers, and practitioners to engage on Africa’s development agenda. —designed to translate research into market-ready solutions, scalable pilots, and investable community transformation.
                        </p>
                        <div className="relative w-1/2 h-[200px] rounded-xl overflow-hidden shadow-sm mb-2">
                            <Image
                                src="/images/keyspeaker.jpeg"
                                alt="Prof. Fred Olayele"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover object-top"
                            />
                        </div>
                        <div className="pt-2">
                            <p className="text-sm text-gray-500">Keynote Speaker</p>
                            <p className="text-md font-bold text-gray-900">Prof. Fred Olayele</p>
                            <p className="text-md text-gray-700">Global Economist & Strategy Advisor</p>
                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                                Founder & Chairman, ECANY Capital
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
