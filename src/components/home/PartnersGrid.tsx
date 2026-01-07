interface PartnerTier {
    title: string;
    count: number;
}

const tiers: PartnerTier[] = [
    { title: "In Collaboration with", count: 1 },
    { title: "Main Event Partner", count: 1 },
    { title: "Platinum Partners", count: 2 },
    { title: "Gold Partners", count: 3 },
    { title: "Silver Partners", count: 4 },
    { title: "Bronze Partner", count: 2 },
];

export default function PartnersGrid() {
    return (
        <section className="section-padding bg-white" id="partners">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-primary mb-4">Atlas Conference 2026 Partners</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We are proud to work with global leaders committed to educational innovation and development.
                    </p>
                </div>

                <div className="space-y-16">
                    {tiers.map((tier, tierIdx) => (
                        <div key={tierIdx} className="max-w-6xl mx-auto">
                            <h3 className="text-lg font-bold uppercase tracking-widest text-gray-500 text-center mb-8 border-b border-gray-100 pb-4">
                                {tier.title}
                            </h3>
                            <div className="flex flex-wrap justify-center gap-8">
                                {Array.from({ length: tier.count }).map((_, logoIdx) => (
                                    <a
                                        key={logoIdx}
                                        href={`#partner-${tierIdx}-${logoIdx}`}
                                        className="group relative w-48 h-24 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center p-4 hover:shadow-md hover:border-primary transition-all grayscale hover:grayscale-0"
                                    >
                                        <div className="text-center">
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                {tier.title.split(' ')[0]}
                                            </div>
                                            <span className="text-gray-400 font-medium text-xs">Partner Logo</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
