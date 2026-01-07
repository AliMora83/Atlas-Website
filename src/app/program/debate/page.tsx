import PageHero from "@/components/PageHero";

export default function DebatePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="The Atlas Conference Debate"
                description="Our signature plenary session: a lively, parliamentary-style debate on a controversial motion."
                breadcrumb="The Debate"
                bgClass="bg-red-900 text-white"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-600 font-bold text-sm uppercase tracking-widest mb-4">Plenary Highlight</div>
                        <h2 className="text-2xl md:text-4xl font-bold font-heading text-gray-900 mb-6 px-2">"This house believes that AI will replace the traditional teacher by 2035"</h2>
                        <p className="text-lg text-gray-600 font-body">
                            Experience the most anticipated session of the conference, where logic, rhetoric, and passion collide.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="p-8 rounded-3xl bg-gray-900 text-white shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold font-heading mb-4 px-4 py-1 bg-green-600 inline-block -ml-8 rounded-r-lg">The Proposers</h3>
                            <p className="text-gray-300 leading-relaxed font-body">
                                Arguing that the scale, personalization, and efficiency of AI will render current pedagogical models obsolete.
                            </p>
                            <ul className="mt-6 space-y-2 text-sm text-gray-100 italic">
                                <li>• 2 International Tech Visionaries</li>
                                <li>• 1 Leading EdTech Researcher</li>
                            </ul>
                        </div>

                        <div className="p-8 rounded-3xl bg-gray-50 text-gray-900 border-2 border-gray-100 shadow-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold font-heading mb-4 px-4 py-1 bg-orange-600 text-white inline-block -ml-8 rounded-r-lg">The Opposers</h3>
                            <p className="text-gray-600 leading-relaxed font-body">
                                Arguing that the human element, mentorship, and socio-emotional learning are irreplaceable by machines.
                            </p>
                            <ul className="mt-6 space-y-2 text-sm text-gray-500 italic">
                                <li>• 2 Renowned African Educators</li>
                                <li>• 1 Policy Expert from UNESCO</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white p-10 border-4 border-double border-gray-200 rounded-2xl relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white px-6 py-2 rounded-full font-bold uppercase text-xs tracking-tighter shadow-lg">Rules of Engagement</div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-4">
                            <div>
                                <div className="text-2xl font-bold text-red-600 mb-1">Parliamentary Style</div>
                                <div className="text-xs text-gray-400 uppercase">Strict Timing</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-red-600 mb-1">Audience Voting</div>
                                <div className="text-xs text-gray-400 uppercase">Interactive Result</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-red-600 mb-1">Live Polling</div>
                                <div className="text-xs text-gray-400 uppercase">Real-time Shift</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
