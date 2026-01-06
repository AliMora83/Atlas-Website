"use client";

import { useState } from "react";

import { Ticket } from "./TicketSelection";

interface RegistrationFormProps {
    selectedTicket: Ticket | null;
    onSubmit: (formData: any) => void;
    onBack: () => void;
}

export default function RegistrationForm({ selectedTicket, onSubmit, onBack }: RegistrationFormProps) {
    if (!selectedTicket) {
        return null; // Should not happen if parent controls render
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Collect form data here if needed, for now just proceed
        onSubmit({});
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold font-heading mb-6 border-b pb-4">
                Attendee Details <span className="text-sm font-normal text-gray-500 ml-2">({selectedTicket.name} - {selectedTicket.price})</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <input required type="text" className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary focus:outline-none" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <input required type="text" className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary focus:outline-none" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input required type="email" className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary focus:outline-none" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                    <input type="text" className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary focus:outline-none" />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Organization / Company *</label>
                    <input required type="text" className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary focus:outline-none" />
                </div>
            </div>

            <div className="mb-8">
                <label className="flex items-center">
                    <input required type="checkbox" className="mr-2" />
                    <span className="text-sm text-gray-600">I agree to the Terms, Conditions, and Privacy Policy.</span>
                </label>
            </div>

            <div className="flex gap-4">
                <button type="button" onClick={onBack} className="w-1/3 py-4 border border-gray-300 text-gray-700 font-bold text-lg rounded hover:bg-gray-50 transition-colors">
                    Back
                </button>
                <button type="submit" className="w-2/3 py-4 bg-secondary text-white font-bold text-lg rounded hover:bg-opacity-90 transition-colors shadow-md">
                    Proceed to Payment
                </button>
            </div>
        </form>
    );
}
