"use client";

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: React.ReactNode;
}

interface FAQCategory {
    title: string;
    items: FAQItem[];
}

const faqData: FAQCategory[] = [
    {
        title: "Host Destinations & Venues",
        items: [
            {
                question: "Where and when will the 2026 Atlas Global Academic Conference take place?",
                answer: "The 3rd Atlas Global Academic Conference is scheduled for 7-9 September 2026 in Cape Town, South Africa. The specific venue listed is the Cape Town Hotel School."
            },
            {
                question: "Is there another event associated with the Atlas Convention in 2026?",
                answer: "Yes. The Main Convention is scheduled to take place earlier that year, from 23-25 August 2026, in Victoria Falls."
            },
            {
                question: "Where was the inaugural conference held?",
                answer: "The 1st Atlas Global Academic Conference (2025) was held in Victoria Falls, Zimbabwe, at the Elephant Hills Hotel."
            },
            {
                question: "Which countries are collaborating on the 2026 conference?",
                answer: "The conference brochure lists South Africa, Zimbabwe, Zambia, Botswana, and Namibia as collaborating countries."
            }
        ]
    },
    {
        title: "Regional Series (Future Hosts)",
        items: [
            {
                question: "What is the \"Regional Series,\" and which countries will host future events?",
                answer: (
                    <>
                        The Atlas Convention has outlined a roadmap for its future locations known as the &quot;Regional Series.&quot; The upcoming host destinations are:
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><strong>2027:</strong> Mauritius</li>
                            <li><strong>2028:</strong> Egypt</li>
                            <li><strong>2029:</strong> Zanzibar</li>
                            <li><strong>2030:</strong> Ghana</li>
                        </ul>
                    </>
                )
            }
        ]
    },
    {
        title: "Themes & Subject Matter",
        items: [
            {
                question: "What is the central theme for the 2026 conference?",
                answer: "The theme is \"From Ideas to Impact: Translating Knowledge into Inclusive Growth.\" The event aims to be a multidisciplinary platform for exploring strategies to foster sustainable economic growth and innovation across Africa."
            },
            {
                question: "What specific topics is the conference interested in?",
                answer: (
                    <>
                        The 2026 call for papers invites submissions on a wide range of development topics, including:
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><strong>Trade & Economy:</strong> Regional and global trade, industrialisation, commodities, and Public-Private Partnerships.</li>
                            <li><strong>Technology:</strong> Fintech, inclusive digital transformation, AI, and the societal implications of smart cities and smart villages.</li>
                            <li><strong>Health & Society:</strong> Technology-enabled healthcare (eHealth/mHealth), public health, corporate governance, and social responsibility.</li>
                            <li><strong>Agriculture:</strong> Rural industrialisation, food security, and sustainable mining/wildlife ecosystems.</li>
                            <li><strong>Frugal Innovation:</strong> Affordable housing technologies for climate resilience in Nigeria.</li>
                            <li><strong>Fintech:</strong> The adoption of cryptocurrency by companies and the impact of bank-fintech collaborations.</li>
                            <li><strong>Education:</strong> The role of international education in shaping Africa&apos;s workforce and the efficacy of TVET programs for the green economy.</li>
                        </ul>
                    </>
                )
            },
            {
                question: "What kind of research has been presented at previous Atlas conferences?",
                answer: "The 2025 Book of Abstracts highlights diverse research topics such as Agribusines, Frugal Innovation, Fintech, and Education."
            }
        ]
    },
    {
        title: "Call for Papers & Submission Details",
        items: [
            {
                question: "What are the key submission deadlines for the 2026 Academic Conference?",
                answer: (
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Abstract Submission:</strong> Friday, 10 April 2026</li>
                        <li><strong>Notification of Decision:</strong> Friday, 15 May 2026</li>
                        <li><strong>Full Paper Submission:</strong> Friday, 31 July 2026</li>
                    </ul>
                )
            },
            {
                question: "What are the submission requirements?",
                answer: (
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Abstracts:</strong> 300-500 words outlining the theme, objectives, methodology, and expected contributions.</li>
                        <li><strong>Full Papers:</strong> 4,000-8,000 words.</li>
                        <li><strong>Case Studies:</strong> Practical project reports demonstrating real-world application are also encouraged.</li>
                    </ul>
                )
            },
            {
                question: "What is the conference fee?",
                answer: "The fee is listed as R8 500.00."
            },
            {
                question: "Where should I send my submission?",
                answer: (
                    <>
                        All submissions must be emailed to <a href="mailto:academic2026@atlasconference.global" className="text-primary hover:underline font-medium">academic2026@atlasconference.global</a>.
                    </>
                )
            }
        ]
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggleAccordion = (index: string) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-white relative overflow-hidden" id="faq">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        <HelpCircle className="w-4 h-4" />
                        <span>Got Questions?</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Everything you need to know about the Atlas Global Academic Conference.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-8">
                    {faqData.map((category, catIndex) => (
                        <div key={catIndex} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                            <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                                <h3 className="font-bold text-gray-800 text-lg">{category.title}</h3>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {category.items.map((item, itemIndex) => {
                                    const index = `${catIndex}-${itemIndex}`;
                                    const isOpen = openIndex === index;

                                    return (
                                        <div key={itemIndex} className="bg-white">
                                            <button
                                                onClick={() => toggleAccordion(index)}
                                                className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left group hover:bg-gray-50/50 transition-colors"
                                                aria-expanded={isOpen}
                                            >
                                                <span className={`font-medium text-gray-700 group-hover:text-primary transition-colors ${isOpen ? 'text-primary' : ''}`}>
                                                    {item.question}
                                                </span>
                                                <span className={`flex-shrink-0 p-1.5 rounded-full bg-gray-100 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 ${isOpen ? 'rotate-180 bg-primary/10 text-primary' : ''}`}>
                                                    <ChevronDown className="w-4 h-4" />
                                                </span>
                                            </button>
                                            <div
                                                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                            >
                                                <div className="overflow-hidden">
                                                    <div className="px-6 pb-5 pt-1 text-gray-600 leading-relaxed">
                                                        {item.answer}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
