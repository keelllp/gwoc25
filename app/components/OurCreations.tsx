"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { products } from "../../lib/products";
import Link from "next/link"; // ✅ Correct import

export default function ProductMap() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="text-3xl font-bold mb-6">OUR CREATIONS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <motion.div 
            key={index} 
            className="p-4 border rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image 
              src={product.image} 
              alt={product.name} 
              width={200} 
              height={200} 
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
          </motion.div>
        ))}
      </div>

      {/* ✅ Fixed Link for Navigation */}
      <Link href="/shop" passHref>
        <motion.button 
          className="mt-6 px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          SHOP ALL CREATIONS
        </motion.button>
      </Link>
    </div>
  );
}
