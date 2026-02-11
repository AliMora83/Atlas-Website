"use client";

import React, { useActionState, useEffect, useRef } from "react";
import PageHero from "@/components/PageHero";
import { Facebook, Linkedin } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

export default function ContactPage() {
    const [state, formAction, isPending] = useActionState(submitContactForm, {
        success: false,
        message: "",
        errors: {}
    });

    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.success && formRef.current) {
            formRef.current.reset();
        }
    }, [state.success]);

    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="Contact Us"
                description="Get in touch with the Atlas Global Academic Conference team. We're here to help with any questions about the event, registration, or partnerships."
            />

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-6">Send us a Message</h2>
                            <p className="text-gray-600 mb-8">
                                Fill out the form below and we&apos;ll get back to you as soon as possible.
                            </p>

                            {state.message && (
                                <div className={`mb-6 p-4 rounded-lg border ${state.success ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-800"}`}>
                                    <div className="flex items-center gap-2">
                                        {state.success ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                            </svg>
                                        )}
                                        <span className="font-semibold">{state.message}</span>
                                    </div>
                                    {state.success && <p className="text-sm mt-1">We&apos;ll get back to you within 24-48 hours.</p>}
                                </div>
                            )}

                            <form ref={formRef} action={formAction} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900"
                                            placeholder="John Doe"
                                        />
                                        {state.errors?.name && <p className="text-red-500 text-sm mt-1">{state.errors.name[0]}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900"
                                            placeholder="john@example.com"
                                        />
                                        {state.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email[0]}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Organization
                                    </label>
                                    <input
                                        type="text"
                                        id="organization"
                                        name="organization"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900"
                                        placeholder="Your organization name"
                                    />
                                    {state.errors?.organization && <p className="text-red-500 text-sm mt-1">{state.errors.organization[0]}</p>}
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select a subject</option>
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Registration Question">Registration Question</option>
                                        <option value="Speaking Opportunity">Speaking Opportunity</option>
                                        <option value="Exhibition & Sponsorship">Exhibition & Sponsorship</option>
                                        <option value="Media & Press">Media & Press</option>
                                        <option value="Partnership Opportunity">Partnership Opportunity</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {state.errors?.subject && <p className="text-red-500 text-sm mt-1">{state.errors.subject[0]}</p>}
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none text-gray-900"
                                        placeholder="Tell us how we can help you..."
                                    />
                                    {state.errors?.message && <p className="text-red-500 text-sm mt-1">{state.errors.message[0]}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className="w-full bg-primary text-white font-bold py-4 px-8 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isPending ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                            </svg>
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
                            <p className="text-gray-600 mb-8">
                                Reach out to us through any of the following channels. Our team is ready to assist you.
                            </p>

                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                                        <a href="mailto:info@atlasconference.africa" className="text-primary hover:underline">
                                            info@atlasconference.africa
                                        </a>
                                    </div>
                                </div>



                                {/* Address */}
                                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Office Address</h3>
                                        <p className="text-gray-600">
                                            149 Houghton Village, 6 Boundary Rd,<br />
                                            Houghton Estate. Johannesburg, 2198
                                        </p>
                                    </div>
                                </div>

                                {/* Office Hours */}
                                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12 6 12 12 16 14"></polyline>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Office Hours</h3>
                                        <p className="text-gray-600">
                                            Monday - Friday: 9:00 AM - 5:00 PM (GMT)<br />
                                            Saturday - Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
                                <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
                                <div className="flex gap-4">
                                    <a href="https://www.linkedin.com/company/atlas-convention-academic-conference/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors">
                                        <span className="sr-only">LinkedIn</span>
                                        <Linkedin className="w-5 h-5" fill="currentColor" strokeWidth={0} />
                                    </a>
                                    <a href="https://www.facebook.com/share/1AXBUB8pYL/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors">
                                        <span className="sr-only">Facebook</span>
                                        <Facebook className="w-5 h-5" fill="currentColor" strokeWidth={0} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 bg-gray-50 border-t">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-3">Find Us</h2>
                        <p className="text-gray-600">Visit our office in Johannesburg, South Africa</p>
                    </div>
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-[400px]">
                            <iframe
                                title="Map: 149 Houghton Village, 6 Boundary Rd, Houghton Estate. Johannesburg"
                                src="https://maps.google.com/maps?q=149%20Houghton%20Village%2C%206%20Boundary%20Rd%2C%20Houghton%20Estate.%20Johannesburg%2C%202198&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
