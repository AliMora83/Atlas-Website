"use client";

import PageHero from "@/components/PageHero";
import ProgrammeGrid from "@/components/program/ProgrammeGrid";
import ProgramSubNav from "@/components/program/ProgramSubNav";

export default function ProgramPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="Programme"
                description="Explore the agenda for Atlas Conference 2026. Join us for three days of inspiration, learning, and networking."
                breadcrumb="Programme"
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
                            Below is an overview of the key sessions and events planned for June 2026.
                            Specific timings and speakers will be updated closer to the event.
                        </p>
                    </div>

                    <ProgrammeGrid />
                </div>
            </section>

            {/* Download Agenda CTA */}
            <section className="bg-slate-50 py-12 border-t text-center">
                <div className="container mx-auto px-4">
                    <h3 className="text-xl font-bold mb-4">Need a printed copy?</h3>
                    <button className="text-primary border border-primary px-6 py-2 rounded hover:bg-primary hover:text-white transition-colors">
                        Download Full Agenda (PDF)
                    </button>
                </div>
            </section>
        </div>
    );
}
