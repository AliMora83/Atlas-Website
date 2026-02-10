import React from "react";
import PageHero from "@/components/PageHero";
import AboutSubNav from "@/components/AboutSubNav";
import Image from "next/image";
import ImageSlider from "@/components/ImageSlider";


export default function VenuePage() {
    return (
        <>
            <PageHero
                title="Venue & Accommodation"
                description="The 2026 Atlas Global Academic Conference will be held in Cape Town, South Africa from September 7-8, 2026."
                bgClass="bg-primary text-white"
            />

            <AboutSubNav />

            {/* Venue Details */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold font-heading text-primary mb-6">Conference Venue - Cape Town, South Africa</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    <strong>Cape Town 2026</strong> will host the <strong>Second Edition of the Atlas Global Academic Conference</strong>, bringing together a transdisciplinary global R&D community at the intersection of academia, industry, commerce, government, and development partners.
                                </p>
                                <p>
                                    Cape Town—Africa&apos;s iconic “Mother City”—is a vibrant hub of innovation, culture, and academic excellence. With world-class infrastructure, global connectivity, and a dynamic research and entrepreneurship ecosystem, it provides the perfect setting for high-level dialogue and collaboration as ATLAS advances its destination-based Regional Series through 2030.
                                </p>
                                <ul className="list-disc pl-5 space-y-2 mt-4 bg-gray-50 p-2 rounded-xl border border-gray-100">
                                    <li><strong>Location:</strong> Cape Town, South Africa</li>
                                    <li><strong>Dates:</strong> September 7-8, 2026</li>
                                    <li><strong>Facilities:</strong> High-speed Wi-Fi, modern AV equipment, collaborative learning spaces</li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden shadow-xl">
                            <ImageSlider
                                images={[
                                    "/images/cape_images/Cape-images-1.png",
                                    "/images/cape_images/Cape-images-2.png",
                                    "/images/cape_images/Cape-images-3.png",
                                    "/images/cape_images/Cape-images-4.png",
                                    "/images/cape_images/Cape-images-5.png",
                                    "/images/cape_images/Cape-images-6.png",
                                    "/images/cape_images/Cape-images-7.png",
                                    "/images/cape_images/Cape-images-8.png",
                                    "/images/cape_images/Cape-images-9.png"
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Cape Town Highlights */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold font-heading text-primary mb-4">Why Cape Town?</h2>
                        <p className="text-gray-600">
                            Cape Town is a vibrant city that blends natural beauty with academic excellence, making it an ideal location for Africa&apos;s premier education technology conference.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/images/CapeTown.png"
                                alt="Cape Town City View"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">World-Class Infrastructure</h3>
                                <p className="text-gray-600">
                                    Cape Town offers excellent conference facilities, reliable connectivity, and easy accessibility with direct flights from major African and international cities.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">Educational Hub</h3>
                                <p className="text-gray-600">
                                    Home to leading universities and research institutions, Cape Town is at the forefront of educational innovation in Africa.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">Cultural Experience</h3>
                                <p className="text-gray-600">
                                    Beyond the conference, delegates can explore Table Mountain, visit Robben Island, and experience the city&apos;s rich history and diverse culture.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accommodation - Coming Soon */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold font-heading text-primary mb-4">Accommodation</h2>
                        <p className="text-gray-700 font-medium">
                            Detailed accommodation information and booking links will be available soon.
                            <br />Stay tuned for updates!
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
