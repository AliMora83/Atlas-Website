import Link from "next/link";

export default function CFPSection() {
    return (
        <section className="section-padding bg-gray-50" id="cfp">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-primary mb-6">Call for Papers 2026</h2>

                    <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 mb-10">
                        <p className="text-xl font-bold text-gray-900 mb-6">
                            The Atlas Conference 2026 Call for Papers is now closed.
                        </p>

                        <div className="space-y-6 text-gray-700 leading-relaxed">
                            <p>
                                We have received an overwhelming number of submissions from across Africa
                                and the world. We would like to extend our sincere gratitude to all the
                                educators, innovators, and researchers who contributed their work.
                            </p>
                            <p className="italic text-primary font-medium">
                                "Africa&apos;s Time, Africa&apos;s Terms: Learning for Sovereignty, Strength and Solidarity"
                            </p>
                            <p>
                                The 2026 theme focuses on how digital learning can empower the continent
                                to chart its own course and build sustainable, sovereign educational systems.
                            </p>
                        </div>

                        <div className="mt-10">
                            <Link
                                href="/program/themes"
                                className="inline-flex items-center text-primary font-bold hover:text-secondary border-b-2 border-primary hover:border-secondary transition-all"
                            >
                                READ MORE &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
