"use client";

import { useState } from "react";
import Image from "next/image";

interface YearData {
    year: string;
    title: string;
    description: string;
    heroImage: string;
    galleryImages: string[];
}

const yearData: Record<string, YearData> = {
    "2025": {
        year: "2025",
        title: "VICTORIA FALLS ATLAS GLOBAL ACADEMIC CONFERENCE",
        description: "The inaugural Atlas Global Academic Conference held at the majestic Victoria Falls, bringing together thought leaders and innovators to ignite the conversation on Africa's educational future.",
        heroImage: "/images/events/2025/day2/conference-1.webp",
        galleryImages: [
            "/images/events/2025/day2/conference-10.webp",
            "/images/events/2025/day2/conference-11.webp",
            "/images/events/2025/day2/conference-12.webp"
        ]
    },
    "2026": {
        year: "2026",
        title: "CAPE TOWN ATLAS GLOBAL ACADEMIC CONFERENCE",
        description: "Cape Town—Africa's tech capital and a vibrant hub of innovation—offers the perfect backdrop for the Atlas Regional Series. Converging academia, industry, and government to drive actionable strategies for skills development.",
        heroImage: "/images/CapeTown-i.png", // Keeping Cape Town image for 2026 context
        galleryImages: [
            "/images/events/2025/day2/conference-2.webp",
            "/images/events/2025/day2/conference-3.webp",
            "/images/events/2025/day2/conference-4.webp"
        ]
    },
    "2027": {
        year: "2027",
        title: "MAURITIUS ATLAS GLOBAL ACADEMIC CONFERENCE",
        description: "Mauritius—an Indian Ocean gateway known for stability, innovation, and world-class hospitality—offers an ideal setting for the next chapter of the ATLAS Global Academic Conference Regional Series. As a bridge between Africa and global markets, the island provides a high-trust environment for convening.",
        heroImage: "/images/events/2025/day2/conference-020.webp",
        galleryImages: [
            "/images/events/2025/day2/conference-021.webp",
            "/images/events/2025/day2/conference-022.webp",
            "/images/events/2025/day2/conference-023.webp"
        ]
    }
};

export default function AtlasDifference() {
    const [activeYear, setActiveYear] = useState("2026");
    const activeData = yearData[activeYear];

    return (
        <section className="section-padding bg-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6 uppercase">
                        ATLAS REGIONAL SERIES ROADMAP
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Left Sidebar - Years Navigation */}
                    <div className="flex-shrink-0 lg:w-48 pt-2">
                        <div className="flex flex-row lg:flex-col gap-6 lg:gap-2 justify-center lg:justify-start">
                            {["2025", "2026", "2027"].map((year) => (
                                <button
                                    key={year}
                                    onClick={() => setActiveYear(year)}
                                    className={`group flex items-center gap-4 transition-all ${activeYear === year
                                        ? "text-primary font-bold"
                                        : "text-gray-400 hover:text-gray-600"
                                        }`}
                                >
                                    <div className={`w-3 h-3 rounded-full transition-colors ${activeYear === year
                                        ? "bg-primary"
                                        : "bg-gray-200 group-hover:bg-gray-300"
                                        }`} />
                                    <span className="text-lg">{year}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="flex-1">
                        <div className="animate-fadeIn">
                            <div className="grid lg:grid-cols-2 gap-8 mb-8">
                                {/* Text Column: Header + Description */}
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 uppercase">
                                        {activeData.title}
                                    </h3>
                                    <div className="text-gray-600 leading-relaxed text-lg">
                                        <p>{activeData.description}</p>
                                    </div>
                                </div>

                                {/* Hero Image Column */}
                                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-md">
                                    <Image
                                        src={activeData.heroImage}
                                        alt={activeData.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Gallery Grid */}
                            <div className="grid grid-cols-3 gap-4">
                                {activeData.galleryImages.map((img, idx) => (
                                    <div key={idx} className="relative h-[250px] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                        <Image
                                            src={img}
                                            alt={`Gallery image ${idx + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
