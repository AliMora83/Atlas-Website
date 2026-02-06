import React from "react";
import PageHero from "@/components/PageHero";
import ProgramSubNav from "@/components/program/ProgramSubNav";
import ThemeCard from "@/components/program/ThemeCard";
import { themes } from "@/data/program";

export default function ThemesPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="Core Themes 2026"
                description="Our 2026 program is built around these core themes, addressing the most critical challenges and opportunities for the industrialisation and sustainable development of Africa."
                bgClass="bg-primary text-white"
            />

            <ProgramSubNav />

            {/* Main Content */}
            <section className="py-12 bg-white min-h-[600px]">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <h2 className="text-3xl font-bold mb-4">Core Themes for 2026</h2>
                        <p className="text-gray-600 text-lg">
                            The Atlas Global Academic Conference programme is built around key pillars that address the most critical opportunities and challenges in Africa today.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {themes.map((theme) => (
                            <ThemeCard
                                key={theme.id}
                                number={theme.id}
                                title={theme.title}
                                colorClass={theme.color}
                                image={theme.image}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
