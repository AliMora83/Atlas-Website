"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import MediaSubNav from "@/components/MediaSubNav";
import Link from "next/link";

interface PressRelease {
    id: string;
    date: string;
    title: string;
    excerpt: string;
    category: "Announcement" | "Partnership" | "Report" | "Speaker" | "Event";
    featured?: boolean;
}

const releases: PressRelease[] = [
    {
        id: "1",
        date: "January 10, 2026",
        title: "Atlas Global Academic Conference 2026 Officially Announced for Accra, Ghana",
        excerpt: "The Atlas Secretariat is proud to announce that the 2026 conference will be hosted in the historic city of Accra, Ghana from September 7-8, 2026. This marks a significant milestone as we return to West Africa to explore innovations in digital learning and education technology.",
        category: "Announcement",
        featured: true
    },
    {
        id: "2",
        date: "December 15, 2025",
        title: "Keynote Speaker Announcement: Dr. Amina Okonkwo to Address Conference",
        excerpt: "We are thrilled to announce that Dr. Amina Okonkwo, renowned education technology pioneer and UNESCO advisor, will deliver the opening keynote at Atlas Global Academic Conference 2026. Dr. Okonkwo will share insights on AI-driven personalized learning across Africa.",
        category: "Speaker",
        featured: true
    },
    {
        id: "3",
        date: "November 28, 2025",
        title: "Call for Proposals Now Open: Shaping the Future of Learning",
        excerpt: "We invite researchers, educators, policymakers, and innovators to submit their contributions for the 2026 program. Proposals are welcome across all themes including AI in Education, Digital Literacy, EdTech Policy, and Inclusive Learning Solutions.",
        category: "Announcement"
    },
    {
        id: "4",
        date: "October 20, 2025",
        title: "Impact Report 2025: Atlas Global Academic Conference Driving Continental Change",
        excerpt: "Following a successful event in Dar es Salaam, our latest impact report highlights key policy shifts, 2,500+ attendees from 45 countries, and 150+ innovative solutions showcased. The report demonstrates measurable improvements in digital learning adoption across 12 African nations.",
        category: "Report"
    },
    {
        id: "5",
        date: "September 15, 2025",
        title: "New Strategic Partnerships with African Development Bank",
        excerpt: "Atlas Global Academic Conference expands its financial support network through a groundbreaking partnership with the African Development Bank. This collaboration will provide scholarships for 200 educators from underserved regions to attend the 2026 conference.",
        category: "Partnership"
    },
    {
        id: "6",
        date: "August 5, 2025",
        title: "Registration Opens for Atlas Global Academic Conference 2026",
        excerpt: "Early bird registration is now open for Atlas Global Academic Conference 2026. Secure your spot at Africa's premier education technology gathering with special discounts available until March 1, 2026. Group rates and student packages also available.",
        category: "Event"
    },
    {
        id: "7",
        date: "July 12, 2025",
        title: "Atlas Global Academic Conference Partners with Ghana Ministry of Education",
        excerpt: "The Atlas Secretariat announces a strategic partnership with Ghana's Ministry of Education to host pre-conference workshops focused on national digital education strategies. The collaboration will bring together education ministers from across West Africa.",
        category: "Partnership"
    }
];

export default function PressReleasesPage() {
    const [categoryFilter, setCategoryFilter] = useState<string>("all");

    const categories = ["all", "Announcement", "Partnership", "Report", "Speaker", "Event"];
    const featuredReleases = releases.filter(r => r.featured);
    const filteredReleases = categoryFilter === "all"
        ? releases
        : releases.filter(r => r.category === categoryFilter);

    return (
        <div className="flex flex-col bg-white">
            <PageHero
                title="Press Releases"
                description="Stay updated with the latest news, official statements, and announcements from the Atlas Secretariat."
            />

            <MediaSubNav />

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col gap-12">
                    {/* Page Heading */}
                    <section className="pt-8">
                        <h1 className="text-5xl font-bold font-heading text-primary mb-4">Press Releases</h1>
                        <div className="w-20 h-1.5 bg-secondary rounded-full"></div>
                        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
                            Official news and announcements from Atlas Global Academic Conference. For media inquiries, please contact our press team.
                        </p>
                    </section>

                    {/* Featured Releases */}
                    {featuredReleases.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured News</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {featuredReleases.map((release) => (
                                    <div
                                        key={release.id}
                                        className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white shadow-lg hover:shadow-xl transition-all"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold uppercase">
                                                {release.category}
                                            </span>
                                            <span className="text-sm opacity-90">{release.date}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 leading-tight">{release.title}</h3>
                                        <p className="mb-6 opacity-90 leading-relaxed">{release.excerpt}</p>
                                        <Link
                                            href="#"
                                            className="inline-flex items-center gap-2 font-bold hover:gap-3 transition-all"
                                        >
                                            Read Full Release
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <polyline points="12 5 19 12 12 19" />
                                            </svg>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Category Filter */}
                    <section className="bg-white rounded-xl border border-gray-200 p-6">
                        <label className="block text-sm font-bold text-gray-700 mb-3">Filter by Category</label>
                        <div className="flex gap-2 flex-wrap">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setCategoryFilter(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${categoryFilter === category
                                        ? "bg-primary text-white shadow-md"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                        }`}
                                >
                                    {category === "all" ? "All Releases" : category}
                                </button>
                            ))}
                        </div>
                        <div className="mt-4 text-sm text-gray-600">
                            Showing {filteredReleases.length} {filteredReleases.length === 1 ? "release" : "releases"}
                        </div>
                    </section>

                    {/* Press Releases Archive */}
                    <section className="max-w-4xl">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">All Press Releases</h2>
                        <div className="space-y-8">
                            {filteredReleases.map((release) => (
                                <div
                                    key={release.id}
                                    className="flex flex-col md:flex-row gap-6 items-start border-b pb-8 last:border-0 border-gray-100 group"
                                >
                                    <div className="md:w-48 flex-shrink-0">
                                        <div className="text-gray-500 font-bold mb-2 text-sm">{release.date}</div>
                                        <div className="inline-block px-3 py-1 rounded-md bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider">
                                            {release.category}
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                            <Link href="#">{release.title}</Link>
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            {release.excerpt}
                                        </p>
                                        <Link
                                            href="#"
                                            className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm"
                                        >
                                            Read Full Story
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <polyline points="12 5 19 12 12 19" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Media Contact CTA */}
                    <section className="bg-gray-50 rounded-2xl p-10 text-center border border-gray-100">
                        <div className="max-w-2xl mx-auto">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold font-heading mb-4">Media Inquiries</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                For press accreditation, interview requests, high-resolution images, or further information, please contact our media team.
                            </p>
                            <a
                                href="mailto:press@atlas-conference.com"
                                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
                            >
                                Contact Media Team
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

