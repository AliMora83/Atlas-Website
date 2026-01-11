export type SessionType = "plenary" | "workshop" | "networking" | "break";

export interface Session {
    id: string;
    title: string;
    time: string;
    type: SessionType;
    description?: string;
    location?: string;
}

export interface DaySchedule {
    date: string;
    sessions: Session[];
}

export interface Theme {
    id: string;
    title: string;
    color: string;
}

export interface SpeakerProps {
    name: string;
    role: string;
    organization: string;
    bio: string;
    imageSrc?: string;
    colorClass: string;
}

export interface EditionProps {
    year: string;
    theme: string;
    description: string[]; // Changed to array for multiple paragraphs if needed, or keeping it flexible
    partners?: string[];
    links?: { label: string; href: string }[];
}
