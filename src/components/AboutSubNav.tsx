"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AboutSubNav() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const menuItems = [
        { name: "About", href: "/about" },
        { name: "Venue", href: "/about/venue" },
        { name: "Who Attends", href: "/about/who-attends" },
        { name: "Why Attend", href: "/about/why-attend" },
        { name: "Past Conferences", href: "/about/past-conferences" },
    ];

    const currentItem = menuItems.find(item => item.href === pathname) || menuItems[0];

    return (
        <div className="relative inline-block text-left mb-8">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-between w-64 px-4 py-3 text-sm font-bold text-gray-700 bg-white border-2 border-primary rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none transition-all"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <div className="flex items-center gap-2">
                    <span className="text-primary font-heading uppercase tracking-wider">{currentItem.name}</span>
                </div>
                <svg
                    className={`w-5 h-5 ml-2 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute left-0 z-50 mt-2 w-64 origin-top-left bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                    <div className="py-1">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`block px-4 py-3 text-sm transition-colors ${pathname === item.href
                                        ? "bg-primary text-white font-bold"
                                        : "text-gray-700 hover:bg-gray-100 font-medium"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Background overlay to close dropdown */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-transparent"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
}
