import PageHero from "@/components/PageHero";
import MediaSubNav from "@/components/MediaSubNav";
import PressReleases from "@/components/PressReleases";
import MediaResources from "@/components/MediaResources";
import MediaContact from "@/components/MediaContact";

export default function MediaPage() {
    return (
        <div className="flex flex-col bg-white">
            <PageHero
                title="Media Centre"
                description="Access press releases, media kits, and accreditation information for Atlas Global Academic Conference 2026."
            />

            <MediaSubNav />

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col gap-16 relative">
                    {/* Section 1: Page Heading */}
                    <section className="pt-8">
                        <h1 className="text-5xl font-bold font-heading text-primary mb-4">Media Center</h1>
                        <div className="w-20 h-1.5 bg-secondary rounded-full"></div>
                    </section>

                    {/* Section 2: Overview */}
                    <section className="relative">
                        <div className="space-y-6 max-w-4xl">
                            <p className="text-lg text-gray-700 leading-relaxed font-body">
                                Explore our library of high-resolution images, videos, and press releases. Whether you&apos;re a journalist, blogger, or partner, find everything you need to tell the Atlas story.emier gathering for education technology leaders across Africa.
                            </p>
                            <ul className="space-y-6 text-lg text-gray-700 leading-relaxed font-body">
                                <li className="flex gap-4">
                                    <span className="text-secondary font-bold shrink-0 text-2xl">→</span>
                                    <span>
                                        Access our <strong>Media Gallery</strong> featuring high-resolution photos and videos from current and past conferences.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-secondary font-bold shrink-0 text-2xl">→</span>
                                    <span>
                                        Download <strong>Press Releases</strong> and stay updated with the latest conference announcements.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-secondary font-bold shrink-0 text-2xl">→</span>
                                    <span>
                                        Get access to our <strong>Media Kit</strong> including logos, banners, brand guidelines, and fact sheets.
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-secondary font-bold shrink-0 text-2xl">→</span>
                                    <span>
                                        Apply for <strong>Media Accreditation</strong> to cover Atlas Global Academic Conference 2026 in Accra, Ghana.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 3: Press Releases Preview */}
                    <PressReleases />

                    {/* Section 4: Media Resources */}
                    <MediaResources />

                    {/* Section 5: Contact Information */}
                    <MediaContact />
                </div>
            </div>
        </div>
    );
}
