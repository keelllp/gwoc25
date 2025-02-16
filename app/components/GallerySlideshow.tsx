"use client"; // Add this line at the top

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import from 'next/navigation' in Next.js 15
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiHome } from "react-icons/fi";

const images = Array.from({ length: 13 }, (_, i) => `/gallery/image${i + 1}.jpg`);

export default function GallerySlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter(); // Now this works

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="w-screen h-screen bg-pink-100 flex justify-center items-center relative">
      {/* Home Button */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-5 left-5 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition"
      >
        <FiHome size={24} className="text-pink-600" />
      </button>

      <div className="flex items-center gap-10">
        {/* Text Section */}
        <div className="w-[300px] text-left">
          <h2 className="text-3xl font-bold text-pink-700 mb-4">
            Look at Our Work! 🎂✨
          </h2>
          <p className="text-lg text-gray-600">
            Explore our delicious and beautifully crafted desserts. Swipe to see more!
          </p>
        </div>

        {/* Image Container */}
        <div className="bg-white p-3 rounded-2xl shadow-xl">
          <div className="relative w-[820px] h-[520px] overflow-hidden rounded-xl">
            {/* Image */}
            <Image
              src={images[currentIndex]}
              alt={`Gallery Image ${currentIndex + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              priority
            />
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white"
            >
              <FiChevronLeft size={40} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white"
            >
              <FiChevronRight size={40} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}