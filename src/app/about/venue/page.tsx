import PageHero from "@/components/PageHero";
import Link from "next/link";

export default function VenuePage() {
    return (
        <>
            <PageHero
                title="Venue & Accommodation"
                description="The 2026 Atlas Conference will be held at the prestigious Accra International Conference Centre in Ghana."
                breadcrumb="Venue"
                bgClass="bg-slate-900 text-white"
            />

            {/* Venue Details */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold font-heading text-primary mb-6">Accra International Conference Centre</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    Located in the heart of Accra, the AICC is Ghana's premier conference venue. It is situated in the Christiansborg area, close to the Parliament House and the State House, making it a hub for diplomatic and business activities.
                                </p>
                                <p>
                                    The centre features a 1,600-seater plenary hall, various committee rooms, and spacious exhibition areas, providing a world-class environment for networking, learning, and collaboration.
                                </p>
                                <ul className="list-disc pl-5 space-y-2 mt-4">
                                    <li><strong>Address:</strong> Christiansborg, Accra, Ghana</li>
                                    <li><strong>Capacity:</strong> 6,000+ delegates</li>
                                    <li><strong>Facilities:</strong> High-speed Wi-Fi, Interpretation booths, VIP lounges</li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden shadow-xl">
                            {/* Placeholder for Venue Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100 flex-col">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-2">
                                    <path d="M3 21h18" />
                                    <path d="M5 21V7l8-4 8 4v14" />
                                    <path d="M8 9a2 2 0 0 1 2-2 4 4 0 0 1 4 0 2 2 0 0 1 2 2" />
                                    <path d="M8 9h8" />
                                </svg>
                                <span>Venue Image</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accommodation */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold font-heading text-primary mb-4">Accommodation</h2>
                        <p className="text-gray-600">
                            We have partnered with several hotels near the conference venue to offer special rates for delegates. Booking details will be available in your registration confirmation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Hotel Card 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">Accra City Hotel</h3>
                            <p className="text-sm text-primary font-medium mb-4">4-Star • 1.2 km from venue</p>
                            <p className="text-gray-600 text-sm mb-6">Mix of culture and modernity, located centrally in the business district.</p>
                            <Link href="#" className="text-primary font-medium hover:underline text-sm">Visit Website &rarr;</Link>
                        </div>

                        {/* Hotel Card 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">Kempinski Hotel Gold Coast</h3>
                            <p className="text-sm text-primary font-medium mb-4">5-Star • 0.8 km from venue</p>
                            <p className="text-gray-600 text-sm mb-6">Luxury accommodation offering the largest room sizes in Accra.</p>
                            <Link href="#" className="text-primary font-medium hover:underline text-sm">Visit Website &rarr;</Link>
                        </div>

                        {/* Hotel Card 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">Mövenpick Ambassador</h3>
                            <p className="text-sm text-primary font-medium mb-4">5-Star • 1.0 km from venue</p>
                            <p className="text-gray-600 text-sm mb-6">A contemporary 5-star hotel set in 16 acres of landscaped gardens.</p>
                            <Link href="#" className="text-primary font-medium hover:underline text-sm">Visit Website &rarr;</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
