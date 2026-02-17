"use client";

import React from "react";


import PageHero from "@/components/PageHero";
import ProgramSubNav from "@/components/program/ProgramSubNav";
import ComingSoon from "@/components/ComingSoon";

export default function SpeakersPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="Keynote Speakers"
                description="Meet the visionaries and leaders shaping the future of education in Africa."
            />

            <ProgramSubNav />

            {/* Main Content - Coming Soon */}
            <ComingSoon
                title="Speakers Coming Soon"
                description="Our lineup of keynote speakers and industry leaders will be announced shortly. Check back soon for the full list of visionaries shaping the future of education in Africa."
            />
        </div>
    );
}
