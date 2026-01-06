import PageHero from "@/components/PageHero";
import FeaturedArticle from "@/components/FeaturedArticle";
import NewsGrid from "@/components/NewsGrid";

export default function NewsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="Atlas News Portal"
                description="In-depth analysis, interviews, and stories from the forefront of African education technology."
                breadcrumb="News Portal"
                bgClass="bg-white text-gray-900"
                textClass="text-gray-600"
            />
            <FeaturedArticle />
            <NewsGrid />

            {/* Reusing Newsletter Section for "Subscribe" CTA */}
            <section className="py-20 bg-primary text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold font-heading mb-4">Never Miss an Update</h2>
                    <p className="mb-8 text-blue-100 max-w-2xl mx-auto">
                        Get the latest stories, analysis, and conference news delivered straight to your inbox.
                    </p>
                    <div className="max-w-md mx-auto flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-grow px-4 py-3 rounded text-gray-900 border-none focus:ring-2 focus:ring-secondary focus:outline-none"
                        />
                        <button className="bg-secondary text-white font-bold px-6 py-3 rounded hover:bg-opacity-90 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
