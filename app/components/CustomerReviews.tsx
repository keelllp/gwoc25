"use client"; 
import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "ALEXA YOUNG, CA",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Testimonials provide a sense of what it's like to work with you or use your products. Change this text and add your own.",
  },
  {
    name: "MORGAN JAMES, NY",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "A great testimonial can boost your brand's image. Click to edit and add your own.",
  },
  {
    name: "LISA BROWN, MI",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Here customers review you and share what they had to say. Click to edit and add your own testimonials.",
  },
]

export default function CustomerReviews() {
  return (
    <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="py-16"
  >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-primary text-center mb-12">CUSTOMER REVIEWS</h2>
        <div className="grid grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-cream p-6 rounded-lg text-center">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <Image
                  src={review.image || "/placeholder.svg"}
                  alt={review.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <h3 className="text-primary font-semibold mb-4">{review.name}</h3>
              <p className="text-gray-600">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

