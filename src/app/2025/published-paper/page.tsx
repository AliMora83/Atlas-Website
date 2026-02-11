"use client";

import React from "react";
import PageHero from "@/components/PageHero";

export default function PublishedPaperPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="Published Paper"
                description="Access key documents, reports, and publications from the Atlas Global Academic Conference."
            />

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-heading text-primary mb-8">Conference Publications & Resources</h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: "Atlas Global Academic Conference Fact Sheet", href: "#/resources/factsheet.pdf" },
                            { name: "Atlas Global Academic Conference Network & Reach", href: "#/resources/network-reach.pdf" },
                            { name: "Atlas Global Academic Conference Executive Summary", href: "#/resources/executive-summary.pdf" },
                            { name: "Atlas Global Academic Conference Strategic Overview", href: "#/resources/strategic-overview.pdf" },
                            { name: "2025 Programme", href: "/2025_Programme.pdf" },
                            { name: "Reflective Paper", href: "/Reflective_Paper.pdf" },
                            { name: "Book of Abstracts 2025", href: "/BOOK_OF_ABSTRACTS_23_August_2025.pdf" },
                            { name: "Atlas Global Academic Conference Call 2026", href: "/Atlas Global Academic Conferene Call 2026-1.pdf" }
                        ].map((resource) => (
                            <a
                                key={resource.name}
                                href={resource.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all group"
                            >
                                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="12" y1="18" x2="12" y2="12"></line>
                                        <polyline points="9 15 12 12 15 15"></polyline>
                                    </svg>
                                </div>
                                <span className="font-bold text-gray-700 group-hover:text-primary transition-colors">
                                    {resource.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
