import PageHero from "@/components/PageHero";

export default function MinisterialRoundTablePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="Ministerial Round Table"
                description="A high-level, invitation-only event bringing together Ministers and top policy makers from across Africa."
                breadcrumb="Round Table"
                bgClass="bg-slate-900 text-white"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-body">
                        <h2 className="text-3xl font-bold font-heading text-primary mb-8 text-center">Fostering High-Level Policy Dialogue</h2>

                        <p className="mb-6">
                            The Ministerial Round Table (MRT) is a cornerstone of the Atlas Conference. It provides a unique, exclusive space for African Ministers of Education, ICT, and Science & Technology to share their visions, challenges, and successes in implementing digital transformation strategies.
                        </p>

                        <div className="grid md:grid-cols-2 gap-12 my-12 not-prose">
                            <div className="bg-gray-50 p-8 rounded-2xl border shadow-sm">
                                <h3 className="text-xl font-bold font-heading text-primary mb-4 flex items-center gap-2">
                                    <span className="text-2xl">🌍</span> Vision
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    To create a harmonized African digital education landscape by facilitating cross-border collaboration and policy alignment at the highest level of government.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border shadow-sm">
                                <h3 className="text-xl font-bold font-heading text-primary mb-4 flex items-center gap-2">
                                    <span className="text-2xl">🤝</span> Collaboration
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Engaging with international development partners and private sector innovators to mobilize resources and technical expertise for national EdTech goals.
                                </p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold font-heading text-gray-900 mb-6 border-b pb-2">Key Objectives 2026</h3>
                        <ul className="list-disc pl-6 space-y-4 mb-12">
                            <li><strong>Accelerating Infrastructure:</strong> Strategizing for affordable and reliable broadband access in rural and underserved educational hubs.</li>
                            <li><strong>Digital Teacher Training:</strong> Establishing continental standards for educator digital literacy and professional development.</li>
                            <li><strong>Ethical AI Adoptions:</strong> Formulating joint guidelines for the responsible and transparent use of AI in African school systems.</li>
                            <li><strong>Resource Resilience:</strong> Creating sustainable funding models for long-term EdTech project viability.</li>
                        </ul>

                        <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20 text-center">
                            <h3 className="text-xl font-bold font-heading text-primary mb-4 italic">"By Invitation Only"</h3>
                            <p className="text-gray-600 mb-0">
                                Participation in the Ministerial Round Table is strictly reserved for designated government officials and invited international delegates. For inquiries regarding participation, please contact our secretariat.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
