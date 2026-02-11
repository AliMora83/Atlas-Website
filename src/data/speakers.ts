export interface FeaturedSpeaker {
    name: string;
    role: string;
    organization: string;
    bio: string;
    imageSrc: string;
    colorClass: string;
}

export const featuredSpeakers: FeaturedSpeaker[] = [
    {
        name: "Dr. Fred Olayele",
        role: "Strategic Global Advisor & Economist",
        organization: "Former Chief Economist, NYC Economic Development Corporation",
        bio: "Dr. Fred Olayele is a strategic global advisor and visionary leader driving impact at the intersection of public policy, markets, and social innovation. A seasoned economist, university professor, and development executive, he previously served as Chief Economist and Senior Vice President at the New York City Economic Development Corporation (NYCEDC), where he provided executive leadership to position New York as a global model for innovation. His diverse career spans global finance with Citigroup, advising Canadian provincial governments on FDI and economic development, and serving as a trusted executive advisor and board member to mission-driven organizations worldwide.",
        imageSrc: "/images/keyspeaker.jpeg",
        colorClass: "bg-white border-2 border-gray-200"
    }
];
