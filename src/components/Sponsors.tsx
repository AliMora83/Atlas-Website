import Link from "next/link";

export default function Sponsors() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold font-heading text-center mb-12 text-gray-800">
                    Our Sponsors & Partners
                </h2>

                {/* Logo Grid Placeholder */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-12 opacity-70 grayscale hover:grayscale-0 transition-all">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-20 bg-gray-200 rounded flex items-center justify-center text-gray-400">
                            [Logo {i}]
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-gray-600 mb-4">Interested in showcasing your organization?</p>
                    <Link href="/sponsors" className="text-primary font-medium hover:text-secondary">
                        Become a Sponsor &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
}
