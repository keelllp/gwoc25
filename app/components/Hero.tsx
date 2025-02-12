import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-secondary/20 to-secondary/10 py-20">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Left content */}
        <div className="max-w-xl z-10">
          <h1 className="text-5xl font-serif text-primary mb-6">
            Shop all
            <br />
            OUR CUTE
            <br />
            LITTLE BAKERY
          </h1>
          <button className="border-2 border-primary text-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">
            SHOP NOW
          </button>
        </div>
        
        {/* Right image */}
        <div className="absolute right-0 top-0 w-2/3 h-full">
          <Image 
            src="/Logo.jpg" 
            alt="Bindi's Cupcakery" 
            fill 
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}