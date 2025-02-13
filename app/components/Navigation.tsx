"use client";
import { motion } from "framer-motion";
import Link from 'next/link';
import { Facebook, Instagram, MessageCircle, User, ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <>
      {/* Top bar with social and account */}
      <div className="flex justify-between items-center px-6 py-2 bg-[#f8e1e7]">
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
          <Link href="../login" className="flex items-center gap-2 text-gray-600 transition-colors duration-300 hover:text-pink-500">
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
      <nav className="bg-[#ffebf0] text-brown py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-8">
          {/* Navigation Links */}
          <ul className="flex gap-8">
            <li><Link href="/" className="transition-colors duration-300 hover:text-[#d46aa0] font-semibold">HOME</Link></li>
            <li><Link href="/about" className="transition-colors duration-300 hover:text-[#d46aa0] font-semibold">ABOUT</Link></li>
            <li><Link href="/shop" className="transition-colors duration-300 hover:text-[#d46aa0] font-semibold">SHOP</Link></li>
            <li><Link href="/contact" className="transition-colors duration-300 hover:text-[#d46aa0] font-semibold">CONTACT</Link></li>
          </ul>

          {/* Order Now Button */}
          <Link href="https://wa.me/918849130189" target="_blank" className="bg-[#d46aa0] text-white px-5 py-2 rounded-full font-semibold shadow-md transition-all duration-300 hover:bg-[#c86f99]">
            Order Now 🍰
          </Link>
        </div>
      </nav>
    </>
  );
}
