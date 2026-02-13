"use client";

import { useState } from "react";
import Image from "next/image";

interface YearData {
    year: string;
    location: string;
    country: string;
    title: string;
    description: string;
    icon: string;
    heroImage: string;
    galleryImages: string[];
}

const yearData: Record<string, YearData> = {
    "2025": {
        year: "2025",
        location: "Victoria Falls",
        country: "Zimbabwe",
        title: "VICTORIA FALLS ATLAS GLOBAL ACADEMIC CONFERENCE",
        description: "Victoria Falls—one of the world's great natural wonders—anchors ATLAS as a high-trust convening point where global researchers, industry leaders, governments, and development partners meet to convert knowledge into bankable, real-world solutions. As the birthplace of the Atlas Global Academic Conference, Victoria Falls set the tone for a transdisciplinary platform that bridges academia, commerce, and policy to accelerate high-impact translation initiatives—particularly in AgriTech and Smart Rural Homes—while offering an unforgettable destination that strengthens participation, partnership depth, and investor confidence in Africa's community transformation agenda.",
        icon: "/images/switcher/vic_falls.png",
        heroImage: "/images/switcher/victoriafallsimages/Main Picture.jpg",
        galleryImages: [
            "/images/switcher/victoriafallsimages/Small 1.jpg",
            "/images/switcher/victoriafallsimages/Small 2.jpg",
            "/images/switcher/victoriafallsimages/Small 3.jpg"
        ]
    },
    "2026": {
        year: "2026",
        location: "Cape Town",
        country: "South Africa",
        title: "CAPE TOWN ATLAS GLOBAL ACADEMIC CONFERENCE",
        description: "Cape Town—Africa's iconic \"Mother City\"—combines world-class infrastructure, global connectivity, and a dynamic academic and entrepreneurship ecosystem, making it a natural hub for high-level collaboration at the intersection of academia, industry, government, and development partners. Hosting ATLAS as part of the destination-based Regional Series through 2030, Cape Town strengthens the conference's core mission: translating knowledge into market-ready solutions and investable community transformation—particularly through AgriTech and Smart Rural Homes—supported by a premium delegate experience and a globally recognised African innovation brand.",
        icon: "/images/switcher/capetown.png",
        heroImage: "/images/switcher/capetownimages/Main Photo.jpeg",
        galleryImages: [
            "/images/switcher/capetownimages/Image 1.jpg",
            "/images/switcher/capetownimages/image 2.jpg",
            "/images/switcher/capetownimages/Image 3.jpg"
        ]
    },
    "2027": {
        year: "2027",
        location: "Mauritius",
        country: "Mauritius",
        title: "MAURITIUS ATLAS GLOBAL ACADEMIC CONFERENCE",
        description: "Mauritius—an Indian Ocean gateway known for stability, innovation, and world-class hospitality—offers a high-trust environment for convening global partners to accelerate research-to-market outcomes. As part of the ATLAS Regional Series, Mauritius positions the conference at the intersection of academia, industry, governments, and development partners to structure scalable, investment-ready translation initiatives—linking AgriTech innovation, Smart Rural Homes commercialisation, and DPI-enabled systems that integrate communities into mainstream trade, finance, and information flows.",
        icon: "/images/switcher/maur.png",
        heroImage: "/images/switcher/mauritiusimages/Main picture.jpg",
        galleryImages: [
            "/images/switcher/mauritiusimages/small 1.jpg",
            "/images/switcher/mauritiusimages/Small 2.jpg",
            "/images/switcher/mauritiusimages/small 3.jpg"
        ]
    },
    "2028": {
        year: "2028",
        location: "Cairo",
        country: "Egypt",
        title: "CAIRO ATLAS GLOBAL ACADEMIC CONFERENCE",
        description: "Cairo offers an unmatched strategic gateway between Africa, the Middle East, and global markets—providing a powerful stage for ATLAS to advance research translation into industrial-scale outcomes. With its depth of universities, policy institutions, and enterprise, Cairo reinforces ATLAS's investable approach: aligning researchers, private sector innovators, governments, and development partners to design scalable models for inclusive growth—mobilising capital, technology, and implementation partnerships that turn frontier research into deployment-ready solutions across AgriTech, Smart Rural Homes, and enabling digital infrastructure.",
        icon: "/images/switcher/cairo.png",
        heroImage: "/images/switcher/cairoegyptimages/Main Image.jpg",
        galleryImages: [
            "/images/switcher/cairoegyptimages/Small 1.jpg",
            "/images/switcher/cairoegyptimages/Small 2.jpg",
            "/images/switcher/cairoegyptimages/Small3.jpg"
        ]
    },
    "2029": {
        year: "2029",
        location: "Zanzibar",
        country: "Tanzania",
        title: "ZANZIBAR ATLAS GLOBAL ACADEMIC CONFERENCE",
        description: "Zanzibar is a world-class island destination at the crossroads of Africa's trade history and its innovation future—making it an ideal host for ATLAS's transdisciplinary R&D platform focused on translating research into inclusive growth. By convening academia, industry, government, and development partners in a setting built for global engagement, Zanzibar strengthens the ATLAS mission to unlock investment-ready community solutions—especially in AgriTech value chains, rural commercialisation, and DPI-enabled market access—positioning African communities to trade, transact, and scale within mainstream economic systems.",
        icon: "/images/switcher/zanzibar.png",
        heroImage: "/images/switcher/zanzibarimages/Main Picture.jpg",
        galleryImages: [
            "/images/switcher/zanzibarimages/Small 1.jpg",
            "/images/switcher/zanzibarimages/Small 2.jpg",
            "/images/switcher/zanzibarimages/Small 3.jpg"
        ]
    },
    "2030": {
        year: "2030",
        location: "Gold Coast",
        country: "Ghana",
        title: "GOLD COAST ATLAS GLOBAL ACADEMIC CONFERENCE",
        description: "Ghana's Gold Coast brings a compelling blend of cultural significance, democratic stability, and growing innovation capacity—an ideal setting to advance ATLAS's mission of turning research into inclusive, scalable economic impact. As a destination within the ATLAS Regional Series, Ghana provides a powerful convening platform for universities, private sector leaders, governments, and development partners to align around investable translation pipelines—driving AgriTech industrialisation, Smart Rural Homes commercial solutions, and digital enabling systems that dismantle the dual economy by connecting communities to mass production, processing, and consumption at scale.",
        icon: "/images/switcher/gold_coast.png",
        heroImage: "/images/switcher/ghanaimages/Main Image.jpg",
        galleryImages: [
            "/images/switcher/ghanaimages/small1.jpg",
            "/images/switcher/ghanaimages/small 2.JPG",
            "/images/switcher/ghanaimages/small 3.JPG"
        ]
    }
};

export default function AtlasDifference() {
    const [activeYear, setActiveYear] = useState("2026");
    const activeData = yearData[activeYear];

    return (
        <section className="section-padding bg-white relative overflow-hidden py-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6 uppercase">
                        ATLAS REGIONAL SERIES ROADMAP
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Left Sidebar - Years Navigation - Reduced width here */}
                    <div className="flex-shrink-0 lg:w-52">
                        <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
                            {Object.keys(yearData).map((year) => {
                                const data = yearData[year];
                                const isActive = activeYear === year;
                                return (
                                    <button
                                        key={year}
                                        onClick={() => setActiveYear(year)}
                                        className={`group flex items-center gap-3 p-3 rounded-full transition-all w-full text-left whitespace-nowrap ${isActive
                                            ? "bg-white shadow-md border-2 border-primary/20"
                                            : "hover:bg-gray-50 border border-transparent"
                                            }`}
                                    >
                                        <div className="relative w-8 h-8 flex-shrink-0 rounded-full overflow-hidden border border-gray-100">
                                            <Image
                                                src={data.icon}
                                                alt={data.location}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col leading-tight">
                                            <span className={`text-sm font-bold ${isActive ? "text-primary" : "text-gray-700"}`}>
                                                {data.location}
                                            </span>
                                            <span className="text-[10px] text-gray-500 font-medium">
                                                {data.year}
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="flex-1 animate-fadeIn">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                            {/* Text Column (Left) */}
                            <div className="flex flex-col pt-2">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {activeData.location} ({activeData.country})
                                </h3>

                                <div className="w-20 h-1 bg-primary mb-6"></div>

                                {/* Description Text - Added text-justify */}
                                <div className="text-gray-600 leading-relaxed text-base space-y-4 text-justify">
                                    {activeData.description.split('\n').map((paragraph, idx) => (
                                        <p key={idx}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Images Column (Right) */}
                            <div className="flex flex-col gap-4">
                                {/* Main Hero Image */}
                                <div className="relative h-[280px] w-full rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src={activeData.heroImage}
                                        alt={activeData.title}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                {/* Gallery Grid */}
                                <div className="grid grid-cols-3 gap-4">
                                    {activeData.galleryImages.map((img, idx) => (
                                        <div key={idx} className="relative h-[100px] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer group">
                                            <Image
                                                src={img}
                                                alt={`Gallery image ${idx + 1}`}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
