import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="container py-3">
        <div className="row align-items-center">
          <div className="col-3">
            <Image src="/logo.png" alt="Logo" width={120} height={60} />
          </div>

          <div className="col-6 text-center">
            <h1 className="mb-0 fw-light">Shopping World</h1>
          </div>

          <div className="col-3"></div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-light border-top border-bottom">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarMenu"
          >
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/products" className="nav-link">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/cart" className="nav-link">
                  Cart
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/about-us" className="nav-link">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/contact-us" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
