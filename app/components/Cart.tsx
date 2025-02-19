"use client"
import { useState } from "react"
import { ShoppingCart, X } from "lucide-react"
import { useCart } from "./CartContext"

export function CartButton() {
    const [showCart, setShowCart] = useState(false);
    const { cartCount } = useCart();
  
    return (
      <>
        <div className="relative">
          <button 
            className="flex items-center space-x-1" 
            onClick={() => setShowCart(true)}
          >
            <ShoppingCart />
            <span className="hidden md:inline">Cart ({cartCount})</span>
          </button>
          {showCart && <Cart onClose={() => setShowCart(false)} />}
        </div>
      </>
    );
}

export function Cart({ onClose }: { onClose: () => void }) {
  const { cartItems, cartTotal, removeFromCart } = useCart();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-40">
      <div className="bg-white w-96 h-full p-6 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Your Cart 🛒</h2>
          <button onClick={onClose}>
            <X size={24} className="text-gray-800 hover:text-gray-600 transition" />
          </button>
        </div>
        
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="border-b pb-4">
                {Array.isArray(item.items) ? (
                  <div>
                    <h3 className="font-semibold">🎁 {item.name}</h3>
                    <p className="text-sm text-gray-500">Hamper Price: ₹{item.price}</p>
                    <ul className="ml-4 list-disc text-sm text-gray-600">
                      {item.items.map((hamperItem: any) => (
                        <li key={hamperItem.id}>{hamperItem.name} - ₹{hamperItem.price}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500">₹{item.price}</p>
                    </div>
                  </div>
                )}

                <button
                  className="mt-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        
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
  );
}
