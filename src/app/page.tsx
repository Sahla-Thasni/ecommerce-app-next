import Image from "next/image";


export default function Home() {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src="/Sale.jpg"
              className="d-block w-100"
              alt="Sale Banner"
              width={800}
              height={200}
            />
          </div>
        </div>
      </div>

      <section className="container text-center py-5">
        <h2 className="mb-3">Sale</h2>

        <p className="lead text-secondary">
          Get up to 60% OFF on cloths, electronics, jewelry, and more. Shop the
          latest trends at amazing prices.
        </p>
      </section>

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-auto text-center">
            <Image
              src="/women.PNG"
              width={180}
              height={260}
              alt="Women"
              className="category-image"
            />
            <h5 className="mt-3">Women</h5>
          </div>

          <div className="col-auto text-center">
            <Image
              src="/men.PNG"
              width={180}
              height={260}
              alt="Men"
              className="category-image"
            />
            <h5 className="mt-3">Men</h5>
          </div>

          <div className="col-auto text-center">
            <Image
              src="/jewelry.PNG"
              width={180}
              height={260}
              alt="Jewelry"
              className="category-image"
            />
            <h5 className="mt-3">Jewelry</h5>
          </div>
        </div>
      </div>
    </>
  );
}
