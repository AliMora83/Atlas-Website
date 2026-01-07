"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SubItem {
    name: string;
    href: string;
}

interface NavItem {
    name: string;
    href: string;
    subItems?: SubItem[];
}

const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    {
        name: "About",
        href: "/about",
        subItems: [
            { name: "About the Conference", href: "/about" },
            { name: "Venue", href: "/about/venue" },
            { name: "Who Attends", href: "/about/who-attends" },
            { name: "Why Attend", href: "/about/why-attend" },
            { name: "Past Conferences", href: "/about/past-conferences" },
        ],
    },
    {
        name: "Programme",
        href: "/program",
        subItems: [
            { name: "Agenda 2026", href: "/program/agenda" },
            { name: "Themes 2026", href: "/program/themes" },
            { name: "Session Formats", href: "/program/session-formats" },
            { name: "Ministerial Round Table", href: "/program/ministerial-round-table" },
            { name: "The Atlas Conference Debate", href: "/program/debate" },
        ],
    },

    { name: "Partners", href: "/partners" },
    { name: "Exhibition", href: "/exhibition" },
    {
        name: "Media",
        href: "/media",
        subItems: [
            { name: "Media Gallery", href: "/media/gallery" },
            { name: "Press Releases", href: "/media/press" },
            { name: "Media Partners", href: "/media/partners" },
        ],
    },
    { name: "News Portal", href: "/news" },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    const handleDropdownEnter = (name: string) => {
        setOpenDropdown(name);
    };

    const handleDropdownLeave = () => {
        setOpenDropdown(null);
    };

    const toggleMobileDropdown = (name: string) => {
        setMobileOpenDropdown(mobileOpenDropdown === name ? null : name);
    };

    return (
        <nav className="sticky top-0 z-50 w-full bg-white shadow-sm font-heading">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-20 items-center justify-between">
                    <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2">
                        {/* Logo Placeholder if needed */}
                        Atlas Conference
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex md:items-center md:space-x-6">
                        {navItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative group"
                                onMouseEnter={() => item.subItems && handleDropdownEnter(item.name)}
                                onMouseLeave={handleDropdownLeave}
                            >
                                <Link
                                    href={item.href}
                                    className={`text-sm transition-colors hover:text-primary py-8 ${pathname === item.href || (item.subItems && item.subItems.some(sub => pathname === sub.href))
                                        ? "text-primary font-bold"
                                        : "text-gray-600 font-medium"
                                        } flex items-center gap-1`}
                                >
                                    {item.name}
                                    {item.subItems && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${openDropdown === item.name ? "rotate-180" : ""}`}>
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    )}
                                </Link>

                                {/* Dropdown Menu */}
                                {item.subItems && (
                                    <div
                                        className={`absolute left-0 top-full w-56 bg-white shadow-2xl rounded-b-xl border-t-4 border-primary overflow-hidden transition-all duration-300 ease-out origin-top ${openDropdown === item.name ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
                                            }`}
                                    >
                                        <div className="py-2">
                                            {item.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem.href}
                                                    href={subItem.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <Link
                            href="/register"
                            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-white shadow transition-colors hover:bg-opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ml-4"
                        >
                            Register
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-gray-600 hover:text-primary"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="lg:hidden border-t max-h-[80vh] overflow-y-auto">
                    <div className="container mx-auto px-4 py-4 grid gap-1 bg-white">
                        {navItems.map((item) => (
                            <div key={item.name} className="border-b border-gray-100 last:border-0 pb-2 mb-2 last:mb-0 last:pb-0">
                                {item.subItems ? (
                                    <>
                                        <button
                                            onClick={() => toggleMobileDropdown(item.name)}
                                            className="w-full flex items-center justify-between font-medium text-gray-900 px-2 py-2 hover:bg-gray-50 rounded-lg transition-colors"
                                        >
                                            {item.name}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${mobileOpenDropdown === item.name ? "rotate-180" : ""}`}>
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </button>
                                        {mobileOpenDropdown === item.name && (
                                            <div className="pl-4 border-l-2 border-gray-100 ml-2 mt-1 space-y-1 animate-in slide-in-from-top-1 duration-200">
                                                {item.subItems.map(sub => (
                                                    <Link
                                                        key={sub.href}
                                                        href={sub.href}
                                                        className={`block py-2 text-sm ${pathname === sub.href ? "text-primary font-medium" : "text-gray-600"} hover:text-primary transition-colors`}
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`block py-2 px-2 text-base font-medium ${pathname === item.href ? "text-primary" : "text-gray-600"} hover:text-primary transition-colors`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="pt-4 mt-2 border-t">
                            <Link
                                href="/register"
                                className="flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-white shadow transition-colors hover:bg-opacity-90 w-full"
                                onClick={() => setIsOpen(false)}
                            >
                                Register Now
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
