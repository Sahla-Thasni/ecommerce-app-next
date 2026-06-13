
"use client";

import { useEffect, useState } from "react";
import ProductCard from "../product-card/ProductCard";
import { ProductService } from "@/app/services/product-service";

export default function ProductList() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    ProductService.getproducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Products Error:", err);

        setError(
          err instanceof Error ? err.message : "Unknown error occurred"
        );

        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2  style={{ color: "red" }}>Loading...</h2>;
  }

  if (error) {
    return <h2 style={{ color: "red" }}>{error}</h2>;
  }

  return (
    <div className="container">
      <div className="row">
        {products.map((p: any) => (
          <div key={p.id} className="col-md-4 mb-4">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}