import Link from "next/link";
import { Ticket } from "./TicketSelection";

interface RegistrationSuccessProps {
    ticket: Ticket;
}

export default function RegistrationSuccess({ ticket }: RegistrationSuccessProps) {
    return (
        <div className="bg-white p-12 rounded-lg border border-gray-200 shadow-sm max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl text-green-600">✓</span>
            </div>
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Registration Confirmed!</h2>
            <p className="text-lg text-gray-600 mb-8">
                Thank you for registering for the Atlas Conference. A confirmation email with your <strong>{ticket.name}</strong> ticket details has been sent to your email address.
            </p>

            <div className="bg-gray-50 p-6 rounded mb-8 text-left">
                <h4 className="font-bold text-gray-900 mb-2">Next Steps:</h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Check your inbox for the receipt.</li>
                    <li>Book your accommodation early to get the best rates.</li>
                    <li>Download the conference app (coming soon).</li>
                </ul>
            </div>

            <div className="flex justify-center gap-4">
                <Link href="/" className="px-8 py-3 bg-primary text-white font-bold rounded hover:bg-opacity-90 transition-colors">
                    Return Home
                </Link>
                <Link href="/program" className="px-8 py-3 border border-gray-300 text-gray-700 font-bold rounded hover:bg-gray-50 transition-colors">
                    View Agenda
                </Link>
            </div>
        </div>
    );
}
