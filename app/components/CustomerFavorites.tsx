"use client"; 
import { motion } from "framer-motion"; 
import Image from "next/image"; 
import Link from "next/link";

const favorites = [
  { name: "Dream Cake", price: "₹25.99", image: "/dreamcake.jpg", link: "/shop/dreamcake" },
  { name: "Doughnuts", price: "₹15.99", image: "/donut.jpg", link: "/shop/doughnuts" },
  { name: "Choco-Fudge Brownies", price: "₹19.99", image: "/brownies.jpg", link: "/shop/brownies" },
  { name: "Heart Cookies", price: "₹22.99", image: "/Heart-cookies.jpg", link: "/shop/heart-cookies" },
];

export default function CustomerFavorites() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-[#fdf3f7]" // Soft pastel background
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-[#6d3d6d] text-center mb-10">
          SHOP OUR CUSTOMER'S FAVORITES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {favorites.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-center cursor-pointer"
            >
              <Link href={item.link} className="block">
                <div className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="100vw"
                    className="object-cover rounded-2xl transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-gray-800 mt-3 text-lg font-semibold">{item.name}</h3>
                <p className="text-[#d46aa0] font-bold text-xl">{item.price}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
