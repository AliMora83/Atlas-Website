import PageHero from "@/components/PageHero";

const partners = [
    { name: "Global EdTech Review", type: "Main Media Partner", logo: "GE" },
    { name: "African Development News", type: "Regional Partner", logo: "AN" },
    { name: "The Learning Network", type: "Content Partner", logo: "LN" },
    { name: "Digital Africa Journal", type: "Technical Partner", logo: "DA" },
    { name: "Horizon Educational", type: "Academic Partner", logo: "HE" },
    { name: "Tech Weekly Africa", type: "Media Partner", logo: "TW" },
];

export default function MediaPartnersPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="Media Partners"
                description="We work with leading global and regional media organizations to ensure the widest impact of the Atlas Conference."
                breadcrumb="Partners"
                bgClass="bg-slate-900 text-white"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold font-heading text-primary mb-6">Our 2026 Partners</h2>
                        <p className="text-gray-600 leading-relaxed font-body">
                            Atlas is proud to collaborate with prestigious media outlets that share our commitment to transforming education through technology across the continent.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {partners.map((partner, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="w-full aspect-square bg-gray-50 border rounded-xl flex items-center justify-center mb-4 hover:shadow-md hover:border-primary transition-all group">
                                    <span className="text-3xl font-bold text-gray-300 group-hover:text-primary transition-colors">{partner.logo}</span>
                                </div>
                                <h3 className="text-sm font-bold text-gray-900 text-center mb-1">{partner.name}</h3>
                                <div className="text-[10px] font-bold uppercase text-primary tracking-widest text-center">{partner.type}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold font-heading text-primary mb-6">Accreditation</h2>
                            <p className="text-gray-700 leading-relaxed font-body mb-6">
                                We welcome journalists and media representatives to cover the Atlas Conference. Accredited media enjoy access to plenary sessions, the exhibition, and dedicated press briefings.
                            </p>
                            <ul className="space-y-4 font-body">
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold">✔</span>
                                    <span className="text-gray-600">Priority seating in all plenary sessions</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold">✔</span>
                                    <span className="text-gray-600">Access to interview booths & VIP lounge</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold">✔</span>
                                    <span className="text-gray-600">High-resolution media assets for download</span>
                                </li>
                            </ul>
                            <button className="mt-10 px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-opacity-90 transition-all">
                                Apply for Accreditation
                            </button>
                        </div>
                        <div className="bg-white p-8 rounded-3xl border shadow-sm">
                            <h3 className="text-xl font-bold font-heading mb-6">Partner with us?</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-8">
                                Interested in becoming an official media partner for Atlas 2026? We offer unique visibility packages tailored to your organization's reach and audience.
                            </p>
                            <form className="space-y-4">
                                <input type="text" placeholder="Organization Name" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                                <input type="email" placeholder="Work Email" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                                <button className="w-full py-3 bg-gray-900 text-white rounded-lg font-bold hover:bg-black transition-colors">
                                    Send Partnership Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
