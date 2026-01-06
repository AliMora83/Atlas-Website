"use client";

type Session = {
    id: string;
    time: string;
    title: string;
    desc: string;
    track: string;
    room: string;
    speakers: string[];
    type: "Keynote" | "Panel" | "Workshop" | "Break";
};

const sessions: Record<string, Session[]> = {
    "Wednesday, June 3": [
        {
            id: "1",
            time: "09:00 - 10:30",
            title: "Opening Plenary: Education in the AI Era",
            desc: "Join us for the grand opening ceremony featuring keynote addresses from global leaders.",
            track: "Main Stage",
            room: "Grand Hall",
            speakers: ["Hon. Minister of Education", "Dr. Jane Goodall"],
            type: "Keynote",
        },
        {
            id: "2",
            time: "10:30 - 11:00",
            title: "Networking Coffee Break",
            desc: "",
            track: "Networking",
            room: "Exhibition Hall",
            speakers: [],
            type: "Break",
        },
        {
            id: "3",
            time: "11:00 - 12:30",
            title: "Panel: AI Policy Frameworks for Schools",
            desc: "Discussing the ethical and practical implications of AI adoption in K-12 education.",
            track: "Policy & Strategy",
            room: "Room A",
            speakers: ["Prof. Ahmed Hassan", "Sarah Johnson"],
            type: "Panel",
        },
        {
            id: "4",
            time: "11:00 - 12:30",
            title: "Workshop: Building Digital Curricula",
            desc: "A hands-on session for curriculum developers.",
            track: "Teacher Training",
            room: "Workshop Room 1",
            speakers: ["Maria Garcia"],
            type: "Workshop",
        },
    ],
    "Thursday, June 4": [
        {
            id: "5",
            time: "09:00 - 10:00",
            title: "Keynote: The Future of Work in Africa",
            desc: "Preparing the next generation for a digital economy.",
            track: "Main Stage",
            room: "Grand Hall",
            speakers: ["Tech CEO"],
            type: "Keynote",
        },
    ],
    "Friday, June 5": [
        {
            id: "6",
            time: "09:00 - 12:00",
            title: "Closing Workshop & Awards",
            desc: "Celebrating the best innovations of the conference.",
            track: "Main Stage",
            room: "Grand Hall",
            speakers: ["All Committee"],
            type: "Keynote",
        },
    ],
};

export default function ScheduleGrid({ activeDay }: { activeDay: string }) {
    const dailySessions = sessions[activeDay] || [];

    return (
        <section className="py-12 bg-gray-50 min-h-[600px]">
            <div className="container mx-auto px-4">
                {dailySessions.length === 0 ? (
                    <div className="text-center py-20 text-gray-500">
                        No sessions scheduled for this day yet.
                    </div>
                ) : (
                    <div className="space-y-6 max-w-5xl mx-auto">
                        {dailySessions.map((session) => (
                            <div
                                key={session.id}
                                className={`flex flex-col md:flex-row bg-white rounded-lg border overflow-hidden hover:shadow-md transition-shadow ${session.type === 'Break' ? 'border-gray-200 bg-gray-50' : 'border-gray-200'
                                    }`}
                            >
                                {/* Time Column */}
                                <div className="md:w-48 bg-gray-50 p-6 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100">
                                    <span className="text-lg font-bold text-gray-900">{session.time}</span>
                                    <span className="text-sm text-gray-500 mt-1">{session.type}</span>
                                </div>

                                {/* Content Column */}
                                <div className="flex-1 p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold font-heading text-primary">{session.title}</h3>
                                        {session.track !== "Main Stage" && session.track !== "Networking" && (
                                            <span className="text-xs font-semibold bg-blue-50 text-blue-600 px-2 py-1 rounded">
                                                {session.track}
                                            </span>
                                        )}
                                    </div>

                                    {session.desc && <p className="text-gray-600 mb-4">{session.desc}</p>}

                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <span className="mr-1">📍</span> {session.room}
                                        </div>
                                        {session.speakers.length > 0 && (
                                            <div className="flex items-center">
                                                <span className="mr-1">🎤</span> {session.speakers.join(", ")}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
