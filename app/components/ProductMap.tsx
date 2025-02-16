"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["/chocoballz.jpg", "/donuts.jpg", "/cupcakes.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto w-3/4 h-[600px] md:h-[700px] rounded-xl overflow-hidden shadow-xl">
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
            className="object-cover rounded-xl"
            priority
          />
        </motion.div>
      ))}
    </div>
  );
}
