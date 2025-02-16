"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Alexa Young, CA",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Absolutely love the cupcakes! The taste and presentation were flawless. Highly recommended!",
  },
  {
    name: "Morgan James, NY",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "These are hands-down the best cupcakes I’ve ever had! The flavors are incredible and unique.",
  },
  {
    name: "Lisa Brown, MI",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The customer service was fantastic, and the cupcakes were heavenly. Can’t wait to order again!",
  },
];

export default function CustomerReviews() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 relative bg-gradient-to-br from-[#fde2e4] to-[#fdf3f7] overflow-hidden"
    >
      {/* Floating Stars for Aesthetic */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <Image src="/floating-stars.png" alt="Floating Stars" fill className="object-cover" />
      </div>

      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-[#6d3d6d] text-center mb-12 tracking-wide">
          What Our Customers Say
        </h2>

        {/* Review Carousel */}
        <motion.div 
          className="flex space-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          whileTap={{ cursor: "grabbing" }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="min-w-[320px] bg-white/80 backdrop-blur-lg shadow-lg p-8 rounded-2xl snap-center border border-white/50 relative transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              {/* Customer Image */}
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <Image
                  src={review.image}
                  alt={review.name}
                  fill
                  className="rounded-full object-cover border-4 border-[#d46aa0]"
                />
              </div>

              {/* Star Ratings */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <motion.div 
                    key={i}
                    className="w-6 h-6"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 0.6, delay: i * 0.1, repeat: Infinity, repeatType: "mirror" }}
                  >
                    <Star className="w-full h-full text-yellow-500 fill-yellow-500 drop-shadow-md" />
                  </motion.div>
                ))}
              </div>

              {/* Review Content */}
              <h3 className="text-[#6d3d6d] font-semibold text-lg text-center mb-3">{review.name}</h3>
              <p className="text-gray-700 text-center text-sm">{review.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
