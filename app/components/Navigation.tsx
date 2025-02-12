"use client"; 
import { motion } from "framer-motion" 
import Link from 'next/link'
import { Facebook, Instagram, MessageCircle, User, ShoppingCart } from 'lucide-react'

export default function Header() {
  return (
    <>
      {/* Top bar with social and account */}
      <div className="flex justify-between items-center px-6 py-2 bg-white">
        {/* Social icons */}
        <div className="flex gap-4">
          <Link href="https://facebook.com/bindis_cupcakery" target="_blank" className="text-gray-600 hover:text-blue-600">
            <Facebook size={20} />
          </Link>
          <Link href="https://instagram.com/bindis_cupcakery" target="_blank" className="text-gray-600 hover:text-pink-500">
            <Instagram size={20} />
          </Link>
          <Link href="https://wa.me/918849130189" target="_blank" className="text-gray-600 hover:text-green-500">
            <MessageCircle size={20} />
          </Link>

        </div>

        {/* Account and Cart */}
        <div className="flex items-center gap-4">
          <Link href="/login" className="flex items-center gap-2 text-gray-600 transition-colors duration-300 hover:text-pink-500">
            <User size={20} />
            <span>Log In</span>
          </Link>
          <Link href="/cart" className="flex items-center gap-2 text-gray-600 transition-colors duration-300 hover:text-pink-500">
            <ShoppingCart size={20} />
            <span>Cart (0)</span>
          </Link>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-black text-white py-4">
        <div className="container mx-auto">
          <ul className="flex justify-center gap-8">
            <li><Link href="/" className="transition-colors duration-300 hover:text-pink-500">HOME</Link></li>
            <li><Link href="/about" className="transition-colors duration-300 hover:text-pink-500">ABOUT</Link></li>
            <li><Link href="/shop" className="transition-colors duration-300 hover:text-pink-500">SHOP</Link></li>
            <li><Link href="/services" className="transition-colors duration-300 hover:text-pink-500">SERVICES</Link></li>
            <li><Link href="/contact" className="transition-colors duration-300 hover:text-pink-500">CONTACT</Link></li>
            <li><Link href="/blog" className="transition-colors duration-300 hover:text-pink-500">BLOG</Link></li>
          </ul>
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
    </div>
    </nav>
    </>
  )
}