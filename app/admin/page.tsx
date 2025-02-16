"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "./loading"; // Cake slice loading animation
import styles from "./admin.module.css"; // Import CSS module

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(""); // Track login errors
  const router = useRouter();

  useEffect(() => {
    // Show the cake loading animation for 2 seconds
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("adminUser", "admin123"); // ✅ Store in localStorage
      setLoading(true); // Show loading before redirect
      setTimeout(() => {
        router.push("/admin/dashboard"); // ✅ Redirect after delay
      }, 1000);
    } else {
      setError("Invalid credentials! Try again.");
    }
  };

  if (loading) {
    return <Loading />; // Show cake animation while loading
  }

  return (
    <div className={styles.adminContainer}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>🍰 Bindi's Cupcakery Admin</h2>
        <p className={styles.subtitle}>Manage your bakery with ease</p>

        {error && <p className={styles.errorMessage}>{error}</p>}

        <form onSubmit={handleLogin} className={styles.form}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
