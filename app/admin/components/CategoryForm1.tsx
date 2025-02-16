/*
import React, { useState } from "react";
import styles from "./CategoryForm.module.css";

const CategoryForm = ({ addCategory }: { addCategory: (category: string) => void }) => {
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!category.trim()) return; // Prevent adding empty categories
    addCategory(category);
    setCategory("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input 
        type="text" 
        className={styles.input}  // ✅ Added class for input
        placeholder="Enter category name..." 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
      />
      <button type="submit" className={styles.button}>  // ✅ Added class for button
        Add Category
      </button>
    </form>
  );
};

export default CategoryForm;
*/