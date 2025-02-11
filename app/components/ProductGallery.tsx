import Image from "next/image"
import "./ProductGallery.css"

export default function ProductGallery() {
  const products = [
    { name: "Chocolate Cupcake", image: "/placeholder.svg?height=300&width=300" },
    { name: "Vanilla Ice Cream", image: "/placeholder.svg?height=300&width=300" },
    { name: "Fudge Brownie", image: "/placeholder.svg?height=300&width=300" },
    { name: "Fruit Cake", image: "/placeholder.svg?height=300&width=300" },
  ]

  return (
    <section id="products" className="products">
      <div className="container">
        <h2 className="section-title">Our Delicious Products</h2>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="product-image"
              />
              <div className="product-content">
                <h3 className="product-title">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

