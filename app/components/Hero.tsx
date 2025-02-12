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
      className="relative bg-pink-50 bg-gradient-to-r from-secondary/20 to-secondary/10 py-20 overflow-hidden" // Added bg-pink-100
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Left content */}
        <div className="max-w-xl z-10 -ml-24"> {/* Added ml-16 for left margin */}
          <h1 className="text-5xl font-serif text-primary mb-6">
            Welcome to<br />
            BINDI'S<br />
            CUPCAKERY 🧁
          </h1>
          <button className="border-2 border-primary text-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">
            SHOP NOW
          </button>
        </div>
        

        {/* Right image - Slideshow Container */}
        <div className="absolute right-0 top-0 w-2/3 h-full">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className={`absolute top-0 left-0 w-full h-full ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              initial={{ opacity: index === currentSlide ? 1 : 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image
                src={slide}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}