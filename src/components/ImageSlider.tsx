"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSliderProps {
    images: string[];
    interval?: number;
}

export default function ImageSlider({ images, interval = 5000 }: ImageSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    if (!images || images.length === 0) {
        return <div className="h-full w-full bg-gray-200 flex items-center justify-center">No images available</div>;
    }

    return (
        <div className="relative h-full w-full group">
            <div className="relative h-full w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    fill
                    className="object-cover transition-opacity duration-500"
                    priority={currentIndex === 0}
                />
            </div>

            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-colors">
                <ChevronLeft onClick={goToPrevious} size={30} />
            </div>

            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-colors">
                <ChevronRight onClick={goToNext} size={30} />
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? 'text-white' : 'text-white/50'
                            }`}
                    >
                        <div className={`h-2 w-2 rounded-full ${currentIndex === slideIndex ? 'bg-white' : 'bg-white/50'}`}></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
