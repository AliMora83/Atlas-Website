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

                    <div className="max-w-6xl mx-auto">
                        {featuredSpeakers.map((speaker, index) => (
                            <div key={index} className="flex flex-col lg:flex-row gap-12 items-start">
                                {/* Left Column: Image */}
                                <div className="w-full lg:w-1/3 flex-shrink-0">
                                    <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100">
                                        <Image
                                            src={speaker.imageSrc}
                                            alt={speaker.name}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                    <div className="mt-6 text-center lg:text-left">
                                        <h3 className="text-2xl font-bold text-gray-900">{speaker.name}</h3>
                                        <p className="text-primary font-bold text-lg mt-1">{speaker.role}</p>
                                        <p className="text-gray-600 text-sm mt-2 uppercase tracking-wide">{speaker.organization}</p>
                                    </div>
                                </div>

                                {/* Right Column: Bio */}
                                <div className="w-full lg:w-2/3">
                                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
                                        <h4 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg>
                                            Biography
                                        </h4>
                                        <div className="prose prose-lg text-gray-700 max-w-none">
                                            {speaker.bio.split('\n').map((paragraph, i) => (
                                                <p key={i} className="mb-4 last:mb-0 leading-relaxed">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>

                                        <div className="mt-8 pt-8 border-t border-gray-200 flex justify-end">
                                            <div className="flex gap-4">
                                                {/* Social links could go here if available in data */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
