import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-[800px] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Cape Town Background Image */}
                <Image
                    src="/images/CapeTown-i.png"
                    alt="Cape Town"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark gradient overlay for text readability */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/30 z-10" /> */}
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
                    ATLAS Global Academic Conference:<br />A transdisciplinary global Research & Development platform
                </h2>
                <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto text-gray-200">
                    converging academia, industry, commerce, governments and development partners
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <div className="flex items-center text-white font-medium">
                        Regional Series | Cape Town, South Africa | 7–8 September 2026
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Link
                        href="/register"
                        className="btn-primary min-w-[180px]"
                    >
                        Register Now
                    </Link>
                    <Link
                        href="/program"
                        className="btn-white min-w-[180px]"
                    >
                        View Agenda
                    </Link>
                </div>
                <p className="text-xl md:text-2xl font-light mt-5 mb-8 max-w-3xl mx-auto text-gray-200">
                    <span className="font-bold">Theme:</span><br /> From Ideas to Impact: Translating Knowledge into Inclusive Growth
                </p>
            </div>
        </section>
    );
}
