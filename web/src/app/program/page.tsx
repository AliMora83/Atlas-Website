"use client";

import PageHero from "@/components/PageHero";
import ProgramSubNav from "@/components/program/ProgramSubNav";
import ComingSoon from "@/components/ComingSoon";

export default function ProgramPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="Programme"
                description="Explore the agenda for Atlas Global Academic Conference 2026. Join us for three days of inspiration, learning, and networking."
            />

            <ProgramSubNav />

            <ComingSoon
                title="Programme Coming Soon"
                description="The detailed programme for Atlas Global Academic Conference 2026 is currently being finalized. Check back soon for the full schedule, session information, and speaker lineup!"
            />
        </div>
    );
}
