"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ShoppingCart, X } from "lucide-react"

const products = [
  // Muffins
  { id: 1, name: "Plain Vanilla Muffin", image: "/vanilla_muffin.jpg", price: "₹120", category: "Muffins" },
  { id: 2, name: "Plain Chocolate Muffin", image: "/choco_muffin.jpg", price: "₹130", category: "Muffins" },
  { id: 3, name: "Vanilla Chocochips Muffin", image: "/vanilla_choco.jpg", price: "₹140", category: "Muffins" },
  {
    id: 4,
    name: "Chocolate Muffin with Chocochips",
    image: "/choco_chocochip.jpg",
    price: "₹150",
    category: "Muffins",
  },
  { id: 5, name: "Vanilla Muffin with Dryfruits", image: "/vanilla_dryfruit.jpg", price: "₹160", category: "Muffins" },
  { id: 6, name: "Chocolate Muffin with Dryfruits", image: "/choco_dryfruit.jpg", price: "₹170", category: "Muffins" },

  // Brownies
  { id: 7, name: "Plain Brownie", image: "/brownie_plain.jpg", price: "₹200", category: "Brownies" },
  { id: 8, name: "Brownie with Chocolate Sauce", image: "/brownie_choco.jpg", price: "₹220", category: "Brownies" },
  {
    id: 9,
    name: "Brownie with Chocolate Sauce & Walnuts",
    image: "/brownie_walnut.jpg",
    price: "₹250",
    category: "Brownies",
  },

  // Cakes
  { id: 10, name: "Plain Vanilla Sponge Cake", image: "/vanilla_cake.jpg", price: "₹300", category: "Cakes" },
  { id: 11, name: "Plain Chocolate Sponge Cake", image: "/choco_cake.jpg", price: "₹320", category: "Cakes" },
  {
    id: 12,
    name: "Vanilla Sponge Cake with Chocochips/Gems/Tutti-frutti",
    image: "/vanilla_toppings.jpg",
    price: "₹350",
    category: "Cakes",
  },
  {
    id: 13,
    name: "Chocolate Sponge Cake with Chocochips/Gems/Tutti-frutti",
    image: "/choco_toppings.jpg",
    price: "₹370",
    category: "Cakes",
  },
  {
    id: 14,
    name: "Vanilla Sponge Cake with Dryfruits",
    image: "/vanilla_dry_cake.jpg",
    price: "₹380",
    category: "Cakes",
  },
  {
    id: 15,
    name: "Chocolate Sponge Cake with Dryfruits",
    image: "/choco_dry_cake.jpg",
    price: "₹400",
    category: "Cakes",
  },
  { id: 16, name: "Chocolate Ganache Cake", image: "/ganache.jpg", price: "₹450", category: "Cakes" },
  { id: 17, name: "Brownie Cake", image: "/brownie_cake.jpg", price: "₹420", category: "Cakes" },
  { id: 18, name: "Brownie Cake with Walnuts", image: "/brownie_walnut_cake.jpg", price: "₹450", category: "Cakes" },

  // Cookies
  { id: 19, name: "Chocolate Chips Cookies", image: "/choco_cookies.jpg", price: "₹150", category: "Cookies" },
  { id: 20, name: "Dryfruit Cookies", image: "/dryfruit_cookies.jpg", price: "₹170", category: "Cookies" },
]

const categories = ["All", "Cakes", "Muffins", "Brownies", "Cookies"]
export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [cartCount, setCartCount] = useState(0)
  const [cartItems, setCartItems] = useState<
    { id: number; name: string; image: string; price: string; category: string; quantity: number }[]
  >([])
  const [showCart, setShowCart] = useState(false)
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)
  const [feedbackMessage, setFeedbackMessage] = useState("")
  const [productQuantities, setProductQuantities] = useState<{ [key: number]: number }>({})
  const [showQuantityControls, setShowQuantityControls] = useState<{ [key: number]: boolean }>({})
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => {
      return sum + Number.parseFloat(item.price.replace("₹", "")) * item.quantity
    }, 0)
    setCartTotal(total)
  }, [cartItems])

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory)

  const addToCart = (product: { id: number; name: string; image: string; price: string; category: string }) => {
    const quantity = productQuantities[product.id] || 1
    const existingItem = cartItems.find((item) => item.id === product.id)

    if (existingItem) {
      setCartItems(
        cartItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)),
      )
    } else {
      setCartItems([...cartItems, { ...product, quantity }])
    }

    setCartCount(cartCount + quantity)
    setProductQuantities({ ...productQuantities, [product.id]: 1 })
    setShowQuantityControls({ ...showQuantityControls, [product.id]: true })
  }

  const updateQuantity = (productId: number, newQuantity: number) => {
    // Update productQuantities state
    setProductQuantities({
      ...productQuantities,
      [productId]: newQuantity,
    })

    // Update cartItems if the product is already in cart
    const existingItemIndex = cartItems.findIndex((item) => item.id === productId)
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems]
      const oldQuantity = updatedCartItems[existingItemIndex].quantity
      updatedCartItems[existingItemIndex].quantity = newQuantity
      setCartItems(updatedCartItems)

      // Update total cart count
      setCartCount(cartCount - oldQuantity + newQuantity)
    }
  }

  const removeFromCart = (productId: number) => {
    const item = cartItems.find((item) => item.id === productId)
    if (item) {
      setCartCount(cartCount - item.quantity)
      setCartItems(cartItems.filter((item) => item.id !== productId))
      setShowQuantityControls({ ...showQuantityControls, [productId]: false })
      setProductQuantities({ ...productQuantities, [productId]: 1 })
    }
  }

  const handleFeedbackSubmit = () => {
    alert(`Thank you for your feedback: ${feedbackMessage}`)
    setFeedbackMessage("")
    setShowFeedbackModal(false)
  }

  return (
    <div
      className="min-h-screen p-6 relative"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {showFeedbackModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Share Your Ideas! 💡</h2>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              rows={4}
              placeholder="Type your feedback here..."
              value={feedbackMessage}
              onChange={(e) => setFeedbackMessage(e.target.value)}
            />
            <div className="flex items-center justify-center gap-4 mt-2">
              <button
                className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                
                onClick={() => setShowFeedbackModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition"
                onClick={handleFeedbackSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-40">
          <div className="bg-white w-96 h-full p-6 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Your Cart 🛒</h2>
              <button onClick={() => setShowCart(false)}>
                <X size={24} className="text-gray-800 hover:text-gray-600 transition" />
              </button>
            </div>
            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-center">Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b pb-4">
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.price}</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-2">
                      <span>Qty: {item.quantity}</span>
                      <button
                        className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {/* Checkout Section */}
            {cartItems.length > 0 && (
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Total Bill</h3>
                  <p className="font-bold text-lg">₹{cartTotal.toFixed(2)}</p>
                </div>
                <button
                  className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
                  onClick={() => {
                    localStorage.setItem("cartTotal", cartTotal.toString())
                    window.location.href = "/checkout"
                  }}
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <button
        className="absolute top-6 right-6 px-4 py-2 bg-yellow-500 text-white font-bold rounded-full shadow-lg hover:bg-yellow-600 transition animate-bounce z-30"
        onClick={() => setShowFeedbackModal(true)}
      >
        Share Your Ideas! 💡
      </button>

      <h1 className="text-4xl font-bold text-center text-white mb-8 relative z-10">Explore Our Creations 🧁</h1>

      <div
        className="absolute top-6 left-6 flex items-center bg-white px-4 py-2 rounded-full shadow-lg cursor-pointer hover:shadow-xl transition z-50"
        onClick={() => setShowCart(true)}
      >
        <ShoppingCart size={24} className="text-gray-800" />
        <span className="ml-2 font-semibold">{cartCount}</span>
      </div>

      <div className="flex justify-center gap-4 mb-6 relative z-10">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative z-10">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-2xl p-3 transform hover:scale-105 transition duration-300 hover:shadow-xl"
          >
            <div className="relative w-full aspect-square overflow-hidden rounded-2xl">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="rounded-2xl object-cover"
                priority
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-700 mt-3">{product.name}</h2>
            <p className="text-gray-500 text-sm">{product.price}</p>
            {showQuantityControls[product.id] ? (
              <div className="flex items-center gap-2 mt-2">
                <button
                  className="px-2 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                  onClick={() => {
                    const newQuantity = Math.max((productQuantities[product.id] || 1) - 1, 1)
                    updateQuantity(product.id, newQuantity)
                  }}
                >
                  -
                </button>
                <span>{productQuantities[product.id] || 1}</span>
                <button
                  className="px-2 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                  onClick={() => {
                    const newQuantity = (productQuantities[product.id] || 1) + 1
                    updateQuantity(product.id, newQuantity)
                  }}
                >
                  +
                </button>
              </div>
            ) : (
              <button
                className="mt-2 w-full bg-pink-500 text-white py-1.5 text-sm rounded-2xl hover:bg-pink-600 transition"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}