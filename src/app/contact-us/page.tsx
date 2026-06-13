
export default function ContactUs() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Contact Us</h1>

      <div className="row justify-content-center">
        <div className="col-md-6">

          <div className="card shadow border-0">
            <div className="card-body p-4">

              <h4 className="mb-4">Get In Touch</h4>

              <p>
                <i className="bi bi-telephone-fill me-2 text-primary"></i>
                +971 50 123 4567
              </p>

              <p>
                <i className="bi bi-geo-alt-fill me-2 text-danger"></i>
                Dubai, United Arab Emirates
              </p>

              <p>
                <i className="bi bi-envelope-fill me-2 text-success"></i>
                support@shoppingworld.com
              </p>

              <hr />

              <p className="text-muted">
                We would love to hear from you.
                Feel free to contact us for any
                questions regarding our products
                and services.
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}