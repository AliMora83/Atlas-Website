import Link from "next/link";
import Image from "next/image";

export default function FeaturedArticle() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 relative h-64 lg:h-auto">
                        <Image
                            src="/images/rural-classroom.png"
                            alt="Digital learning in rural classroom"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                        <div className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">Editor's Pick</div>
                        <h2 className="text-3xl font-bold font-heading mb-4 text-gray-900">
                            <Link href="#" className="hover:text-primary transition-colors">
                                Bridging the Digital Divide: A Case Study from Rural Ghana
                            </Link>
                        </h2>
                        <div className="flex items-center text-sm text-gray-500 mb-6">
                            <span className="mr-4">By Sarah Mensah</span>
                            <span>January 10, 2026</span>
                        </div>
                        <p className="text-lg text-gray-600 mb-6">
                            How solar-powered tablets and community Wi-Fi hubs are transforming localized learning outcomes in remote villages.
                        </p>
                        <Link href="#" className="text-primary font-bold hover:underline inline-flex items-center">
                            Read Full Story &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
