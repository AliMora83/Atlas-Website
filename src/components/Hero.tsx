import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-[600px] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Placeholder for actual image - using a dark gradient for now per "dummy" spec instructions */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40 z-10" />
                {/* In a real scenario, we'd stick an Image component here.
             For now, just a dark bg is robust enough to start.
          */}
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <h1 className="mb-4 leading-tight">
                    19th Atlas Conference<br />2026
                </h1>
                <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto text-gray-200">
                    Shaping the Future of Digital Education Across Africa
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <div className="flex items-center text-secondary font-medium">
                        <span className="mr-2">📅</span> June 3-5, 2026
                    </div>
                    <div className="hidden sm:block text-gray-400">|</div>
                    <div className="flex items-center text-secondary font-medium">
                        <span className="mr-2">📍</span> Accra, Ghana
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/register"
                        className="btn-primary min-w-[180px]"
                    >
                        Register Now
                    </Link>
                    <Link
                        href="/program"
                        className="btn-white min-w-[180px]"
                    >
                        View Agenda
                    </Link>
                </div>
            </div>
        </section>
    );
}
