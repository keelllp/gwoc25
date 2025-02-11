import Link from "next/link";
import { Facebook, Instagram, ShoppingCart, User } from "lucide-react";

export default function Navigation() {
  return (
    <>
      {/* Top Navbar */}
      <div className="bg-white py-2 px-4 border-b">
        <div className="container mx-auto flex justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex gap-4">
            <Link href="https://www.facebook.com/bindiscupcakery" target="_blank" className="text-gray-600 hover:text-blue-600">
              <Facebook size={20} />
            </Link>
            <Link href="https://www.instagram.com/bindis_cupcakery" target="_blank" className="text-gray-600 hover:text-pink-500">
              <Instagram size={20} />
            </Link>
          </div>

          {/* User and Cart Section */}
          <div className="flex items-center gap-4">
            <Link href="#" className="flex items-center gap-2 text-gray-600 hover:text-primary">
              <User size={20} />
              <span>Log In</span>
            </Link>
            <Link href="#" className="flex items-center gap-2 text-gray-600 hover:text-primary">
              <ShoppingCart size={20} />
              <span>Cart (0)</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-black py-4">
        <div className="container mx-auto flex justify-center items-center gap-8">
          <Link href="#" className="text-white hover:text-gray-300">HOME</Link>
          <Link href="#" className="text-white hover:text-gray-300">ABOUT</Link>
          <Link href="#" className="text-white hover:text-gray-300">SHOP</Link>
          <Link href="#" className="text-white hover:text-gray-300">SERVICES</Link>
          <Link href="#" className="text-white hover:text-gray-300">CONTACT</Link>
          <Link href="#" className="text-white hover:text-gray-300">BLOG</Link>
        </div>
      </nav>
    </>
  );
}
