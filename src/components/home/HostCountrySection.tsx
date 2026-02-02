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
                            <p className="text-md text-gray-700 leading-relaxed">
                                We are thrilled to announce that the 19th edition of Atlas Global Academic Conference
                                will take place at the prestigious Cape Town Hotel School in Granger Bay
                                from 7-8 September 2026.
                            </p>
                            <p className="text-md text-gray-700 leading-relaxed">
                                Cape Town, known as the Mother City, is a vibrant hub of innovation, culture, and
                                educational excellence in Africa. The city&apos;s stunning natural beauty, world-class
                                infrastructure, and dynamic academic community make it the perfect setting for
                                meaningful dialogue on the future of digital education.
                            </p>
                            <p className="text-md text-gray-700 leading-relaxed">
                                The Cape Town Hotel School, located in the scenic Granger Bay precinct, is renowned
                                for its cutting-edge facilities and commitment to excellence in hospitality education.
                                This state-of-the-art venue provides the ideal environment for collaboration,
                                learning, and networking.
                            </p>
                        </div>

                        <div className="lg:col-span-2 h-[400px] w-full relative group rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/School.png"
                                alt="Cape Town Hotel School"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                                <p className="text-white font-bold uppercase tracking-wider mb-4 drop-shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    Hosted at
                                </p>
                                <a
                                    href="https://www.cths.ac.za"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white text-lg font-semibold hover:text-primary transition-colors drop-shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
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
