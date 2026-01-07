import PageHero from "@/components/PageHero";

const galleryItems = [
    { title: "Plenary Session 2025", type: "Image", category: "Conference" },
    { title: "Networking Event", type: "Image", category: "Social" },
    { title: "Exhibition Highlights", type: "Video", category: "Exhibition" },
    { title: "Ministerial Round Table", type: "Image", category: "Delegate" },
    { title: "Tech Workshop", type: "Image", category: "Training" },
    { title: "Opening Ceremony", type: "Video", category: "Conference" },
    { title: "Speaker Interview", type: "Video", category: "Media" },
    { title: "Delegate Feedback", type: "Image", category: "Social" },
    { title: "Innovation Stage", type: "Image", category: "Exhibition" },
];

export default function MediaGalleryPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="Media Gallery"
                description="Relive the best moments of past Atlas conferences through our collection of photos and videos."
                breadcrumb="Gallery"
                bgClass="bg-slate-900 text-white"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    {/* Category Filter - Mock */}
                    <div className="flex flex-wrap gap-2 md:gap-4 mb-12 justify-center">
                        {["All", "Conference", "Social", "Exhibition", "Training", "Media"].map((cat) => (
                            <button key={cat} className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold border transition-all ${cat === 'All' ? 'bg-primary border-primary text-white' : 'bg-white border-gray-200 text-gray-600 hover:border-primary hover:text-primary'}`}>
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryItems.map((item, index) => (
                            <div key={index} className="group relative rounded-2xl overflow-hidden aspect-video bg-gray-100 shadow-sm hover:shadow-xl transition-all">
                                {/* Placeholder Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400 group-hover:scale-110 transition-transform duration-500">
                                    {item.type === 'Video' ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
                                    )}
                                </div>
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                                    <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">{item.category} • {item.type}</div>
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <button className="px-8 py-3 bg-gray-100 text-gray-900 rounded-full font-bold hover:bg-gray-200 transition-colors">
                            Load More Media
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
