"use client";

import { useState } from "react";

type FilterProps = {
    activeDay: string;
    setActiveDay: (day: string) => void;
};

export default function ScheduleFilter({ activeDay, setActiveDay }: FilterProps) {
    const days = ["Wednesday, June 3", "Thursday, June 4", "Friday, June 5"];

    return (
        <div className="bg-white shadow-sm border-b sticky top-20 z-40">
            <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Day Tabs */}
                    <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-full md:w-auto overflow-x-auto">
                        {days.map((day) => (
                            <button
                                key={day}
                                onClick={() => setActiveDay(day)}
                                className={`px-4 md:px-6 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${activeDay === day
                                    ? "bg-white text-primary shadow-sm"
                                    : "text-gray-500 hover:text-gray-900"
                                    }`}
                            >
                                {day}
                            </button>
                        ))}
                    </div>

                    {/* Filters */}
                    <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                        <select className="flex-1 sm:w-auto px-4 py-2 border rounded text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50">
                            <option>All Tracks</option>
                            <option>Policy & Strategy</option>
                            <option>Teacher Training</option>
                            <option>Digital Infrastructure</option>
                        </select>

                        <select className="flex-1 sm:w-auto px-4 py-2 border rounded text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50">
                            <option>All Session Types</option>
                            <option>Keynote</option>
                            <option>Panel</option>
                            <option>Workshop</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
