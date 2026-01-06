import Link from "next/link";
import Image from "next/image";

export default function ExhibitionHero() {
    return (
        <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
                    <Link href="/" className="hover:text-white">Home</Link>
                    <span>/</span>
                    <span className="text-white">Exhibition</span>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                            The Hub of EdTech Innovation
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Showcase your products and solutions to Africa's most influential education audience. The Atlas Conference Exhibition is where business gets done.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="#book" className="px-8 py-3 bg-secondary text-white font-bold rounded hover:bg-opacity-90 transition-colors">
                                Book a Stand
                            </Link>
                            <Link href="#floorplan" className="px-8 py-3 border border-white text-white font-bold rounded hover:bg-white hover:text-gray-900 transition-colors">
                                View Floorplan
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="w-full h-[400px] rounded-lg overflow-hidden border border-gray-700 relative">
                            <Image
                                src="/images/exhibition-hero.png"
                                alt="Atlas Exhibition Hall"
                                fill
                                style={{ objectFit: 'cover' }}
                                className="hover:scale-105 transition-transform duration-700"
                            />
                        </div>                    </div>
                </div>
            </div>
        </section>
    );
}
