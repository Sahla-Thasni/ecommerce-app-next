"use client";
import AddToCartButton from "@/app/components/cart-button/AddToCartButton";
import Link from "next/link";
import {  useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductCard(props: any) {
  var prod = props.product;
  const [selectedProduct, setSelectedProduct] = useState({});
  const selectedProd = () => {
    setSelectedProduct(prod);
  };

  const router = useRouter();

  function removeFromCart(id: number) {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const product = cart.find((item: any) => item.id === id);

    if (product.quantity > 1) {
      product.quantity -= 1;
    } else {
      cart = cart.filter((item: any) => item.id !== id);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product deleted from cart!");
    location.reload();
  }

  return (
    <div className="card h-100 mt-3">
      <Link href={`/products/${prod.id}`} className="text-decoration-none">
        <div onClick={selectedProd}>
          <img
            src={prod.image}
            alt={prod.title}
            className="card-img-top p-3"
            style={{ height: "250px", objectFit: "contain" }}
          />

          <div className="card-body justify-content-center text-center">
            <h5 className="card-title text-black">{prod.title}</h5>
            <p className="fw-bold text-black">${prod.price}</p>
            {props.isCart && (
              <p className="text-black">
                Quantity: <strong>{prod.quantity}</strong>
              </p>
            )}
            {props.isCart && (
              <p className="text-black">
                Total:{" "}
                <strong>${(prod.price * prod.quantity).toFixed(2)}</strong>
              </p>
            )}
          </div>
        </div>
      </Link>

      <div className="d-flex justify-content-center gap-2 pb-3">
        <button
          className="btn btn-warning"
          onClick={() => router.push(`/products/${prod.id}`)}
        >
          Details
        </button>

        {!props.isCart && <AddToCartButton product={prod} />}

        {props.isCart && (
          <button
            className="btn btn-warning"
            onClick={() => removeFromCart(prod.id)}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
}
