export default function ExhibitionFeatures() {
    const stats = [
        { label: "Attendees", value: "2,000+" },
        { label: "Countries", value: "65+" },
        { label: "Ministers", value: "15+" },
        { label: "Exhibitors", value: "80+" },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center p-6 bg-gray-50 rounded-lg">
                            <div className="text-4xl font-bold text-primary mb-2 font-heading">{stat.value}</div>
                            <div className="text-gray-600 font-medium uppercase tracking-wide text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">Why Exhibit?</h2>
                    <p className="text-lg text-gray-600">
                        The Atlas exhibition offers a unique platform to demonstrate your contribution to Africa's learning and training market.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 border border-gray-100 shadow-sm rounded-lg hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center text-2xl mb-6">🤝</div>
                        <h3 className="text-xl font-bold mb-3 font-heading">Network</h3>
                        <p className="text-gray-600">
                            Meet face-to-face with senior decision-makers from government and academia.
                        </p>
                    </div>
                    <div className="p-8 border border-gray-100 shadow-sm rounded-lg hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center text-2xl mb-6">🚀</div>
                        <h3 className="text-xl font-bold mb-3 font-heading">Launch</h3>
                        <p className="text-gray-600">
                            The perfect launchpad for new competitive products and services in the African market.
                        </p>
                    </div>
                    <div className="p-8 border border-gray-100 shadow-sm rounded-lg hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center text-2xl mb-6">📢</div>
                        <h3 className="text-xl font-bold mb-3 font-heading">Brand</h3>
                        <p className="text-gray-600">
                            Position your brand as a leader in the EdTech sector and gain international visibility.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
