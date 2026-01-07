import PageHero from "@/components/PageHero";

const themes = [
    {
        title: "Digital Transformation in Education",
        description: "Exploring how institutions are evolving their digital infrastructure to support 21st-century learning.",
        icon: "🚀"
    },
    {
        title: "Artificial Intelligence for Learning",
        description: "From personalized learning paths to automated grading: the role of AI in moving education forward.",
        icon: "🤖"
    },
    {
        title: "Skills for the Future Economy",
        description: "Bridging the gap between traditional education and the skills demanded by the global digital economy.",
        icon: "💼"
    },
    {
        title: "Sustainable EdTech Infrastructure",
        description: "Building resilient and energy-efficient digital learning environments across the continent.",
        icon: "🌱"
    },
    {
        title: "Inclusive & Accessible Learning",
        description: "Ensuring that digital education reaches the most remote areas and supports learners of all abilities.",
        icon: "🤝"
    },
    {
        title: "Data Privacy & Ethical AI",
        description: "Addressing the challenges of data security and the ethical implications of AI in African education.",
        icon: "🔒"
    }
];

export default function ThemesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="Conference Themes 2026"
                description="Our 2026 program is built around these core themes, addressing the most critical challenges and opportunities in African EdTech."
                breadcrumb="Themes"
                bgClass="bg-primary text-white"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {themes.map((theme, index) => (
                            <div key={index} className="p-8 border rounded-2xl hover:shadow-xl transition-all duration-300 bg-gray-50 group">
                                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{theme.icon}</div>
                                <h3 className="text-xl font-bold font-heading text-primary mb-4">{theme.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {theme.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action for Speakers */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold font-heading mb-6">Have something to contribute?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
                        If your work aligns with these themes, we invite you to share your insights with our global audience.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="#" className="bg-primary hover:bg-opacity-90 text-white px-8 py-3 rounded-full font-bold transition-colors">
                            Submit a Proposal
                        </a>
                        <a href="/about/who-attends" className="border border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full font-bold transition-all">
                            Learn More
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
