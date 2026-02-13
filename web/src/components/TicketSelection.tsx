"use client";

import { useState } from "react";

export type Ticket = {
    id: string;
    name: string;
    price: string;
    desc: string;
    features: string[];
};

const tickets: Ticket[] = [
    {
        id: "early-bird",
        name: "Early Bird",
        price: "€450",
        desc: "Limited availability until Feb 28.",
        features: ["Full conference access", "Networking events", "Conference materials"]
    },
    {
        id: "standard",
        name: "Standard",
        price: "€650",
        desc: "Regular conference admission.",
        features: ["Full conference access", "Networking events", "Conference materials", "Certificate of attendance"]
    },
    {
        id: "student",
        name: "Student",
        price: "€150",
        desc: "Valid ID required at check-in.",
        features: ["Access to sessions", "Networking events"]
    }
];

export default function TicketSelection({ onSelect }: { onSelect: (ticket: Ticket) => void }) {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const handleSelect = (ticket: Ticket) => {
        setSelectedId(ticket.id);
        onSelect(ticket);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tickets.map((ticket) => (
                <div
                    key={ticket.id}
                    className={`border rounded-lg p-6 cursor-pointer transition-all hover:shadow-lg ${selectedId === ticket.id
                        ? "border-primary ring-2 ring-primary ring-opacity-50 bg-blue-50"
                        : "border-gray-200 bg-white"
                        }`}
                    onClick={() => handleSelect(ticket)}
                >
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-xl font-bold font-heading text-gray-900">{ticket.name}</h3>
                            <p className="text-sm text-gray-500">{ticket.desc}</p>
                        </div>
                        {selectedId === ticket.id && (
                            <span className="text-primary font-bold">✓</span>
                        )}
                    </div>
                    <div className="text-3xl font-bold text-primary mb-6">{ticket.price}</div>
                    <ul className="space-y-2 mb-6">
                        {ticket.features.map((feat, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-start">
                                <span className="mr-2 text-green-500">•</span> {feat}
                            </li>
                        ))}
                    </ul>
                    <button className={`w-full py-2 rounded font-medium transition-colors ${selectedId === ticket.id ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}>
                        {selectedId === ticket.id ? 'Selected' : 'Select'}
                    </button>
                </div>
            ))}
        </div>
    );
}
