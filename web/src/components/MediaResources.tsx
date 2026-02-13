export default function MediaResources() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl font-bold font-heading text-primary mb-12 text-center">Media Assets</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logos */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                        <div className="text-4xl mb-4 text-gray-300">🎨</div>
                        <h3 className="text-xl font-bold mb-4">Brand Assets</h3>
                        <p className="text-sm text-gray-500 mb-6">Official logos and guidelines.</p>
                        <button className="text-primary border border-primary px-6 py-2 rounded hover:bg-primary hover:text-white transition-colors w-full">
                            Download Kit (ZIP)
                        </button>
                    </div>

                    {/* Photos */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                        <div className="text-4xl mb-4 text-gray-300">📸</div>
                        <h3 className="text-xl font-bold mb-4">Event Photos</h3>
                        <p className="text-sm text-gray-500 mb-6">High-res images from previous events.</p>
                        <button className="text-primary border border-primary px-6 py-2 rounded hover:bg-primary hover:text-white transition-colors w-full">
                            Access Gallery
                        </button>
                    </div>

                    {/* Videos */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                        <div className="text-4xl mb-4 text-gray-300">🎥</div>
                        <h3 className="text-xl font-bold mb-4">B-Roll & Interviews</h3>
                        <p className="text-sm text-gray-500 mb-6">Video content for broadcast.</p>
                        <button className="text-primary border border-primary px-6 py-2 rounded hover:bg-primary hover:text-white transition-colors w-full">
                            View Library
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
