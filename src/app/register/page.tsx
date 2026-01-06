"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import TicketSelection, { Ticket } from "@/components/TicketSelection";
import RegistrationForm from "@/components/RegistrationForm";
import PaymentMockup from "@/components/PaymentMockup";
import RegistrationSuccess from "@/components/RegistrationSuccess";

type Step = "SELECT" | "DETAILS" | "PAYMENT" | "SUCCESS";

export default function RegisterPage() {
    const [step, setStep] = useState<Step>("SELECT");
    const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

    const handleTicketSelect = (ticket: Ticket) => {
        setSelectedTicket(ticket);
        setStep("DETAILS");
        // Scroll to top or form
        window.scrollTo({ top: 300, behavior: 'smooth' });
    };

    const handleDetailsSubmit = (data: any) => {
        setStep("PAYMENT");
        window.scrollTo({ top: 300, behavior: 'smooth' });
    };

    const handlePaymentSuccess = () => {
        setStep("SUCCESS");
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBack = () => {
        if (step === "PAYMENT") setStep("DETAILS");
        if (step === "DETAILS") {
            setStep("SELECT");
            setSelectedTicket(null);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="Secure Your Spot"
                description="Join the conversation at the 19th Atlas Conference in Accra. Choose the pass that best suits your needs."
                breadcrumb="Registration"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">

                    {/* Progress Indicator */}
                    <div className="flex justify-center mb-12">
                        <div className="flex items-center space-x-4">
                            <div className={`flex flex-col items-center ${step === 'SELECT' ? 'text-primary' : (step === 'DETAILS' || step === 'PAYMENT' || step === 'SUCCESS' ? 'text-green-600' : 'text-gray-400')}`}>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 ${step === 'SELECT' ? 'border-primary bg-primary text-white' : (step === 'DETAILS' || step === 'PAYMENT' || step === 'SUCCESS' ? 'border-green-600 bg-green-600 text-white' : 'border-gray-300')}`}>1</div>
                                <span className="text-sm mt-2 font-medium">Ticket</span>
                            </div>
                            <div className="w-16 h-1 bg-gray-200">
                                <div className={`h-full bg-green-600 transition-all ${step === 'DETAILS' || step === 'PAYMENT' || step === 'SUCCESS' ? 'w-full' : 'w-0'}`}></div>
                            </div>
                            <div className={`flex flex-col items-center ${step === 'DETAILS' ? 'text-primary' : (step === 'PAYMENT' || step === 'SUCCESS' ? 'text-green-600' : 'text-gray-400')}`}>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 ${step === 'DETAILS' ? 'border-primary bg-primary text-white' : (step === 'PAYMENT' || step === 'SUCCESS' ? 'border-green-600 bg-green-600 text-white' : 'border-gray-300')}`}>2</div>
                                <span className="text-sm mt-2 font-medium">Details</span>
                            </div>
                            <div className="w-16 h-1 bg-gray-200">
                                <div className={`h-full bg-green-600 transition-all ${step === 'PAYMENT' || step === 'SUCCESS' ? 'w-full' : 'w-0'}`}></div>
                            </div>
                            <div className={`flex flex-col items-center ${step === 'PAYMENT' ? 'text-primary' : (step === 'SUCCESS' ? 'text-green-600' : 'text-gray-400')}`}>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 ${step === 'PAYMENT' ? 'border-primary bg-primary text-white' : (step === 'SUCCESS' ? 'border-green-600 bg-green-600 text-white' : 'border-gray-300')}`}>3</div>
                                <span className="text-sm mt-2 font-medium">Payment</span>
                            </div>
                        </div>
                    </div>

                    {step === "SELECT" && (
                        <div className="mb-12">
                            <TicketSelection onSelect={handleTicketSelect} />
                        </div>
                    )}

                    {step === "DETAILS" && selectedTicket && (
                        <div className="mb-12 animated fadeIn">
                            <RegistrationForm
                                selectedTicket={selectedTicket}
                                onSubmit={handleDetailsSubmit}
                                onBack={handleBack}
                            />
                        </div>
                    )}

                    {step === "PAYMENT" && selectedTicket && (
                        <div className="mb-12 animated fadeIn">
                            <PaymentMockup
                                ticket={selectedTicket}
                                onSuccess={handlePaymentSuccess}
                                onBack={handleBack}
                            />
                        </div>
                    )}

                    {step === "SUCCESS" && selectedTicket && (
                        <div className="mb-12 animated fadeIn">
                            <RegistrationSuccess ticket={selectedTicket} />
                        </div>
                    )}

                </div>
            </section>
        </div>
    );
}
