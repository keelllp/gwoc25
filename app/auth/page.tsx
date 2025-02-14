"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/signup";
    
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      if (isLogin) {
        router.push("/shop"); // Redirect after login
      } else {
        alert("Signup successful! You can now log in.");
        setIsLogin(true); // Switch to login mode after signup
      }
    } else {
      const data = await res.json();
      alert(data.error || "Something went wrong!");
    }
  };

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#fde2e4] to-[#fdf3f7] relative"
    >
      {/* Background Logo */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-10"
        style={{ backgroundImage: "/logo.jpg" }} // Replace with actual logo path
      />

      {/* Login Box */}
      <div className="relative z-10 bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-96 border border-white/50">
        <h2 className="text-2xl font-serif text-[#6d3d6d] mb-6 text-center">
          {isLogin ? "Welcome Back!" : "Create an Account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d46aa0] transition-all duration-200"
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d46aa0] transition-all duration-200"
          />
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-[#d46aa0] to-[#ff85a1] text-white font-semibold p-3 rounded-lg transition-transform duration-200 hover:scale-105"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle between Login and Signup */}
        <p className="mt-4 text-center text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"} 
          <button onClick={() => setIsLogin(!isLogin)} className="text-[#d46aa0] font-semibold ml-1 underline">
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
