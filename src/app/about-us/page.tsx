export default function AboutUs() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">About Us</h1>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow border-0">
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <i className="bi bi-shop" style={{ fontSize: "3rem" }}></i>
              </div>
              <h4 className="text-center mb-4">Welcome to Shopping World</h4>
              <p className="text-muted">
                Shopping World is one of the leading digital commerce companies,
                connecting millions of customers with quality products across
                multiple categories.
              </p>
              <p className="text-muted">
                Since 2020, we have provided a seamless shopping experience with
                secure payment options, fast delivery services, and excellent
                customer support.
              </p>
              <p className="text-muted">
                Our mission is to make online shopping simple, reliable, and
                enjoyable for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
