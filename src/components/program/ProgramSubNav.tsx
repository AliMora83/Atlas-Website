"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { label: "Programme 2026", href: "/program" },
    { label: "Themes 2026", href: "/program/themes" },
    { label: "Session Formats", href: "/program/session-formats" },
    { label: "Ministerial Round Table", href: "/program/ministerial-round-table" },
    { label: "Keynote Speakers", href: "/program/speakers" },
];

export default function ProgramSubNav() {
    const pathname = usePathname();

    return (
        <div className="bg-white border-b sticky top-20 z-30 shadow-sm overflow-x-auto">
            <div className="container mx-auto px-4">
                <div className="flex space-x-2 min-w-max py-3">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${isActive
                                    ? "bg-primary text-white shadow-md"
                                    : "text-gray-600 hover:bg-gray-100 hover:text-primary"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
