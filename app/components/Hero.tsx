"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [150, 0]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden bg-cover bg-center min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/backgroundhome.jpg')" }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Welcome Text - Now Centered */}
      <motion.div
        style={{ y: yText }}
        className="relative flex flex-col items-center justify-center text-center z-20 flex-grow"
      >
        <h1 className="text-7xl font-serif text-white mb-6 drop-shadow-lg">
          Welcome to<br />
          BINDI'S<br />
          CUPCAKERY
        </h1>
      </motion.div>

      {/* Falling Sprinkles Background Effect */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-pink-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, 50, 100], opacity: [1, 1, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: Math.random() * 3 }}
          />
        ))}
      </div>
    </div>
  );
}
