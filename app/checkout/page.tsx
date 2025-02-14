"use client";
import { useState, useEffect } from "react";
import QRCode from "react-qr-code";

interface DeliveryDetails {
  name: string;
  mobile: string;
  deliveryType: "delivery" | "takeout";
  address?: string;
}

export default function CheckoutPage() {
  const [step, setStep] = useState<"details" | "payment">("details");
  const [deliveryDetails, setDeliveryDetails] = useState<DeliveryDetails>({
    name: "",
    mobile: "",
    deliveryType: "takeout",
  });
  const [cartTotal, setCartTotal] = useState(0); // Store total cart price dynamically
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    // Fetch cart total from localStorage or context (assuming you store it somewhere)
    const total = localStorage.getItem("cartTotal") || "0";
    setCartTotal(parseFloat(total)); // Convert stored string to number
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
    setShowQR(true);
  };

  // Generate UPI Payment URL
  const generateUPILink = () => {
    const upiID = "yourupiid@upi"; // Replace with your actual UPI ID
    return `upi://pay?pa=kalpsheladiya@oksbi&pn=Bindi's Cupcakery&mc=&tid=&tr=&tn=Payment for Order&am=${cartTotal}&cu=INR`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        {step === "details" ? (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Checkout Details
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  value={deliveryDetails.name}
                  onChange={(e) =>
                    setDeliveryDetails({ ...deliveryDetails, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  required
                  pattern="[0-9]{10}"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  value={deliveryDetails.mobile}
                  onChange={(e) =>
                    setDeliveryDetails({ ...deliveryDetails, mobile: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Type
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="takeout"
                      checked={deliveryDetails.deliveryType === "takeout"}
                      onChange={(e) =>
                        setDeliveryDetails({
                          ...deliveryDetails,
                          deliveryType: "takeout",
                          address: undefined,
                        })
                      }
                      className="mr-2"
                    />
                    Takeout
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="delivery"
                      checked={deliveryDetails.deliveryType === "delivery"}
                      onChange={(e) =>
                        setDeliveryDetails({
                          ...deliveryDetails,
                          deliveryType: "delivery",
                        })
                      }
                      className="mr-2"
                    />
                    Delivery
                  </label>
                </div>
              </div>

              {deliveryDetails.deliveryType === "delivery" && (
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Delivery Address
                  </label>
                  <textarea
                    id="address"
                    required
                    rows={3}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    value={deliveryDetails.address}
                    onChange={(e) =>
                      setDeliveryDetails({ ...deliveryDetails, address: e.target.value })
                    }
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition"
              >
                Proceed to Payment
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment</h2>
            <div className="mb-6">
              <p className="font-medium">Order Summary</p>
              <p className="text-gray-600">Name: {deliveryDetails.name}</p>
              <p className="text-gray-600">Mobile: {deliveryDetails.mobile}</p>
              <p className="text-gray-600">
                Type: {deliveryDetails.deliveryType === "delivery" ? "Delivery" : "Takeout"}
              </p>
              {deliveryDetails.address && (
                <p className="text-gray-600">Address: {deliveryDetails.address}</p>
              )}
              <p className="text-gray-600 font-bold">Total Amount: ₹{cartTotal}</p>
            </div>
            {showQR && cartTotal > 0 && (
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="border-4 border-gray-200 rounded-lg p-4">
                  <QRCode value={generateUPILink()} size={200} />
                </div>
                <p className="text-sm text-gray-600">
                  Scan the QR code to complete your payment of ₹{cartTotal}
                </p>
              </div>
            )}
            <button
              onClick={() => setStep("details")}
              className="mt-6 text-pink-500 hover:text-pink-600 transition"
            >
              ← Back to Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
