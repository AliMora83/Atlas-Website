import Link from "next/link";
import { Facebook, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-100 border-t pt-16 pb-8 font-body">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: About */}
                    <div>
                        <h3 className="text-xl font-bold font-heading mb-4 text-primary">Atlas Global Academic Conference</h3>
                        <p className="text-base text-gray-800 mb-6 leading-relaxed">
                            The 10th International Convention & Exhibition on ICT for Education, Training & Skills Development.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/share/1AXBUB8pYL/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-primary hover:text-white transition-all">
                                <Facebook className="w-5 h-5" fill="currentColor" strokeWidth={0} />
                            </a>
                            <a href="https://www.linkedin.com/company/atlas-convention-academic-conference/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-primary hover:text-white transition-all">
                                <Linkedin className="w-5 h-5" fill="currentColor" strokeWidth={0} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold font-heading mb-4 text-gray-900">Quick Links</h3>
                        <ul className="space-y-2 text-base text-gray-800">
                            <li><Link href="/about" className="hover:text-primary hover:font-semibold transition-all">About Convention</Link></li>
                            <li><Link href="/program" className="hover:text-primary hover:font-semibold transition-all">Program & Agenda</Link></li>
                            <li><Link href="/partners" className="hover:text-primary hover:font-semibold transition-all">Partners</Link></li>
                            <li><Link href="/exhibition" className="hover:text-primary hover:font-semibold transition-all">Exhibition</Link></li>
                            <li><Link href="/contact" className="hover:text-primary hover:font-semibold transition-all">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold font-heading mb-4 text-gray-900">Contact Us</h3>
                        <ul className="space-y-3 text-base text-gray-800">
                            <li className="flex items-start">
                                <span className="font-semibold mr-2">Email:</span>
                                info@atlasconvention.com
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
                        <h3 className="text-xl font-bold font-heading mb-4 text-gray-900">Resources</h3>
                        <ul className="space-y-2 text-base text-gray-800">
                            <li><Link href="/faq" className="hover:text-primary hover:font-semibold transition-all">FAQ</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary hover:font-semibold transition-all">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary hover:font-semibold transition-all">Terms of Use</Link></li>
                            <li><Link href="/conditions" className="hover:text-primary hover:font-semibold transition-all">General Conditions</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-base text-gray-700">
                    <p>&copy; {new Date().getFullYear()} Atlas Global Academic Conference. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-primary hover:font-semibold transition-all">Privacy</Link>
                        <Link href="/terms" className="hover:text-primary hover:font-semibold transition-all">Terms</Link>
                    </div>
                </div>
            </div>
        </footer >
    );
}
