"use client";

import ProductCard from "../components/product-card/ProductCard";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    
    setCartItems(cart);
  }, []);

  return (
    <div className="container">
      <h2>Your Cart</h2>

      <div className="row">
        {cartItems.map((product, index) => (
          <ProductCard key={index} product={product} isCart={true} />
        ))}
      </div>
    </div>
  );
}
