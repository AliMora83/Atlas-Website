"use client";

import { useState } from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import MediaSubNav from "@/components/MediaSubNav";

type MediaType = "all" | "photos" | "videos";
type ConferenceDay = "all" | "day1" | "day2";

interface ManifestItem {
    filename: string;
    originalName: string;
    width: number;
    height: number;
    size: number;
    qualityScore: number;
}

interface GalleryItem {
    id: string;
    type: "photo" | "video";
    title: string;
    day: "day1" | "day2" | "day3";
    thumbnail: string;
    fullImage: string;
    description: string;
    width: number;
    height: number;
}

// Import manifest data for both days
const day1ManifestData: ManifestItem[] = require("../../../../public/images/events/2025/day1/manifest.json");
const day2ManifestData: ManifestItem[] = require("../../../../public/images/events/2025/day2/manifest.json");

// Convert Day 1 manifest to gallery items
const day1Photos: GalleryItem[] = day1ManifestData.map((item: ManifestItem, index: number) => ({
    id: `day1-${index + 1}`,
    type: "photo",
    title: `Day 1 - Photo ${index + 1}`,
    day: "day1",
    thumbnail: `/images/events/2025/day1/${item.filename}`,
    fullImage: `/images/events/2025/day1/${item.filename}`,
    description: `Day 1 - ${item.originalName}`,
    width: item.width,
    height: item.height
}));

// Convert Day 2 manifest to gallery items
const day2Photos: GalleryItem[] = day2ManifestData.map((item: ManifestItem, index: number) => ({
    id: `day2-${index + 1}`,
    type: "photo",
    title: `Day 2 - Photo ${index + 1}`,
    day: "day2",
    thumbnail: `/images/events/2025/day2/${item.filename}`,
    fullImage: `/images/events/2025/day2/${item.filename}`,
    description: `Day 2 - ${item.originalName}`,
    width: item.width,
    height: item.height
}));

// All gallery items
const galleryItems: GalleryItem[] = [
    ...day1Photos,
    ...day2Photos,
    // Day 3 will be added here
];

export default function MediaGalleryPage() {
    const [mediaFilter, setMediaFilter] = useState<MediaType>("all");
    const [dayFilter, setDayFilter] = useState<ConferenceDay>("all");
    const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);
    const [visibleCount, setVisibleCount] = useState(12);

    const filteredItems = galleryItems.filter((item) => {
        const matchesMedia = mediaFilter === "all" || item.type === mediaFilter.slice(0, -1);
        const matchesDay = dayFilter === "all" || item.day === dayFilter;
        return matchesMedia && matchesDay;
    });

    const visibleItems = filteredItems.slice(0, visibleCount);
    const hasMore = visibleCount < filteredItems.length;

    const loadMore = () => {
        setVisibleCount(prev => prev + 12);
    };

    return (
        <div className="flex flex-col bg-white">
            <PageHero
                title="Media Gallery"
                description="Browse photos and videos from Atlas Global Academic Conference 2025."
            />

            <MediaSubNav />

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col gap-8">
                    {/* Page Heading */}
                    <section className="pt-8">
                        <h1 className="text-5xl font-bold font-heading text-primary mb-4">Gallery 2025</h1>
                        <div className="w-20 h-1.5 bg-secondary rounded-full"></div>
                        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
                            Explore highlights from Atlas Global Academic Conference 2025. Download high-resolution images for editorial use.
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
                                            onClick={() => { setMediaFilter(type); setVisibleCount(12); }}
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
                                    {(["all", "day1", "day2"] as ConferenceDay[]).map((day) => (
                                        <button
                                            key={day}
                                            onClick={() => { setDayFilter(day); setVisibleCount(12); }}
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
                            Showing {visibleItems.length} of {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"}
                        </div>
                    </section>

                    {/* Gallery Grid */}
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {visibleItems.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => item.type === "photo" && setLightboxImage(item)}
                                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-100"
                            >
                                {/* Thumbnail */}
                                <div className="relative aspect-video bg-gray-100">
                                    {item.type === "photo" ? (
                                        <Image
                                            src={item.thumbnail}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
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

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* View More Button */}
                    {hasMore && (
                        <div className="flex justify-center py-8">
                            <button
                                onClick={loadMore}
                                className="px-8 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
                            >
                                View More ({filteredItems.length - visibleCount} remaining)
                            </button>
                        </div>
                    )}

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
                        <p className="mb-6 opacity-90">Download the complete photo pack with high-resolution images from all conference days.</p>
                        <button className="px-8 py-3 bg-white text-primary rounded-lg font-bold hover:shadow-lg transition-all">
                            Download Complete Photo Pack
                        </button>
                    </section>
                </div>
            </div>

            {/* Lightbox Modal */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                    onClick={() => setLightboxImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                        onClick={() => setLightboxImage(null)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
                        <Image
                            src={lightboxImage.fullImage}
                            alt={lightboxImage.title}
                            width={lightboxImage.width}
                            height={lightboxImage.height}
                            className="max-w-full max-h-full object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />

                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                            <h3 className="text-xl font-bold mb-2">{lightboxImage.title}</h3>
                            <p className="text-sm opacity-90">{lightboxImage.description}</p>
                        </div>
                    </div>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm opacity-75">
                        Click anywhere to close
                    </div>
                </div>
            )}
        </div>
    );
}

