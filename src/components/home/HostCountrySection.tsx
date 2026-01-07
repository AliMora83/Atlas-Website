export default function HostCountrySection() {
    return (
        <section className="section-padding bg-white" id="host-country">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-primary mb-2 text-center">Host Country 2026: Ghana</h2>
                    <h3 className="text-xl text-gray-600 mb-12 text-center font-normal">
                        Co-Hosted by the Ministry of Education, Ghana
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                        <div className="lg:col-span-3 space-y-6">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We are honored to announce that Ghana will be the host country for the 19th edition
                                of Atlas Conference. The conference will take place in the vibrant city of Accra
                                from June 3 - 5, 2026.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Ghana has emerged as a leader in educational transformation in West Africa.
                                Through ambitious reforms and digital learning programs like GALOP, the
                                country is setting a benchmark for technology integration in schools
                                and vocational training hubs.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Join us in Accra to experience Ghana&apos;s rich cultural heritage and its
                                forward-thinking approach to the digital future of education.
                            </p>
                        </div>

                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-gray-50 border border-gray-100 p-8 rounded-xl text-center shadow-sm">
                                <p className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6">
                                    Co-Hosted by
                                </p>
                                <div className="aspect-[3/2] bg-white border border-gray-200 rounded-lg flex items-center justify-center p-6 mb-4 group cursor-pointer hover:shadow-md transition-shadow">
                                    <span className="text-gray-400 font-medium italic group-hover:text-primary transition-colors text-center">
                                        [Ministry of Education<br />Ghana Logo Placeholder]
                                    </span>
                                </div>
                                <a
                                    href="#"
                                    className="text-primary text-sm font-semibold hover:underline"
                                >
                                    Visit Ministry Website
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
