"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const capeImages = [
    "/images/cape_images/Cape-images-1.png",
    "/images/cape_images/Cape-images-2.png",
    "/images/cape_images/Cape-images-3.png",
    "/images/cape_images/Cape-images-4.png",
    "/images/cape_images/Cape-images-5.png",
    "/images/cape_images/Cape-images-6.png",
    "/images/cape_images/Cape-images-7.png",
    "/images/cape_images/Cape-images-8.png",
    "/images/cape_images/Cape-images-9.png",
];

export default function HostCountrySection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % capeImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="section-padding bg-white" id="host-country">
            <div className="container mx-auto px-4">
                <div className="w-full">
                    <h2 className="text-primary mb-2 text-center">HOST VENUE 2026 | CAPE TOWN | SOUTH AFRICA</h2>
                    <h3 className="text-xl text-gray-600 mb-12 text-center font-normal">
                        Cape Town Hotel School | Granger Bay
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-md text-gray-700 leading-relaxed">
                                <span className="font-bold">Cape Town 2026</span> will host the <span className="font-bold">Second Edition of the Atlas Global Academic Conference,</span>
                                bringing together a transdisciplinary global R&D community at the intersection of
                                academia, industry, commerce, government, and development partners.
                            </p>
                            <p className="text-md text-gray-700 leading-relaxed">
                                Cape Town&mdash;Africa&apos;s iconic &ldquo;Mother City&rdquo;&mdash;is a vibrant hub of
                                innovation, culture, and academic excellence. With world-class infrastructure, global
                                connectivity, and a dynamic research and entrepreneurship ecosystem, it provides the
                                perfect setting for high-level dialogue and collaboration as ATLAS advances its
                                destination-based Regional Series through 2030.
                            </p>
                            <p className="text-md text-gray-700 leading-relaxed">
                                The 2026 edition will be hosted at the prestigious <span className="font-bold">Cape Town Hotel School</span> in the scenic
                                <span className="font-bold">Granger Bay precinct</span> from <span className="font-bold">7&ndash;8 September 2026.</span> Renowned for excellence and equipped
                                with modern facilities, the venue offers an ideal environment for convening
                                researchers, industry leaders, governments, and development partners&mdash;supporting
                                meaningful learning, networking, and the translation of knowledge into real-world
                                impact.
                            </p>
                        </div>

                        {/* Image Slider */}
                        <div className="h-[400px] w-full relative group rounded-xl overflow-hidden shadow-lg border border-gray-100">
                            {capeImages.map((src, index) => (
                                <div
                                    key={src}
                                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                                        }`}
                                >
                                    <Image
                                        src={src}
                                        alt={`Cape Town Hotel School View ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        priority={index === 0}
                                    />
                                </div>
                            ))}

                            {/* Slider Navigation Dots (Optional but good UX) */}
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                                {capeImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                            ? "bg-white w-4"
                                            : "bg-white/50 hover:bg-white/80"
                                            }`}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
