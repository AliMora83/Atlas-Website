import React from "react";
import PageHero from "@/components/PageHero";
import AboutSubNav from "@/components/AboutSubNav";
import Image from "next/image";


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
                                    The 2026 Atlas Global Academic Conference will take place at a premier educational institution in Cape Town, the legislative capital of South Africa. Known for its stunning natural beauty and rich cultural heritage, Cape Town provides the perfect backdrop for meaningful dialogue on African education.
                                </p>
                                <p>
                                    Our venue features state-of-the-art facilities including modern lecture halls, breakout rooms, and exhibition spaces designed to foster collaboration and innovation in educational technology.
                                </p>
                                <ul className="list-disc pl-5 space-y-2 mt-4">
                                    <li><strong>Location:</strong> Cape Town, South Africa</li>
                                    <li><strong>Dates:</strong> September 7-8, 2026</li>
                                    <li><strong>Facilities:</strong> High-speed Wi-Fi, modern AV equipment, collaborative learning spaces</li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/images/School.png"
                                alt="Conference Venue in Cape Town"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
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
