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
            desc: "Participate in the Ministerial Round Table and debates that influence policy and implementation strategies across the continent.",
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
                breadcrumb="Why Attend"
                bgClass="bg-gradient-to-r from-primary to-primary-dark text-white"
            />

            <AboutSubNav />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-12 h-1 bg-yellow-500 mb-6"></div>
                                <h3 className="text-xl font-bold font-heading text-primary mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-normal">{item.desc}</p>
                            </div>
                        ))}
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
