import Link from "next/link";

export default function ExhibitionHero() {
    return (
        <>
            {/* Breadcrumb Section */}
            <section className="bg-gray-900 text-white section-padding relative overflow-hidden">
                {/* Background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 z-0"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <span className="text-white">Exhibition</span>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
                            The Atlas Conference Exhibition
                        </h1>

                        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                            <p>
                                The exhibition is Atlas Conference's networking hub, hosting leading international and African education, training and technology companies and institutions, together with international organisations engaged in the development of education and training in Africa.
                            </p>

                            <p>
                                It showcases the full spectrum of innovation in EdTech from gamified learning apps to online proctoring tools, industry leading LMSs to augmented reality devices, content providers to explainer videos, established publishing services to pioneering educational hardware and much, much more; catering to all academic, corporate and public sector learning/training needs. It's this diverse and comprehensive mix that makes the exhibition a magnet for buyers, analysts and investors in EdTech.
                            </p>

                            <p>
                                It will allow you to explore the leading learning technology providers and acquaint yourself with the disruptive business models of international EdTech startups. It will help you to find partners and solutions for a successful digital transformation.
                            </p>

                            <p>
                                Would you like to position your organisation as a market leader to the Atlas Conference community of learning, training, technology professionals and decision makers? Contact us at{" "}
                                <a href="mailto:marketing@atlas-conference.com" className="text-primary hover:underline">
                                    marketing@atlas-conference.com
                                </a>{" "}
                                if you would like to exhibit or partner with us, or click the button below.
                            </p>

                            <div className="text-center mt-8">
                                <Link
                                    href="mailto:marketing@atlas-conference.com"
                                    className="inline-block bg-gray-900 text-white px-8 py-3 rounded font-semibold hover:bg-gray-800 transition-colors"
                                >
                                    CONTACT US
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
