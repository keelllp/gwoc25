"use client"; 
import { motion } from "framer-motion"
import "./CustomHampers.css"

export default function CustomHampers() {
  return (
    <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    id="custom-hampers"
     className="custom-hampers"
   
  >
      <div className="container">
        <h2 className="section-title">Customizable Dessert Hampers</h2>
        <p className="hampers-description">
          Create the perfect gift for any occasion - birthdays, weddings, festivals, and more!
        </p>
        <button className="btn btn-primary">Create Your Hamper</button>
      </div>
    </motion.section>
  )
}

