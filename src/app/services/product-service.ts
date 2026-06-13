import { ServiceBase } from "./service-base";

export class ProductService extends ServiceBase {
  static getproducts = async () => {
    var productsResponse = await fetch(this.getUrl(`/products`), {
      cache: "no-store",
    });
    var products = await productsResponse.json();

    return products;
  };
  static getProductById = async (id: number) => {
    var productResponse = await fetch(this.getUrl(`/products/` + id));
    var product = await productResponse.json();
    return product;
  };

}

