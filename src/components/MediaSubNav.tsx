"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { label: "Media Center", href: "/media" },
    { label: "Gallery", href: "/media/gallery" },
    { label: "Press Releases", href: "/media/press" },
    { label: "Media Kit", href: "/media/kit" },
    { label: "Accreditation", href: "/media/partners" },
];

export default function MediaSubNav() {
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
