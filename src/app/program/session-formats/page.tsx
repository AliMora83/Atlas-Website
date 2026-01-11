import React from "react";
import PageHero from "@/components/PageHero";
import ProgramSubNav from "@/components/program/ProgramSubNav";
import FormatItem from "@/components/program/FormatItem";

export default function SessionFormatsPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="Session Formats"
                description="Discover the diverse range of interactive learning and networking formats available at Atlas Conference 2026."
                breadcrumb="Session Formats"
            />

            <ProgramSubNav />

            {/* Main Content */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-4">
                        <FormatItem
                            title="Discovery Demos"
                            summary="Short, high-energy demonstrations of cutting-edge edtech tools."
                            details={
                                <>
                                    <p>
                                        Discovery Demos are fast-paced, 15-minute presentations that allow participants to see new technologies in action.
                                        These sessions are perfect for getting a quick overview of potential solutions for your institution.
                                    </p>
                                    <p className="font-semibold mt-2">Key Features:</p>
                                    <ul className="list-disc pl-5">
                                        <li>Live product demonstrations</li>
                                        <li>Q&A with developers</li>
                                        <li>Focus on practical application</li>
                                    </ul>
                                </>
                            }
                        />
                        <FormatItem
                            title="Knowledge Exchange Sessions"
                            summary="Peer-to-peer sharing of best practices and implementation stories."
                            details={
                                <>
                                    <p>
                                        These sessions focus on the 'how-to' of education technology.
                                        Practitioners share their real-world experiences, successes, and challenges in implementing digital learning strategies.
                                    </p>
                                </>
                            }
                        />
                        <FormatItem
                            title="Knowledge Factories"
                            summary="Interactive workshops designed to produce a tangible output or skill."
                            details={
                                <>
                                    <p>
                                        Knowledge Factories are hands-on working sessions. Participants collaborate to create resources,
                                        draft policy recommendations, or build curriculum frameworks that they can take back to their organizations.
                                    </p>
                                </>
                            }
                        />
                        <FormatItem
                            title="Learning Café"
                            summary="Informal, small-group discussions on specific topics of interest."
                            details={
                                <>
                                    <p>
                                        The Learning Café offers a relaxed atmosphere for networking and knowledge sharing.
                                        Tables are hosted by experts who facilitate conversations on niche topics, allowing for deep dives and personal connections.
                                    </p>
                                </>
                            }
                        />
                        <FormatItem
                            title="Panel Discussions"
                            summary="Expert perspectives on critical issues facing African education."
                            details={
                                <>
                                    <p>
                                        Panels bring together diverse voices—policymakers, educators, and industry leaders—to debate and discuss
                                        the most pressing trends and challenges in the sector.
                                    </p>
                                </>
                            }
                        />
                        <FormatItem
                            title="Plenary Sessions"
                            summary="Keynote addresses and major announcements for all conference attendees."
                            details={
                                <>
                                    <p>
                                        Plenary sessions are the anchor events of the conference, featuring world-renowned speakers and visionaries.
                                        These sessions set the tone for the event and inspire collective action.
                                    </p>
                                </>
                            }
                        />
                        <FormatItem
                            title="Pre-Conference Events"
                            summary="Specialized full-day or half-day workshops held before the main conference."
                            details={
                                <>
                                    <p>
                                        Dive deep into specific subjects like 'Coding for Kids', 'AI Ethics', or 'E-Learning Standards'.
                                        These events require separate registration and offer intensive professional development opportunities.
                                    </p>
                                </>
                            }
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
