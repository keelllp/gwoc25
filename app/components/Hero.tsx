"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/Logo.jpg",
    "/chocoballz.jpg",
    "/donuts.jpg",
    "/cupcakes.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-pink-50 overflow-hidden" // Removed py-16
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative  md:px-12"> {/* Added padding to container */}
        {/* Left Content */}
        <div className="w-full md:w-2/5 text-center md:text-left relative z-10 py-16 md:py-0">
          <h1 className="text-3xl md:text-4xl font-serif text-primary mb-4 leading-snug">
            Welcome to<br />
            <span className="block">BINDI'S</span>
            CUPCAKERY 🧁
          </h1>
          <button className="border-2 border-primary text-primary px-5 py-2 text-base md:text-lg rounded-full hover:bg-primary hover:text-white transition-colors">
            SHOP NOW
          </button>
        </div>

        {/* Right - Full-Width Image, Maintain Aspect Ratio */}
        <div className="w-full md:w-3/5 relative aspect-[4/3] md:aspect-[3/2] lg:aspect-[2/1]"> {/* Adjust aspect ratio as needed */}
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide}
                alt={`Slide ${index + 1}`}
                fill
                sizes="100vw"
                style={{ objectFit: "contain" }}
                priority
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

