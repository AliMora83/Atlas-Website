import React from "react";
import { SessionType } from "@/types/program";

interface ProgrammeCardProps {
    title: string;
    time?: string;
    description?: string;
    type: SessionType;
    location?: string;
}

const typeStyles: Record<SessionType, string> = {
    plenary: "bg-[#B39DDB] text-[#4527A0]", // Purple
    workshop: "bg-[#A5D6A7] text-[#1B5E20]", // Green
    networking: "bg-[#FFF59D] text-[#F57F17]", // Yellow
    break: "bg-gray-100 text-gray-600", // Gray
};

export default function ProgrammeCard({
    title,
    time,
    description,
    type,
    location,
}: ProgrammeCardProps) {
    return (
        <div
            className={`p-4 rounded-lg shadow-sm border border-transparent hover:shadow-md transition-shadow cursor-pointer ${typeStyles[type]}`}
        >
            {time && (
                <div className="text-xs font-bold uppercase tracking-wide mb-1 opacity-80">
                    {time}
                </div>
            )}
            <h3 className="font-bold leading-tight mb-2 text-sm md:text-base">
                {title}
            </h3>
            {description && (
                <p className="text-sm opacity-90 line-clamp-3 mb-2">{description}</p>
            )}
            {location && (
                <div className="text-xs font-semibold opacity-75 mt-auto flex items-center">
                    <span className="mr-1">📍</span> {location}
                </div>
            )}
        </div>
    );
}
