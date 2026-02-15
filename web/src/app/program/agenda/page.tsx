"use client";

import PageHero from "@/components/PageHero";
import ProgramSubNav from "@/components/program/ProgramSubNav";
import ComingSoon from "@/components/ComingSoon";

export default function AgendaPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="Conference Agenda"
                description="View the detailed schedule for Atlas Global Academic Conference 2026."
                bgClass="bg-slate-900 text-white"
            />

            <ProgramSubNav />

            <ComingSoon
                title="Agenda Coming Soon"
                description="The detailed conference agenda for Atlas Global Academic Conference 2026 is currently being finalized. Check back soon for the complete schedule with session timings, speakers, and room assignments!"
            />
        </div>
    );
}
