"use client";

import Link from "next/link";
import { useState } from "react";
import { Facebook, Linkedin } from "lucide-react";

export default function TopBar() {
    const [lang, setLang] = useState("EN");

    return (
        <div className="bg-gray-100 border-b text-xs py-2 hidden md:block font-body">
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">

                {/* Left Side: Language & Secondary Links */}
                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2 border-r border-gray-300 pr-4">
                        <button
                            className={`font-medium hover:text-primary ${lang === "EN" ? "text-primary" : "text-gray-500"}`}
                            onClick={() => setLang("EN")}
                        >
                            EN
                        </button>
                        <span className="text-gray-300">|</span>
                        <button
                            className={`font-medium hover:text-primary ${lang === "FR" ? "text-primary" : "text-gray-500"}`}
                            onClick={() => setLang("FR")}
                        >
                            FR
                        </button>
                    </div>

                    <div className="flex space-x-4 text-gray-600">
                        <Link href="/contact" className="hover:text-primary transition-colors">
                            Contact Us
                        </Link>

                    </div>
                </div>

                {/* Right Side: Social Media & External Link */}
                <div className="flex items-center space-x-4">
                    <span className="text-gray-500">Follow us:</span>
                    <div className="flex space-x-3">
                        {/* Facebook */}
                        <a href="https://www.facebook.com/share/1AXBUB8pYL/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="Facebook">
                            <Facebook className="w-3.5 h-3.5" fill="currentColor" strokeWidth={0} />
                        </a>
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/company/atlas-convention-academic-conference/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="LinkedIn">
                            <Linkedin className="w-3.5 h-3.5" fill="currentColor" strokeWidth={0} />
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}
