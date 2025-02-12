// 
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { products } from "../../lib/products";

export default function ProductMap() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="pt-6 pb-10 bg-cream"
    >
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-serif text-primary text-center mb-4">OUR CREATIONS</h2>

        {/* ✅ Increased width to ensure "Exclusive" fits properly */}
        <div className="relative w-full h-[320px] flex justify-center items-center overflow-visible">
          <svg className="absolute w-[110%] h-full" viewBox="0 0 1100 400">
            <path
              d="M 8 300 Q 250 180, 400 280 T 700 280 T 850 260 T 1120 260"
              stroke="black"
              strokeWidth="3"
              fill="none"
              strokeDasharray="6,10"
            />
          </svg>

          {/* ✅ Fixed alignment and spacing */}
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="absolute flex flex-col items-center"
              style={{ top: product.top, left: product.left }}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={90}
                height={90}
                className="rounded-full border-2 border-primary shadow-lg bg-white p-1"
              />
              <p className="mt-2 text-sm font-bold text-primary">{product.name}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button className="border-2 border-primary text-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">
            SHOP ALL CREATIONS
          </button>
        </div>
      </div>
    </motion.section>
  );
}
