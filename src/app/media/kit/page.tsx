"use client";

import PageHero from "@/components/PageHero";
import MediaSubNav from "@/components/MediaSubNav";

interface DownloadResource {
    id: string;
    title: string;
    description: string;
    fileType: string;
    fileSize: string;
    category: "Logo" | "Banner" | "Document" | "Photo";
    icon: string;
}

const resources: DownloadResource[] = [
    {
        id: "1",
        title: "Atlas Global Academic Conference Logo (PNG)",
        description: "High-resolution logo in PNG format with transparent background",
        fileType: "PNG",
        fileSize: "2.4 MB",
        category: "Logo",
        icon: "🎨"
    },
    {
        id: "2",
        title: "Atlas Global Academic Conference Logo (SVG)",
        description: "Scalable vector logo for print and digital use",
        fileType: "SVG",
        fileSize: "156 KB",
        category: "Logo",
        icon: "🎨"
    },
    {
        id: "3",
        title: "Conference Banner (1920x1080)",
        description: "Full HD banner for social media and presentations",
        fileType: "JPG",
        fileSize: "3.8 MB",
        category: "Banner",
        icon: "🖼️"
    },
    {
        id: "4",
        title: "Conference Banner (LinkedIn)",
        description: "Optimized banner for LinkedIn posts (1200x627)",
        fileType: "JPG",
        fileSize: "1.2 MB",
        category: "Banner",
        icon: "🖼️"
    },
    {
        id: "5",
        title: "Conference Banner (Twitter/X)",
        description: "Optimized banner for Twitter/X posts (1500x500)",
        fileType: "JPG",
        fileSize: "980 KB",
        category: "Banner",
        icon: "🖼️"
    },
    {
        id: "6",
        title: "Brand Guidelines 2026",
        description: "Complete brand identity guidelines including colors, typography, and usage rules",
        fileType: "PDF",
        fileSize: "8.5 MB",
        category: "Document",
        icon: "📋"
    },
    {
        id: "7",
        title: "Conference Fact Sheet",
        description: "Key statistics, dates, and information about Atlas Global Academic Conference 2026",
        fileType: "PDF",
        fileSize: "1.8 MB",
        category: "Document",
        icon: "📄"
    },
    {
        id: "8",
        title: "Executive Summary 2025",
        description: "Comprehensive report on Atlas Global Academic Conference 2025 outcomes and impact",
        fileType: "PDF",
        fileSize: "4.2 MB",
        category: "Document",
        icon: "📊"
    },
    {
        id: "9",
        title: "High-Resolution Photo Pack",
        description: "Collection of 50+ professional conference photos (ZIP)",
        fileType: "ZIP",
        fileSize: "250 MB",
        category: "Photo",
        icon: "📸"
    }
];

export default function MediaKitPage() {
    const categories = ["All", "Logo", "Banner", "Document", "Photo"];

    return (
        <div className="flex flex-col bg-white">
            <PageHero
                title="Media Kit"
                description="Download logos, banners, brand guidelines, and other resources for media coverage of Atlas Global Academic Conference."
            />

            <MediaSubNav />

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col gap-12">
                    {/* Page Heading */}
                    <section className="pt-8">
                        <h1 className="text-5xl font-bold font-heading text-primary mb-4">Media Kit</h1>
                        <div className="w-20 h-1.5 bg-secondary rounded-full"></div>
                        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
                            Download official Atlas Global Academic Conference assets for editorial use. All resources are free to use for media coverage and promotional purposes.
                        </p>
                    </section>

                    {/* Quick Access Section */}
                    <section className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Access</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <button className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-left group border border-gray-100">
                                <div className="text-3xl mb-3">📦</div>
                                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">Complete Media Kit</h3>
                                <p className="text-sm text-gray-600 mb-3">All assets in one package</p>
                                <span className="text-xs text-gray-500">ZIP • 280 MB</span>
                            </button>
                            <button className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-left group border border-gray-100">
                                <div className="text-3xl mb-3">🎨</div>
                                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">Logo Package</h3>
                                <p className="text-sm text-gray-600 mb-3">All logo variations</p>
                                <span className="text-xs text-gray-500">ZIP • 12 MB</span>
                            </button>
                            <button className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-left group border border-gray-100">
                                <div className="text-3xl mb-3">📸</div>
                                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">Photo Library</h3>
                                <p className="text-sm text-gray-600 mb-3">High-res conference photos</p>
                                <span className="text-xs text-gray-500">ZIP • 250 MB</span>
                            </button>
                        </div>
                    </section>

                    {/* Resources Grid */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">All Resources</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {resources.map((resource) => (
                                <div
                                    key={resource.id}
                                    className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all group"
                                >
                                    {/* Header */}
                                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex items-center justify-center border-b border-gray-200">
                                        <span className="text-6xl">{resource.icon}</span>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded uppercase">
                                                {resource.category}
                                            </span>
                                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded">
                                                {resource.fileType}
                                            </span>
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-2 text-lg">{resource.title}</h3>
                                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{resource.description}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-500 font-medium">{resource.fileSize}</span>
                                            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-bold flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Usage Guidelines */}
                    <section className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Usage Guidelines</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                                    <span className="text-green-500">✓</span> Permitted Uses
                                </h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex gap-3">
                                        <span className="text-green-500 shrink-0">•</span>
                                        <span>Editorial coverage and news articles about Atlas Global Academic Conference</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-green-500 shrink-0">•</span>
                                        <span>Social media posts promoting or discussing the conference</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-green-500 shrink-0">•</span>
                                        <span>Educational and research purposes with proper attribution</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-green-500 shrink-0">•</span>
                                        <span>Partner and sponsor promotional materials</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                                    <span className="text-red-500">✗</span> Prohibited Uses
                                </h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex gap-3">
                                        <span className="text-red-500 shrink-0">•</span>
                                        <span>Modifying or altering the Atlas Global Academic Conference logo</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-red-500 shrink-0">•</span>
                                        <span>Using assets for commercial purposes without permission</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-red-500 shrink-0">•</span>
                                        <span>Implying endorsement without official partnership</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-red-500 shrink-0">•</span>
                                        <span>Reselling or redistributing assets to third parties</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200">
                            <p className="text-sm text-gray-600 leading-relaxed">
                                <strong className="text-gray-900">Attribution:</strong> When using Atlas Global Academic Conference materials, please credit "Atlas Global Academic Conference" and include a link to our website when possible. For questions about usage rights or to request special permissions, contact our media team.
                            </p>
                        </div>
                    </section>

                    {/* Contact CTA */}
                    <section className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-10 text-white text-center">
                        <div className="max-w-2xl mx-auto">
                            <h2 className="text-2xl font-bold mb-4">Need Custom Assets?</h2>
                            <p className="mb-6 opacity-90 leading-relaxed">
                                If you need custom graphics, high-resolution photos, or have specific media requirements, our team is here to help.
                            </p>
                            <a
                                href="mailto:press@atlas-conference.com"
                                className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all"
                            >
                                Contact Media Team
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
