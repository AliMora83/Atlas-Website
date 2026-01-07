import Link from "next/link";

const tickets = [
    {
        name: "Early Bird",
        price: "€390",
        features: ["Full Conference Access", "Networking Events", "Coffee Breaks & Lunch"],
        cta: "Select Ticket",
        highlight: false,
        badge: "Limited Availability"
    },
    {
        name: "Standard",
        price: "€590",
        features: ["Full Conference Access", "Networking Events", "Coffee Breaks & Lunch", "Conference App Access"],
        cta: "Select Ticket",
        highlight: true,
    },
    {
        name: "Engagement Pass",
        price: "€790",
        features: ["Looking for Partners?", "B2B Matchmaking", "VIP Lounge Access", "Exclusive Dinner"],
        cta: "Apply Now",
        highlight: false,
        note: "Application Required"
    },
];

export default function RegistrationPricing() {
    return (
        <section className="section-padding bg-white" id="registration">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-primary mb-4">Registration</h2>
                    <p className="text-gray-600">Secure your spot at Africa's premier ed-tech event.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tickets.map((ticket, idx) => (
                        <div
                            key={idx}
                            className={`relative rounded-xl border ${ticket.highlight ? 'border-primary shadow-xl scale-105 z-10' : 'border-gray-200 shadow-sm'} p-8 bg-white flex flex-col`}
                        >
                            {ticket.badge && (
                                <span className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                                    {ticket.badge}
                                </span>
                            )}
                            <h3 className="text-gray-900 mb-2">{ticket.name}</h3>
                            <div className="text-4xl font-bold text-primary mb-6">{ticket.price}</div>

                            <ul className="mb-8 space-y-3 flex-grow">
                                {ticket.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start text-sm text-gray-600">
                                        <span className="mr-2 text-green-500">✓</span> {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto">
                                {ticket.note && <p className="text-xs text-center text-gray-500 mb-2">{ticket.note}</p>}
                                <Link
                                    href="/register"
                                    className={`w-full ${ticket.highlight
                                        ? 'btn-primary'
                                        : 'btn-secondary'
                                        }`}
                                >
                                    {ticket.cta}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-sm text-gray-500 mt-8">
                    * African participation rates available upon request. <Link href="/contact" className="underline">Contact us</Link> for details.
                </p>
            </div>
        </section>
    );
}
