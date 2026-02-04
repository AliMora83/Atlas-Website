"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Mic, Globe, Lightbulb } from "lucide-react";

interface ImageItem {
    filename: string;
    width: number;
    height: number;
    tag?: string;
    day?: string;
}

export default function HighlightsSection() {
    const [scrollerImages, setScrollerImages] = useState<ImageItem[]>([]);

    useEffect(() => {
        // Load manifests and filter Conference images only
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const day1Manifest: ImageItem[] = require("@/../public/images/events/2025/day1/manifest.json");
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const day2Manifest: ImageItem[] = require("@/../public/images/events/2025/day2/manifest.json");

        // Filter only Conference-tagged images
        const conferenceImages = [
            ...day1Manifest.filter((img: ImageItem) => img.tag === 'Conference').map((img: ImageItem) => ({ ...img, day: "day1" })),
            ...day2Manifest.filter((img: ImageItem) => img.tag === 'Conference').map((img: ImageItem) => ({ ...img, day: "day2" }))
        ];

        // Shuffle and select 12 random Conference images
        const shuffled = conferenceImages.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 12);
        // eslint-disable-next-line
        setScrollerImages(selected);
    }, []);

    const metrics = [
        { icon: <Users className="w-8 h-8 text-primary" />, value: "1,543", label: "Participants" },
        { icon: <Mic className="w-8 h-8 text-primary" />, value: "244", label: "Speakers" },
        { icon: <Globe className="w-8 h-8 text-primary" />, value: "82", label: "Countries Represented" },
        { icon: <Lightbulb className="w-8 h-8 text-primary" />, value: "15", label: "Ministers of Education" },
    ];

    return (
        <section className="section-padding bg-gray-900 text-white" id="highlights">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-8">
                    <h2 className="text-white mb-6">Atlas Global Academic Conference 2025 Highlights</h2>
                    <p className="text-gray-400 text-lg">
                        Relive the best moments from our previous edition and see the impact of our global community.
                    </p>
                </div>

                {/* Metrics - 3 cards with horizontal layout */}
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                        {metrics.slice(0, 3).map((metric, idx) => (
                            <div key={idx} className="bg-gray-800/50 border border-gray-700 p-4 rounded-lg hover:bg-gray-800 transition-colors group">
                                <div className="flex items-center gap-4">
                                    <div className="text-2xl group-hover:scale-110 transition-transform flex-shrink-0">{metric.icon}</div>
                                    <div className="flex-1">
                                        <div className="text-2xl font-bold text-primary leading-tight">{metric.value}</div>
                                        <div className="text-[11px] text-gray-400 font-medium uppercase tracking-wide leading-tight">{metric.label}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Infinite Image Scroller */}
                {scrollerImages.length > 0 && (
                    <div className="mb-12">
                        <div className="relative overflow-hidden">
                            <div className="flex gap-4 animate-scroll">
                                {/* Duplicate images for seamless loop */}
                                {[...scrollerImages, ...scrollerImages, ...scrollerImages].map((img: ImageItem, idx) => (
                                    <div
                                        key={idx}
                                        className="flex-shrink-0 w-[400px] h-[250px] relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                                    >
                                        <Image
                                            src={`/images/events/2025/${img.day}/${img.filename}`}
                                            alt={`Gallery image ${idx + 1}`}
                                            fill
                                            className="object-cover"
                                            sizes="400px"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* View More Button */}
                        <div className="text-center mt-8">
                            <Link
                                href="/media/gallery"
                                className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
                            >
                                View More Photos
                            </Link>
                        </div>
                    </div>
                )}

                <div className="text-center">
                    <p className="text-gray-500 text-sm max-w-2xl mx-auto italic">
                        Join us in 2026 to be part of the next chapter in Africa&apos;s educational innovation story.
                    </p>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.333%);
                    }
                }
                
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
                
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
