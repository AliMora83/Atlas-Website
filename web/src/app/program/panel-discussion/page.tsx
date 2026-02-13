import React from "react";
import PageHero from "@/components/PageHero";
import ProgramSubNav from "@/components/program/ProgramSubNav";

export default function PanelDiscussionPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="Panel Discussion"
                description="A high-level dialogue bringing together Ministers of Education from across Africa to discuss policy and innovation."
            />

            <ProgramSubNav />

            {/* Coming Soon Banner */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        {/* Icon */}
                        <div className="mb-6">
                            <svg
                                className="w-24 h-24 text-primary/20"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>

                        {/* Coming Soon Text */}
                        <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">
                            Coming Soon
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-gray-600 max-w-2xl">
                            Panel discussion details and participant information will be announced closer to the conference date.
                            Check back soon for updates!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
