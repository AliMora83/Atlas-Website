"use client";

import React, { useState } from "react";

interface FormatItemProps {
    title: string;
    summary: string;
    details: React.ReactNode;
}

export default function FormatItem({ title, summary, details }: FormatItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-6 last:border-0">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 mb-3">{summary}</p>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pt-2 pb-4 text-gray-700 space-y-2 text-sm md:text-base bg-gray-50 p-4 rounded-md">
                    {details}
                </div>
            </div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary font-medium hover:text-primary/80 transition-colors flex items-center text-sm uppercase tracking-wide mt-2"
            >
                {isOpen ? "Close Information" : "Click here for more information"}
                <span className={`ml-2 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                    ▼
                </span>
            </button>
        </div>
    );
}
