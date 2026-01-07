"use client";

import Link from "next/link";

export default function StickyCTA() {
    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2 items-end">
            <Link
                href="/register"
                className="bg-primary text-white font-bold py-4 px-6 rounded-l-xl shadow-2xl hover:bg-opacity-90 transition-all transform hover:-translate-x-2 flex items-center gap-3 group"
            >
                <span className="uppercase tracking-widest text-sm">Register Here</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                </svg>
            </Link>

            <button
                onClick={() => {
                    if (navigator.share) {
                        navigator.share({
                            title: 'Atlas Conference 2026',
                            text: 'Join us at the Atlas Conference 2026 in Accra, Ghana!',
                            url: window.location.href,
                        });
                    } else {
                        // Fallback copy to clipboard
                        navigator.clipboard.writeText(window.location.href);
                        alert("Link copied to clipboard!");
                    }
                }}
                className="bg-secondary text-gray-900 font-bold py-4 px-6 rounded-l-xl shadow-2xl hover:bg-opacity-90 transition-all transform hover:-translate-x-2 flex items-center gap-3 group"
            >
                <span className="uppercase tracking-widest text-sm">Share This Event</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
            </button>
        </div>
    );
}
