"use client";

import { useState } from "react";
import { useCart } from "./CartContext"; // Importing cart context
import styles from "./HamperCustomization.module.css";

const availableItems = [
   { id: 1, name: "Plain Vanilla Muffin", image: "/vanilla_muffin.jpg", price: 120 },
   { id: 2, name: "Plain Chocolate Muffin", image: "/choco_muffin.jpg", price: 130},
   { id: 3, name: "Vanilla Chocochips Muffin", image: "/vanilla_choco.jpg", price: 140},
   { id: 4, name: "Chocolate Muffin with Chocochips", image: "/choco_chocochip.jpg", price: 150 },
   { id: 5, name: "Vanilla Muffin with Dryfruits", image: "/vanilla_dryfruit.jpg", price: 160},
   { id: 6, name: "Chocolate Muffin with Dryfruits", image: "/choco_dryfruit.jpg", price: 170 },
   { id: 7, name: "Plain Brownie", image: "/brownie_plain.jpg", price: 200 },
   { id: 8, name: "Brownie with Chocolate Sauce", image: "/brownie_choco.jpg", price: 220 },
   { id: 9, name: "Brownie with Chocolate Sauce & Walnuts", image: "/brownie_walnut.jpg", price: 250 },
   { id: 10, name: "Plain Vanilla Sponge Cake", image: "/vanilla_cake.jpg", price: 300 },
   { id: 11, name: "Plain Chocolate Sponge Cake", image: "/choco_cake.jpg", price: 320},
   { id: 12, name: "Vanilla Sponge Cake with Chocochips/Gems/Tutti-frutti", image: "/vanilla_toppings.jpg", price: 350 },
   { id: 13, name: "Chocolate Sponge Cake with Chocochips/Gems/Tutti-frutti", image: "/choco_toppings.jpg", price: 370 },
   { id: 14, name: "Vanilla Sponge Cake with Dryfruits", image: "/vanilla_dry_cake.jpg", price: 380 },
   { id: 15, name: "Chocolate Sponge Cake with Dryfruits", image: "/choco_dry_cake.jpg", price: 400 },
   { id: 16, name: "Chocolate Ganache Cake", image: "/ganache.jpg", price: 450},
   { id: 17, name: "Brownie Cake", image: "/brownie_cake.jpg", price: 420},
   { id: 18, name: "Brownie Cake with Walnuts", image: "/brownie_walnut_cake.jpg", price: 450},
   { id: 19, name: "Dream Cake", image:"/dreamcake.jpg", price: 300},
   { id: 20, name: "Chocolate Chips Cookies", image: "/choco_cookies.jpg", price: 150},
];

const hamperSizes = { small: 3, medium: 5, large: 7 };

export default function HamperCustomization() {
  const [selectedSize, setSelectedSize] = useState<keyof typeof hamperSizes | null>(null);
  const [selectedItems, setSelectedItems] = useState<typeof availableItems>([]);
  const [hamperCreated, setHamperCreated] = useState(false);
  const { addToCart } = useCart();

  const handleSizeSelection = (size: keyof typeof hamperSizes) => {
    setSelectedSize(size);
    setSelectedItems([]);
    setHamperCreated(false);
  };

  const handleAddToHamper = (item: typeof availableItems[number]) => {
    if (!selectedSize) return;
    if (selectedItems.length >= hamperSizes[selectedSize]) {
      alert(`You can only add ${hamperSizes[selectedSize]} items.`);
      return;
    }
    if (selectedItems.some((selected) => selected.id === item.id)) {
      alert("Item already added!");
      return;
    }
    setSelectedItems([...selectedItems, item]);
  };

  const handleRemoveFromHamper = (id: number) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== id));
  };

  const handleCreateHamper = () => {
    if (!selectedSize || selectedItems.length !== hamperSizes[selectedSize]) {
      if (selectedSize) {
        alert(`Select exactly ${hamperSizes[selectedSize]} items.`);
      }
      return;
    }
    selectedItems.forEach((item) => addToCart({ ...item, category: "default", price: item.price }));
    setHamperCreated(true);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create Your Custom Hamper 🎁</h1>
      <div className={styles.sizeSelection}>
        <h2>Select Hamper Size:</h2>
        {Object.keys(hamperSizes).map((size) => (
          <button key={size} onClick={() => handleSizeSelection(size as keyof typeof hamperSizes)}
            className={`${styles.sizeButton} ${selectedSize === size ? styles.selectedSize : ""}`}>
            {size.toUpperCase()} ({hamperSizes[size as keyof typeof hamperSizes]} items)
          </button>
        ))}
      </div>

      {selectedSize && (
        <>
          <h2>Select Items:</h2>
          <div className={styles.itemsContainer}>
            {availableItems.map((item) => (
              <div key={item.id} className={styles.itemCard}>
                <img src={item.image} alt={item.name} className={styles.itemImage} />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <button onClick={() => handleAddToHamper(item)} className={styles.button}>
                  Add
                </button>
              </div>
            ))}
          </div>

          <h2>Your Hamper:</h2>
          <div className={styles.selectedItems}>
            {selectedItems.map((item) => (
              <div key={item.id} className={styles.selectedItem}>
                <img src={item.image} alt={item.name} className={styles.itemImage} />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <button onClick={() => handleRemoveFromHamper(item.id)} className={styles.button}>Remove</button>
              </div>
            ))}
          </div>

          {!hamperCreated ? (
            <button onClick={handleCreateHamper} className={styles.createButton}>Create Hamper</button>
          ) : (
            <div className={styles.hamperSummary}>
              <h2>🎉 Hamper Added to Cart! 🎉</h2>
            </div>
          )}
        </>
      )}
    </div>
  );
}