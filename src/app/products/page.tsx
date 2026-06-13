import ProductList from "../components/product-list/ProductList";
import { Suspense } from "react";

export default async function Product() {
  return (
    <div>
      <Suspense fallback={<span style={{ color: "red" }}>Loading..</span>}>
        <ProductList />
      </Suspense>
    </div>
  );
}
