"use client";
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    "/Logo.jpg",
    "/chocoballz.jpg",
    "/brownietub1.jpg",
    "/coconuttruffle.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-pink-100 h-[500px] px-20"> {/* Reduced height and added horizontal padding */}
      {/* Container with max-width */}
      <div className="absolute inset-0 max-w-5xl mx-auto px-4"> {/* Added max-width constraint */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image 
              src={slide}
              alt={`Slide ${index + 1}`}
              fill
              className="object-contain" // Changed to contain to maintain aspect ratio
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-primary" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}