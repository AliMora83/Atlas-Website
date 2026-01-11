import Image from "next/image";

export default function ExhibitionDetails() {
    const satisfactionStats = [
        {
            percentage: "81%",
            title: "Networking Excellence",
            description: "Rated the ease of networking and developing new contacts as very good or good",
            image: "/images/satisfaction-networking.png"
        },
        {
            percentage: "95%",
            title: "Conference Value",
            description: "Rated the overall evaluation of the conference as very worthwhile or worthwhile",
            image: "/images/satisfaction-exhibition.png"
        },
        {
            percentage: "92%",
            title: "Innovation Showcase",
            description: "Found the exhibition valuable for discovering new EdTech solutions and partnerships",
            image: "/images/satisfaction-technology.png"
        }
    ];

    return (
        <>
            <section id="book" className="section-padding bg-gray-50 border-t">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="lg:w-2/3">
                            <h2 className="text-primary mb-6">Stand Packages</h2>
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
                                <h3 className="mb-4">Shell Scheme (min 9sqm)</h3>
                                <p className="text-gray-600 mb-4">
                                    Includes: Walls, carpeting, name board, lighting, and power socket. Ideal for a hassle-free setup.
                                </p>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li>Standard 9sqm (3m x 3m)</li>
                                    <li>Includes Listing in Conference Guide</li>
                                    <li>2 Exhibitor Passes included</li>
                                </ul>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                                <h3 className="mb-4">Space Only (min 18sqm)</h3>
                                <p className="text-gray-600 mb-4">
                                    Design your own custom stand. Floor space only provided.
                                </p>
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                    <li>Maximum flexibility for branding</li>
                                    <li>Requires own stand construction</li>
                                    <li>4 Exhibitor Passes included</li>
                                </ul>
                            </div>
                        </div>

                        <div className="lg:w-1/3">
                            <div className="bg-primary text-white p-8 rounded-lg shadow-lg sticky top-24">
                                <h3 className="mb-6">Book Your Stand</h3>
                                <p className="mb-6 opacity-90">
                                    Space is selling fast! Contact our sales team to secure your preferred location.
                                </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center">
                                        <span className="bg-white/20 p-2 rounded mr-3">📧</span>
                                        <a href="mailto:exhibition@atlas-conference.com" className="font-medium hover:underline">exhibition@atlas-conference.com</a>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="bg-white/20 p-2 rounded mr-3">📞</span>
                                        <span className="font-medium">+49 30 12345678</span>
                                    </div>
                                </div>
                                <button className="w-full btn-secondary">
                                    Download Floorplan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Satisfaction Section */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-gray-900 mb-4">Satisfaction</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            See what our exhibitors and attendees say about their Atlas Conference experience
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {satisfactionStats.map((stat, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={stat.image}
                                        alt={stat.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <div className="text-5xl font-bold text-primary mb-3">
                                        {stat.percentage}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {stat.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {stat.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
