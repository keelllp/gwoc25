"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["/chocoballz.jpg", "/donuts.jpg", "/cupcakes.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const yImage = useTransform(scrollYProgress, [0, 1], [200, 0]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden bg-cover bg-center min-h-[120vh] flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/backgroundhome.jpg')" }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Handwritten Signature Effect - Moved Inside the Main Content */}
      <motion.div
        className="text-pink-200 text-2xl italic font-bold z-20 mt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 40 }}
        transition={{ duration: 1.5 }}
      >
        Baked with Love ❤️ - Bindi's Cupcakery
      </motion.div>

      {/* Hero Section */}
      <motion.div
        style={{ y: yText }}
        className="relative flex flex-col items-center justify-center text-center py-40 z-20"
      >
        <h1 className="text-6xl font-serif text-white mb-6 drop-shadow-lg">
          Welcome to<br />
          BINDI'S<br />
          CUPCAKERY 
        </h1>
        
      </motion.div>

      {/* Slideshow - Increased Height */}
      <motion.div
        style={{ y: yImage }}
        className="relative mx-auto w-3/4 h-[600px] md:h-[700px] rounded-xl overflow-hidden shadow-xl z-10"
      >
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
      </motion.div>

      {/* Falling Sprinkles Background Effect */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-pink-400 rounded-full"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            animate={{ y: [0, 50, 100], opacity: [1, 1, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: Math.random() * 3 }}
          />
        ))}
      </div>
    </div>
  );
}
