import Link from "next/link";
import Image from "next/image";

const articles = [
    {
        category: "Policy",
        title: "AU releases new framework for AI in Schools",
        date: "Jan 05, 2026",
        excerpt: "The comprehensive guide aims to standardize ethical guidelines across member states."
    },
    {
        category: "Innovation",
        title: "5 Startups to Watch at Atlas 2026",
        date: "Dec 18, 2025",
        excerpt: "From gamified math apps to VR vocational training, get a sneak peek at the exhibition floor."
    },
    {
        category: "Interview",
        title: "Q&A with Minister of Education",
        date: "Nov 22, 2025",
        excerpt: "Discussing the roadmap for digital literacy and the role of public-private partnerships."
    },
    {
        category: "Opinion",
        title: "Why Teacher Training Must Come First",
        date: "Oct 30, 2025",
        excerpt: "Technology is only as good as the facilitators who use it. An op-ed by Dr. Kwame Osei."
    },
    {
        category: "Trends",
        title: "The Rise of Micro-Credentialing",
        date: "Oct 15, 2025",
        excerpt: "How short courses and digital badges are replacing traditional degrees in the skills market."
    },
    {
        category: "Report",
        title: "Atlas Conference Report 2025 Key Findings",
        date: "Sep 28, 2025",
        excerpt: "A summary of the annual survey of 2,000+ education professionals."
    }
];

export default function NewsGrid() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h3 className="text-2xl font-bold font-heading mb-8 border-b pb-4">Latest Stories</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, idx) => (
                        <div key={idx} className="flex flex-col h-full group">
                            <div className="h-48 bg-gray-100 rounded-lg mb-4 text-gray-400 overflow-hidden relative">
                                <Image
                                    src="/images/networking.png"
                                    alt="News Article Thumbnail"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs font-bold text-secondary uppercase tracking-wide">{article.category}</span>
                                    <span className="text-xs text-gray-400">{article.date}</span>
                                </div>
                                <h4 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                                    <Link href="#">{article.title}</Link>
                                </h4>
                                <p className="text-gray-600 text-sm line-clamp-3">
                                    {article.excerpt}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="px-8 py-3 border border-gray-300 rounded font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                        Load More Articles
                    </button>
                </div>
            </div>
        </section>
    );
}
