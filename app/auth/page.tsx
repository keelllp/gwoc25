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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">{isLogin ? "Login" : "Sign Up"} to Bindi's Cupcakery</h2>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-80">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <p className="mt-4">
        {isLogin ? "Don't have an account?" : "Already have an account?"} 
        <button onClick={() => setIsLogin(!isLogin)} className="text-blue-500 ml-1 underline">
          {isLogin ? "Sign up" : "Login"}
        </button>
      </p>
    </div>
  );
}
