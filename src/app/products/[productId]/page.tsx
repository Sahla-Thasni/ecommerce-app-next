
"use client";

import { useEffect, useState } from "react";
import { ProductService } from "@/app/services/product-service";
import AddToCartButton from "@/app/components/cart-button/AddToCartButton";

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  console.log("params =", params);
  console.log("productId =", params.productId);

  ProductService.getProductById(Number(params.productId))
    .then((data) => {
      console.log("product =", data);
      setProduct(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
}, [params]);

  if (loading) return <h2>Loading...</h2>;

  if (!product) return <div>Product not found</div>;
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "300px", objectFit: "contain" }}
          />
        </div>

        <div className="col-md-6">
          <h2 className="mb-3">{product.title}</h2>

          <h3 className="text-success mb-3">${product.price}</h3>

          <p className="text-muted mb-4">{product.description}</p>

          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
