"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaRegCommentDots } from "react-icons/fa";
import { FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-pink-100 shadow-md z-50 h-16 flex items-center">
        <div className="container mx-auto flex items-center justify-between py-4 px-6 relative">
          {/* Logo */}
          <Link href="/">
            <Image src="/Logo1.jpg" alt="Bindi's Cupcakery" width={300} height={300} className="cursor-pointer w-[120px] h-auto transform translate-y-[-10px]" />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6 text-primary font-semibold ml-20">
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/about">ABOUT</Link></li>
            <li><Link href="/shop">SHOP</Link></li>
            <li><Link href="/gallery">GALLERY</Link></li>
          </ul>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Login and Cart */}
            <Link href="/login" className="flex items-center space-x-1"><FiUser /><span className="hidden md:inline">Log In</span></Link>
            <Link href="/cart" className="flex items-center space-x-1"><FiShoppingCart /><span className="hidden md:inline">Cart (0)</span></Link>

            {/* Order Button */}
            <Link href="/shop" className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-opacity-80 transition">
              Order Now 🍰
            </Link>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-2xl text-primary" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-pink-50 shadow-md absolute top-[100%] left-0 w-full flex flex-col items-center py-4 space-y-4 text-lg font-semibold">
          <Link href="/" onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
          <Link href="/shop" onClick={() => setMenuOpen(false)}>SHOP</Link>
          <Link href="/gallery" onClick={() => setMenuOpen(false)}>GALLERY</Link>
        </div>
      )}
    </>
  );
}