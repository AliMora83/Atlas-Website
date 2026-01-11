import { DaySchedule, Theme, SpeakerProps, EditionProps } from "@/types/program";

export const dummySchedule: DaySchedule[] = [
    {
        date: "Wednesday, June 3",
        sessions: [
            {
                id: "w1",
                time: "09:00 - 12:00",
                type: "workshop",
                title: "Pre-Conference Workshops",
                description: "Hands-on skills building activities for educators and tech admins.",
                location: "Workshop Rooms 1-4",
            },
            {
                id: "w2",
                time: "12:00 - 13:00",
                type: "networking",
                title: "Registration & Networking Lunch",
                location: "Grand Foyer",
            },
            {
                id: "w3",
                time: "14:00 - 15:30",
                type: "plenary",
                title: "Opening Plenary Session",
                description: "Welcome address and keynote speeches from global leaders in education.",
                location: "Main Hall",
            },
            {
                id: "w4",
                time: "16:00 - 17:30",
                type: "workshop",
                title: "Parallel Sessions 1 - 4",
                description: "Diverse tracks covering policy, infrastructure, and teacher training.",
                location: "Breakout Rooms",
            },
            {
                id: "w5",
                time: "18:00 - 20:00",
                type: "networking",
                title: "Welcome Cocktail Reception",
                location: "Poolside Terrace",
            },
        ],
    },
    {
        date: "Thursday, June 4",
        sessions: [
            {
                id: "t1",
                time: "09:00 - 10:30",
                type: "plenary",
                title: "Morning Plenary: The Future of AI",
                description: "Exploring the impact of artificial intelligence on African classrooms.",
                location: "Main Hall",
            },
            {
                id: "t2",
                time: "10:30 - 11:00",
                type: "break",
                title: "Coffee Break & Exhibition Visit",
                location: "Exhibition Hall",
            },
            {
                id: "t3",
                time: "11:00 - 12:30",
                type: "workshop",
                title: "Parallel Sessions 5 - 8",
                description: "Interactive sessions on digital curriculum development.",
                location: "Breakout Rooms",
            },
            {
                id: "t4",
                time: "12:30 - 14:00",
                type: "networking",
                title: "Networking Lunch",
                location: "Grand Foyer",
            },
            {
                id: "t5",
                time: "14:00 - 15:30",
                type: "plenary",
                title: "Ministerial Round Table",
                description: "High-level policy discussions with Ministers of Education.",
                location: "Main Hall",
            },
            {
                id: "t6",
                time: "16:00 - 17:30",
                type: "workshop",
                title: "Parallel Sessions 9 - 12",
                location: "Breakout Rooms",
            },
            {
                id: "t7",
                time: "19:00 - 22:00",
                type: "networking",
                title: "Gala Dinner",
                description: "A cultural evening celebrating African excellence.",
                location: "Grand Ballroom",
            },
        ],
    },
    {
        date: "Friday, June 5",
        sessions: [
            {
                id: "f1",
                time: "09:00 - 10:30",
                type: "plenary",
                title: "Keynote: Youth & Entrepreneurship",
                description: "Empowering the next generation of innovators.",
                location: "Main Hall",
            },
            {
                id: "f2",
                time: "10:30 - 11:00",
                type: "break",
                title: "Coffee Break",
                location: "Exhibition Hall",
            },
            {
                id: "f3",
                time: "11:00 - 12:30",
                type: "workshop",
                title: "Closing Workshops",
                description: "Final specialized sessions.",
                location: "Breakout Rooms",
            },
            {
                id: "f4",
                time: "13:00 - 14:30",
                type: "plenary",
                title: "Closing Ceremony & Awards",
                description: "Wrap-up, awards presentation, and announcement of the 2027 venue.",
                location: "Main Hall",
            },
        ],
    },
];

export const themes: Theme[] = [
    { id: "01", title: "AI & Data in Education", color: "bg-purple-600" },
    { id: "02", title: "Policy & Strategy", color: "bg-blue-600" },
    { id: "03", title: "Teacher Training & Development", color: "bg-emerald-600" },
    { id: "04", title: "Digital Infrastructure & Connectivity", color: "bg-cyan-600" },
    { id: "05", title: "Assessment & Credentials", color: "bg-indigo-600" },
    { id: "06", title: "Open Educational Resources (OER)", color: "bg-orange-500" },
    { id: "07", title: "Inclusion & Accessibility", color: "bg-pink-600" },
    { id: "08", title: "Employability & Skills", color: "bg-yellow-500" },
    { id: "09", title: "Higher Education Innovation", color: "bg-red-600" },
    { id: "10", title: "Early Childhood Education", color: "bg-teal-500" },
    { id: "11", title: "TVET & Vocational Training", color: "bg-lime-600" },
    { id: "12", title: "Research & Evidence", color: "bg-slate-600" },
];

export const speakers: SpeakerProps[] = [
    {
        name: "Dr. Amani Bello",
        role: "Minister of Education",
        organization: "Federal Republic of Nigeria",
        bio: "Dr. Amani Bello is a visionary leader in education reform. With over 20 years of experience in public policy, she has spearheaded initiatives to integrate digital literacy into the national curriculum.\n\nHer work focuses on bridging the digital divide and ensuring that every child, regardless of location, has access to quality education. She serves as the Chair of the African Education Ministers' Forum.",
        colorClass: "bg-[#D8B4A0]", // Terracotta
        imageSrc: "/api/placeholder/400/400",
    },
    {
        name: "Prof. Sarah Johnson",
        role: "Director of Innovation",
        organization: "EdTech Africa Alliance",
        bio: "Professor Johnson is a leading researcher in the field of educational technology. Her work explores the impact of AI on learning outcomes in resource-constrained environments.\n\nShe is the author of 'The Future of Learning in Africa' and a frequent keynote speaker at global conferences. She advocates for homegrown solutions to African educational challenges.",
        colorClass: "bg-[#D4A5A5]", // Dusty Rose
        imageSrc: "/api/placeholder/400/400",
    },
    {
        name: "Mr. Kwame Nkrumah",
        role: "CEO",
        organization: "Tech for Schools Ghana",
        bio: "Kwame Nkrumah is a social entrepreneur dedicated to equipping schools with affordable technology. His organization has provided solar-powered tablets to over 500 schools in rural Ghana.\n\nHe believes that technology is a tool for empowerment and works tirelessly to train teachers on how to effectively use digital tools in the classroom.",
        colorClass: "bg-[#A0C4D8]", // Light Blue
        imageSrc: "/api/placeholder/400/400",
    },
    {
        name: "Ms. Zindzi Mandela",
        role: "Youth Advocate",
        organization: "Future Leaders Foundation",
        bio: "Zindzi Mandela is a passionate advocate for youth empowerment. She founded the Future Leaders Foundation to provide mentorship and scholarship opportunities for young Africans.\n\nHer keynote will focus on the role of youth in shaping the future of education and the importance of including student voices in policy discussions.",
        colorClass: "bg-[#B4D8A0]", // Light Green
        imageSrc: "/api/placeholder/400/400",
    },
    {
        name: "Dr. Ahmed Hassan",
        role: "Chief Technology Officer",
        organization: "Pan-African University",
        bio: "Dr. Hassan drives the digital transformation strategy for one of the continent's largest university networks. He specializes in cloud infrastructure for massive open online courses (MOOCs).",
        colorClass: "bg-[#D8D4A0]", // Pale Yellow
        imageSrc: "/api/placeholder/400/400",
    },
    {
        name: "Hon. Grace Machel",
        role: "Advisor on Education",
        organization: "United Nations",
        bio: "A veteran diplomat and educator, Grace Machel advises global bodies on sustainable development goals related to education access and gender parity.",
        colorClass: "bg-[#C4A0D8]", // Lilac
        imageSrc: "/api/placeholder/400/400",
    }
];

export const previousEditions: EditionProps[] = [
    {
        year: "2025",
        theme: "Building Resilience: Education Systems for a Changing Climate",
        description: [
            "In 2025, Ministers gathered to address the critical intersection of climate change and education infrastructure.",
            "Discussions focused on greening schools and integrating climate literacy into national curricula."
        ],
        partners: ["UNESCO", "African Union", "World Bank"],
        links: [
            { label: "Communiqué (PDF / EN)", href: "#" },
            { label: "Communiqué (PDF / FR)", href: "#" },
        ]
    },
    {
        year: "2024",
        theme: "Digital Education, Skills and Human Capital: from Learning to Earning",
        description: [
            "The 2024 Ministerial Round Table focused on bridging the gap between education and employment. Ministers explored how digital skills training can be aligned with labor market needs to reduce youth unemployment.",
            "Key outcomes included a commitment to recognizing micro-credentials across borders and increasing investment in TVET institutions."
        ],
        partners: ["The Digital School", "Honor"],
        links: [
            { label: "Communiqué (PDF / EN)", href: "#" },
        ]
    },
    {
        year: "2023",
        theme: "New Model, New Capabilities, New Opportunities",
        description: [
            "Held in Dakar, Senegal, the 2023 MRT examined the post-pandemic education landscape.",
            "Participants debated the necessary infrastructure upgrades required to support hybrid learning models permanently."
        ],
        partners: ["EdTech Hub", "GIZ"],
        links: [
            { label: "Communiqué (PDF / EN)", href: "#" },
        ]
    }
];
