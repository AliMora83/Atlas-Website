import Link from "next/link";
import React from "react";

interface PageHeroProps {
    title: string;
    description: string;
    breadcrumb: string;
    bgClass?: string;
    textClass?: string;
    children?: React.ReactNode;
}

export default function PageHero({
    title,
    description,
    breadcrumb,
    bgClass = "bg-primary text-white",
    textClass = "text-blue-100",
    children
}: PageHeroProps) {
    // Determine text color based on background (heuristic or explicit prop)
    const isLightBg = bgClass.includes("bg-white") || bgClass.includes("bg-gray-50");
    const breadcrumbTextClass = isLightBg ? "text-gray-900" : "text-white";
    const slashClass = isLightBg ? "text-gray-400" : "opacity-50";
    const descClass = isLightBg ? "text-gray-600" : textClass;
    const titleClass = isLightBg ? "text-primary" : "text-white";

    return (
        <section className={`${bgClass} py-20 relative overflow-hidden border-b`}>
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Optional pattern or gradient overlay could go here */}
                {!isLightBg && <div className="absolute inset-0 bg-black/10"></div>}
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                {/* Breadcrumb */}
                <div className="flex items-center justify-center space-x-2 text-sm mb-6 font-medium">
                    <Link href="/" className={`hover:opacity-80 transition-opacity ${breadcrumbTextClass.replace("text-", "text-gray-500 hover:text-")}`}>
                        Home
                    </Link>
                    <span className={slashClass}>/</span>
                    <span className={breadcrumbTextClass}>{breadcrumb}</span>
                </div>

                {/* Content */}
                <h1 className={`text-4xl md:text-5xl font-bold font-heading mb-6 ${titleClass}`}>
                    {title}
                </h1>
                <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${descClass}`}>
                    {description}
                </p>

                {/* Optional interactive elements (buttons etc) */}
                {children && <div className="mt-8 flex justify-center gap-4">{children}</div>}
            </div>
        </section>
    );
}
