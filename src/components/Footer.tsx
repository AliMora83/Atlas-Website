import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-100 border-t pt-16 pb-8 font-body">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: About */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-4 text-primary">Atlas Conference</h3>
                        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                            The 10th International Conference & Exhibition on ICT for Education, Training & Skills Development.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons Placeholder */}
                            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/about" className="hover:text-primary">About Conference</Link></li>
                            <li><Link href="/program" className="hover:text-primary">Program & Agenda</Link></li>
                            <li><Link href="/speakers" className="hover:text-primary">Speakers</Link></li>
                            <li><Link href="/register" className="hover:text-primary">Registration</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex items-start">
                                <span className="font-semibold mr-2">Email:</span>
                                info@atlasconference.com
                            </li>
                            <li className="flex items-start">
                                <span className="font-semibold mr-2">Phone:</span>
                                +49 30 310 18 18-0
                            </li>
                            <li className="flex items-start">
                                <span className="font-semibold mr-2">Address:</span>
                                Long Street 32<br />
                                10625 Accra, Ghana
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Legal/Resources */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/faq" className="hover:text-primary">FAQ</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary">Terms of Use</Link></li>
                            <li><Link href="/conditions" className="hover:text-primary">General Conditions</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Atlas Conference. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-primary">Privacy</Link>
                        <Link href="/terms" className="hover:text-primary">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
