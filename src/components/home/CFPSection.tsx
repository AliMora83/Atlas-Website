'use client';

import Link from "next/link";
import dynamic from "next/dynamic";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

// Import PDFViewer with SSR disabled to avoid canvas module error
const PDFViewer = dynamic(() => import("@/components/PDFViewer"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[600px] bg-white rounded-xl shadow-lg border border-gray-200 flex items-center justify-center">
            <LoadingSpinner size="lg" message="Loading PDF viewer..." />
        </div>
    ),
});

export default function CFPSection() {
    return (
        <section className="section-padding bg-gray-50" id="cfp">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-primary mb-6 text-center">Call for Papers 2026</h2>

                    {/*  <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 mb-10">

                        <p className="text-xl font-bold text-gray-900 mb-6">
                            The Atlas Global Academic Conference 2026 Call for Papers is now closed.
                        </p>

                        <div className="space-y-6 text-gray-700 leading-relaxed">
                            <p>
                                We have received an overwhelming number of submissions from across Africa
                                and the world. We would like to extend our sincere gratitude to all the
                                educators, innovators, and researchers who contributed their work.
                            </p>
                            <p className="italic text-primary font-medium">
                                &quot;Africa&apos;s Time, Africa&apos;s Terms: Learning for Sovereignty, Strength and Solidarity&quot;
                            </p>
                            <p>
                                Submissions were welcomed on topics ranging from &quot;AI in African Education&quot; to &quot;Policy Frameworks for Digital Learning.&quot; The 2026 theme focuses on how digital learning can empower the continent
                                to chart its own course and build sustainable, sovereign educational systems.
                            </p>
                        </div>

                        <div className="mt-10">
                            <Link
                                href="/program/themes"
                                className="inline-flex items-center text-primary font-bold hover:text-secondary border-b-2 border-primary hover:border-secondary transition-all"
                            >
                                READ MORE &rarr;
                            </Link>
                        </div>
                    </div>*/}

                    {/* PDF Viewer */}
                    <PDFViewer
                        pdfUrl="/Atlas Global Academic Conference Call 2026.pdf"
                        fileName="Atlas Global Academic Conference Call 2026.pdf"
                    />
                </div>
            </div>
        </section>
    );
}
