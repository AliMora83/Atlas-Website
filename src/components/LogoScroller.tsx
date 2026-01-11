"use client";

import Image from "next/image";

interface Logo {
    src: string;
    alt: string;
}

interface LogoScrollerProps {
    logos: Logo[];
    speed?: number; // Duration in seconds for one complete scroll
}

export default function LogoScroller({ logos, speed = 30 }: LogoScrollerProps) {
    // Duplicate logos for seamless infinite scroll
    const duplicatedLogos = [...logos, ...logos];

    return (
        <section className="section-padding bg-gray-50 border-y overflow-hidden">
            <div className="container mx-auto px-4 mb-12">
                <h2 className="text-center text-gray-900 mb-4">→2025 Exhibitors & Partners</h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto">
                    Join leading EdTech companies and organizations showcasing innovation at Atlas Conference.
                </p>
            </div>

            <div className="relative">
                {/* Gradient overlays for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

                {/* Scrolling container */}
                <div className="logo-scroll-container">
                    <div
                        className="logo-scroll-track"
                        style={{
                            animationDuration: `${speed}s`
                        }}
                    >
                        {duplicatedLogos.map((logo, index) => (
                            <div
                                key={index}
                                className="logo-item"
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={200}
                                    height={100}
                                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                />
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
                }

                .logo-scroll-track {
                    display: flex;
                    gap: 4rem;
                    animation: scroll linear infinite;
                    will-change: transform;
                }

                .logo-scroll-track:hover {
                    animation-play-state: paused;
                }

                .logo-item {
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 200px;
                    height: 100px;
                    padding: 1rem;
                }

                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </section>
    );
}
