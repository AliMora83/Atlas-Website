"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import MediaSubNav from "@/components/MediaSubNav";

interface MediaPartner {
    id: string;
    name: string;
    logo: string;
    country: string;
}

const mediaPartners: MediaPartner[] = [
    { id: "1", name: "African Tech News", logo: "📰", country: "Pan-African" },
    { id: "2", name: "Education Today Africa", logo: "📚", country: "Kenya" },
    { id: "3", name: "Ghana Broadcasting Corp", logo: "📺", country: "Ghana" },
    { id: "4", name: "TechCrunch Africa", logo: "💻", country: "Nigeria" },
    { id: "5", name: "EdTech Digest", logo: "📱", country: "South Africa" },
    { id: "6", name: "The African Reporter", logo: "🗞️", country: "Pan-African" },
];

export default function MediaPartnersPage() {
    const [formData, setFormData] = useState({
        organization: "",
        contactName: "",
        email: "",
        phone: "",
        country: "",
        mediaType: "",
        coverage: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you for your accreditation request! We will review your application and respond within 3-5 business days.");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="flex flex-col bg-white">
            <PageHero
                title="Media Accreditation"
                description="Apply for media accreditation to cover Atlas Global Academic Conference 2026 in Accra, Ghana."
            />

            <MediaSubNav />

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col gap-12">
                    {/* Page Heading */}
                    <section className="pt-8">
                        <h1 className="text-5xl font-bold font-heading text-primary mb-4">Media Accreditation</h1>
                        <div className="w-20 h-1.5 bg-secondary rounded-full"></div>
                        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
                            Join our network of media partners covering Africa's premier education technology conference. Apply for accreditation to access exclusive interviews, press conferences, and behind-the-scenes content.
                        </p>
                    </section>

                    {/* Benefits Section */}
                    <section className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Accreditation Benefits</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: "🎤", title: "Press Conferences", desc: "Exclusive access to speaker Q&A sessions" },
                                { icon: "📸", title: "Photo Opportunities", desc: "Priority positioning for key moments" },
                                { icon: "🎥", title: "Video Recording", desc: "Permission to film sessions and interviews" },
                                { icon: "💼", title: "Press Room Access", desc: "Dedicated workspace with WiFi and refreshments" },
                                { icon: "📋", title: "Press Kit", desc: "Complete media kit with all conference materials" },
                                { icon: "🤝", title: "Networking", desc: "Connect with speakers and industry leaders" }
                            ].map((benefit, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <div className="text-4xl mb-3">{benefit.icon}</div>
                                    <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Application Form */}
                    <section className="max-w-3xl">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Apply for Accreditation</h2>
                        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-8 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Media Organization *
                                    </label>
                                    <input
                                        type="text"
                                        name="organization"
                                        value={formData.organization}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Your organization name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Contact Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="contactName"
                                        value={formData.contactName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Your full name"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="email@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="+233 XX XXX XXXX"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Country *
                                    </label>
                                    <input
                                        type="text"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Your country"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Media Type *
                                    </label>
                                    <select
                                        name="mediaType"
                                        value={formData.mediaType}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    >
                                        <option value="">Select type</option>
                                        <option value="newspaper">Newspaper/Print</option>
                                        <option value="online">Online Publication</option>
                                        <option value="tv">Television</option>
                                        <option value="radio">Radio</option>
                                        <option value="podcast">Podcast</option>
                                        <option value="blogger">Blogger/Influencer</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Coverage Plan *
                                </label>
                                <textarea
                                    name="coverage"
                                    value={formData.coverage}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    placeholder="Briefly describe your planned coverage of Atlas Global Academic Conference 2026..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">
                                    Additional Information
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    placeholder="Any special requirements or additional information..."
                                />
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-sm text-gray-600">
                                    <strong className="text-gray-900">Note:</strong> Applications are reviewed within 3-5 business days. You will receive confirmation via email. Accreditation is subject to verification of media credentials.
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
                            >
                                Submit Accreditation Request
                            </button>
                        </form>
                    </section>

                    {/* Media Partners */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Media Partners</h2>
                        <div className="bg-white rounded-xl border border-gray-200 p-8">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                                {mediaPartners.map((partner) => (
                                    <div key={partner.id} className="flex flex-col items-center text-center group">
                                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                                            <span className="text-3xl">{partner.logo}</span>
                                        </div>
                                        <h3 className="font-bold text-sm text-gray-900 mb-1">{partner.name}</h3>
                                        <p className="text-xs text-gray-500">{partner.country}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {[
                                {
                                    q: "Who is eligible for media accreditation?",
                                    a: "Accreditation is available to professional journalists, bloggers, podcasters, and content creators with verifiable media credentials and a demonstrated interest in education technology."
                                },
                                {
                                    q: "Is there a fee for media accreditation?",
                                    a: "No, media accreditation is complimentary for approved applicants. However, travel and accommodation costs are the responsibility of the media organization."
                                },
                                {
                                    q: "What documents do I need to provide?",
                                    a: "You'll need to provide proof of media affiliation (press card, assignment letter, or publication portfolio) and a valid government-issued ID."
                                },
                                {
                                    q: "Can I bring camera equipment?",
                                    a: "Yes, accredited media are welcome to bring professional camera and recording equipment. Video recording is permitted in designated areas."
                                },
                                {
                                    q: "When is the application deadline?",
                                    a: "We recommend applying at least 4 weeks before the conference (by May 6, 2026). Late applications will be considered on a case-by-case basis."
                                }
                            ].map((faq, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                                    <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Contact CTA */}
                    <section className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-10 text-white text-center">
                        <div className="max-w-2xl mx-auto">
                            <h2 className="text-2xl font-bold mb-4">Questions About Accreditation?</h2>
                            <p className="mb-6 opacity-90 leading-relaxed">
                                Our media relations team is here to help with any questions about the accreditation process or media coverage opportunities.
                            </p>
                            <a
                                href="mailto:press@atlas-conference.com"
                                className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all"
                            >
                                Contact Media Team
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
