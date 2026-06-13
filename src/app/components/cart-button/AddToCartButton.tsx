"use client";
import { useRouter } from "next/navigation";

export default function AddToCartButton({ product }: any) {
  const router = useRouter();

  function addToCart(product: any) {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProduct = cart.find((item: any) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        ...product,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
    router.push("/cart");
  }
  return (
    <button onClick={() => addToCart(product)} className="btn btn-warning">
      Add to Cart
    </button>
  );
}
