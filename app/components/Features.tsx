"use client"; 
import { motion } from "framer-motion"
import { Leaf, Cake, ShieldCheck } from "lucide-react"
import "./Features.css"

export default function Features() {
  const features = [
    { icon: Leaf, title: "Vegetarian", description: "All our products are 100% vegetarian" },
    { icon: Cake, title: "Homemade", description: "Crafted with love in our cloud kitchen" },
    { icon: ShieldCheck, title: "Preservative-Free", description: "No artificial preservatives used" },
  ]

  return (
    <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="features"
   
  >
      <div className="container">
        <h2 className="section-title">Our Promise</h2>features
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <feature.icon className="feature-icon" />
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

