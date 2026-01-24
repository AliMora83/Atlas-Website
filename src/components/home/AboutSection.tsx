import Link from "next/link";

export default function AboutSection() {
    return (
        <section className="section-padding bg-white" id="about-elearning">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-primary mb-8">About Atlas Convention</h2>

                    <div className="max-w-3xl">
                        <div className="space-y-6">
                            <p className="text-md text-gray-700 leading-relaxed">
                                The Atlas Convention 2025 Edition, themed "Investing in Africa's Prosperity," is the must-attend global landmark event uniting governments, investors, corporate leaders, innovators, and academics from over 136 countries.
                                By fostering lucrative trade and investment deals, highlighting breakthrough research, and accelerating high-impact solutions, this annual convention fuels Africa's structural transformation and inclusive economic growth.
                                <br /><br />Join us at the world wonder destination of Victoria Falls to forge transnational partnerships, unlock new markets, and drive sustainable transnational value chain initiatives that elevate Africa's economic landscape.
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
