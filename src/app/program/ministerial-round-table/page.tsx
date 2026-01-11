import React from "react";
import PageHero from "@/components/PageHero";
import ProgramSubNav from "@/components/program/ProgramSubNav";
import EditionSection from "@/components/program/EditionSection";
import { previousEditions } from "@/data/program";

// Removed local EditionSection component definition

export default function MinisterialRoundTablePage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="Ministerial Round Table"
                description="A high-level meeting for African ministers to discuss digital transformation and education policy."
                breadcrumb="Ministerial Round Table"
            />

            <ProgramSubNav />

            {/* Main Content */}
            <section className="py-16 bg-white relative overflow-hidden">
                {/* Background blobs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/4"></div>

                <div className="container mx-auto px-4 max-w-4xl relative z-10">

                    {/* Introduction */}
                    <div className="mb-16 text-center">
                        <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                            ⚠ Participation by Invitation Only
                        </div>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            The Ministerial Round Table (MRT) is an annual meeting of African Ministers of ICT and Education,
                            held in conjunction with the eLearning Africa conference. It provides a unique forum for high-level
                            policy dialogue and cross-border cooperation on digital education strategies.
                        </p>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">
                        Previous Editions: Communiqués & Resources
                    </h2>

                    {previousEditions.map((edition) => (
                        <EditionSection key={edition.year} {...edition} />
                    ))}

                </div>
            </section>
        </div>
    );
}
