import Image from "next/image";
import Link from "next/link";

const speakers = [
    {
        name: "Dr. John Doe",
        title: "Director of EdTech",
        org: "Ministry of Education",
        image: "/avatars/speaker1.jpg", // Placeholder
    },
    {
        name: "Jane Smith",
        title: "CEO",
        org: "Learning Future Inc.",
        image: "/avatars/speaker2.jpg", // Placeholder
    },
    {
        name: "Prof. Ahmed Hassan",
        title: "AI Researcher",
        org: "University of Cairo",
        image: "/avatars/speaker3.jpg", // Placeholder
    },
    {
        name: "Sarah Johnson",
        title: "Policy Advisor",
        org: "African It Union",
        image: "/avatars/speaker4.jpg", // Placeholder
    },
];

export default function FeaturedSpeakers() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold font-heading text-primary mb-2">Featured Speakers</h2>
                        <p className="text-gray-600">Visionaries shaping the future of education</p>
                    </div>
                    <Link href="/speakers" className="text-primary font-medium hover:underline hidden md:block">
                        View All Speakers &rarr;
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {speakers.map((speaker, idx) => (
                        <div key={idx} className="group">
                            <div className="relative h-[300px] w-full mb-4 overflow-hidden rounded-lg bg-gray-200">
                                {/* Placeholder for Image */}
                                <div className="absolute inset-0 text-gray-400">
                                    <Image
                                        src="/images/speaker-placeholder.png"
                                        alt={speaker.name}
                                        fill
                                        style={{ objectFit: 'cover', objectPosition: 'top' }}
                                        className="grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold font-heading text-gray-900 group-hover:text-primary transition-colors">
                                {speaker.name}
                            </h3>
                            <p className="text-sm font-medium text-secondary">{speaker.title}</p>
                            <p className="text-sm text-gray-500">{speaker.org}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/speakers" className="text-primary font-medium hover:underline">
                        View All Speakers &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
}
