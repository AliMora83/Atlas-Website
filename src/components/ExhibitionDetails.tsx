export default function ExhibitionDetails() {
    return (
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
    );
}
