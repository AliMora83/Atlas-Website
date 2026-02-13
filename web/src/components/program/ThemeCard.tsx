import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ThemeCardProps {
    number: string;
    title: string;
    colorClass: string; // TailWind class for background color
    href?: string;
    image?: string;
}

export default function ThemeCard({ number, title, colorClass, href = "#", image }: ThemeCardProps) {
    return (
        <Link href={href} className={`block group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-64 ${!image ? colorClass : ''}`}>
            {/* Background Image */}
            {image && (
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
            )}

            {/* Gradient Overlay - stronger at bottom for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 group-hover:via-black/50 transition-all duration-500" />

            {/* Glassmorphism overlay on hover */}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500" />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-between p-6 text-white">
                <span className="text-5xl font-bold opacity-20 select-none group-hover:opacity-30 transition-opacity duration-300">{number}</span>
                <div>
                    <h3 className="text-lg md:text-xl font-bold leading-tight group-hover:translate-y-[-4px] transition-transform duration-300">
                        {title}
                    </h3>
                </div>
            </div>

            {/* Border accent on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-xl transition-all duration-500" />
        </Link>
    );
}
