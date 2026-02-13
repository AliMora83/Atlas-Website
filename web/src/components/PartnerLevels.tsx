const levels = [
    {
        name: "Platinum",
        price: "€50,000",
        color: "bg-slate-800 text-white",
        features: [
            "Keynote speaking slot (20 mins)",
            "Premium exhibition booth (36sqm)",
            "10 Full Conference Passes",
            "Logo on all marketing materials",
            "VIP Dinner invitation for 5 execs",
            "Exclusive branding of a conference track"
        ]
    },
    {
        name: "Gold",
        price: "€30,000",
        color: "bg-yellow-600 text-white",
        features: [
            "Panel speaking slot",
            "Standard exhibition booth (18sqm)",
            "6 Full Conference Passes",
            "Logo on website and program",
            "VIP Dinner invitation for 2 execs",
            "Bag insert inclusion"
        ]
    },
    {
        name: "Silver",
        price: "€15,000",
        color: "bg-gray-400 text-white",
        features: [
            "Exhibition booth (9sqm)",
            "4 Full Conference Passes",
            "Logo on website",
            "Networking event sponsor mention"
        ]
    },
    {
        name: "Bronze",
        price: "€8,000",
        color: "bg-orange-700 text-white",
        features: [
            "Meeting point in Expo hall",
            "2 Full Conference Passes",
            "Logo on website footer",
            "Shared branding opportunities"
        ]
    }
];

export default function PartnerLevels() {
    return (
        <section id="levels" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading text-primary mb-4">Sponsorship Packages</h2>
                    <p className="text-gray-600">Choose the level of engagement that fits your strategic goals.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {levels.map((level) => (
                        <div key={level.name} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full border border-gray-100">
                            <div className={`${level.color} p-6 text-center`}>
                                <h3 className="text-2xl font-bold font-heading">{level.name}</h3>
                                <div className="text-sm opacity-90 mt-1">Partner</div>
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="text-3xl font-bold text-gray-900 mb-6 text-center">{level.price}</div>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    {level.features.map((feat, i) => (
                                        <li key={i} className="flex items-start text-sm text-gray-600">
                                            <span className="text-green-500 mr-2">✓</span> {feat}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full py-2 border-2 border-primary text-primary font-medium rounded hover:bg-primary hover:text-white transition-colors mt-auto">
                                    Request Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
