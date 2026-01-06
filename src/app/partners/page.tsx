import PageHero from "@/components/PageHero";
import Link from "next/link";
import PartnerLevels from "@/components/PartnerLevels";
import PartnerInquiry from "@/components/PartnerInquiry";
import Sponsors from "@/components/Sponsors"; // Reuse the sponsors logo grid

export default function PartnersPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="Become a Partner"
                description="Join the leading organizations shaping the future of education in Africa. showcase your solutions to over 5,000 key decision-makers."
                breadcrumb="Partners"
                bgClass="bg-white text-gray-900"
                textClass="text-gray-600"
            >
                <Link
                    href="#levels"
                    className="px-8 py-3 bg-primary text-white rounded font-medium hover:bg-opacity-90 transition-colors"
                >
                    View Opportunities
                </Link>
                <Link
                    href="#inquiry"
                    className="px-8 py-3 border border-gray-300 text-gray-700 rounded font-medium hover:bg-gray-50 transition-colors"
                >
                    Contact Sales
                </Link>
            </PageHero>

            {/* Current Sponsors Section Reused */}
            <div className="bg-gray-50 border-b">
                <Sponsors />
            </div>

            <PartnerLevels />
            <PartnerInquiry />
        </div>
    );
}
