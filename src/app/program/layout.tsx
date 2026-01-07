import StickyCTA from "@/components/StickyCTA";

export default function ProgramLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative min-h-screen bg-slate-50">
            <StickyCTA />
            <div className="w-full">
                {children}
            </div>
        </div>
    );
}
