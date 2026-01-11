import React from "react";
import { EditionProps } from "@/types/program";

const EditionSection = ({
    year,
    theme,
    description,
    partners,
    links,
}: EditionProps) => (
    <div className="mb-12 border-b border-gray-200 pb-12 last:border-0 relative">
        {/* Decorative year in background */}
        <div className="absolute -top-6 -left-4 text-9xl font-bold text-gray-100 select-none z-0">
            {year}
        </div>

        <div className="relative z-10">
            <h3 className="text-2xl font-bold text-primary mb-2 flex items-center">
                <span className="mr-3 text-4xl text-gray-300">|</span> {year}
            </h3>
            <h4 className="text-xl font-semibold mb-4 text-gray-800 italic">
                {theme}
            </h4>
            <div className="text-gray-600 mb-6 space-y-4 leading-relaxed">
                {description.map((para, idx) => (
                    <p key={idx}>{para}</p>
                ))}
            </div>

            {partners && (
                <div className="mb-6">
                    <h5 className="text-sm font-bold uppercase text-gray-500 mb-3">
                        MRT Partners were:
                    </h5>
                    <div className="flex flex-wrap gap-4 items-center">
                        {partners.map((partner) => (
                            <div
                                key={partner}
                                className="bg-gray-100 text-gray-500 text-xs font-bold px-3 py-2 rounded uppercase"
                            >
                                {partner}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {links && (
                <div className="flex flex-col sm:flex-row gap-4">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-primary hover:text-primary/80 font-medium flex items-center transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="mr-2">→</span> {link.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    </div>
);

export default EditionSection;
