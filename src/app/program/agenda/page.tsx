"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import ScheduleFilter from "@/components/ScheduleFilter";
import ScheduleGrid from "@/components/ScheduleGrid";

import ProgramSubNav from "@/components/program/ProgramSubNav";

export default function AgendaPage() {
    const [activeDay, setActiveDay] = useState("Wednesday, June 3");

    return (
        <div className="flex flex-col">
            <PageHero
                title="Agenda 2026"
                description="Explore the full schedule of keynotes, panels, and workshops at Atlas Conference 2026."
                breadcrumb="Agenda"
                bgClass="bg-slate-900 text-white"
            />

            <ProgramSubNav />

            <ScheduleFilter activeDay={activeDay} setActiveDay={setActiveDay} />

            <ScheduleGrid activeDay={activeDay} />

            {/* Print/Download Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="p-8 border-2 border-dashed border-gray-200 rounded-2xl max-w-2xl mx-auto">
                        <h3 className="text-xl font-bold font-heading mb-4 text-primary">Need a physical copy?</h3>
                        <p className="text-gray-600 mb-6 font-body">
                            Download the full preliminary program in PDF format to keep track of sessions on the go.
                        </p>
                        <button className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-bold hover:bg-black transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                            Download PDF Program
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
