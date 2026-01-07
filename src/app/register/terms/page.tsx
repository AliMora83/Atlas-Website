import PageHero from "@/components/PageHero";

export default function TermsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="Terms & Conditions"
                description="Please review our participant terms and conditions for Atlas Conference 2026."
                breadcrumb="Terms"
                bgClass="bg-gray-100 text-gray-900"
                textClass="text-gray-600"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-blue prose-lg max-w-none text-gray-700 font-body">
                        <h2 className="text-2xl font-bold font-heading text-primary mb-6">1. Acceptance of Terms</h2>
                        <p className="mb-8">
                            By registering for or attending the Atlas Conference 2026 (the "Conference"), you agree to comply with and be bound by the following terms and conditions. These terms apply to all participants, including delegates, speakers, exhibitors, and media.
                        </p>

                        <h2 className="text-2xl font-bold font-heading text-primary mb-6">2. Registration and Fees</h2>
                        <p className="mb-4">
                            Registration is complete only upon receipt of full payment. Fees are based on the ticket category selected at the time of registration.
                        </p>
                        <ul className="list-disc pl-6 mb-8 space-y-2">
                            <li><strong>Early Bird Rates:</strong> Available only until January 31, 2026.</li>
                            <li><strong>Inclusions:</strong> Tickets include access to plenary sessions, workshops, exhibition area, and conference materials unless otherwise specified.</li>
                            <li><strong>Exclusions:</strong> Accommodation, travel, and personal expenses are the sole responsibility of the participant.</li>
                        </ul>

                        <h2 className="text-2xl font-bold font-heading text-primary mb-6">3. Cancellation and Refund Policy</h2>
                        <p className="mb-8">
                            Cancellations must be submitted in writing to the Secretariat. Refunds will be processed as follows:
                            - Before February 1, 2026: 75% refund.
                            - February 1 – March 31, 2026: 50% refund.
                            - After March 31, 2026: No refunds will be issued.
                            Substitution of delegates is permitted at no extra charge until May 1, 2026.
                        </p>

                        <h2 className="text-2xl font-bold font-heading text-primary mb-6">4. Intellectual Property</h2>
                        <p className="mb-8">
                            All materials, content, and branding associated with the Conference are the property of the Atlas Secretariat or its presenters. Recording of sessions for commercial use without prior written consent is strictly prohibited.
                        </p>

                        <h2 className="text-2xl font-bold font-heading text-primary mb-6">5. Code of Conduct</h2>
                        <p className="mb-8">
                            We are committed to providing a harassment-free experience for everyone. Participants are expected to behave professionally and treat others with respect. The Secretariat reserves the right to exclude any participant whose behavior is deemed inappropriate.
                        </p>

                        <h2 className="text-2xl font-bold font-heading text-primary mb-6">6. Liability</h2>
                        <p className="mb-8">
                            The Atlas Secretariat shall not be held liable for personal injury or any loss or damage to personal property of the participants. It is recommended that participants obtain personal travel and health insurance.
                        </p>

                        <div className="mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-100 italic">
                            <p className="mb-0 text-sm text-blue-800">
                                Last Updated: January 2026. These terms are subject to change without notice. The version published on this website at the time of registration shall be the governing document.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
