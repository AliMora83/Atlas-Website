import Link from "next/link";

export default function AboutSection() {
    return (
        <section className="section-padding bg-white" id="about-elearning">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-primary mb-8">About Atlas Conference</h2>

                    <div className="max-w-3xl">
                        <div className="space-y-6">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Atlas Conference is an annual conference and exhibition, established in 2005,
                                focused on digital education, training, and skills in Africa. It serves as
                                the continent&apos;s premier gathering for EdTech professionals, policymakers,
                                and practitioners.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                The event provides a unique global forum where experts from across the world
                                share their experiences and innovations in digital learning, always with
                                a sharp focus on the specific needs and opportunities within the African context.
                            </p>
                            <div className="pt-4">
                                <Link
                                    href="/about"
                                    className="btn-primary"
                                >
                                    FIND OUT MORE
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
