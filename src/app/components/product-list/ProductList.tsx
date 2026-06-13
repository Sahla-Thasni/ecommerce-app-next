// import ProductCard from "../product-card/ProductCard";
// import { ProductService } from "@/app/services/product-service";

// export default async function ProductList() {
//   const products = await ProductService.getproducts();

//   return (
//     <div className="container">
//       <div className="row">
//         {products.map((p: any) => (
//           <div key={p.id} className="col-md-4 mb-4">
//             <ProductCard product={p} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import ProductCard from "../product-card/ProductCard";
import { ProductService } from "@/app/services/product-service";

export default async function ProductList() {
  try {
    const products = await ProductService.getproducts();

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
  } catch (error) {
    console.error(error);

    return (
      <div className="container">
        <h2>Error loading products</h2>
      </div>
    );
  }
}