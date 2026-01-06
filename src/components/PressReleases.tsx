import Link from "next/link";

const releases = [
    {
        date: "January 15, 2026",
        title: "Atlas Conference 2026 Announces Accra as Host City",
        snippet: "The premier EdTech event returns to West Africa, focusing on the role of AI in shaping the future of education.",
        link: "#"
    },
    {
        date: "December 10, 2025",
        title: "Call for Papers Now Open for 19th Edition",
        snippet: "Educators, policymakers, and innovators are invited to submit proposals for the upcoming conference.",
        link: "#"
    },
    {
        date: "November 05, 2025",
        title: "Record Attendance at Atlas Regional Summit",
        snippet: "Over 500 delegates gathered in Nairobi for the pre-conference summit on digital infrastructure.",
        link: "#"
    }
];

export default function PressReleases() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl font-bold font-heading text-primary mb-12 border-l-4 border-secondary pl-4">Latest Press Releases</h2>

                <div className="space-y-10">
                    {releases.map((item, idx) => (
                        <div key={idx} className="group">
                            <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                            <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-secondary transition-colors">
                                <Link href={item.link}>{item.title}</Link>
                            </h3>
                            <p className="text-gray-600 mb-4">{item.snippet}</p>
                            <Link href={item.link} className="text-primary font-medium hover:underline inline-flex items-center">
                                Read Full Release &rarr;
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
