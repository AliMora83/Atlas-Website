import React from "react";
import PageHero from "@/components/PageHero";
import AboutSubNav from "@/components/AboutSubNav";

export default function WhyAttendPage() {
    const benefits = [
        {
            title: "Network with Leaders",
            desc: "Meet face-to-face with high-level government officials, decision-makers, and industry leaders from over 80 countries.",
        },
        {
            title: "Discover Innovation",
            desc: "Explore the latest edtech solutions, products, and services in our extensive exhibition hall.",
        },
        {
            title: "Share Knowledge",
            desc: "Gain insights from world-class speakers and diverse session formats covering the most pressing topics in African education.",
        },
        {
            title: "Shape the Future",
            desc: "Participate in the Panel Discussion and debates that influence policy and implementation strategies across the continent.",
        },
        {
            title: "Professional Growth",
            desc: "Enhance your skills through practical workshops, pre-conference events, and certified training sessions.",
        },
        {
            title: "Global Visibility",
            desc: "Showcase your achievements and gain visibility for your organization on a pan-African stage."
        }
    ];

    return (
        <>
            <PageHero
                title="Why Attend"
                description="The only annual pan-African conference dedicated to ICT for education, training, and skills development."
                bgClass="bg-primary text-white"
            />

            <AboutSubNav />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold font-heading text-primary mb-4">Why Attend?</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Discover the compelling reasons to join Africa's premier convention for investment, innovation, and sustainable development.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Left Column */}
                        <div className="space-y-6">
                            {[
                                "Interact and network with key decision-makers on Africa's growing digital economy and entrepreneurial spirit.",
                                "Participate in Africa's single digital market with new opportunities for your business",
                                "Understand the problems, desires, and goals of African customers and provide them with valuable solutions.",
                                "Through collaborations in Africa, you can gain a larger customer base, leverage regional integration, and deepen your impact.",
                                "Leaders and innovators of the continent's digital market attend the event. Learn from the best, network with potential customers and partners"
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-sm flex items-center justify-center mt-1">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-base text-gray-700 leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            {[
                                "Connect with others and tap into the opportunities of Africa's unified digital economy.",
                                "Discover how new technologies in Africa are creating opportunities and solutions for your business.",
                                "Gain insights from top experts, connect with peers, and explore the newest trends and innovations.",
                                "Learn how Artificial Intelligence and intra-Africa trade are changing the world and impacting your life and business.",
                                "Take advantage of relevant presentations from leading experts on emerging transnational value chains."
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-sm flex items-center justify-center mt-1">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-base text-gray-700 leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-900 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-heading mb-6">Ready to join us?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        Don't miss the opportunity to be part of Africa's most important edtech event.
                    </p>
                    <a href="/register" className="inline-block bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors">
                        Register Now
                    </a>
                </div>
            </section>
        </>
    );
}
