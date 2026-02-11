import Link from "next/link";
import { Mail, MapPin, Facebook, Linkedin } from "lucide-react";
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
                            <div className="w-18 h-18 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                                <Image
                                    src="/images/atlas_grey.png"
                                    alt="Atlas Logo"
                                    width={80}
                                    height={80}
                                    className="object-contain" // removed rounded-lg as the container has it
                                />
                            </div>
                            <div>
                                <h3 className="text-[32px] font-bold font-heading text-white mb-2 leading-tight">
                                    ATLAS Global Academic Conference
                                </h3>
                                <div className="space-y-1 text-white/80 text-base font-bold">
                                    <p className="flex items-start gap-2">
                                        <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                                        <span>
                                            149 Houghton Village, 6 Boundary Rd,<br />
                                            Houghton Estate. Johannesburg, 2198
                                        </span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        info@atlasconference.africa
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section: 3 Columns - Auto width based on content */}

                </div>
            </div>

            {/* Bottom Bar - Positioned at absolute bottom */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 py-4 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/60 bg-[#0a1f3d]/90 backdrop-blur-sm">
                <p className="mb-3 md:mb-0">
                    ATLAS Global Academic Conference | Copyright © 2026. All rights reserved.
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
