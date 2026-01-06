import PageHero from "@/components/PageHero";
import PressReleases from "@/components/PressReleases";
import MediaResources from "@/components/MediaResources";
import MediaContact from "@/components/MediaContact";

export default function MediaPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHero
                title="Press Center"
                description="Latest news, press releases, and resources for journalists and content creators covering the Atlas Conference."
                breadcrumb="Media"
                bgClass="bg-gray-50 text-gray-900"
                textClass="text-gray-600"
            />
            <PressReleases />
            <MediaResources />
            <MediaContact />
        </div>
    );
}
