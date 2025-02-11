import Image from "next/image"

const favorites = [
  { name: "Easter Bunny Cookies", price: "£25.99", image: "/placeholder.svg?height=200&width=200" },
  { name: "Pink Cupcakes", price: "£15.99", image: "/placeholder.svg?height=200&width=200" },
  { name: "Heart Cookies", price: "£19.99", image: "/placeholder.svg?height=200&width=200" },
  { name: "Macarons", price: "£22.99", image: "/placeholder.svg?height=200&width=200" },
]

export default function CustomerFavorites() {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-primary text-center mb-8">SHOP OUR CUSTOMER'S FAVORITES</h2>
        <div className="grid grid-cols-4 gap-6">
          {favorites.map((item, index) => (
            <div key={index} className="text-center">
              <div className="relative w-full aspect-square mb-4">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-gray-800 mb-2">{item.name}</h3>
              <p className="text-primary font-semibold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

