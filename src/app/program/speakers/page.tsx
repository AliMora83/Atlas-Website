"use client";

import React from "react";
import PageHero from "@/components/PageHero";
import ProgramSubNav from "@/components/program/ProgramSubNav";
import SpeakerCard from "@/components/program/SpeakerCard";
import { speakers } from "@/data/program";

export default function SpeakersPage() {
    // Duplicate the speakers list to create a seamless loop
    const infiniteSpeakers = [...speakers, ...speakers, ...speakers, ...speakers];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="Keynote Speakers"
                description="Meet the visionaries and leaders shaping the future of education in Africa."
                breadcrumb="Speakers"
            />

            <ProgramSubNav />

            {/* Main Content - Infinite Horizontal Scroll */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 mb-12">
                    <h2 className="text-3xl font-bold font-heading text-primary text-center">Featured Speakers</h2>
                </div>

                {/* Marquee Container */}
                <div className="relative w-full overflow-hidden">
                    {/* Gradient Masks for fade effect at edges */}
                    <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    {/* Scrolling Track */}
                    <div className="flex animate-scroll-left hover:pause-animation">
                        {infiniteSpeakers.map((speaker, index) => (
                            <div
                                key={`${speaker.name}-${index}`}
                                className="flex-shrink-0 w-[300px] mx-6"
                            >
                                <SpeakerCard {...speaker} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Inline CSS for the scrolling animation - typically this would go in globals.css or tailwind config */}
            <style jsx global>{`
                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll-left {
                    animation: scroll-left 60s linear infinite;
                    width: max-content;
                }
                .hover\:pause-animation:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}
