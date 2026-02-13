"use client";

import { useState } from "react";
import { Ticket } from "./TicketSelection";

interface PaymentMockupProps {
    ticket: Ticket;
    onSuccess: () => void;
    onBack: () => void;
}

export default function PaymentMockup({ ticket, onSuccess, onBack }: PaymentMockupProps) {
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePay = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        // Simulate network request
        setTimeout(() => {
            setIsProcessing(false);
            onSuccess();
        }, 2000);
    };

    return (
        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm max-w-2xl mx-auto">
            <div className="mb-6 flex justify-between items-center border-b pb-4">
                <h3 className="text-2xl font-bold font-heading">Secure Payment</h3>
                <div className="flex gap-2">
                    <div className="w-8 h-5 bg-gray-200 rounded"></div>
                    <div className="w-8 h-5 bg-gray-200 rounded"></div>
                    <div className="w-8 h-5 bg-gray-200 rounded"></div>
                </div>
            </div>

            <div className="mb-8 p-4 bg-gray-50 rounded border border-gray-100 flex justify-between items-center">
                <div>
                    <div className="text-sm text-gray-500">Selected Item</div>
                    <div className="font-bold">{ticket.name} Ticket</div>
                </div>
                <div className="text-xl font-bold text-primary">{ticket.price}</div>
            </div>

            <form onSubmit={handlePay} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                    <input
                        required
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-primary focus:outline-none font-mono"
                    />
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Expiration Date</label>
                        <input
                            required
                            type="text"
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-primary focus:outline-none font-mono"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                        <input
                            required
                            type="text"
                            placeholder="123"
                            className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-primary focus:outline-none font-mono"
                        />
                    </div>
                </div>

                <div className="pt-4 flex gap-4">
                    <button
                        type="button"
                        onClick={onBack}
                        className="w-1/3 py-4 border border-gray-300 text-gray-700 font-bold rounded hover:bg-gray-50 transition-colors"
                        disabled={isProcessing}
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        className="w-2/3 py-4 bg-green-600 text-white font-bold rounded hover:bg-green-700 transition-colors flex justify-center items-center"
                        disabled={isProcessing}
                    >
                        {isProcessing ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </>
                        ) : (
                            `Pay ${ticket.price}`
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
