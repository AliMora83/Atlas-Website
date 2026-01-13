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
        imageSrc: "/fred-olayele.png",
        colorClass: "bg-white border-2 border-gray-200"
    },
    {
        name: "Prof. Kwame Mensah",
        role: "Director of Innovation",
        organization: "Ghana Institute of Technology",
        bio: "Professor Kwame Mensah is a pioneering computer scientist and educator who has revolutionized STEM education in West Africa. As the Director of Innovation at Ghana Institute of Technology, he leads cutting-edge research in AI-powered adaptive learning systems and has developed award-winning educational platforms used by over 500,000 students. Prof. Mensah is a TED speaker, holds 12 patents in educational technology, and serves on the advisory boards of multiple EdTech startups. His mission is to democratize access to world-class STEM education through innovative, locally-relevant digital solutions that address Africa's unique challenges.",
        imageSrc: "/fred-olayele.png",
        colorClass: "bg-white border-2 border-gray-200"
    },
    {
        name: "Ms. Fatima Al-Rashid",
        role: "Founder & CEO",
        organization: "EduConnect Africa",
        bio: "Fatima Al-Rashid is a visionary entrepreneur and social innovator who founded EduConnect Africa, the continent's fastest-growing EdTech platform connecting over 2 million learners with quality educational content. A former software engineer at Google, Fatima returned to her native Kenya to address the education gap she witnessed firsthand. Under her leadership, EduConnect has partnered with 15 Ministries of Education to deliver curriculum-aligned digital content in 12 African languages. She has been recognized as Forbes Africa's 30 Under 30, received the African Union's Innovation Award, and is a passionate advocate for girls' education and digital literacy across the continent.",
        imageSrc: "/fred-olayele.png",
        colorClass: "bg-white border-2 border-gray-200"
    }
];
