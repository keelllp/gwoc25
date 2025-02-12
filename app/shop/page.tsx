"use client";
import { useState } from "react";
import Image from "next/image";
import { ShoppingCart, MessageCircle } from "lucide-react";

const products = [
  { id: 1, name: "Brownies", image: "/brownies.jpg", price: "₹250", category: "Cakes" },
  { id: 2, name: "Donut", image: "/donut.jpg", price: "₹150", category: "Pastries" },
  { id: 3, name: "Dream Cake", image: "/dreamcake.jpg", price: "₹500", category: "Cakes" },
  { id: 4, name: "Heart Cookies", image: "/Heart-cookies.jpg", price: "₹200", category: "Cookies" },
  { id: 5, name: "Heart Cookies (Special)", image: "/Heart-cookies1.jpg", price: "₹300", category: "Cookies" },
];

const categories = ["All", "Cakes", "Pastries", "Cookies"];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartCount, setCartCount] = useState(0);

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Explore Our Creations 🧁</h1>

      {/* Shopping Cart Display */}
      <div className="absolute top-6 left-6 flex items-center bg-white px-4 py-2 rounded-full shadow-lg">
        <ShoppingCart size={24} className="text-gray-800" />
        <span className="ml-2 font-semibold">{cartCount}</span>
      </div>

      {/* Category Filters */}
      <div className="flex justify-center gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === category ? "bg-pink-500 text-white" : "bg-white text-gray-800"
            } shadow-md hover:bg-pink-600 transition`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 transform hover:scale-105 transition duration-300"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={250}
              height={250}
              className="rounded-lg w-full h-64 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-700 mt-4">{product.name}</h2>
            <p className="text-gray-500">{product.price}</p>
            <button
              className="mt-3 w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600"
              onClick={() => setCartCount(cartCount + 1)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Trending Products Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">🔥 Trending Desserts</h2>
        <div className="flex overflow-x-scroll space-x-6 px-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-4 w-60">
              <Image src={product.image} alt={product.name} width={200} height={200} className="rounded-lg" />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Testimonials */}
      <div className="mt-16 bg-pink-100 py-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">❤️ What Our Customers Say</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md w-80">
            <p className="text-gray-700">“Absolutely love the brownies! The best in town.”</p>
            <p className="text-gray-600 mt-2">- Riya S.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-80">
            <p className="text-gray-700">“The donuts are so soft and delicious. Highly recommend!”</p>
            <p className="text-gray-600 mt-2">- Aman K.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-80">
            <p className="text-gray-700">“Dream Cake was a dream come true! 5 stars!”</p>
            <p className="text-gray-600 mt-2">- Neha P.</p>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Chat Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <MessageCircle size={24} />
      </a>

      {/* Footer Section */}
      <footer className="mt-16 bg-gray-800 text-white text-center py-6 rounded-t-lg">
        <p className="text-lg">📍 Visit us at Bindi’s Cupcakery, Surat</p>
        <p className="text-sm mt-2">Follow us:  
          <a href="#" className="ml-2 hover:underline">Instagram</a> |  
          <a href="#" className="ml-2 hover:underline">Facebook</a>
        </p>
      </footer>
    </div>
  );
}
