function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light pt-4">
      <div className="container">
        <a className="navbar-brand" href="/#">
          <img
            src="https://img.icons8.com/emoji/8x/trade-mark-emoji.png"
            width="30px"
            alt="trade"
          />
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Binar Car Rental
              </a>
            </li>
          </ul>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link me-2" href="#our-services">
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-2" href="#why-us">
                Why Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-2" href="#testi">
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-2" href="#faq">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary btn-success-register p-0">
                Register
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
