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
        name: "Prof. Fred Olayele",
        role: "Global Economist & Strategy Advisor",
        organization: "Founder & Chairman, ECANY Capital",
        bio: "Prof. Fred Olayele is a strategic global advisor, visionary leader, and seasoned economist driving impact at the intersection of public policy, markets, and social innovation. He has served as Chief Economist and Senior Vice President at the New York City Economic Development Corporation and advised governments in Canada. A university professor with international academic roles, he holds a PhD from Lancaster University and publishes and speaks globally on economics, innovation, and inclusive development. Prof. Olayele supports social causes, serves on global advisory boards, and hosts Global Recast, engaging leaders on economic optimism and transformative policy.",
        imageSrc: "/images/keyspeaker.jpeg",
        colorClass: "bg-white border-2 border-gray-200"
    }
];
