"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./dashboard.module.css";

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    // Ensure code runs only on client-side
    const storedUser = typeof window !== "undefined" ? localStorage.getItem("adminUser") : null;

    if (storedUser === "admin123") {
      setUser(storedUser);
      setLoading(false);
    } else {
      router.push("/admin"); // Redirect to login if not authenticated
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("adminUser");
    router.push("/admin");
  };

  if (loading) {
    return <div className={styles.loading}>Loading Dashboard...</div>;
  }

  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <h2 className={styles.logo}>🍩 Admin Panel</h2>
        <nav>
          <ul>
            <li>📦 Manage Products</li>
            <li>📜 View Orders</li>
            <li>💰 Payments</li>
          </ul>
        </nav>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <h1>Welcome, {user}! 🎂</h1>
        <p>Here you can manage products, orders, and payments.</p>
      </main>
    </div>
  );
}
