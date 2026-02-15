import React from "react";

interface ComingSoonProps {
    title?: string;
    description?: string;
}

export default function ComingSoon({
    title = "Coming Soon",
    description = "Details will be announced closer to the conference date. Check back soon for updates!",
}: ComingSoonProps) {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    {/* Icon */}
                    <div className="mb-6">
                        <svg
                            className="w-24 h-24 text-primary/20"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>

                    {/* Coming Soon Text */}
                    <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">
                        {title}
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-gray-600 max-w-2xl">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
}
