import PageHero from "@/components/PageHero";

const formats = [
    {
        title: "Keynote Addresses",
        description: "Visionary presentations by world-renowned experts setting the tone for the conference themes.",
        icon: "🎤"
    },
    {
        title: "Panel Discussions",
        description: "Lively debates and multi-perspective conversations featuring diverse groups of specialists.",
        icon: "👥"
    },
    {
        title: "Hands-on Workshops",
        description: "Practical, interactive sessions focused on skill-building and project development.",
        icon: "🛠️"
    },
    {
        title: "Lightning Talks",
        description: "High-energy, concise presentations showcasing innovative ideas and quick-fire success stories.",
        icon: "⚡"
    },
    {
        title: "Round Table Discussions",
        description: "Intimate, focused group discussions designed for collaborative problem-solving.",
        icon: "⭕"
    },
    {
        title: "Learning Battles",
        description: "Dynamic, competitive sessions where presenters debate the merits of different EdTech approaches.",
        icon: "⚔️"
    }
];

export default function SessionFormatsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="Session Formats"
                description="Experience a diverse range of session types designed to maximize learning, engagement, and networking."
                breadcrumb="Session Formats"
                bgClass="bg-primary text-white"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {formats.map((format, index) => (
                            <div key={index} className="break-inside-avoid p-8 bg-gray-50 rounded-2xl border hover:border-primary transition-colors hover:shadow-lg">
                                <div className="text-4xl mb-4">{format.icon}</div>
                                <h3 className="text-xl font-bold font-heading text-primary mb-3">{format.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-body">
                                    {format.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-blue-50">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-2xl font-bold font-heading mb-6">Innovative Learning Models</h2>
                    <p className="text-gray-700 text-lg mb-8 leading-relaxed font-body">
                        At Atlas Conference, we move beyond the passive lecture model. Our sessions are engineered to foster dialogue, encourage critical thinking, and provide actionable takeaways for every participant.
                    </p>
                    <div className="bg-white p-8 rounded-2xl shadow-sm inline-block">
                        <span className="text-sm font-bold uppercase tracking-widest text-primary mb-2 block">Participant Engagement</span>
                        <div className="text-4xl font-bold font-heading text-gray-900">85% Interactive</div>
                    </div>
                </div>
            </section>
        </div>
    );
}
