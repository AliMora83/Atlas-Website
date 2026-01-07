import PageHero from "@/components/PageHero";
import Link from "next/link";

const releases = [
    {
        date: "October 15, 2025",
        title: "Atlas Conference 2026 Officially Announced for Accra, Ghana",
        excerpt: "The Atlas Secretariat is proud to announce that the 2026 conference will be hosted in the historic city of Accra...",
        category: "Announcement"
    },
    {
        date: "September 02, 2025",
        title: "Call for Proposals Now Open: Shaping the Future of Learning",
        excerpt: "We invite researchers, educators, and policy makers to submit their contributions for the 2026 program...",
        category: "Call for Papers"
    },
    {
        date: "July 20, 2025",
        title: "Impact Report 2025: Atlas Conference Driving Continental Change",
        excerpt: "Following a successful event in Dar es Salaam, our latest report highlights the key policy shifts recorded...",
        category: "Report"
    },
    {
        date: "May 10, 2025",
        title: "New Strategic Partnerships with Regional Development Banks",
        excerpt: "Atlas expands its financial support network to ensure greater accessibility for delegates from all African regions...",
        category: "Partnership"
    },
];

export default function PressReleasesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="Press Releases"
                description="Stay updated with the latest news, official statements, and announcements from the Atlas Secretariat."
                breadcrumb="Press Releases"
                bgClass="bg-primary text-white"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-12">
                        {releases.map((item, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-8 items-start border-b pb-12 last:border-0 border-gray-100 group">
                                <div className="md:w-48 flex-shrink-0">
                                    <div className="text-gray-400 font-bold mb-2">{item.date}</div>
                                    <div className="inline-block px-3 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">{item.category}</div>
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-4 group-hover:text-primary transition-colors">
                                        <Link href="#">{item.title}</Link>
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {item.excerpt}
                                    </p>
                                    <Link href="#" className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                                        Read Full Story
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-10 bg-gray-50 rounded-3xl text-center">
                        <h3 className="text-xl font-bold font-heading mb-4">Media Inquiries</h3>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            For press accreditation, interview requests, or further information, please contact our media team.
                        </p>
                        <a href="mailto:press@atlas-conference.com" className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-colors">
                            Contact Media Team
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
