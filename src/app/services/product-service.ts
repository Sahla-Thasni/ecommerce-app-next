import { ServiceBase } from "./service-base";

export class ProductService extends ServiceBase {
 static getproducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  return response.json();
};
  static getProductById = async (id: number) => {
    var productResponse = await fetch(this.getUrl(`/products/` + id));
    var product = await productResponse.json();
    return product;
  };

}

