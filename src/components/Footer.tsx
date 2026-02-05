import Link from "next/link";
import { Facebook, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative bg-[#0a1628] font-body overflow-hidden min-h-[420px]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/footer_image.png"
                    alt="Atlas Convention Venue"
                    fill
                    className="object-cover object-center"
                    quality={90}
                    priority={false}
                />
                {/* Strong dark blue gradient from left */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f3d]/95 via-[#0a1f3d]/70 via-40% to-transparent"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 relative z-10 flex items-center min-h-[350px] mt-24">
                <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-10">
                    {/* Left Section: Brand + Contact Info */}
                    <div className="flex-shrink-0">
                        <div className="flex items-start space-x-3">
                            <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                                <Image
                                    src="/images/Atlas_Convention.png"
                                    alt="Atlas Logo"
                                    width={44}
                                    height={44}
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-[32px] font-bold font-heading text-white mb-2 leading-tight">
                                    ATLAS Global Academic Conference
                                </h3>
                                <div className="space-y-1 text-white/80 text-base font-bold">
                                    <p className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        Victoria Falls, Zimbabwe
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <Phone className="w-4 h-4" />
                                        +263 772 222 222
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        info@atlasconvention.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section: 3 Columns - Auto width based on content */}
                    <div className="flex gap-4 flex-wrap">
                        {/* Column 1: General Enquiries */}
                        <div className="rounded-lg p-3">
                            <h3 className="text-base font-semibold font-heading mb-2 text-white">
                                General Enquiries
                            </h3>
                            <ul className="space-y-1.5 text-base text-white/90 leading-tight">
                                <li>
                                    <Link href="/about" className="hover:text-white hover:underline transition-all">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:text-white hover:underline transition-all">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/privacy" className="hover:text-white hover:underline transition-all">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2: Partnerships */}
                        <div className="rounded-lg p-3">
                            <h3 className="text-base font-semibold font-heading mb-2 text-white">
                                Partnerships
                            </h3>
                            <ul className="space-y-1.5 text-base text-white/90 leading-tight">
                                <li>
                                    <Link href="/partners#opportunities" className="hover:text-white hover:underline transition-all">
                                        Partnership Opportunities
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/partners#benefits" className="hover:text-white hover:underline transition-all">
                                        Partnership Benefits
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/partners#packages" className="hover:text-white hover:underline transition-all">
                                        Partnership Packages
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Exhibitions */}
                        <div className="rounded-lg p-3">
                            <h3 className="text-base font-semibold font-heading mb-2 text-white">
                                Exhibitions
                            </h3>
                            <ul className="space-y-1.5 text-base text-white/90 leading-tight">
                                <li>
                                    <Link href="/exhibition#opportunities" className="hover:text-white hover:underline transition-all">
                                        Exhibition Opportunities
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/exhibition#benefits" className="hover:text-white hover:underline transition-all">
                                        Exhibition Benefits
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar - Positioned at absolute bottom */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 py-4 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/60 bg-[#0a1f3d]/90 backdrop-blur-sm">
                <p className="mb-3 md:mb-0">
                    ATLAS CONVENTION 2025 | Copyright © Atlas Convention 2025. All rights reserved
                </p>
                <div className="flex items-center space-x-3">
                    <Link href="/terms" className="hover:text-white transition-all">
                        Terms of Use
                    </Link>
                    <span>|</span>
                    <Link href="/privacy" className="hover:text-white transition-all">
                        Privacy
                    </Link>
                    <span>|</span>
                    <Link href="/sitemap" className="hover:text-white transition-all">
                        Sitemap
                    </Link>
                    <span className="mx-1">|</span>
                    {/* Social Icons */}
                    <div className="flex space-x-2">
                        <a
                            href="https://www.facebook.com/share/1AXBUB8pYL/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 flex items-center justify-center rounded-full bg-white/15 text-white hover:bg-white hover:text-[#0a1628] transition-all"
                        >
                            <Facebook className="w-3.5 h-3.5" fill="currentColor" strokeWidth={0} />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/atlas-convention-academic-conference/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 flex items-center justify-center rounded-full bg-white/15 text-white hover:bg-white hover:text-[#0a1628] transition-all"
                        >
                            <Linkedin className="w-3.5 h-3.5" fill="currentColor" strokeWidth={0} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
