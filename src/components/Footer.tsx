import Link from "next/link";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-100 border-t pt-16 pb-8 font-body">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: About */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-4 text-primary">Atlas Global Academic Conference</h3>
                        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                            The 10th International Convention & Exhibition on ICT for Education, Training & Skills Development.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-primary hover:text-white transition-all">
                                <Facebook className="w-5 h-5" fill="currentColor" strokeWidth={0} />
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-primary hover:text-white transition-all">
                                <Linkedin className="w-5 h-5" fill="currentColor" strokeWidth={0} />
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-primary hover:text-white transition-all">
                                <Twitter className="w-5 h-5" fill="currentColor" strokeWidth={0} />
                            </a>
                            <a href="#" className="group w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-primary hover:text-white transition-all">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="0"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5"
                                >
                                    <path
                                        d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="m10 15 5-3-5-3z"
                                        className="fill-white group-hover:fill-black transition-colors"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-4 text-gray-900">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/about" className="hover:text-primary">About Convention</Link></li>
                            <li><Link href="/program" className="hover:text-primary">Program & Agenda</Link></li>
                            <li><Link href="/partners" className="hover:text-primary">Partners</Link></li>
                            <li><Link href="/exhibition" className="hover:text-primary">Exhibition</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-4 text-gray-900">Contact Us</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
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
                        <h3 className="text-lg font-bold font-heading mb-4 text-gray-900">Resources</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/faq" className="hover:text-primary">FAQ</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary">Terms of Use</Link></li>
                            <li><Link href="/conditions" className="hover:text-primary">General Conditions</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Atlas Global Academic Conference. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-primary">Privacy</Link>
                        <Link href="/terms" className="hover:text-primary">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
