export default function HighlightsSection() {
    const metrics = [
        { icon: "👥", value: "1,543", label: "Participants" },
        { icon: "🎤", value: "244", label: "Speakers" },
        { icon: "🌍", value: "82", label: "Countries Represented" },
        { icon: "💡", value: "15", label: "Ministers of Education" },
    ];

    return (
        <section className="section-padding bg-gray-900 text-white" id="highlights">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-white mb-6">Atlas Conference 2025 Highlights</h2>
                    <p className="text-gray-400 text-lg">
                        Relive the best moments from our previous edition and see the impact of our global community.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden group cursor-pointer shadow-2xl">
                        {/* Dummy Video Preview */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center pl-2 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                <span className="text-white text-3xl">▶</span>
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-1">
                                Video Highlight
                            </p>
                            <p className="text-xl font-bold">18th Atlas Conference - The Story</p>
                        </div>
                        <a
                            href="https://youtube.com/watch?v=XXXX"
                            target="_self"
                            className="absolute inset-0 z-20"
                            aria-label="Watch 2025 Highlight Video"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {metrics.map((metric, idx) => (
                            <div key={idx} className="bg-gray-800/50 border border-gray-700 p-6 rounded-xl hover:bg-gray-800 transition-colors group">
                                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform origin-left">{metric.icon}</div>
                                <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
                                <div className="text-sm text-gray-400 font-medium uppercase tracking-wide">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-gray-500 text-sm max-w-2xl mx-auto italic">
                        Join us in 2026 to be part of the next chapter in Africa&apos;s educational innovation story.
                    </p>
                </div>
            </div>
        </section>
    );
}
