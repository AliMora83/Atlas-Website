"use client";

import Image from "next/image";

// Real partner images from public/images/partners
const partners = [
    { id: 1, src: "/images/partners/partner-1.png", alt: "Partner 1" },
    { id: 2, src: "/images/partners/partner-2.png", alt: "Partner 2" },
    { id: 3, src: "/images/partners/partner-3.png", alt: "Partner 3" },
    { id: 4, src: "/images/partners/partner-4.png", alt: "Partner 4" },
    { id: 5, src: "/images/partners/partner-5.png", alt: "Partner 5" },
];

export default function PartnersGrid() {
    // Duplicate for seamless infinite scroll (tripling to ensure enough content for smooth loop if screen is wide)
    const duplicatedPartners = [...partners, ...partners, ...partners];

    return (
        <section className="section-padding bg-white overflow-hidden" id="partners">
            <div className="container mx-auto px-4 mb-16">
                <div className="text-center">
                    <h2 className="text-primary mb-4">Atlas Global Academic Conference 2026 Partners</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We are proud to work with global leaders committed to educational innovation and development.
                    </p>
                </div>
            </div>

            <div className="relative w-full">
                {/* Gradient overlays for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                <div className="logo-scroll-container">
                    <div className="logo-scroll-track">
                        {duplicatedPartners.map((partner, index) => (
                            <div
                                key={index}
                                className="logo-item group"
                            >
                                <div className="relative w-48 h-24 flex items-center justify-center p-4 transition-all duration-300">
                                    <Image
                                        src={partner.src}
                                        alt={partner.alt}
                                        fill
                                        className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .logo-scroll-container {
                    display: flex;
                    overflow: hidden;
                    user-select: none;
                    width: 100%;
                }

                .logo-scroll-track {
                    display: flex;
                    gap: 4rem;
                    animation: scroll 40s linear infinite;
                    will-change: transform;
                    width: max-content;
                }

                .logo-scroll-track:hover {
                    animation-play-state: paused;
                }

                .logo-item {
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.33%); /* Scroll 1/3 because we tripled the list */
                    }
                }
            `}</style>
        </section>
    );
}
