/*
import React from "react";
import styles from "./CategoryList.module.css";

const CategoryList = ({ categories, updateCategory, deleteCategory }: { 
  categories: string[]; 
  updateCategory: (index: number, newName: string) => void; 
  deleteCategory: (index: number) => void; 
}) => {
  return (
    <div className={styles.listContainer}>
      <ul className={styles.list}>
        {categories.map((category, index) => (
          <li key={index} className={styles.listItem}>
            {category}
            <div className={styles.buttonGroup}>
              <button 
                className={styles.editButton} 
                onClick={() => updateCategory(index, prompt("Enter new name", category) || category)}
              >
                Edit
              </button>
              <button 
                className={styles.deleteButton} 
                onClick={() => deleteCategory(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
*/