"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const images = [
  "/cupcake1.jpg",
  "/cupcake2.jpg",
  "/cupcake3.jpg",
  "/cupcake4.jpg",
];

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-brown">
      {/* Background Slideshow */}
      <div className="absolute inset-0 overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
        <div className="absolute inset-0 bg-white bg-opacity-30"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 bg-pink-200 py-4 shadow-md text-center">
        <ul className="flex justify-center gap-6 md:gap-12">
          <li>
            <Link href="/" className="text-black hover:text-pink-600 text-lg md:text-xl font-semibold transition">
              HOME
            </Link>
          </li>
        </ul>
      </nav>

      {/* Content Section */}
      <div className="relative z-10 text-center p-6 sm:p-10 md:p-16 max-w-5xl bg-white bg-opacity-90 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-black">Welcome to Bindi’s Cupcakery!</h1>
        <p className="mt-4 text-base md:text-lg leading-relaxed text-brown">
          🍰 Indulge in the delightful world of <strong>homemade, vegetarian, and preservative-free desserts</strong>, crafted with love.  
          Our cloud kitchen bakery in Surat brings you the most delicious cupcakes, pastries, and custom hampers for every occasion.  
        </p>

        <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-black">Why Choose Us?</h2>
        <ul className="mt-3 text-base md:text-lg list-disc list-inside text-brown">
          <li>✨ Freshly Baked with Love</li>
          <li>🌱 100% Vegetarian, No Preservatives</li>
          <li>🎁 Custom Hampers for Special Occasions</li>
          <li>🚀 Order Seamlessly via WhatsApp</li>
          <li>💖 Aesthetic & Mouth-Watering Creations</li>
        </ul>

        <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-black">Join Our Dessert Journey!</h2>
        <p className="mt-2 text-base md:text-lg text-brown">
          Follow us on Instagram & Facebook for <strong>exclusive offers, drool-worthy dessert photos, and behind-the-scenes magic</strong>!  
        </p>

        {/* CTA Button */}
        <div className="mt-6">
          <Link href="/shop" className="px-6 py-3 bg-[#d46aa0] text-white rounded-full text-lg font-semibold shadow-md hover:bg-[#c86f99] transition transform hover:scale-105">
            Explore Our Creations 🍪
          </Link>
        </div>
      </div>
    </div>
  );
}
