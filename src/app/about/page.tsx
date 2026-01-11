import Link from "next/link";
import PageHero from "@/components/PageHero";
import AboutSubNav from "@/components/AboutSubNav";

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="About"
                description="Atlas Conference is the premier gathering for education technology leaders, shaping the future of digital learning across the African continent."
                breadcrumb="About"
            />

            <AboutSubNav />

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col gap-16 relative">

                    {/* Section 1: Page Heading */}
                    <section className="pt-8">
                        <h1 className="text-5xl font-bold font-heading text-primary mb-4">About</h1>
                        <div className="w-20 h-1.5 bg-secondary rounded-full"></div>
                    </section>

                    {/* Section 2: Main Content - Atlas Conference Overview */}
                    <section className="relative">
                        <div className="space-y-6 max-w-4xl">
                            <ul className="space-y-6 text-lg text-gray-700 leading-relaxed font-body">
                                <li className="flex gap-4">
                                    <span className="text-secondary font-bold shrink-0 text-2xl">→</span>
                                    <span>
                                        Atlas Conference was founded in <strong>2005</strong> and has taken place in <strong>Addis Ababa</strong> in 2006, in <strong>Nairobi</strong> in 2007, in <strong>Accra</strong> in 2008, in <strong>Dakar</strong> in 2009, in <strong>Lusaka</strong> in 2010, in <strong>Dar es Salaam</strong> in 2011, in <strong>Cotonou</strong> in 2012, in <strong>Windhoek</strong> in 2013, in <strong>Kampala</strong> in 2014, in <strong>Addis Ababa</strong> in 2015, in <strong>Cairo</strong> in 2016, in <strong>Port Louis</strong> in 2017, in <strong>Kigali</strong> in 2018, in <strong>Abidjan</strong> in 2019, a host of virtual events in 2020/2021, in <strong>Kigali</strong> in 2022, in <strong>Dakar</strong> in 2023, in <strong>Kigali</strong> in 2024, and in <strong>Dar es Salaam</strong> in 2025.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-secondary font-bold shrink-0 text-2xl">→</span>
                                    <span>
                                        Over the past <strong>20 years</strong>, Atlas Conference has hosted over <strong>23,000 participants</strong> from <strong>100+ countries</strong> around the world, with over <strong>80% coming from the African continent</strong>. More than <strong>4,700 speakers</strong> have addressed the conference about every aspect of <strong>digital learning, training and skills development</strong>.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-secondary font-bold shrink-0 text-2xl">→</span>
                                    <span>
                                        The conference is held in <strong>ENGLISH</strong> and <strong>FRENCH</strong>.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-secondary font-bold shrink-0 text-2xl">→</span>
                                    <span>
                                        The <strong>PROGRAMME</strong> includes core dialogues, discovery demos, knowledge exchange sessions, knowledge factories, panel discussions, panel talks, plenary sessions, pre-conference events, one-on-one bilateral meetings and boardroom discussions on specific topics and informal networking opportunities in which practitioners share their experiences, ideas, new information and perspectives.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-secondary font-bold shrink-0 text-2xl">→</span>
                                    <span>
                                        In the <strong>EXHIBITION AREA</strong>, leading international eLearning manufacturers, suppliers and service providers present their latest products and services. Most participants see the exhibition as an important meeting point for professional interaction and networking within the conference.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-secondary font-bold shrink-0 text-2xl">→</span>
                                    <span>
                                        <strong>WORKSHOPS</strong>, conducted by leading experts and practitioners, precede the event. These small, intensive sessions offer attendees a unique opportunity to acquire new skills and learn about the latest developments.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-secondary font-bold shrink-0 text-2xl">→</span>
                                    <span>
                                        Atlas Conference is the venue for the annual <strong>MINISTERIAL ROUND TABLE</strong>, an annual meeting of African ICT and Education ministers, who take part in a day-long discussion of key issues affecting education, training, skills and technology before the official opening of the main conference.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </section>



                    {/* Section 3: Additional Resources / Downloads */}
                    <section className="bg-gray-50 -mx-4 px-4 py-16 border-y border-gray-100 relative">
                        <div className="max-w-4xl">
                            <h2 className="text-3xl font-bold font-heading text-primary mb-8">More information about Atlas Conference</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { name: "Atlas Conference Fact Sheet", href: "#/resources/factsheet.pdf" },
                                    { name: "Atlas Conference Network & Reach", href: "#/resources/network-reach.pdf" },
                                    { name: "Atlas Conference Executive Summary", href: "#/resources/executive-summary.pdf" },
                                    { name: "Atlas Conference Strategic Overview", href: "#/resources/strategic-overview.pdf" }
                                ].map((resource) => (
                                    <a
                                        key={resource.name}
                                        href={resource.href}
                                        className="flex items-center gap-4 bg-white p-6 rounded-xl border-l-4 border-accent shadow-sm hover:shadow-md transition-all group"
                                    >
                                        <div className="p-3 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                <polyline points="14 2 14 8 20 8"></polyline>
                                                <line x1="12" y1="18" x2="12" y2="12"></line>
                                                <polyline points="9 15 12 12 15 15"></polyline>
                                            </svg>
                                        </div>
                                        <span className="font-bold text-gray-700 group-hover:text-accent transition-colors underline underline-offset-4 decoration-accent/20 group-hover:decoration-accent">
                                            {resource.name}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Testimonial / Social Proof Section */}
                    <section className="py-16 relative overflow-hidden rounded-3xl bg-secondary/5 border-2 border-secondary/20">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 -m-8 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute bottom-0 left-0 -m-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>

                        <div className="max-w-4xl mx-auto px-8 text-center relative">
                            <svg className="w-12 h-12 text-secondary mb-8 mx-auto opacity-50" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V4H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.017 21L2.017 18C2.017 16.8954 2.91243 16 4.017 16H7.017C7.56928 16 8.017 15.5523 8.017 15V9C8.017 8.44772 7.56928 8 7.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56928 13 2.017 13H0.017V4H10.017V15C10.017 18.3137 7.33072 21 4.017 21H2.017Z" />
                            </svg>

                            <blockquote className="space-y-8">
                                <div>
                                    <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed italic">
                                        "After being absent for over nine consecutive years, attending the conference felt like a rebirth. I left with renewed energy and a firm resolve never to miss it again. The experience was enlightening and rewarding in every way."
                                    </p>
                                    <footer className="mt-6">
                                        <cite className="not-italic">
                                            <span className="block font-bold text-lg text-primary">— Lumai Mubanga</span>
                                            <span className="text-gray-500 font-medium italic">Nchanga Secondary Trust School</span>
                                        </cite>
                                    </footer>
                                </div>

                                <div className="pt-8 border-t border-secondary/20">
                                    <p className="text-xl text-gray-700 leading-relaxed">
                                        "It was an informative, engaging, and inspiring experience, filled with opportunities for networking and collaboration. My team left Atlas Conference with pages of notes and fresh ideas on how we can strengthen and improve our innovation."
                                    </p>
                                    <footer className="mt-4">
                                        <cite className="not-italic">
                                            <span className="block font-bold text-gray-900">— Sarah Boateng</span>
                                            <span className="text-gray-500 font-medium italic">Director of Innovation, African Tech Hub</span>
                                        </cite>
                                    </footer>
                                </div>
                            </blockquote>
                        </div>
                    </section>


                </div>
            </div>
        </div>
    );
}
