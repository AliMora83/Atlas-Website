'use client';


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
