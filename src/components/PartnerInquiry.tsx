"use client";

import { useState } from "react";

export default function PartnerInquiry() {
    const [formData, setFormData] = useState({
        name: "",
        org: "",
        email: "",
        interest: "Platinum",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for your interest! Our sponsorship team will contact you shortly.");
        // Handle form submission logic here
    };

    return (
        <section id="inquiry" className="section-padding bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-primary mb-4">Request Sponsorship Prospectus</h2>
                        <p className="text-gray-600">
                            Fill out the form below to receive the detailed 2026 Sponsorship Brochure and discuss custom opportunities.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name *</label>
                                <input
                                    required
                                    type="text"
                                    className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary focus:outline-none"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Organization *</label>
                                <input
                                    required
                                    type="text"
                                    className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary focus:outline-none"
                                    value={formData.org}
                                    onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                            <input
                                required
                                type="email"
                                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary focus:outline-none"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Interested Level</label>
                            <select
                                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary focus:outline-none"
                                value={formData.interest}
                                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                            >
                                <option value="Platinum">Platinum Partnership</option>
                                <option value="Gold">Gold Partnership</option>
                                <option value="Silver">Silver Partnership</option>
                                <option value="Bronze">Bronze Partnership</option>
                                <option value="Other">Other / Custom</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                            <textarea
                                className="w-full px-4 py-2 border rounded h-32 focus:ring-2 focus:ring-primary focus:outline-none"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full btn-primary"
                        >
                            Request Prospectus
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
