import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="img/logo.png" alt="" />
          </Link>
          {/* <a href="#" className="navbar-brand"></a> */}
          <a href="#" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navCollapse">
            <img src="img/fi_menu.svg" className="navbar-toggler-icon" alt="" />
          </a>
          <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
            <ul className="navbar-nav">
              <li className="nav-item px-2">
                <a className="nav-link" href="#ourservice">
                  Our Services
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" href="#whyus">
                  Why Us
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" href="#testi">
                  Testimonial
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" href="#faq">
                  FAQ
                </a>
              </li>
              <li className="nav-item px-2">
                <button className="btn btn-regis">Register</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="nav-collapse collapse collapse-horizontal" id="navCollapse">
        <div className="isi">
          <div className="row">
            <div className="col-6 d-flex align-items-center">
              <a href="" className="bcr">
                BCR
              </a>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <a href="#" className="close" type="button" data-bs-toggle="collapse" data-bs-target="#navCollapse">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </a>
            </div>
          </div>
          <a href="#ourservice" className="my-2">
            Our Services
          </a>
          <a href="#whyus" className="my-2">
            Why Us
          </a>
          <a href="#testi" className="my-2">
            Testimony
          </a>
          <a href="#faq" className="my-2">
            FAQ
          </a>
          <a href="#">
            <button className="btn btn-regis">Register</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
