"use client"; 
import { motion } from "framer-motion" 
import Image from "next/image"

export default function Mission() {
  return (  
    <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="py-16"
    >
  
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-serif text-primary mb-6">OUR MISSION</h2>
            <p className="text-gray-600 mb-8">
              At Bindi's Cupcakery, we believe in creating moments of joy through our delicious, homemade treats. Every
              creation is crafted with love, using only the finest vegetarian ingredients, ensuring that each bite is as
              special as your celebration.
            </p>
            <button className="border-2 border-primary text-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">
              CONTACT US
            </button>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Macarons"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Cupcakes"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </motion.section>

  )
}

