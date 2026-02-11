import Image from 'next/image';

export default function MissionVision() {
    return (
        <section className="py-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Mission */}
                <div className="flex gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow items-start">
                    <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                            src="/images/mission.jpg"
                            alt="Our Mission"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                        <p className="text-gray-700 leading-relaxed text-sm">
                            To build a global R&D community that produces high-impact translation initiatives for the development of Africa.
                        </p>
                    </div>
                </div>

                {/* Vision */}
                <div className="flex gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow items-start">
                    <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                            src="/images/vision.JPG"
                            alt="Vision"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Vision</h3>
                        <p className="text-gray-700 leading-relaxed text-sm">
                            To become the leading transdisciplinary global R&D platform that translates knowledge into scalable commercial solutions and inclusive growth across communities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
