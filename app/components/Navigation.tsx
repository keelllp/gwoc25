<<<<<<< HEAD
"use client"; 
import { motion } from "framer-motion" 
import Link from 'next/link'
import { Facebook, Instagram, MessageCircle, User, ShoppingCart } from 'lucide-react'
=======
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaRegCommentDots } from "react-icons/fa";
import { FiShoppingCart, FiUser } from "react-icons/fi";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
>>>>>>> a7c9f11f99fa3f19db8999808f6edff9dc15c3a1

  return (
<<<<<<< HEAD
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
=======
    <nav className="fixed top-0 w-full bg-pink-100 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 relative">
        {/* Left Section - Logo */}
        <div className="relative flex items-center">
          <Link href="/">
            <Image
              src="/Logo.jpg"
              alt="Bindi's Cupcakery"
              width={120}
              height={120}
              className="cursor-pointer w-[120px] h-auto transform translate-y-[-10px]"
            />
>>>>>>> a7c9f11f99fa3f19db8999808f6edff9dc15c3a1
          </Link>

        </div>

<<<<<<< HEAD
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
    
    </div>
    </nav>
    </>
  )
}
=======
        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-primary font-semibold ml-20">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/shop">SHOP</Link>
          </li>
          <li>
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>

        {/* Right Section - Socials, Login, Cart */}
        <div className="flex items-center space-x-4">
          {/* Social Links */}
          <a href="#" className="text-primary text-lg">
            <FaFacebookF />
          </a>
          <a href="#" className="text-primary text-lg">
            <FaInstagram />
          </a>
          <a href="#" className="text-primary text-lg">
            <FaRegCommentDots />
          </a>

          {/* Login and Cart */}
          <Link href="/login" className="flex items-center space-x-1">
            <FiUser />
            <span className="hidden md:inline">Log In</span>
          </Link>
          <Link href="/cart" className="flex items-center space-x-1">
            <FiShoppingCart />
            <span className="hidden md:inline">Cart (0)</span>
          </Link>

          {/* Order Button */}
          <Link
            href="/shop"
            className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-opacity-80 transition"
          >
            Order Now 🍰
          </Link>
        </div>
      </div>
    </nav>
  );
}
>>>>>>> a7c9f11f99fa3f19db8999808f6edff9dc15c3a1
