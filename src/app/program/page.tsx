"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import ScheduleFilter from "@/components/ScheduleFilter";
import ScheduleGrid from "@/components/ScheduleGrid";

export default function ProgramPage() {
    const [activeDay, setActiveDay] = useState("Wednesday, June 3");

    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="Conference Agenda"
                description="Explore over 200 sessions, workshops, and keynotes designed to spark innovation and collaboration in African education."
                breadcrumb="Program"
            />
            <ScheduleFilter activeDay={activeDay} setActiveDay={setActiveDay} />
            <ScheduleGrid activeDay={activeDay} />

            {/* Download Agenda CTA */}
            <section className="bg-white py-12 border-t text-center">
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
