"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SpeakerProps } from "@/types/program";

export default function SpeakerCard({
    name,
    role,
    organization,
    bio,
    imageSrc,
    colorClass,
}: SpeakerProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fallback image if none provided
    const displayImage = imageSrc || "/api/placeholder/400/400";

    return (
        <>
            <div
                className={`${colorClass} rounded-lg p-6 text-center cursor-pointer transform hover:-translate-y-1 transition-transform duration-300 shadow-md group`}
                onClick={() => setIsModalOpen(true)}
            >
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/20 group-hover:border-white/40 transition-colors">
                    {/* Using a standard img tag for now to avoid next/image setup complexity with external domains if needed, 
                 but in production this should be next/image */}
                    <img
                        src={displayImage}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:underline decoration-white/50 underline-offset-4">
                    {name}
                </h3>
                <p className="text-white/80 text-sm font-medium mb-1">{role}</p>
                <p className="text-white/70 text-xs uppercase tracking-wider">{organization}</p>

                <div className="mt-6 inline-block text-white/60 text-xs font-bold border border-white/30 px-3 py-1 rounded-full group-hover:bg-white group-hover:text-gray-800 transition-colors">
                    View Profile
                </div>
            </div>

            {/* Modal Overlay */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
                    <div
                        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsModalOpen(false);
                            }}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors z-10"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="flex flex-col md:flex-row">
                            {/* Modal Side Image */}
                            <div className={`md:w-1/3 p-8 flex flex-col items-center justify-center text-center ${colorClass}`}>
                                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 mb-4 shadow-lg">
                                    <img src={displayImage} alt={name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-white font-bold text-xl mb-1">{name}</h3>
                                <p className="text-white/90 text-sm">{organization}</p>
                            </div>

                            {/* Modal Content */}
                            <div className="md:w-2/3 p-8">
                                <h4 className="text-2xl font-bold text-gray-900 mb-2">About the Speaker</h4>
                                <div className="w-12 h-1 bg-primary mb-6"></div>
                                <div className="prose prose-sm text-gray-600 leading-relaxed space-y-4">
                                    {bio.split('\n').map((paragraph, idx) => (
                                        <p key={idx}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Backdrop click to close */}
                    <div className="absolute inset-0" onClick={() => setIsModalOpen(false)}></div>
                </div>
            )}
        </>
    );
}
