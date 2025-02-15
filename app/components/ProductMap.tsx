import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-white">
      <Image 
        src="/doodle1.jpg" // ✅ Ensure correct filename
        alt="Bindi's Cupcakery Doodle" 
        layout="fill" // ✅ Makes the image cover the entire section
        objectFit="cover" // ✅ Ensures the image scales properly
        priority
      />
    </section>
  );
}
