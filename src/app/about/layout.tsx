import AboutSubNav from "@/components/AboutSubNav";
import StickyCTA from "@/components/StickyCTA";

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative min-h-screen bg-white">
            <StickyCTA />
            <div className="w-full">
                {children}
            </div>
            {/* We will place AboutSubNav inside the individual pages to ensure it's after the Hero, 
                but we could also place it here if we want it globally. 
                However, children often starts with a Hero which should be full width. 
            */}
        </div>
    );
}
