export default function ConferenceHistory() {
    const milestones = [
        { year: "2026", title: "19th Edition", loc: "Accra, Ghana", desc: "Focusing on AI in Education" },
        { year: "2025", title: "18th Edition", loc: "Nairobi, Kenya", desc: "Digital Transformation" },
        { year: "2024", title: "17th Edition", loc: "Kigali, Rwanda", desc: "Connecting Communities" },
        { year: "...", title: "Inception", loc: "Addis Ababa, Ethiopia", desc: "The journey began" },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold font-heading text-primary mb-12 text-center">Our History</h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>

                    <div className="space-y-12">
                        {milestones.map((item, idx) => (
                            <div key={idx} className={`flex flex-col md:flex-row items-center justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="w-full md:w-5/12"></div>

                                <div className="z-10 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-4 md:mb-0">
                                    {item.year.substring(2)}
                                </div>

                                <div className="w-full md:w-5/12 bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold font-heading mb-2 text-gray-900">{item.title}</h3>
                                    <p className="text-secondary font-medium mb-2">{item.loc}</p>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
