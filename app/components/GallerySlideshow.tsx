"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = Array.from({ length: 13 }, (_, i) => `/gallery/image${i + 1}.jpg`);

export default function GallerySlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="w-screen h-screen bg-pink-100 flex justify-center items-center">
      <div className="relative w-full h-full">
        {/* Image */}
        <Image
          src={images[currentIndex]}
          alt={`Gallery Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
          priority
        />
        {/* Navigation Buttons */}
        <button onClick={prevSlide} className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white">
          <FiChevronLeft size={40} />
        </button>
        <button onClick={nextSlide} className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white">
          <FiChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}
