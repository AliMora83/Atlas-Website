import React from "react";
import PageHero from "@/components/PageHero";
import AboutSubNav from "@/components/AboutSubNav";

export default function WhoAttendsPage() {
    const stats = [
        { label: "Designated Ministers", value: "14+" },
        { label: "Countries Represented", value: "82" },
        { label: "Participants", value: "1,600+" },
        { label: "Speakers", value: "240+" },
    ];

    const categories = [
        {
            title: "Government & Policy",
            description: "Ministers of Education, ICT, Higher Education, Science & Technology; Policy Makers and Government Officials.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
            )
        },
        {
            title: "Education Sector",
            description: "Vice Chancellors, Heads of Universities, TVET, Schools, and Training Institutes; Educators and Researchers.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
            )
        },
        {
            title: "Private Sector",
            description: "CEOs and Executives from EdTech companies, ICT providers, Publishers, and Infrastructure developers.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
            )
        },
        {
            title: "International Agencies",
            description: "Representatives from Multilateral and Bilateral Development Agencies, NGOs, and Foundations.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
            )
        }
    ];

    return (
        <>
            <PageHero
                title="Who Attends"
                description="Join a diverse, high-level community of over 1,600 education and technology professionals from across Africa and the globe."
                breadcrumb="Who Attends"
                bgClass="bg-primary text-white"
                textClass="text-blue-100"
            />

            <AboutSubNav />

            {/* Stats Banner */}
            <section className="bg-primary-dark py-12 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <div className="text-4xl font-bold font-heading mb-2 text-yellow-500">{stat.value}</div>
                                <div className="text-sm opacity-80 uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold font-heading text-primary mb-4">A Unique Networking Platform</h2>
                        <p className="text-gray-600 leading-relaxed">
                            The Atlas Conference brings together the full spectrum of the EdTech ecosystem. Whether you are driving policy, building solutions, or educating the next generation, you will find your peers here.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {categories.map((cat) => (
                            <div key={cat.title} className="flex gap-6 p-6 border rounded-lg hover:shadow-lg transition-shadow bg-gray-50">
                                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary">
                                    {cat.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">{cat.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{cat.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
