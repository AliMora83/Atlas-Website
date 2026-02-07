import { Target, Telescope } from 'lucide-react';

export default function MissionVision() {
    return (
        <section className="py-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Mission */}
                <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                            <Target className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        To build a global R&D community that produces high-impact translation initiatives for the development of Africa.
                    </p>
                </div>

                {/* Vision */}
                <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-purple-50 rounded-xl text-purple-600">
                            <Telescope className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        To become Africa’s leading transdisciplinary global R&D platform that translates knowledge into scalable commercial solutions and inclusive growth across communities.
                    </p>
                </div>
            </div>
        </section>
    );
}
