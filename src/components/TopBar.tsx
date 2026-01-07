"use client";

import Link from "next/link";
import { useState } from "react";

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
                        {/* Twitter/X */}
                        <a href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                            </svg>
                        </a>
                        {/* Facebook */}
                        <a href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}
