"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import MediaSubNav from "@/components/MediaSubNav";

type MediaType = "all" | "photos" | "videos";
type ConferenceDay = "all" | "day1" | "day2" | "day3";

interface GalleryItem {
    id: string;
    type: "photo" | "video";
    title: string;
    day: "day1" | "day2" | "day3";
    thumbnail: string;
    description: string;
}

// Dummy gallery data
const galleryItems: GalleryItem[] = [
    { id: "1", type: "photo", title: "Opening Ceremony", day: "day1", thumbnail: "/images/gallery/opening.jpg", description: "Conference opening with keynote address" },
    { id: "2", type: "photo", title: "Ministerial Round Table", day: "day1", thumbnail: "/images/gallery/ministerial.jpg", description: "Ministers discussing education policy" },
    { id: "3", type: "photo", title: "Networking Session", day: "day1", thumbnail: "/images/gallery/networking.jpg", description: "Attendees connecting during break" },
    { id: "4", type: "video", title: "Day 1 Highlights", day: "day1", thumbnail: "/images/gallery/video-day1.jpg", description: "Video recap of conference day 1" },
    { id: "5", type: "photo", title: "Panel Discussion", day: "day2", thumbnail: "/images/gallery/panel.jpg", description: "Expert panel on digital learning" },
    { id: "6", type: "photo", title: "Exhibition Floor", day: "day2", thumbnail: "/images/gallery/exhibition.jpg", description: "Exhibitors showcasing solutions" },
    { id: "7", type: "photo", title: "Workshop Session", day: "day2", thumbnail: "/images/gallery/workshop.jpg", description: "Hands-on learning workshop" },
    { id: "8", type: "video", title: "Day 2 Highlights", day: "day2", thumbnail: "/images/gallery/video-day2.jpg", description: "Video recap of conference day 2" },
    { id: "9", type: "photo", title: "Keynote Speaker", day: "day3", thumbnail: "/images/gallery/keynote.jpg", description: "Featured speaker presentation" },
    { id: "10", type: "photo", title: "Awards Ceremony", day: "day3", thumbnail: "/images/gallery/awards.jpg", description: "Recognizing excellence in edtech" },
    { id: "11", type: "photo", title: "Closing Remarks", day: "day3", thumbnail: "/images/gallery/closing.jpg", description: "Conference wrap-up and next steps" },
    { id: "12", type: "video", title: "Conference Highlights", day: "day3", thumbnail: "/images/gallery/video-highlights.jpg", description: "Full conference video summary" },
];

export default function MediaGalleryPage() {
    const [mediaFilter, setMediaFilter] = useState<MediaType>("all");
    const [dayFilter, setDayFilter] = useState<ConferenceDay>("all");

    const filteredItems = galleryItems.filter((item) => {
        const matchesMedia = mediaFilter === "all" || item.type === mediaFilter.slice(0, -1);
        const matchesDay = dayFilter === "all" || item.day === dayFilter;
        return matchesMedia && matchesDay;
    });

    return (
        <div className="flex flex-col bg-white">
            <PageHero
                title="Media Gallery"
                description="Browse photos and videos from Atlas Convention 2025 in Dar es Salaam, Tanzania."
                breadcrumb="Media / Gallery"
            />

            <MediaSubNav />

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col gap-8">
                    {/* Page Heading */}
                    <section className="pt-8">
                        <h1 className="text-5xl font-bold font-heading text-primary mb-4">Gallery 2025</h1>
                        <div className="w-20 h-1.5 bg-secondary rounded-full"></div>
                        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
                            Explore highlights from Atlas Convention 2025. Download high-resolution images for editorial use.
                        </p>
                    </section>

                    {/* Filters */}
                    <section className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Media Type Filter */}
                            <div className="flex-1">
                                <label className="block text-sm font-bold text-gray-700 mb-3">Media Type</label>
                                <div className="flex gap-2 flex-wrap">
                                    {(["all", "photos", "videos"] as MediaType[]).map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => setMediaFilter(type)}
                                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${mediaFilter === type
                                                ? "bg-primary text-white shadow-md"
                                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                                }`}
                                        >
                                            {type.charAt(0).toUpperCase() + type.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Day Filter */}
                            <div className="flex-1">
                                <label className="block text-sm font-bold text-gray-700 mb-3">Conference Day</label>
                                <div className="flex gap-2 flex-wrap">
                                    {(["all", "day1", "day2", "day3"] as ConferenceDay[]).map((day) => (
                                        <button
                                            key={day}
                                            onClick={() => setDayFilter(day)}
                                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${dayFilter === day
                                                ? "bg-secondary text-white shadow-md"
                                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                                }`}
                                        >
                                            {day === "all" ? "All Days" : `Day ${day.slice(-1)}`}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 text-sm text-gray-600">
                            Showing {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"}
                        </div>
                    </section>

                    {/* Gallery Grid */}
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredItems.map((item) => (
                            <div
                                key={item.id}
                                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-100"
                            >
                                {/* Thumbnail */}
                                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                    {item.type === "video" && (
                                        <div className="absolute inset-0 flex items-center justify-center z-10">
                                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                                <svg
                                                    className="w-8 h-8 text-primary ml-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-6xl opacity-20">
                                            {item.type === "photo" ? "📷" : "🎥"}
                                        </span>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded">
                                            Day {item.day.slice(-1)}
                                        </span>
                                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded">
                                            {item.type === "photo" ? "Photo" : "Video"}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </div>

                                {/* Download Button */}
                                <div className="px-4 pb-4">
                                    <button className="w-full px-4 py-2 bg-primary/5 text-primary border border-primary/20 rounded-lg hover:bg-primary hover:text-white transition-colors text-sm font-bold">
                                        {item.type === "photo" ? "Download Image" : "Watch Video"}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* Empty State */}
                    {filteredItems.length === 0 && (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No items found</h3>
                            <p className="text-gray-600">Try adjusting your filters to see more content.</p>
                        </div>
                    )}

                    {/* Download All CTA */}
                    <section className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
                        <h2 className="text-2xl font-bold mb-4">Need all media assets?</h2>
                        <p className="mb-6 opacity-90">Download the complete photo pack with high-resolution images from all three days.</p>
                        <button className="px-8 py-3 bg-white text-primary rounded-lg font-bold hover:shadow-lg transition-all">
                            Download Complete Photo Pack (250 MB)
                        </button>
                    </section>
                </div>
            </div>
        </div>
    );
}

