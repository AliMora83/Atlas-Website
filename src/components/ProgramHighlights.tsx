import Link from "next/link";

const tracks = [
    {
        title: "Keynote Sessions",
        desc: "Thought leadership from global experts.",
        icon: "🌟",
    },
    {
        title: "Parallel Tracks",
        desc: "Deep dives into specific themes.",
        icon: "tracks", // Custom icon logic or emoji
    },
    {
        title: "Workshops",
        desc: "Hands-on skill building sessions.",
        icon: "🛠️",
    },
];

export default function ProgramHighlights() {
    return (
        <section className="section-padding bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-primary mb-4">Program Highlights</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A comprehensive agenda designed to inspire, educate, and connect.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tracks.map((track, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-4">{track.icon}</div>
                            <h3 className="mb-3">{track.title}</h3>
                            <p className="text-gray-600 mb-6">{track.desc}</p>
                            <Link href="/program" className="text-primary font-medium hover:text-secondary">
                                View Details &rarr;
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/program"
                        className="btn-outline"
                    >
                        View Full Agenda
                    </Link>
                </div>
            </div>
        </section>
    );
}
