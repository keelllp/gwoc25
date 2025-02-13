"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaRegCommentDots } from "react-icons/fa";
import { FiShoppingCart, FiUser } from "react-icons/fi";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
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
          </Link>
        </div>

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
