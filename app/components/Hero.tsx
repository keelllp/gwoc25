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
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Stronger Scroll Effect
  const yText = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const yImage = useTransform(scrollYProgress, [0, 1], [200, 0]);

  return (
    <div ref={ref} className="relative bg-gradient-to-b from-pink-100 to-pink-50 overflow-hidden">
      {/* Hero Section with Stronger Parallax Effect */}
      <motion.div
        style={{ y: yText }}
        className="relative flex flex-col items-center justify-center text-center py-40"
      >
        <h1 className="text-6xl font-serif text-pink-800 mb-6 drop-shadow-lg">
          Welcome to<br />
          BINDI'S<br />
          CUPCAKERY 🧁
        </h1>
        <motion.button
          className="border-2 border-pink-700 text-pink-700 px-8 py-3 rounded-full hover:bg-pink-700 hover:text-white transition-colors shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          SHOP NOW
        </motion.button>
      </motion.div>

      {/* Slideshow with Stronger Parallax */}
      <motion.div
        style={{ y: yImage }}
        className="relative mx-auto w-3/4 h-96 sm:h-[500px] md:h-[550px] rounded-xl overflow-hidden shadow-xl"
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

      {/* Aesthetic Cupcake with Rotating Circular Text and Stronger Parallax */}
      <motion.div
        style={{ y: yText }}
        className="relative mt-20 flex items-center justify-center"
      >
        {/* Rotating Text */}
        <motion.div
          className="absolute w-72 h-72"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <path
                id="circlePath"
                d="M 100, 100
                   m -85, 0
                   a 85, 85 0 1,1 170,0
                   a 85, 85 0 1,1 -170,0"
              />
            </defs>
            <text fill="#C2185B" fontSize="15" fontWeight="bold">
              <textPath href="#circlePath" startOffset="0%">
                ✨ Freshly Baked with Love • 🌱 100% Vegetarian, No Preservatives • BINDI'S CUPCAKERY • 
              </textPath>
            </text>
          </svg>
        </motion.div>

        {/* Larger Cupcake Emoji with Smooth Breathing Animation */}
        <motion.span
          className="text-[200px] text-pink-600 drop-shadow-xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          🧁
        </motion.span>
      </motion.div>
    </div>
  );
}
