import Image from "next/image";

export default function HostCountrySection() {
    return (
        <section className="section-padding bg-white" id="host-country">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-primary mb-2 text-center">Host Venue 2026: Cape Town</h2>
                    <h3 className="text-xl text-gray-600 mb-12 text-center font-normal">
                        Cape Town Hotel School in Granger Bay
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                        <div className="lg:col-span-3 space-y-6">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We are thrilled to announce that the 19th edition of Atlas Global Academic Conference
                                will take place at the prestigious Cape Town Hotel School in Granger Bay
                                from 26-27 August 2026.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Cape Town, known as the Mother City, is a vibrant hub of innovation, culture, and
                                educational excellence in Africa. The city&apos;s stunning natural beauty, world-class
                                infrastructure, and dynamic academic community make it the perfect setting for
                                meaningful dialogue on the future of digital education.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                The Cape Town Hotel School, located in the scenic Granger Bay precinct, is renowned
                                for its cutting-edge facilities and commitment to excellence in hospitality education.
                                This state-of-the-art venue provides the ideal environment for collaboration,
                                learning, and networking.
                            </p>
                        </div>

                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-gray-50 border border-gray-100 p-8 rounded-xl text-center shadow-sm">
                                <p className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6">
                                    Hosted at
                                </p>
                                <div className="relative aspect-[3/2] bg-white border border-gray-200 rounded-lg overflow-hidden mb-4 hover:shadow-md transition-shadow">
                                    <Image
                                        src="/images/School.png"
                                        alt="Cape Town Hotel School"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <a
                                    href="https://www.cths.ac.za"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary text-sm font-semibold hover:underline"
                                >
                                    Visit Hotel School Website
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
