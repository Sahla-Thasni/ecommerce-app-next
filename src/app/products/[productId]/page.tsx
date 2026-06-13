import AddToCartButton from "@/app/components/cart-button/AddToCartButton";
import { ProductService } from "@/app/services/product-service";

export async function generateMetadata(props: any) {
  const params = await props.params;
  const { productId } = await params;
  var product;
  if (productId) {
    product = await ProductService.getProductById(productId);

    return {
      title: product.title,
    };
  }
  return {
    title: "Product Details",
  };
}

export default async function ProductDetails(props: any) {
  const params = await props.params;
  const { productId } = await params;

  let product;

 if (productId) {
  try {
    product = await ProductService.getProductById(Number(productId));
  } catch (error) {
    console.error(error);
    return <div>Error loading product</div>;
  }
}

  if (!product) {
    return <div>Product not found</div>;
  }

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
