
"use client";
import AddToCartButton from "@/app/components/cart-button/AddToCartButton";
import { ProductService } from "@/app/services/product-service";
import { use } from "react";
import { useEffect, useState } from "react";



export default function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = use(params);

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ProductService.getProductById(Number(productId))
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [productId]);

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
