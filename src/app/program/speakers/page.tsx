"use client";

import React from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ProgramSubNav from "@/components/program/ProgramSubNav";
import { featuredSpeakers } from "@/data/speakers";

export default function SpeakersPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="Keynote Speakers"
                description="Meet the visionaries and leaders shaping the future of education in Africa."
            />

            <ProgramSubNav />

            {/* Main Content - Three Column Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-heading text-primary text-center mb-16">Featured Speakers 2026</h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {featuredSpeakers.map((speaker, index) => (
                            <div key={index} className="flex flex-col">
                                {/* Speaker Card */}
                                <div className={`${speaker.colorClass} rounded-xl p-8 text-center shadow-lg mb-6`}>
                                    <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-300">
                                        <Image
                                            src={speaker.imageSrc}
                                            alt={speaker.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
                                    <p className="text-gray-700 text-sm font-medium mb-1">{speaker.role}</p>
                                    <p className="text-gray-600 text-xs uppercase tracking-wider">{speaker.organization}</p>
                                </div>

                                {/* Bio Section */}
                                <div className="bg-gray-50 rounded-xl p-6 flex-grow border border-gray-200">
                                    <h4 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        Biography
                                    </h4>
                                    <p className="text-gray-700 text-sm leading-relaxed">{speaker.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
