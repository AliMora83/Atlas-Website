import Link from "next/link";
import Image from "next/image";

// Real partner images
const partners = [
    { id: 1, src: "/images/partners/partner-1.png", alt: "Partner 1" },
    { id: 2, src: "/images/partners/partner-2.png", alt: "Partner 2" },
    { id: 3, src: "/images/partners/partner-3.png", alt: "Partner 3" },
    { id: 4, src: "/images/partners/partner-4.png", alt: "Partner 4" },
    { id: 5, src: "/images/partners/partner-5.png", alt: "Partner 5" },
];

export default function Sponsors() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold font-heading text-center mb-12 text-gray-800">
                    Our Sponsors & Partners
                </h2>

                <div className="flex flex-wrap justify-center gap-8 mb-16">
                    {partners.map((partner) => (
                        <div
                            key={partner.id}
                            className="group relative w-48 h-28 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-primary/30"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={partner.src}
                                    alt={partner.alt}
                                    fill
                                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-gray-600 mb-4">Interested in showcasing your organization?</p>
                    <Link href="/sponsors" className="text-primary font-medium hover:text-secondary inline-flex items-center gap-2 group transition-colors">
                        Become a Sponsor
                        <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
