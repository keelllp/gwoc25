"use client"; 
import Image from "next/image"
import { motion } from "framer-motion"

const categories = [
  { name: "NEW ARRIVALS", image: "/placeholder.svg?height=200&width=200" },
  { name: "BEST SELLERS", image: "/placeholder.svg?height=200&width=200" },
  { name: "SEASONAL", image: "/placeholder.svg?height=200&width=200" },
  { name: "DISCOUNTS", image: "/placeholder.svg?height=200&width=200" },
]

export default function OurCreations() {
  return (
    <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="py-4 bg-cream"
  >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-primary text-center mb-12">OUR CREATIONS</h2>
        <div className="grid grid-cols-4 gap-6 mb-8">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              <div className="relative w-full aspect-square mb-4">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-primary font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="border-2 border-primary text-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">
            SHOP ALL CREATIONS
          </button>
        </div>
      </div>
    </motion.section>
  )
}

