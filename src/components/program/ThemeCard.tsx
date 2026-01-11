import React from "react";
import Link from "next/link";

interface ThemeCardProps {
    number: string;
    title: string;
    colorClass: string; // TailWind class for background color
    href?: string;
}

export default function ThemeCard({ number, title, colorClass, href = "#" }: ThemeCardProps) {
    return (
        <Link href={href} className={`block group relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 h-48 ${colorClass}`}>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <div className="relative h-full flex flex-col justify-between p-6 text-white">
                <span className="text-5xl font-bold opacity-30 select-none">{number}</span>
                <h3 className="text-xl md:text-2xl font-bold leading-tight group-hover:translate-x-1 transition-transform">
                    {title}
                </h3>
            </div>
        </Link>
    );
}
