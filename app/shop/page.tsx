"use client";
import { useState } from "react";
import Image from "next/image";
import { ShoppingCart, MessageCircle } from "lucide-react";

const products = [
  // Muffins
  { id: 1, name: "Plain Vanilla Muffin", image: "/vanilla_muffin.jpg", price: "₹120", category: "Muffins" },
  { id: 2, name: "Plain Chocolate Muffin", image: "/choco_muffin.jpg", price: "₹130", category: "Muffins" },
  { id: 3, name: "Vanilla Chocochips Muffin", image: "/vanilla_choco.jpg", price: "₹140", category: "Muffins" },
  { id: 4, name: "Chocolate Muffin with Chocochips", image: "/choco_chocochip.jpg", price: "₹150", category: "Muffins" },
  { id: 5, name: "Vanilla Muffin with Dryfruits", image: "/vanilla_dryfruit.jpg", price: "₹160", category: "Muffins" },
  { id: 6, name: "Chocolate Muffin with Dryfruits", image: "/choco_dryfruit.jpg", price: "₹170", category: "Muffins" },
  
  // Brownies
  { id: 7, name: "Plain Brownie", image: "/brownie_plain.jpg", price: "₹200", category: "Brownies" },
  { id: 8, name: "Brownie with Chocolate Sauce", image: "/brownie_choco.jpg", price: "₹220", category: "Brownies" },
  { id: 9, name: "Brownie with Chocolate Sauce & Walnuts", image: "/brownie_walnut.jpg", price: "₹250", category: "Brownies" },
  
  // Cakes
  { id: 10, name: "Plain Vanilla Sponge Cake", image: "/vanilla_cake.jpg", price: "₹300", category: "Cakes" },
  { id: 11, name: "Plain Chocolate Sponge Cake", image: "/choco_cake.jpg", price: "₹320", category: "Cakes" },
  { id: 12, name: "Vanilla Sponge Cake with Chocochips/Gems/Tutti-frutti", image: "/vanilla_toppings.jpg", price: "₹350", category: "Cakes" },
  { id: 13, name: "Chocolate Sponge Cake with Chocochips/Gems/Tutti-frutti", image: "/choco_toppings.jpg", price: "₹370", category: "Cakes" },
  { id: 14, name: "Vanilla Sponge Cake with Dryfruits", image: "/vanilla_dry_cake.jpg", price: "₹380", category: "Cakes" },
  { id: 15, name: "Chocolate Sponge Cake with Dryfruits", image: "/choco_dry_cake.jpg", price: "₹400", category: "Cakes" },
  { id: 16, name: "Chocolate Ganache Cake", image: "/ganache.jpg", price: "₹450", category: "Cakes" },
  { id: 17, name: "Brownie Cake", image: "/brownie_cake.jpg", price: "₹420", category: "Cakes" },
  { id: 18, name: "Brownie Cake with Walnuts", image: "/brownie_walnut_cake.jpg", price: "₹450", category: "Cakes" },
  
  // Cookies
  { id: 19, name: "Chocolate Chips Cookies", image: "/choco_cookies.jpg", price: "₹150", category: "Cookies" },
  { id: 20, name: "Dryfruit Cookies", image: "/dryfruit_cookies.jpg", price: "₹170", category: "Cookies" }
];

const categories = ["All", "Cakes", "Muffins", "Brownies", "Cookies"];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartCount, setCartCount] = useState(0);
  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">
      {/* Customer Opinion Button */}
      <button className="absolute top-6 right-6 px-4 py-2 bg-yellow-500 text-white font-bold rounded-full shadow-lg hover:bg-yellow-600 transition animate-bounce">
        Share Your Ideas! 💡
      </button>

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
            className={`px-3 py-1.5 rounded-md ${
              selectedCategory === category ? "bg-pink-500 text-white" : "bg-white text-gray-800"
            } shadow-md hover:bg-pink-600 transition text-sm`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-3 transform hover:scale-105 transition duration-300"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={250}
              height={250}
              className="rounded-lg w-full h-48 object-cover"
            />
            <h2 className="text-lg font-semibold text-gray-700 mt-3">{product.name}</h2>
            <p className="text-gray-500 text-sm">{product.price}</p>
            <button
              className="mt-2 w-full bg-pink-500 text-white py-1.5 text-sm rounded-md hover:bg-pink-600"
              onClick={() => setCartCount(cartCount + 1)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}