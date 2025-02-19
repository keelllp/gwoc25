"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState(""); // Add name for signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Add error message state
  const [successMessage, setSuccessMessage] = useState(""); // Add success message state
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("Token found in localStorage:", token);
      router.push("/shop"); // Redirect if already logged in
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";

    // Prepare request body
    const requestBody: any = { email, password };
    if (!isLogin) {
      if (!name.trim()) return alert("Name is required for signup!");
      requestBody.name = name; // Include name in signup request
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMessage(data.error || "Something went wrong!"); // Set error message
        console.error("Error response:", data);
        return;
      }

      if (isLogin) {
        console.log("Login successful, storing token:", data.token);
        localStorage.setItem("token", data.token); // Store JWT token in localStorage
        setSuccessMessage("Login successful! Redirecting to shop...");
        setTimeout(() => {
          router.push("/shop"); // Redirect after login
        }, 2000);
      } else {
        setSuccessMessage("Signup successful! You can now log in.");
        setTimeout(() => {
          setIsLogin(true); // Switch to login mode after signup
        }, 2000);
      }
    } catch (error) {
      setErrorMessage("Something went wrong!"); // Set error message for fetch error
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">{isLogin ? "Login" : "Sign Up"} to Bindi's Cupcakery</h2>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-80">
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mb-3 border border-gray-300 rounded"
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>} {/* Display error message */}
      {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>} {/* Display success message */}

      <p className="mt-4">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button onClick={() => setIsLogin(!isLogin)} className="text-blue-500 ml-1 underline">
          {isLogin ? "Sign up" : "Login"}
        </button>
      </p>
    </div>
  );
}
