"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type CartItem = {
  id: number
  name: string
  image: string
  price: string
  category: string
  quantity: number
}

type CartContextType = {
  cartItems: CartItem[]
  cartCount: number
  cartTotal: number
  addToCart: (product: Omit<CartItem, "quantity">, quantity?: number) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, newQuantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => {
      return sum + Number.parseFloat(item.price.replace("₹", "")) * item.quantity
    }, 0)
    setCartTotal(total)
  }, [cartItems])

  const addToCart = (product: Omit<CartItem, "quantity">, quantity = 1) => {
    const existingItem = cartItems.find((item) => item.id === product.id)

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, quantity }])
    }

    setCartCount(cartCount + quantity)
  }

  const removeFromCart = (productId: number) => {
    const item = cartItems.find((item) => item.id === productId)
    if (item) {
      setCartCount(cartCount - item.quantity)
      setCartItems(cartItems.filter((item) => item.id !== productId))
    }
  }

  const updateQuantity = (productId: number, newQuantity: number) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === productId)
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems]
      const oldQuantity = updatedCartItems[existingItemIndex].quantity
      updatedCartItems[existingItemIndex].quantity = newQuantity
      setCartItems(updatedCartItems)
      setCartCount(cartCount - oldQuantity + newQuantity)
    }
  }

  const clearCart = () => {
    setCartItems([])
    setCartCount(0)
    setCartTotal(0)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}