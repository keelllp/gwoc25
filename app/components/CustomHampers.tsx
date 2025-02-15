"use client";
import Link from "next/link";
import "./Home.css";

export default function CustomHampers() {
  return (
    <div className="custom-hampers-section">
      <h1>Build Your Custom Hamper</h1>
      <p>Choose from a variety of desserts and create your personalized hamper!</p>
      <Link href="/hampers">
        <button className="hamper-btn">Create Your Hamper</button>
      </Link>
    </div>
  );
}
