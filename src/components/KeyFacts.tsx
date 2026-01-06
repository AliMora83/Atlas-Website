export default function KeyFacts() {
    const facts = [
        { icon: "📅", label: "June 3-5, 2026", sub: "Accra, Ghana" },
        { icon: "👥", label: "5,000+", sub: "Attendees" },
        { icon: "🎤", label: "150+", sub: "Speakers" },
        { icon: "💡", label: "200+", sub: "Sessions" },
    ];

    return (
        <section className="py-12 bg-white -mt-8 relative z-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-white rounded-lg shadow-xl p-8 border border-gray-100">
                    {facts.map((fact, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center text-center p-4 ${index !== facts.length - 1 ? 'lg:border-r border-gray-200' : ''}`}
                        >
                            <span className="text-4xl mb-3">{fact.icon}</span>
                            <span className="text-lg font-bold text-gray-900 font-heading">{fact.label}</span>
                            <span className="text-sm text-gray-500">{fact.sub}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
