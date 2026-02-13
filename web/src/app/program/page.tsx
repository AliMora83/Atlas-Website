"use client";

import PageHero from "@/components/PageHero";
import ProgrammeGrid from "@/components/program/ProgrammeGrid";
import ProgramSubNav from "@/components/program/ProgramSubNav";

export default function ProgramPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="Programme"
                description="Explore the agenda for Atlas Global Academic Conference 2026. Join us for three days of inspiration, learning, and networking."
            />

            <ProgramSubNav />

            {/* Main Content Area */}
            <section className="py-12 bg-white min-h-[600px]">
                <div className="container mx-auto px-4">
                    <div className="mb-8 max-w-3xl">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Schedule at a Glance
                        </h2>
                        <p className="text-gray-600">
                            The implementation of the programme is currently in progress.
                            Below is an overview of the key sessions and events planned for September 2026.
                            Specific timings and speakers will be updated closer to the event.
                        </p>
                    </div>

                    <ProgrammeGrid />
                </div>
            </section>

            {/* Download 2025 Resources */}
            <section className="bg-gray-50 py-16 border-t">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-primary mb-3">2025</h2>
                        <p className="text-gray-600">Download resources from our 2025 edition</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Book of Abstracts */}
                        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <line x1="10" y1="9" x2="8" y2="9"></line>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Book of Abstracts</h3>
                                <p className="text-gray-600 text-sm mb-6 flex-grow">Complete collection of speaker abstracts and session details</p>
                                <a
                                    href="/BOOK_OF_ABSTRACTS_23_August_2025.pdf"
                                    download
                                    className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors w-full justify-center"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                    Download PDF
                                </a>
                            </div>
                        </div>

                        {/* Programme */}
                        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Programme</h3>
                                <p className="text-gray-600 text-sm mb-6 flex-grow">Full schedule with timings and session information</p>
                                <a
                                    href="/2025_Programme.pdf"
                                    download
                                    className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors w-full justify-center"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                    Download PDF
                                </a>
                            </div>
                        </div>

                        {/* Reflective Paper */}
                        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <path d="M12 18v-6"></path>
                                        <path d="m9 15 3 3 3-3"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Reflective Paper</h3>
                                <p className="text-gray-600 text-sm mb-6 flex-grow">Key insights and reflections from the 2025 convention</p>
                                <a
                                    href="/Reflective_Paper.pdf"
                                    download
                                    className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors w-full justify-center"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                    Download PDF
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
