"use client"; 
import { motion } from "framer-motion" 
import Link from "next/link"
import { ShoppingCart, User } from "lucide-react"

export default function Navigation() {
  return (
    <>
    <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="bg-white py-2 px-4 border-b"
    >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <Link href="#" className="text-gray-600 hover:text-primary">
              Facebook
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary">
              Twitter
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary">
              Instagram
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="flex items-center gap-2">
              <User size={20} />
              <span>Log In</span>
            </Link>
            <Link href="#" className="flex items-center gap-2">
              <ShoppingCart size={20} />
              <span>Cart (0)</span>
            </Link>
          </div>
        </div>
      <nav className="bg-primary py-4">
        <div className="container mx-auto flex justify-center items-center gap-8">
          <Link href="#" className="text-white hover:text-cream">
            HOME
          </Link>
          <Link href="#" className="text-white hover:text-cream">
            ABOUT
          </Link>
          <Link href="#" className="text-white hover:text-cream">
            SHOP
          </Link>
          <Link href="#" className="text-white hover:text-cream">
            SERVICES
          </Link>
          <Link href="#" className="text-white hover:text-cream">
            CONTACT
          </Link>
          <Link href="#" className="text-white hover:text-cream">
            BLOG
          </Link>
        </div>
      </nav>
    </motion.section>
  </>
  )
}

