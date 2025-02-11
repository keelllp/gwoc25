import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-secondary/20 to-secondary/10 py-20">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="max-w-xl">
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
        <div className="relative w-96 h-96">
          <Image src="/placeholder.svg?height=400&width=400" alt="Decorated Cake" fill className="object-contain" />
        </div>
      </div>
    </div>
  )
}

