import Image from "next/image";

export default function HostCity() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <div className="rounded-xl overflow-hidden shadow-2xl h-[400px] relative">
                            <Image
                                src="/images/accra-skyline.png"
                                alt="Accra City Skyline"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold font-heading text-primary mb-6">Host City: Accra</h2>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Experience the vibrant culture, history, and hospitality of Ghana's capital. Accra is a bustling metropolis that perfectly blends tradition with modernity, offering attendees a unique backdrop for learning and networking.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-gray-700">
                                <span className="text-secondary mr-2">☀</span> Tropical Climate
                            </li>
                            <li className="flex items-center text-gray-700">
                                <span className="text-secondary mr-2">🏛</span> Rich Cultural Heritage
                            </li>
                            <li className="flex items-center text-gray-700">
                                <span className="text-secondary mr-2">✈</span> International Hub
                            </li>
                        </ul>
                        <button className="text-primary font-bold hover:underline">
                            View Travel & Visa Info &rarr;
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
