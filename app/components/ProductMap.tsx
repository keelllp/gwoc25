"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { products } from "../../lib/products";
import Link from "next/link";

export default function ProductMap() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-cream"
    >
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-serif text-primary text-center mb-12">
          OUR CREATIONS
        </h2>

        {/* ✅ Adjusted height & positioning */}
        <div className="relative w-full h-[420px] flex justify-center items-center -mt-10">
          <svg className="absolute w-[130%] h-full " viewBox="0 0 1300 400">
            <path
              d="M 8 260 Q 250 140, 400 220 T 700 200 T 850 190 T 1120 200"
              stroke="black"
              strokeWidth="3"
              fill="none"
              strokeDasharray="10,10"
              transform="translate(87,0)" 
            />
          </svg>

          {/* ✅ Manually adjusting top & left values for each product */}
          {products.map((product, index) => {
            const positions = [
              { top: "35%", left: "0.5px" }, // New Arrivals
              { top: "35%", left: "18%" }, // Best Sellers
              { top: "48%", left: "35%" }, // Seasonal
              { top: "42%", left: "53%" }, // Discounts
              { top: "25%", left: "72%" }, // Limited Edition
              { top: "45%", left: "90%" }, // Exclusive
            ];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="absolute flex flex-col items-center"
                style={{
                  top: positions[index]?.top || "50%",
                  left: positions[index]?.left || "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={120}
                  height={120}
                  className="rounded-full border-2 border-primary shadow-lg bg-white p-1"
                />
                <p className="mt-2 text-sm font-bold text-primary">{product.name}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/shop">
            <button className="border-2 border-primary text-primary px-10 py-3 rounded-full text-lg hover:bg-primary hover:text-white transition-colors">
              SHOP ALL CREATIONS
            </button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
