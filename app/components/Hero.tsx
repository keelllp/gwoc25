"use client";
"use client"; 
import { motion } from "framer-motion" 
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
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="relative bg-gradient-to-r from-secondary/20 to-secondary/10 py-20"
  >

      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Left content */}
        <div className="max-w-xl z-10">
          <h1 className="text-5xl font-serif text-primary mb-6">
            Shop all
            <br />
            OUR CUTE
            <br />
            LITTLE BAKERY
          </h1>
          <button className="border-2 border-primary text-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">
            SHOP NOW
          </button>
        </div>
        
        {/* Right image */}
        <div className="absolute right-0 top-0 w-2/3 h-full">
          <Image 
            src="/Logo.jpg" 
            alt="Bindi's Cupcakery" 
            fill 
            className="object-cover"
            priority
          />
        ))}
      </div>
    </motion.div>
  )
}