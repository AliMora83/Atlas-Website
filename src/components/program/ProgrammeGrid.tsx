import React from "react";
import ProgrammeCard, { SessionType } from "./ProgrammeCard";

type Session = {
    id: string;
    title: string;
    time: string;
    type: SessionType;
    description?: string;
    location?: string;
};

type DaySchedule = {
    date: string;
    sessions: Session[];
};

const dummySchedule: DaySchedule[] = [
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

export default function ProgrammeGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dummySchedule.map((day) => (
                <div key={day.date} className="flex flex-col space-y-4">
                    <div className="bg-primary text-white p-3 rounded-t-lg text-center font-bold sticky top-20 z-10 shadow-md">
                        {day.date}
                    </div>
                    <div className="space-y-3">
                        {day.sessions.map((session) => (
                            <ProgrammeCard
                                key={session.id}
                                title={session.title}
                                time={session.time}
                                type={session.type}
                                description={session.description}
                                location={session.location}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
