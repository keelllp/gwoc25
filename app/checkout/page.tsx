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
  const [cartTotal, setCartTotal] = useState(0);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    const total = localStorage.getItem("cartTotal") || "0";
    setCartTotal(parseFloat(total));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
    setShowQR(true);
  };

  const generateUPILink = () => {
    return `upi://pay?pa=kalpsheladiya@oksbi&pn=Bindi's Cupcakery&mc=&tid=&tr=&tn=Payment for Order&am=${cartTotal}&cu=INR`;
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/background.jpg")',
          filter: 'brightness(0.9)'
        }}
      />
      
      {/* Pink Overlay */}
      <div className="absolute inset-0 bg-pink-50/40" />

      {/* Content */}
      <div className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="w-full max-w-md bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-pink-100">
          {step === "details" ? (
            <>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
                Complete Your Order
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                    value={deliveryDetails.name}
                    onChange={(e) => setDeliveryDetails({ ...deliveryDetails, name: e.target.value })}
                  />
                </div>

                {/* Mobile Input */}
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    required
                    pattern="[0-9]{10}"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                    value={deliveryDetails.mobile}
                    onChange={(e) => setDeliveryDetails({ ...deliveryDetails, mobile: e.target.value })}
                  />
                </div>

                {/* Delivery Type Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Order Type
                  </label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-pink-600"
                        name="deliveryType"
                        value="takeout"
                        checked={deliveryDetails.deliveryType === "takeout"}
                        onChange={(e) => setDeliveryDetails({
                          ...deliveryDetails,
                          deliveryType: e.target.value as "takeout" | "delivery",
                          address: e.target.value === "takeout" ? undefined : deliveryDetails.address
                        })}
                      />
                      <span className="ml-2">Takeout</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-pink-600"
                        name="deliveryType"
                        value="delivery"
                        checked={deliveryDetails.deliveryType === "delivery"}
                        onChange={(e) => setDeliveryDetails({
                          ...deliveryDetails,
                          deliveryType: e.target.value as "takeout" | "delivery"
                        })}
                      />
                      <span className="ml-2">Delivery</span>
                    </label>
                  </div>
                </div>

                {/* Conditional Address Input */}
                {deliveryDetails.deliveryType === "delivery" && (
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Delivery Address
                    </label>
                    <textarea
                      id="address"
                      required
                      rows={3}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                      value={deliveryDetails.address || ""}
                      onChange={(e) => setDeliveryDetails({ ...deliveryDetails, address: e.target.value })}
                    />
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-300 hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors"
                >
                  Proceed to Payment
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Payment</h2>
              <div className="mb-8 bg-pink-100/90 backdrop-blur-sm p-6 rounded-2xl">
                <p className="font-medium text-lg mb-4">Order Summary</p>
                <p className="text-gray-600 mb-2">Name: {deliveryDetails.name}</p>
                <p className="text-gray-600 mb-2">Mobile: {deliveryDetails.mobile}</p>
                <p className="text-gray-600 mb-2">
                  Type: {deliveryDetails.deliveryType === "delivery" ? "Delivery" : "Takeout"}
                </p>
                {deliveryDetails.address && (
                  <p className="text-gray-600 mb-2">Address: {deliveryDetails.address}</p>
                )}
                <p className="text-gray-800 font-bold text-lg mt-4">Total Amount: ₹{cartTotal}</p>
              </div>
              {showQR && cartTotal > 0 && (
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="border-4 border-pink-200 rounded-2xl p-4 bg-pink-50">
                    <QRCode value={generateUPILink()} size={200} />
                  </div>
                  <p className="text-sm text-gray-600">
                    Scan the QR code to complete your payment of ₹{cartTotal}
                  </p>
                </div>
              )}
              <button
                onClick={() => setStep("details")}
                className="mt-8 text-pink-600 hover:text-pink-700 transition font-medium flex items-center justify-center mx-auto"
              >
                ← Back to Details
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}